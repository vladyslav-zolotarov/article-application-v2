import axios from 'axios';

export const onLogin = async (url: string, { arg }: { arg: {} }) => {
  const response = axios.post(url, arg).then(response => {
    return response.data;
  });
  return await response;
};

export const onRegister = async (url: string, { arg }: { arg: {} }) => {
  const response = axios.post(url, arg).then(response => {
    return response.data;
  });
  return await response;
};

export const getMe = async (url: string, { arg }: { arg: string }) => {
  const response = axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${arg}`,
      },
    })
    .then(response => {
      return response.data;
    });
  return await response;
};

// headers: {
//   Authorization: `Bearer ${arg}`
// }

// export const getOneArticlePost = async (id: string) => {
//     return await api.get<IPost>(`/posts/${id}`)
// }

// export const addNewArticle = async (data: {}, token: string) => {
//     return await api.post<IPost>('/posts', data, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
// }

// export const removeOneArticlePost = async (id: string, token: string) => {
//     return await api.delete(`/posts/${id}`, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     });
// }

// export const updateOneArticlePost = async (id: string, data: {}, token: string) => {
//     return await api.patch(`/posts/${id}`, data, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     });
// }

// export const onLogin = async (data: {}) => {
//     return await api.post<IUserLogin>('/auth/login', data);
// }

// export const onRegistration = async (data: {}) => {
//     return await api.post<IUserRegister>('/auth/register', data);
// }

// export const getMe = async (token: string) => {
//     return await api.get<IUser>('/auth/me', {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
// }
