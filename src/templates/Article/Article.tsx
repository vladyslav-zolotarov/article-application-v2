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
  article: IArticle;
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
      <div className='mb-3 line-clamp-2 block font-normal text-gray-700'>
        <ArticleText article={article} />
      </div>
      <div className='flex justify-between'>
        <ArticleTags article={article} />

        <div className='flex justify-end'>
          <ArticleDate article={article} />
          <ArticleViewCount article={article} />
        </div>
      </div>
    </div>
  );
};

export default Article;
