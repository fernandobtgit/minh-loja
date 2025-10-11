
import './App.css'
import Container from 'react-bootstrap/Container';

import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
      
      <div className='App d-flex' >
        <Container className="text-center"> 

          <Outlet />

        </Container>

         

      </div>

        
       
        
    </>
  )
}

export default App
