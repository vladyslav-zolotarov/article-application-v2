import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

interface ArticleTextProps extends React.ComponentPropsWithoutRef<'span'> {
  article?: IArticle;
}

export const ArticleText = (props: ArticleTextProps) => {
  const { className, children, article } = props;

  return article ? (
    <span
      className={twMerge(
        'article-text block mb-6 text-gray-700 line-clamp-2',
        className
      )}>
      {children} {article.text}
    </span>
  ) : (
    <div className='article-text --skeleton mb-6'>
      <span className='block h-4 w-full bg-gray-200 rounded-full mb-2.5'></span>
      <span className='block h-4 w-full bg-gray-200 rounded-full'></span>
    </div>
  );
};
