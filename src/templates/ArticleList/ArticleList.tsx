import { getArticlesURL } from '../../api/fetcher';
import { fetcher } from '../../api/fetcher';
import { IPost } from '../../types/types';
import Article from '../Article/Article';
import useSWR from 'swr';

const ArticleList = () => {
  const { data, error, isLoading } = useSWR<IPost[]>(getArticlesURL, fetcher);

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {data &&
        data.map(article => (
          <Article
            key={article.title}
            article={article}
          />
        ))}
    </>
  );
};

export default ArticleList;
