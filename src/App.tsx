import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='flex-1 text-slate-900 dark:text-slate-300 bg-gray-100 dark:bg-slate-900'>
          <div className='max-w-7xl mx-auto py-7'>
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
                // element={<MyArticlesListPage />}
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
      </BrowserRouter>
    </div>
  );
}

export default App;
