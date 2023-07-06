import React from 'react';
import { IArticle } from '../../../utils/types/types';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

interface ArticleTitleProps extends React.ComponentPropsWithoutRef<'h2'> {
  article?: IArticle;
}

export const ArticleTitle = (props: ArticleTitleProps) => {
  const { className, children, article } = props;

  return article ? (
    <h2
      className={twMerge(
        'article-title block mb-6 text-2xl font-bold tracking-tight text-gray-900',
        className
      )}>
      <Link to={`${window.location.origin}/post/${article._id}`}>
        {children} {article.title}
      </Link>
    </h2>
  ) : (
    <h2 className='article-title --skeleton h-7 w-60 mb-6 rounded-full w-2/4 bg-gray-200'></h2>
  );
};
