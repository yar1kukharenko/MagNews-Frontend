import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { AxiosResponse } from 'axios';
import { IArticle } from '../Models/IArticle.ts';

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (build) => ({
    fetchAllArticles: build.query<IArticle[], number | undefined>({
      query: (category) => ({
        url: '/articles',
        params: {
          category: category,
        },
      }),
      transformResponse: (response: AxiosResponse) => response.data,
    }),
  }),
});
