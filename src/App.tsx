import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyArticleListPage from './pages/MyArticleListPage/MyArticleListPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Aside from './templates/Aside/Aside';

function App() {
  const [contentWidthFullScreen, setContentWidthFullScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/auth/register' ||
      location.pathname === '/auth/login'
    ) {
      setContentWidthFullScreen(true);
    } else {
      setContentWidthFullScreen(false);
    }
  }, [location]);

  return (
    <div className='App flex flex-col min-h-screen'>
      <div className='flex-1 text-slate-900 dark:text-slate-300 bg-gray-100 relative'>
        <Aside contentWidthFullScreen={contentWidthFullScreen} />
        <div
          className={
            !contentWidthFullScreen
              ? 'max-w-7xl mx-auto p-7 ml-80'
              : 'max-w-7xl mx-auto p-7'
          }>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path={'/auth/register'}
              element={<RegisterPage />}
            />
            <Route
              path={'/auth/login'}
              element={<LoginPage />}
            />

            <Route
              path={'/auth/me'}
              // element={<UserPage />}
            />
            <Route
              path={'/post/:id'}
              // element={<ArticlePage />}
            />

            <Route
              path={'/posts/my'}
              element={<MyArticleListPage />}
            />
            <Route
              path={'/post/create'}
              // element={<NewArticlePage />}
            />
            <Route
              path={'/post/edit/:id'}
              // element={<EditArticlePage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
