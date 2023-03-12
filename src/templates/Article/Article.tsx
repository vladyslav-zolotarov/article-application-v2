import {
  ArticleDate,
  ArticleImage,
  ArticleTags,
  ArticleText,
  ArticleTitle,
  ArticleViewCount,
} from '../../components/Article';
import { IArticle } from '../../types/types';

interface ArticleProps {
  article?: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <div className='article__item p-5 border rounded-lg shadow bg-white border-gray-200'>
      <ArticleImage
        height='h-52'
        width='w-full'
        className='mb-5'
        article={article}
      />
      <ArticleTitle article={article} />

      <ArticleText article={article} />
      <div className='flex justify-between'>
        <ArticleTags article={article} />

        <div className='flex justify-end'>
          <ArticleDate
            className='mr-5'
            article={article}
          />
          <ArticleViewCount article={article} />
        </div>
      </div>
    </div>
  );
};

export default Article;
