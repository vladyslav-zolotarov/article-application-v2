import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';
import { HiEye } from 'react-icons/hi';

interface ArticleViewCountProps extends React.ComponentPropsWithoutRef<'span'> {
  article?: IArticle;
}

export const ArticleViewCount = (props: ArticleViewCountProps) => {
  const { className, article } = props;

  return article ? (
    <span className={twMerge('article-view-count flex', className)}>
      <HiEye className='h-6 mr-2 text-gray-500' />
      {article.viewsCount}
    </span>
  ) : (
    <span className='article-view-count --skeleton block h-4 rounded-full w-14 bg-gray-200'></span>
  );
};
