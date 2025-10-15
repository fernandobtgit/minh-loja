const url = "http://localhost:5000";

import { useState, useEffect } from "react";




export function useVerificaLogin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const res = await req.json();

        setUsuarios(res);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const verificaLogin = (data) => {
    const userToFind = usuarios.find((user) => {
      return user.email === data.email;
    });

    if (userToFind != undefined && userToFind.senha == data.senha) {
      console.log("Usuário logado: ", userToFind.nome);
      return "Login Efetuado com sucesso";
    } else {
      return "Usuário ou senha inválidos";
    }
  }
  return {verificaLogin}
}
