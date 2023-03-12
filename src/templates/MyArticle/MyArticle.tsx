import {
  ArticleDate,
  ArticleImage,
  ArticleTags,
  ArticleText,
  ArticleTitle,
  ArticleViewCount,
} from '../../components/Article';
import { IArticle } from '../../types/types';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

interface MyArticleProps {
  article?: IArticle;
}

const MyArticle = ({ article }: MyArticleProps) => {
  return (
    <div className='article__item flex p-5 border rounded-lg shadow bg-white border-gray-200'>
      <div className='flex w-5/6'>
        <ArticleImage
          height='h-16'
          width='w-16'
          className='mr-5'
          article={article}
        />

        <div>
          <ArticleTitle
            className='mb-2'
            article={article}
          />
          <div className='flex justify-between flex-wrap'>
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
      </div>
      <ul className='article-settings flex items-center justify-center w-2/12'>
        <li>
          <button className='article-btn mx-2'>
            <FaPencilAlt />
          </button>
        </li>
        <li>
          <button className='article-btn mx-2'>
            <FaTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MyArticle;
