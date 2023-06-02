import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import loginService from '../services/login';
import todoService from '../services/todo';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../components/Success';
import ErrorMessage from '../components/Error';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Please enter USERNAME and PASSWORD');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else {
      try {
        const user = await loginService.login({
          username,
          password,
        });

        window.localStorage.setItem('loggedInUser', JSON.stringify(user));
        todoService.setToken(user.token);
        setUsername('');
        setPassword('');
        //set sucess message
        setSuccessMessage(`Logging in as ....  ${user.username.toUpperCase()}`);
        setTimeout(() => {
          setSuccessMessage(null);
          navigate('/');
          window.location.reload();
        }, 3000);
      } catch (err) {
        console.log(err);
        setErrorMessage('wrong username or password');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const nameSet = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordSet = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className="flex w-full justify-center items-center">
      {errorMessage && (
        <div className="flex items-center justify-center gap-2 p-2.5 pl-4 pr-4 absolute top-3 z-50 right-30  bg-bg-color border-b-2 border-[red] rounded-md">
          <ErrorMessage message={errorMessage} />
        </div>
      )}
      {successMessage && (
        <div className="p-2.5 pl-4 pr-4 absolute top-3 z-50 right-30  bg-bg-color border-b-2 border-[green] rounded-md">
          <SuccessMessage message={successMessage} />
        </div>
      )}
      <LoginForm
        handleLogin={handleLogin}
        setUsername={nameSet}
        setPassword={passwordSet}
        username={username}
        password={password}
      />
    </div>
  );
};

export default Login;
