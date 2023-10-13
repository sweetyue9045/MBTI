import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Personality from './pages/Personality';
import World from './pages/World';
import Article from './pages/Article';
import Membership from './pages/Membership';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'personality/:typeId',
        element: <Personality />,
      },
      {
        path: 'world',
        element: <World />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'membership',
        element: <Membership />
      }
    ]
  },
])

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App