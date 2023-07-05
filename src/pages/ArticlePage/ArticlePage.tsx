import { useParams } from 'react-router-dom';
import { useGetOneArticle } from '../../api/endpoints/useGetOneArticle';
import {
  ArticleDate,
  ArticleImage,
  ArticleTags,
  ArticleText,
  ArticleTitle,
  ArticleViewCount,
} from '../../components/Article';

const ArticlePage = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }
  const { data, isError } = useGetOneArticle(id)

  if (isError) {
    return isError;
  }

  return (
    <div className='article-page'>
      <div className='article__item p-5 border rounded-lg  shadow bg-white border-gray-200'>
        <ArticleImage
          className='mb-6'
          height='h-96'
          article={data}
        />
        <div className='flex justify-between items-center'>
          <ArticleTitle article={data} />
          <ArticleDate
            className='mb-6'
            article={data}
          />
        </div>
        <ArticleText article={data} />
        <div className='flex justify-between items-center'>
          <ArticleTags article={data} />
          <ArticleViewCount article={data} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
