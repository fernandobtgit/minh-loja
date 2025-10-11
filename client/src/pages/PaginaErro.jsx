import React from 'react'
// Importação dos compoentes do bootstrap 
import Button from "react-bootstrap/Button"

import { FaPoop } from "react-icons/fa";
import Col from 'react-bootstrap/esm/Col'
// Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom"

const PaginaErro = () => {
  // Variável navigate, pra guardar o retorno do hook
  const navigate = useNavigate()
  return (
    <div className="text-center d-flex min-vh-100 flex-column justify-content-center align-items-center">
      <h2> Essa página no existe</h2>
      <Button variant="dark" onClick={() => { navigate("/home")}}>
         <Col>
         
          <FaPoop fontSize={"500px"} color='brown'  />

         </Col>

      </Button>

    </div>
  )
}

export default PaginaErro
