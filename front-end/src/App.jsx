import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage'
import ErrorPage from './pages/errorpage'
import Layout from './Layout'
import Poker from './pages/poker'
import LiarsDice from './pages/liarsdice'
import Catan from './pages/catan'
import SignIn from './pages/signin'
import LessonPage from './pages/lessonpage'

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
      }, {
        path: '/signin',
        element: <SignIn />,
      }, {
        path: '/lessons/:game/:lessonId',
        element: <LessonPage />,
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
