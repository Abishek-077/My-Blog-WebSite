import AboutPage from './Pages/AboutPage'
import ArticlesListPage from './Pages/ArticlesListPage'
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Layout from './Layout'

const routes = [{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/articles',
    element: <ArticlesListPage />
  },
  {
    path: '/articles/:name',
    element: <ArticlePage />
  }
  ]

}]

const router = createBrowserRouter(routes);
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App
