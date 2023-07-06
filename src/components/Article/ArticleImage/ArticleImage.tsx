import React from 'react';
import { IArticle } from '../../../utils/types/types';
import { IoRocket } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

interface ArticleImageProps extends React.ComponentPropsWithoutRef<'img'> {
  article?: IArticle;
  height?: string;
  width?: string;
}

export const ArticleImage = (props: ArticleImageProps) => {
  const { className, article, height, width } = props;

  return (
    <div className={twMerge('article-img', className, height, width)}>
      {article && article.imageUrl ? (
        <img
          className='rounded-lg h-full w-full object-cover'
          alt={article.title}
          src={article.imageUrl}
        />
      ) : (
        <div className='flex items-center justify-center rounded-lg w-full h-full bg-gray-300'>
          <IoRocket className='h-1/4 w-1/4 text-gray-200' />
        </div>
      )}
    </div>
  );
};
