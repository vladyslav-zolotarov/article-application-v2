import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

export interface ArticleTitleProps
  extends React.ComponentPropsWithoutRef<'h2'> {
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
    <h2 className='article-title --skeleton'></h2>
  );
};
