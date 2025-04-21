import AboutPage from './Pages/AboutPage'
import ArticlesListPage from './Pages/ArticlesListPage'
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import axios from 'axios'

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
    element: <ArticlesListPage />
  },
  {
    path: '/articles/:name',
    element: <ArticlePage />,
    loader: async function () {
      const response = await axios.get('/api/articles/learn-node');// make it think they are running on same port 
      const { upvotes, comments } = response.data;
      return { upvotes, comments };

    }
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
