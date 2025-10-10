import { Outlet, Navigate} from "react-router-dom"

const RotasProtegidas = () => {
  const estaLogado = true
  if(!estaLogado){
    return <Navigate to= "/login"/>
  }

  return (
    <div className="App">
      
      <div>
        <h1>Barra de navegação</h1>
      </div>

      <div>
        <h1>Conteúdo principal</h1>
      </div>
      


    </div>
  )
}

export default RotasProtegidas
