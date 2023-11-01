import { useState, SyntheticEvent } from 'react';
import { User } from '../../models/user';

export function UserForm() {
  const initialState: User = {
    userName: '',
    userSurname: '',
    birthday: '',
    gender: 'Prefer not to mention',
    email: '',
    passwd: '',
    isOk: false,
    accountType: 'Personal',
  };

  const [userState, setUserState] = useState(initialState);
  // const [actualPage, setActualPage] = userState(1);
  const isDisable = true;

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setUserState({ ...userState, [name]: value });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(userState);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <fieldset className="Personal Data">
        <legend>User data</legend>
        <div className="form-control">
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            name="userName"
            id="user-name"
            onChange={handleChange}
            placeholder="Write your name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="user-surname">Surname</label>
          <input
            type="text"
            name="userSurname"
            id="user-surname"
            onChange={handleChange}
            placeholder="Write your surname"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="birth-date">
            Enter your birthday:
            <input type="date" name="bday" />
          </label>
        </div>
        <div className="form-control">
          <fieldset onChange={handleChange}>
            <legend>Select your gender</legend>
            <label>
              <input type="radio" name="gender" value="Male" required /> Male
            </label>
            <input type="radio" name="gender" id="gender-2" value="Female" />
            <label htmlFor="gender-2">Female</label>
            <input type="radio" name="gender" id="gender-3" value="Other" />
            <label htmlFor="gender-3">Other</label>
            <input
              type="radio"
              name="gender"
              id="gender-4"
              value="Prefer not to mention"
            />
            <label htmlFor="gender-4"> Prefer not to mention</label>
          </fieldset>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="checkbox"
            name="isOk"
            id="is-ok"
            onChange={handleChange}
            required
          />
          <label htmlFor="is-ok">Do you agree with our terms? </label>
        </div>
      </fieldset>

      <fieldset className="AccessData">
        <div className="form-control">
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            name="userName"
            id="username"
            onChange={handleChange}
            placeholder="Write your name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="passwd">Passwd</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
            minLength={4}
            maxLength={8}
          />
        </div>
        <div className="form-control">
          <label htmlFor="passwd">Passwd</label>
          <input
            type="password"
            name="passwd"
            id="password"
            required
            onChange={handleChange}
            minLength={4}
            maxLength={8}
          />
        </div>
        <label htmlFor="account-type">Account Type:</label>
        <select id="account-type" name="accountlist" form="accountlist">
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option value="Business">Business</option>
        </select>
      </fieldset>

      <fieldset className="Confirmation">
        <div className="form-control">
          <h2>Confirmation</h2>
          <div>
            <p>Name: {userState.userName}</p>
            <p>Surname: {userState.userSurname}</p>
            <p>Birthday: {userState.birthday}</p>
            <p>Gender: {userState.gender}</p>
            <p>Email: {userState.email}</p>
            <p>Account Type: {userState.accountType}</p>
          </div>
          <button type="submit" disabled>
            Confirm
          </button>
        </div>
      </fieldset>
    </form>
  );
}
