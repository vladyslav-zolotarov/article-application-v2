import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddNewArticlePage from './pages/AddNewArticlePage/AddNewArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EditArticlePage from './pages/EditArticlePage/EditArticlePage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyArticleListPage from './pages/MyArticleListPage/MyArticleListPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { useAppStore } from './utils/store';
import { Layout } from './layouts/Layout';

function App() {
  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [{
        path: '/',
        element: !token ? <Navigate to='/auth/login' replace /> : <HomePage />,
      },
      {
        path: '/auth/register',
        element: token ? <Navigate to='/' replace /> : <RegisterPage />,
      },
      {
        path: '/auth/login',
        element: token ? <Navigate to='/' replace /> : <LoginPage />,
      },
      {
        path: '/posts/my',
        element: !token ? <Navigate to='/auth/login' replace /> : <MyArticleListPage />,
      },
      {
        path: '/post/:id',
        element: !token ? <Navigate to='/auth/login' replace /> : <ArticlePage />,
      },
      {
        path: '/post/create',
        element: !token ? <Navigate to='/auth/login' replace /> : <AddNewArticlePage />,
      },
      {
        path: '/post/edit/:id',
        element: !token ? <Navigate to='/auth/login' replace /> : <EditArticlePage />,
      },]
    }
  ])

  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
}

export default App;
