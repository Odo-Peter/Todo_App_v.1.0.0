import { Link } from 'react-router-dom';

const LoginForm = ({
  handleLogin,
  setUsername,
  username,
  setPassword,
  password,
}) => {
  return (
    <section className="flex flex-col justify-center items-center md:w-2/5 w-3/5 h-card bg-container-bg shadow-card-shadow rounded-2xl relative">
      <div className="relative flex flex-col justify-start items-center px-5 pt-10 mt-3 w-home h-home bg-bg-color rounded-2xl shadow-card-shadow">
        <h1 className="w-txt text-xl font-bold mb-2 text-center">
          Hey, dear 👋🏾{' '}
        </h1>
        <p className="text-sm font-bold">Happy to have you back</p>

        <form className="w-txt mt-7" onSubmit={handleLogin}>
          <input
            type="text"
            required
            placeholder="Username..."
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-4 ml-1.5 w-full bg-container-bg focus:text-txt-color focus:placeholder:opacity-60"
            // autoComplete="off"
            onChange={setUsername}
            value={username}
          />
          <input
            type="password"
            placeholder="Password..."
            required
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-4 ml-1.5 w-full bg-container-bg mt-5 focus:text-txt-color focus:placeholder:opacity-60"
            onChange={setPassword}
            value={password}
          />
          <button
            className="sign-in transition duration-300 ease-in-out"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
        <p className="text-xs mt-12">Don't have an account? 😱</p>

        <Link to="/register" className="w-full text-center">
          <button className="sign-up transition duration-300 ease-in-out">
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
