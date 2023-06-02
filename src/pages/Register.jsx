import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import userService from '../services/users';
import ErrorMessage from '../components/Error';
import SuccessMessage from '../components/Success';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      username === '' ||
      password === '' ||
      firstname === '' ||
      lastname === ''
    ) {
      setErrorMessage('All fields are REQUIRED');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5500);
    }
    try {
      const user = await userService.createUser({
        firstname,
        lastname,
        username,
        password,
      });
      setSuccessMessage(
        `${user.lastname.toUpperCase()} ${user.firstname.toUpperCase()} has being Registered`
      );
      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/login');
      }, 5000);
    } catch (err) {
      console.log(err);
      if (err.response.data.error === 'password should be above 3 characters') {
        setErrorMessage('Ooops, password should be more than 3 characters');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const setFirst = (e) => {
    setFirstname(e.target.value);
  };
  const setLast = (e) => {
    setLastname(e.target.value);
  };
  const setUser = (e) => {
    setUsername(e.target.value);
  };
  const setPass = (e) => {
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
      <RegisterForm
        handleRegister={handleRegister}
        setFirstname={setFirst}
        setLastname={setLast}
        setPassword={setPass}
        setUsername={setUser}
        firstname={firstname}
        lastname={lastname}
        username={username}
        password={password}
      />
    </div>
  );
};

export default Register;
