import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage'
import ErrorPage from './pages/errorpage'
import Layout from './Layout'
import Poker from './pages/poker'
import LiarsDice from './pages/liarsdice'
import Catan from './pages/catan'

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      }, {
        path: '/poker',
        element: <Poker />,
      }, {
        path: '/liarsdice',
        element: <LiarsDice />,
      }, {
        path: '/catan',
        element: <Catan />,
      }
    ]
  },
]



const router = createBrowserRouter(routes);
function App() {
  return (
    <>
    <RouterProvider router = {router} />
    </>
  );
}

export default App
