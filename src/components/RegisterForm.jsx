import { Link } from 'react-router-dom';

const RegisterForm = ({
  handleRegister,
  setFirstname,
  firstname,
  setLastname,
  lastname,
  setUsername,
  username,
  setPassword,
  password,
}) => {
  return (
    <section className="flex justify-center items-center md:w-2/5 w-3/5 h-card bg-container-bg shadow-card-shadow rounded-2xl relative transition ease-in delay-300">
      <div className="relative flex flex-col justify-start items-center px-5 pt-10 w-home h-home bg-bg-color rounded-2xl shadow-card-shadow">
        <h1 className="w-txt text-xl font-bold mb-2 text-center">
          Sign Up, Now
        </h1>
        <p className="text-sm font-bold">
          And access your personal TODO assitant
        </p>

        <form className="w-txt mt-6" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First name"
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-3 ml-1.5 w-full bg-container-bg focus:text-txt-color focus:placeholder:opacity-60"
            autoComplete="off"
            onChange={setFirstname}
            value={firstname}
          />
          <input
            type="text"
            placeholder="Last name"
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-3 mt-3 ml-1.5 w-full bg-container-bg focus:text-txt-color focus:placeholder:opacity-60"
            autoComplete="off"
            onChange={setLastname}
            value={lastname}
          />
          <input
            type="text"
            placeholder="Username"
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-3 mt-3 ml-1.5 w-full bg-container-bg focus:text-txt-color focus:placeholder:opacity-60"
            autoComplete="off"
            onChange={setUsername}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            className="text-xs text-txt-color rounded-lg border border-bg-color outline-none px-3 py-3 ml-1.5 w-full bg-container-bg mt-3 focus:text-txt-color focus:placeholder:opacity-60"
            onChange={setPassword}
            value={password}
          />
          <button
            className="sign-up-main bg-[#19a719]"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs mt-5">Have an account? 🤗</p>

        <Link to="/login" className="w-full text-center">
          <button className="sign-up">Sign In</button>
        </Link>
      </div>
    </section>
  );
};
export default RegisterForm;
