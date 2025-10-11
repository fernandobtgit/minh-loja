import React from 'react'
// import dos componentes dos apps
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Alert from 'react-bootstrap/Alert';

// importação do icone de login
import { FaPlaystation } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <Container className="justify-content-center align-content-center min-vh-100" >
        <Row className=" bg-black"> 
          {/* Coluna com ícone da página */}
          <Col>
          {/* Icone de login */}
            <FaPlaystation style={{fontSize: "500px", color: "red"}}/>
          </Col>
          {/* Coluna com os campos de login */}
          <Col className=" d-flex flex-column">
            <Form style={{ width: "75%", margin:"auto", textAlign: "center"}}>
              {/* Caixinha de email */}
              <FloatingLabel 
              controlId="inputEmail"
              label="Email" 
              className="mb-5" >               
                <Form.Control
                
                type="email"
                />
              </FloatingLabel>


              {/* Caixinha de senha  */}
              <FloatingLabel 
                controlId="inputSenha"
                label="Senha" 
                className="mb-5">

                <Form.Control
                  type="password"
                />
              </FloatingLabel>
              {/* Fim de caixinha de senha */}

              {/* Botão pra envio */}
              <Button variant="outline-danger" type="submit" className="mb-5" size="lg" >
                Login

              </Button>

              {/* Alerta caso tenha algum erro */}
              <Alert variant="danger" className="my-3 w-75 mx-auto" >
                Usuário ou senha estão inválidos
              </Alert>
            </Form>
          
          </Col>

        </Row>


      </Container>
    </div>
  )
}

export default Login
