import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Personality from './pages/Personality';
import World from './pages/World';
import Article from './pages/Article';
import Team from './pages/Team';
import ScrollToTop from "./pages/ScrollToTop";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/personality/:typeId',
    element: <Personality/>
  },
  {
    path: '/world',
    element: <World/>
  },
  {
    path: '/article',
    element: <Article/>
  },
  {
    path: '/team',
    element: <Team/>
  }
])

const App = () => {
  return (
    <>
    <ScrollToTop />
    <RouterProvider router={router} />
    </>
  )
}

export default App