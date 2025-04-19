import AboutPage from './components/AboutPage'
import ArticlesListPage from './components/ArticleListPage'
import HomePage from './components/HomePage'
import ArticlePage from './components/ArticlesPage'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'

const routes = [{
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
const router = createBrowserRouter(routes);
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App
