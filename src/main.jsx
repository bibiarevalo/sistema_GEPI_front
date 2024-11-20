import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CadastroFuncionario from './pages/CadastroFuncionario'
import ExclusaoFuncionario from './pages/ExclusaoFuncionario'
import EdicaoFuncionario from './pages/EdicaoFuncionario'
import './index.css'

const paginas = createBrowserRouter([
  { path: '/', element: <CadastroFuncionario /> },
  { path: '/excluir', element: <ExclusaoFuncionario /> },
  { path: '/edicao', element: <EdicaoFuncionario /> },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)