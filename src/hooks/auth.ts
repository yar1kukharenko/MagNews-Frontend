import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    } else {
      axios
        .post(
          'http://localhost:8080/api/auth/me',
          {},
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          },
        )

        .catch(() => {
          navigate('/login');
        });
    }
  }, [navigate]);
};
