import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IArticle } from '../types/types';

interface AppState {
  token: string;
  setToken: (token: string) => void;
  deleteToken: () => void;
}

interface UserState {
  userId: string;
  userFullName: string;
  userCreatedAt: string;
  userAvatarUrl: string;
  setUser: (
    _id: string,
    fullName: string,
    createdAt: string,
    avatarUrl: string
  ) => void;

  deleteUser: () => void;
}

interface ArticleState {
  myArticleList: IArticle[];
  setMyArticleList: (articleList: IArticle[], userId: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      set => ({
        token: '',
        setToken: token => set(() => ({ token: token })),
        deleteToken: () => set(() => ({ token: '' })),
      }),
      { name: 'appStore' }
    )
  )
);

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
        userAvatarUrl: '',
        setUser: (_id, fullName, createdAt, avatarUrl) =>
          set(() => ({
            userId: _id,
            userFullName: fullName,
            userCreatedAt: createdAt,
            userAvatarUrl: avatarUrl,
          })),
        deleteUser: () =>
          set(() => ({
            userId: '',
            userFullName: '',
            userCreatedAt: '',
            userAvatarUrl: '',
          })),
      }),
      { name: 'userStore' }
    )
  )
);
