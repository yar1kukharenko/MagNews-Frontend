import { ICategory } from './ICategory.ts';

export interface IArticle {
  id: number;
  title: string;
  content: string | TrustedHTML;
  image_url: string;
  category: ICategory;
}
