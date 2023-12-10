import { FC } from 'react';
import { articleAPI } from '../../services/ArticleService.ts';

interface CommentProps {
  user_id: number;
  message: string;
}

const Comment: FC<CommentProps> = ({ user_id, message }) => {
  const { data: user } = articleAPI.useFetchUserQuery(user_id);
  return (
    <div className="media">
      <div className="media-body">
        <div className="media-heading">
          <h5>
            {user && user.name} <span className="reply-time">April 04, 2017 At 9:30 AM</span>
          </h5>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Comment;
