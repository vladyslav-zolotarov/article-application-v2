import React from 'react';
import format from 'date-fns/format';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

interface ArticleDateProps extends React.ComponentPropsWithoutRef<'span'> {
  article?: IArticle;
}

export const ArticleDate = (props: ArticleDateProps) => {
  const { className, children, article } = props;

  return article ? (
    <span className={twMerge(`article-date`, className)}>
      {children}
      {format(new Date(`${article?.createdAt}`), 'dd MMMM yyyy')}
    </span>
  ) : (
    <span className='article-date --skeleton block mr-4 h-4 rounded-full w-40 bg-gray-200' />
  );
};
