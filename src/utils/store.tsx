import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IArticle } from '../types/types';

interface UserState {
  userId: string;
  userFullName: string;
  userCreatedAt: string;
  setUser: (_id: string, fullName: string, createdAt: string) => void;
}

interface ArticleState {
  myArticleList: IArticle[];
  setMyArticleList: (articleList: IArticle[], userId: string) => void;
}

export const useArticleStore = create<ArticleState>()(
  devtools(
    persist(
      set => ({
        myArticleList: [],
        setMyArticleList: (articleList, userId) =>
          set(() => ({
            myArticleList: articleList.filter(e => e.user._id === userId),
          })),
      }),
      { name: 'articleStore' }
    )
  )
);

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        userId: '',
        userFullName: '',
        userCreatedAt: '',
        setUser: (_id, fullName, createdAt) =>
          set(() => ({
            userId: _id,
            userFullName: fullName,
            userCreatedAt: createdAt,
          })),
      }),
      { name: 'userStore' }
    )
  )
);
