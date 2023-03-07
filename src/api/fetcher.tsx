export const baseURL = 'https://vladyslav-zolotarov.com';

export const getArticlesURL = `${baseURL}/posts`; //get
export const getOneArticleURL = `${baseURL}/posts`; //get ${id}
export const addNewArticleURL = `${baseURL}/posts`; //post data{}, token ''
export const removeArticleURL = `${baseURL}/posts`; //delete ${id}, token ''
export const updateArticleURL = `${baseURL}/posts`; //patch ${id}, data{}, token ''
export const loginURL = `${baseURL}/auth/login`; //post data{}
export const registerURL = `${baseURL}/auth/register`; //post data{}
export const getMeURL = `${baseURL}/auth/me`; //get token ''

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then(res => res.json());
