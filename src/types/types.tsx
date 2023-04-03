export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  passwordHash: string;
  updatedAt: string;
}

export interface IArticle {
  _id: string;
  title: string;
  text: string;
  viewsCount: number;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  imageUrl: string;
  tags: Array<string>;
}

export interface IRegisterForm {
  fullName?: Pick<IUser, 'fullName'>;
  email: Pick<IUser, 'email'>;
  password: IUser['passwordHash'];
}

export interface IArticleForm {
  title: Pick<IArticle, 'title'>;
  text: Pick<IArticle, 'text'>;
  imageUrl?: Pick<IArticle, 'imageUrl'>;
  tags: Pick<IArticle, 'tags'>;
}
