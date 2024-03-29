import { FC, memo } from 'react';
import { articleAPI } from '../../services/ArticleService.ts';

interface CommentProps {
  user_id: number;
  message: string;
}

const Comment: FC<CommentProps> = memo(({ user_id, message }) => {
  const { data: user } = articleAPI.useFetchUserQuery(user_id);
  return (
    <div className="media">
      <div className="media-body">
        <div className="media-heading">
          <h5>{user && user.name}</h5>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
});

Comment.displayName = 'Comment';

export default Comment;
