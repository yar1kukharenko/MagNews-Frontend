import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthCheck } from 'hooks/auth.ts';
import { IUser } from '../../../Models/IUser.ts';

const MePage = () => {
  useAuthCheck();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
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
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:8080/api/auth/logout',
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      .then(() => {
        localStorage.removeItem('access_token');
        navigate('/login');
      });
  };

  return (
    <div className={'section'}>
      <div className="container">
        {user && (
          <table className="table table-hover text-nowrap">
            <tbody>
              <tr>
                <td>ID</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Имя</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Фамилия</td>
                <td>{user.surname}</td>
              </tr>
              <tr>
                <td>Отчество</td>
                <td>{user.surname}</td>
              </tr>
              <tr>
                <td>Почта</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Возраст</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Пол</td>
                <td>{user.gender === 1 ? 'Мужской' : 'Женский'}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button onClick={logout} className="btn btn-danger">
          Выйти
        </button>
      </div>
    </div>
  );
};

export default MePage;
