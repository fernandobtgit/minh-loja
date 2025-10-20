
import App from './App.jsx'
import './index.css'
import {createRoot} from "react-dom/client"
import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/UserContext.jsx';

import { RouterProvider } from 'react-router-dom'
// Importar o provedor do contexto de usuário

import MyRouter from "./Myrouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Fornece as informações de contexto pra toda a aplicação */}
   <AuthProvider>
    {/* Faz o provedor utilizar as rota
    s que você definiu no MyRouter */}
    <RouterProvider router={MyRouter} />

   </AuthProvider>
  </StrictMode>,
)
