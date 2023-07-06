import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IArticle } from './types/types';

interface ArticleState {
  myArticleList: IArticle[];
  setMyArticleList: (articleList: IArticle[], userId: string) => void;
}

interface AppState {
  token: string;
  userId: string;
  setToken: (token: string, _id: string) => void;
}

const initialAppStore = {
  token: '',
  userId: '',
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      set => ({
        ...initialAppStore,
        setToken: (token, _id) => set(() => ({ token: token, userId: _id })),
      }),
      { name: 'appStore' }
    )
  )
);

export const useArticleStore = create<ArticleState>()(
  devtools(set => ({
    myArticleList: [],
    setMyArticleList: (articleList, userId) =>
      set(() => ({
        myArticleList: articleList.filter(e => e.user._id === userId),
      })),
  }))
);
