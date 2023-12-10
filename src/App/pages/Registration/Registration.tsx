import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [age, setAge] = useState('1');
  const [gender, setGender] = useState(1);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const navigate = useNavigate();
  const registration = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/register', {
        email,
        name,
        surname,
        patronymic,
        age,
        gender,
        password,
        password_confirmation,
        role: 1,
      })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/');
      });
  };

  return (
    <div className={'section'}>
      <div className="container">
        <form onSubmit={registration}>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              required={true}
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We&rsquo;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="Имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Фамилия</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required={true}
              type="text"
              className="form-control"
              id="surname"
              aria-describedby="Фамилия"
            />
          </div>
          <div className="form-group">
            <label htmlFor="patronymic">Отчество</label>
            <input
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              type="text"
              className="form-control"
              id="patronymic"
              aria-describedby="Отчество"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Возраст</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="form-control"
              id="age"
              aria-describedby="Возраст"
            />
          </div>
          <div className="form-group">
            <select
              value={gender}
              className={'select'}
              onChange={(e) => {
                setGender(Number.parseInt(e.target.value, 10));
                // console.log(gender);
              }}
            >
              <option value={1}>Мужской</option>
              <option value={2}>Женский</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">Подтверждение пароля</label>
            <input
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              required={true}
              type="password"
              className="form-control"
              id="passwordConfirmation"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
