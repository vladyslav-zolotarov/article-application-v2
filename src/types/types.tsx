export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  passwordHash: string;
  updatedAt: string;
}

export interface IPost {
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

export interface ILoginUser {
  email: Pick<IUser, 'email'>;
  password: IUser['passwordHash'];
  token: string;
}

export interface IRegisterUser {
  fullName: Pick<IUser, 'fullName'>;
  email: Pick<IUser, 'email'>;
  password: IUser['passwordHash'];
  token: string;
}

export interface IRegisterForm {
  fullName?: Pick<IUser, 'fullName'>;
  email: Pick<IUser, 'email'>;
  password: IUser['passwordHash'];
  token?: string;
}
