import {
  ArticleDate,
  ArticleImage,
  ArticleTags,
  ArticleTitle,
  ArticleViewCount,
} from '../../components/Article';
import { IArticle } from '../../types/types';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useRemoveArticle } from '../../api/endpoints/useRemoveArticle';
import { MouseEvent, useEffect, useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useArticleStore, useAppStore } from '../../utils/store';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../components/Modal/useModal';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';

interface MyArticleProps {
  article?: IArticle;
}

const MyArticle = ({ article }: MyArticleProps) => {
  const { resolve, rejected, pending, mutate } = useRemoveArticle();
  const { isShowModal, toggleShowModal } = useModal();

  const { userId } = useAppStore(state => ({
    userId: state.userId,
  }));

  const { myArticleList, setMyArticleList } = useArticleStore(state => ({
    myArticleList: state.myArticleList,
    setMyArticleList: state.setMyArticleList,
  }));

  const removeArticle = () => {
    mutate(article?._id);
    setMyArticleList(
      myArticleList.filter(art => art._id !== article?._id),
      userId
    );
  };

  return (
    <>
      {isShowModal && (
        <ConfirmationModal
          isShowModal={isShowModal}
          toggleShowModal={toggleShowModal}
          callback={removeArticle}
        />
      )}

      <div className='article__item flex p-5 border rounded-lg shadow bg-white border-gray-200'>
        <div className='flex w-full'>
          <ArticleImage
            height='h-16'
            width='w-16'
            className='mr-5'
            article={article}
          />

          <div className='w-full'>
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
        <ul className='article-settings flex items-center justify-end w-fit ml-5'>
          <Link to={`/post/edit/${article?._id}`}>
            <button className='article-btn mx-2'>
              <FaPencilAlt />
            </button>
          </Link>
          <li>
            <button
              className='article-btn mx-2'
              onClick={toggleShowModal}>
              {pending ? (
                <CgSpinnerTwo className='loading-spinner' />
              ) : (
                <FaTrash />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyArticle;
