import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

export interface ArticleTextProps
  extends React.ComponentPropsWithoutRef<'span'> {
  article?: IArticle;
}

export const ArticleText = (props: ArticleTextProps) => {
  const { className, children, article } = props;

  return article ? (
    <span
      className={twMerge('article-text block mb-6 text-gray-700', className)}>
      {children} {article.text}
    </span>
  ) : (
    <h2 className='article-text --skeleton'></h2>
  );
};
