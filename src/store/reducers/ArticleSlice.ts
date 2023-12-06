import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticles } from 'store/reducers/ActionCreators.ts';
import { IArticle } from '../../Models/IArticle.ts';

interface ArticleState {
  articles: IArticle[];
  isLoading: boolean;
  error: string;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: '',
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchArticles.fulfilled.type]: (state, action: PayloadAction<IArticle[]>) => {
      state.isLoading = false;
      state.error = '';
      state.articles = action.payload;
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
