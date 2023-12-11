export interface IComment {
  id: number;
  user_id: number;
  article_id: number;
  message: string;
  is_approved: boolean;
}
