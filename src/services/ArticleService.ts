import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { AxiosResponse } from 'axios';
import { IArticle } from '../Models/IArticle.ts';
import { ICategory } from '../Models/ICategory.ts';
import { IComment } from '../Models/IComment.ts';
import { IUser } from '../Models/IUser.ts';

interface FetchAllArticlesParams {
  category?: number;
  start?: number;
  end?: number;
}

interface addCommentParams {
  id: number;
  comment: { article_id?: number; user_id?: number; message?: string };
}

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (build) => ({
    fetchAllArticles: build.query<IArticle[], FetchAllArticlesParams>({
      query: ({ category, start, end }) => ({
        url: '/articles',

        params: {
          category: category,
          start: start,
          end: end,
        },
      }),
      transformResponse: (response: AxiosResponse) => response.data,
    }),
    fetchAllFilters: build.query<ICategory[], any>({
      query: () => ({
        url: '/articles/filters',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      transformResponse: (response: AxiosResponse) => response.data,
      transformErrorResponse(error): unknown {
        console.log(error);
      },
    }),
    fetchArticle: build.query<IArticle, number>({
      query: (id) => ({
        url: `/articles/${id}`,
      }),
      transformResponse: (response: AxiosResponse) => response.data,
    }),
    fetchMe: build.mutation<IUser, string>({
      query: () => ({
        url: '/auth/me',
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      transformResponse: (response: AxiosResponse) => response.data,
    }),
    fetchUser: build.query<IUser, number>({
      query: (id) => ({
        url: `/user/${id}`,
      }),
      transformResponse: (response: AxiosResponse) => response.data,
    }),
    fetchComments: build.query<IComment[], number>({
      query: (id) => ({
        url: `/articles/${id}/comments`,
      }),
      transformResponse: (response: AxiosResponse) => response,
    }),
    addComment: build.mutation<IComment, addCommentParams>({
      query: ({ id, comment }) => ({
        url: `/articles/${id}/comments`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: comment,
      }),
    }),
  }),
});
