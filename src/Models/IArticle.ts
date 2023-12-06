import { ICategory } from './ICategory.ts';

export interface IArticle {
  id: number;
  title: string;
  image_url: string;
  category: ICategory;
  data: [];
}
