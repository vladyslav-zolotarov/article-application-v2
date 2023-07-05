export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  passwordHash: string;
  updatedAt: string;
  token: string;
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
  tags: string;
}

export interface IRegisterForm {
  fullName?: Pick<IUser, 'fullName'>;
  email: Pick<IUser, 'email'>;
  password: IUser['passwordHash'];
}

export interface IArticleForm {
  title: string;
  text: string;
  imageUrl?: string;
  tags: string;
}
