import AboutPage from './Pages/AboutPage'
import ArticlesListPage from './Pages/ArticlesListPage'
import HomePage from './Pages/HomePage'
import ArticlePage, { loader as articleLoader } from './Pages/ArticlePage'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import LoginPage from './Pages/LoginPage'
import CreateAccountPage from './Pages/CreateAccountPage'

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <PageNotFound />,

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
    element: <ArticlesListPage />,
  },
  {
    path: '/articles/:name',
    element: <ArticlePage />,
    loader: articleLoader,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/createAccount',
    element: <CreateAccountPage />
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
