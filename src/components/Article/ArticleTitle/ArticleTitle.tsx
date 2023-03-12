import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

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
      {children} {article.title}
    </h2>
  ) : (
    <h2 className='article-title --skeleton h-8 w-60 mb-6 rounded-full w-2/4 bg-gray-200'></h2>
  );
};
