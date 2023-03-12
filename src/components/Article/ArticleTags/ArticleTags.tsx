import React from 'react';
import { IArticle } from '../../../types/types';
import { twMerge } from 'tailwind-merge';

export interface ArticleTagsProps extends React.ComponentPropsWithoutRef<'li'> {
  article?: IArticle;
}

export const ArticleTags = (props: ArticleTagsProps) => {
  const { className, article } = props;

  return (
    <ul className='article-tags flex items-center'>
      {article
        ? article.tags[0].split(' ').map((tag, key) => {
            return (
              <li
                className={twMerge(
                  'bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full',
                  className
                )}
                key={article.text + tag + key}>
                #{tag}
              </li>
            );
          })
        : [...Array(5)].map((item, key) => {
            return (
              <li
                key={key}
                className='article-tags --skeleton'
              />
            );
          })}
    </ul>
  );
};
