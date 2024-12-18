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
import Home from './pages/home'
import './index.css'
import Historico from './pages/Historico'
import LoginGerente from './pages/LoginGerente'
import LoginRepositor from './pages/LoginRepositor'
import RegistrarRepositor from './pages/RegistrarRepositor'
import RegistrarGerente from './pages/RegistroGerente'

const paginas = createBrowserRouter([
  { path: '/cadastroFuncionario', element: <CadastroFuncionario /> },
  { path: '/excluir', element: <ExclusaoFuncionario /> },
  { path: '/edicao', element: <EdicaoFuncionario /> },
  { path: '/cadastroEpi', element: <CadastroEpi /> },
  { path: '/edicaoEpi', element: <EditarEpi /> },
  { path: '/excluirEpi', element: <ExclusaoEpi /> },
  { path: '/gerenciamento', element: <Gerenciamento /> },
  { path: '/registro', element: <RegistroTransacao /> },
  { path: '/home', element: <Home /> },
  { path: '/historico', element: <Historico /> },
  { path: '/LoginGerente', element: <LoginGerente /> },
  { path: '/loginRepositor', element: <LoginRepositor /> },
  { path: '/registrarRepositor', element: <RegistrarRepositor /> },
  { path: '/registrarGerente', element: <RegistrarGerente /> },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
