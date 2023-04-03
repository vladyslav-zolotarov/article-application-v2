import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AddNewArticlePage } from './pages/AddNewArticlePage/AddNewArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyArticleListPage from './pages/MyArticleListPage/MyArticleListPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Aside from './templates/Aside/Aside';
import { useAppStore } from './utils/store';

function App() {
  const [contentWidthFullScreen, setContentWidthFullScreen] = useState(false);
  const location = useLocation();

  const { token } = useAppStore(state => ({
    token: state.token,
  }));

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
        <div className={!contentWidthFullScreen ? 'p-7 ml-80' : 'p-7'}>
          <Routes>
            <Route
              path='/'
              element={
                !token ? (
                  <Navigate
                    to='/auth/login'
                    replace
                  />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route
              path={'/auth/register'}
              element={
                token ? (
                  <Navigate
                    to='/'
                    replace
                  />
                ) : (
                  <RegisterPage />
                )
              }
            />
            <Route
              path={'/auth/login'}
              element={
                token ? (
                  <Navigate
                    to='/'
                    replace
                  />
                ) : (
                  <LoginPage />
                )
              }
            />

            <Route
              path={'/auth/me'}
              // element={<UserPage />}
            />
            <Route
              path={'/post/:id'}
              element={
                token ? (
                  <ArticlePage />
                ) : (
                  <Navigate
                    to='/'
                    replace
                  />
                )
              }
            />

            <Route
              path={'/posts/my'}
              element={
                !token ? (
                  <Navigate
                    to='/auth/login'
                    replace
                  />
                ) : (
                  <MyArticleListPage />
                )
              }
            />
            <Route
              path={'/post/create'}
              element={
                !token ? (
                  <Navigate
                    to='/auth/login'
                    replace
                  />
                ) : (
                  <AddNewArticlePage />
                )
              }
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
