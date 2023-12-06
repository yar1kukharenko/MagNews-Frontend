import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IArticle} from '../../Models/IArticle.ts';

// export const fetchArticles = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(articleSlice.actions.articleFetching());
//     const response = await axios.post<IArticle[]>('http://localhost:8080/api/articles');
//     dispatch(articleSlice.actions.articleFetchingSuccess(response.data));
//   } catch (e: any | AxiosError) {
//     dispatch(articleSlice.actions.articleFetchingError(e.message()));
//   }
// };

export const fetchArticles = createAsyncThunk('article/fetchAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<IArticle[]>('http://localhost:8080/api/articles');
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить статьи.');
  }
});
