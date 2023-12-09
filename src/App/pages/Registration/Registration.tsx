const Registration = () => {
  return (
    <div className={'section'}>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              required={true}
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&rsquo;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input required={true} type="text" className="form-control" id="name" aria-describedby="Имя" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Фамилия</label>
            <input required={true} type="text" className="form-control" id="surname" aria-describedby="Фамилия" />
          </div>
          <div className="form-group">
            <label htmlFor="patronymic">Отчество</label>
            <input type="text" className="form-control" id="patronymic" aria-describedby="Отчество" />
          </div>
          <div className="form-group">
            <label htmlFor="age">Возраст</label>
            <input type="number" className="form-control" id="age" aria-describedby="Возраст" />
          </div>
          <div className="form-group">
            <select className={'select'}>
              <option selected={true}>Выберите пол</option>
              <option value={1}>Мужской</option>
              <option value={2}>Женский</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input required={true} type="password" className="form-control" id="exampleInputPassword1" />
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
