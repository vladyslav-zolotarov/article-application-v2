import {
  ArticleDate,
  ArticleImage,
  ArticleTags,
  ArticleText,
  ArticleTitle,
  ArticleViewCount,
  ArticleUserGroup,
} from '../../components/Article';
import { IArticle } from '../../types/types';

interface ArticleProps {
  article?: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <div className='article__item p-5 border rounded-lg shadow bg-white border-gray-200'>
      <ArticleUserGroup
        className='mb-2'
        user={article?.user}
      />
      <ArticleImage
        height='h-52'
        width='w-full'
        className='mb-5'
        article={article}
      />
      <ArticleTitle article={article} />

      <ArticleText
        article={article}
        className='line-clamp-2'
      />
      <div className='flex justify-between flex-wrap'>
        <ArticleTags
          className='mt-2'
          article={article}
        />

        <div className='flex justify-end'>
          <ArticleDate
            className='mt-2 mr-5'
            article={article}
          />
          <ArticleViewCount
            className='mt-2'
            article={article}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
