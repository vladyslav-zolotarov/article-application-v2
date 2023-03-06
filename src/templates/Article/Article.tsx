import React from 'react';
import { IPost } from '../../types/types';

interface ArticleProps {
  article: IPost;
}

const Article = ({ article }: ArticleProps) => {
  return <div>{article.title}</div>;
};

export default Article;
