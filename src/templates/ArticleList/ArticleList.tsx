import Article from '../Article/Article';
import MyArticle from '../MyArticle/MyArticle';
import { useLocation } from 'react-router-dom';
import { useAppStore, useArticleStore } from '../../utils/store';
import { useGetArticles } from '../../api/endpoints/useGetArticles';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const ArticleList = () => {
  const location = useLocation();

  const { myArticleList, setMyArticleList } = useArticleStore(state => ({
    myArticleList: state.myArticleList,
    setMyArticleList: state.setMyArticleList,
  }));

  const { userId } = useAppStore(state => ({
    userId: state.userId,
  }));

  const { data, isLoading, isError } = useGetArticles();

  useEffect(() => {
    if (userId && data) {
      setMyArticleList(data, userId);
    }
  }, [data])

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

  if (isError) {
    return ArticleListSkeleton('Error');
  }

  const content = () => {
    if (location.pathname === '/posts/my') {
      if (myArticleList.length) {
        return myArticleList.map(article => (
          <MyArticle
            key={article.title}
            article={article}
          />
        ));
      }

      return <h1>Your list is empty</h1>;
    }
    if (data) {
      return data.map(article => (
        <Article
          key={article.title}
          article={article}
        />
      ));
    }

    return <h1>Here is empty</h1>;
  };

  return (
    <div
      className={
        location.pathname === '/posts/my'
          ? 'articles grid grid-cols gap-6'
          : 'articles grid grid-cols-2 gap-6'
      }>
      {content()}
    </div>
  );
};

export default ArticleList;