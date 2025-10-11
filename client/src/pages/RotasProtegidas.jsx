import { Outlet, Navigate} from "react-router-dom"
import Container from "react-bootstrap/Container"

const RotasProtegidas = () => {
  const estaLogado = true
  if(!estaLogado){
    return <Navigate to= "/login"/>
  }

  return (
    <div className="App">
      
      <div className="position-fixed top-0 start-0 min-vh-100 bg-danger">
        <h1>Barra de navegação</h1>
      </div>

      <div className=" d-flex flex-column min-vh-100 flex-grow-1 p-2 justify-content-center" style={{marginLeft: '350px'}}>
        <Container fluid>

            <h1>Conteúdo principal</h1>
      
        </Container>
      </div>


    </div>
  )
}

export default RotasProtegidas
