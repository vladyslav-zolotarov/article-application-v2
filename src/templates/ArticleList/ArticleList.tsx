import { getArticlesURL } from '../../api/fetcher';
import { fetcher } from '../../api/fetcher';
import { IArticle } from '../../types/types';
import Article from '../Article/Article';
import useSWR from 'swr';
import { useLocation } from 'react-router-dom';
import MyArticle from '../MyArticle/MyArticle';

const ArticleList = () => {
  const location = useLocation();
  const { data, error, isLoading } = useSWR<IArticle[]>(
    `${getArticlesURL}`,
    fetcher
  );

  const ArticleListSkeleton = (text: string) => {
    return (
      <div
        className={
          location.pathname === '/posts/my'
            ? 'articles grid grid-cols gap-6'
            : 'articles --skeleton grid grid-cols-2 gap-6'
        }>
        <div className='loading-wrapper'>
          <h2 className='loading-text'>{text}</h2>
        </div>
        {[...Array(6)].map((item, key) => {
          return location.pathname === '/posts/my' ? (
            <MyArticle key={key} />
          ) : (
            <Article key={key} />
          );
        })}
      </div>
    );
  };

  if (isLoading) {
    return ArticleListSkeleton('Loading...');
  }

  if (error) {
    return ArticleListSkeleton('Error');
  }

  return (
    <div
      className={
        location.pathname === '/posts/my'
          ? 'articles grid grid-cols gap-6'
          : 'articles grid grid-cols-2 gap-6'
      }>
      {data &&
        data.map(article =>
          location.pathname === '/posts/my' ? (
            <MyArticle
              key={article.title}
              article={article}
            />
          ) : (
            <Article
              key={article.title}
              article={article}
            />
          )
        )}
    </div>
  );
};

export default ArticleList;
