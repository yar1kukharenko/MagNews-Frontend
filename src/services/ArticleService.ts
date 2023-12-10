import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { AxiosResponse } from 'axios';
import { IArticle } from '../Models/IArticle.ts';
import { ICategory } from '../Models/ICategory.ts';
import { IUser } from '../Models/IUser.ts';

interface FetchAllArticlesParams {
  category?: number;
  start?: number;
  end?: number;
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
  }),
});
