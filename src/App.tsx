// import { useEffect } from 'react';
// import { getArticlePosts } from './api/endpoints';

import useSWR from 'swr';
import { IPost } from './types/types';
import { fetcher } from './api/fetcher';
import { getArticles } from './api/endpoints';

function App() {
  const { data, error, isLoading } = useSWR<IPost[]>(getArticles, fetcher);

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return <div className='App'>{data && <h1>initial</h1>}</div>;
}

export default App;
