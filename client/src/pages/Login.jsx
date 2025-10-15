import React from "react";
// import dos componentes dos apps
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// importação do icone de login
import { FaPlaystation } from "react-icons/fa";

//importando o hook para verificar o login, vindo do useUsuarios
import { useVerificaLogin } from "../hooks/useUsuarios";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form";

const Login = () => {
  // register = cria um objeto com os valores retirados dos inputs
  // handleSubmit = envia os dados formulário, caso dê erro ou sucesso
  // formState { erros } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alertaClasse, setAlertaClasse] = useState("d-none");

  const { verificaLogin } = useVerificaLogin();

  const navigate = useNavigate();

  // Caso o envio de certo
  const onSubmit = (data) => {
    console.log("Dados enviados: ", data);

    const resposta = verificaLogin(data);

    if (resposta === "Login Efetuado com sucesso") {
      alert(resposta);
      navigate("/home");
    } else {
      setAlertaClasse("my-3 w-75 mx-auto");
    }
  };
  //Caso o envio dê errado
  const onError = (errors) => {
    console.log("Erros: ", errors);
  };

  return (
    <div>
      <Container className="justify-content-center align-content-center min-vh-100">
        <Row className=" bg-black">
          {/* Coluna com ícone da página */}
          <Col>
            {/* Icone de login */}
            <FaPlaystation style={{ fontSize: "500px", color: "red" }} />
          </Col>
          {/* Coluna com os campos de login */}
          <Col className=" d-flex flex-column">
            <Form
              style={{ width: "75%", margin: "auto", textAlign: "center" }}
              // Utilizar o evento onSubmit pra envio do formulário
              // e o HandleSubmit vindo do hookForm
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              {/* Caixinha de email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Email"
                className="mb-5"
              >
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "O email é obrigatório",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email inválido",
                    },
                    validade: (value) =>
                      value.includes("@") || "Email deve possuir um @",
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </FloatingLabel>

              {/* Caixinha de senha  */}
              <FloatingLabel
                controlId="inputSenha"
                label="Senha"
                className="mb-5"
              >
                <Form.Control
                  type="password"
                  {...register("senha", {
                    required: "A senha é obrigatória",
                  })}
                />
                {errors.senha && (
                  <p className="error">{errors.senha.message}</p>
                )}
              </FloatingLabel>
              {/* Fim de caixinha de senha */}

              {/* Botão pra envio */}
              <Button
                variant="outline-danger"
                type="submit"
                className="mb-5"
                size="lg"
              >
                Login
              </Button>

              {/* Alerta caso tenha algum erro */}
              <Alert variant="danger" className={alertaClasse}>
                Usuário ou senha estão inválidos
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
