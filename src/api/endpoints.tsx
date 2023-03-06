import { baseURL } from './fetcher';

export const getArticles = `${baseURL}/posts`;
export const getOneArticle = `${baseURL}/posts`;
export const addNewArticle = `${baseURL}/posts`;
export const removeArticle = `${baseURL}/posts`;
export const updateArticle = `${baseURL}/posts`;

export const login = `${baseURL}/auth/login`;
export const register = `${baseURL}/auth/register`;
export const getMe = `${baseURL}/auth/me`;
