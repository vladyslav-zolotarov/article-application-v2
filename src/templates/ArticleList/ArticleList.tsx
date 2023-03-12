import { getArticlesURL } from '../../api/fetcher';
import { fetcher } from '../../api/fetcher';
import { IArticle } from '../../types/types';
import Article from '../Article/Article';
import useSWR from 'swr';

const ArticleList = () => {
  const { data, error, isLoading } = useSWR<IArticle[]>(
    `${getArticlesURL}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className='articles --skeleton grid grid-cols-2 gap-6'>
        <div className='loading-wrapper'>
          <h2 className='loading-text'>Loading ...</h2>
        </div>
        {[...Array(4)].map((item, key) => {
          return <Article key={key} />;
        })}
      </div>
    );
  }

  if (error) {
    return (
      <div className='articles --skeleton grid grid-cols-2 gap-6'>
        {/* <div className='loading-wrapper'>
          <h2 className='loading-text'>Error</h2>
        </div> */}
        {[...Array(4)].map((item, key) => {
          return <Article key={key} />;
        })}
      </div>
    );
  }

  return (
    <div className='articles grid grid-cols-2 gap-6'>
      {data &&
        data.map(article => (
          <Article
            key={article.title}
            article={article}
          />
        ))}
    </div>
  );
};

export default ArticleList;
