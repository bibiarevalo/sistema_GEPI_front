import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CadastroFuncionario from './pages/CadastroFuncionario'
import ExclusaoFuncionario from './pages/ExclusaoFuncionario'
import EdicaoFuncionario from './pages/EdicaoFuncionario'
import CadastroEpi from './pages/CadastroEpi'
import EditarEpi from './pages/EdicaoEpi'
import ExclusaoEpi from './pages/ExclusaoEpi'
import Gerenciamento from './pages/Gerenciamento'
import RegistroTransacao from './pages/RegistroTransacao'
import './index.css'

const paginas = createBrowserRouter([
  { path: '/', element: <CadastroFuncionario /> },
  { path: '/excluir', element: <ExclusaoFuncionario /> },
  { path: '/edicao', element: <EdicaoFuncionario /> },
  { path: '/cadastroEpi', element: <CadastroEpi /> },
  { path: '/edicaoEpi', element: <EditarEpi /> },
  { path: '/excluirEpi', element: <ExclusaoEpi /> },
  { path: '/Gerenciamento', element: <Gerenciamento /> },
  { path: '/registro', element: <RegistroTransacao /> },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)