import React from 'react';
import TimeImage from './TimeImage';
import Todos from './Todos';

const TodoFeed = ({
  addTodo,
  todos,
  setNewTodo,
  newTodo,
  handleLogout,
  profileName,
  handleEdit,
  handleDelete,
  handleChecks,
}) => {
  const splitChars = (username) => {
    const splits = username.split(' ');
    return `${splits[0][0]}${splits[1][0]}`;
  };
  return (
    <section className="flex flex-col justify-center item-center w-home h-screen bg-container-bg shadow-card-shadow transition duration-300 ease-in-out pl-8 relative">
      <div className="absolute right-5 top-4">
        <p className="text-xs">
          Logged in as{' '}
          <span className="bg-[#3d7409] p-2 text-base font-bold text-[white] rounded-full shadow-blue-950 ml-1 border-2 border-[#052c11]">
            {splitChars(profileName)}
          </span>{' '}
        </p>
      </div>

      <div className="absolute right-5 bottom-4">
        <button
          onClick={handleLogout}
          className="bg-[tomato] hover:bg-[#c73920] text-[white] text-sm font-bold p-1.5 pl-3 pr-3 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="flex justify-start items-center h-home">
        <div>
          <TimeImage name={profileName} />
          <form
            className="flex items-center w-5/6 justify-between mt-10"
            onSubmit={addTodo}
          >
            <input
              type="text"
              placeholder="Enter Todo..."
              className="text-xs text-txt-color rounded-lg outline-none px-3 py-4 w-5/6 bg-bg-color focus:text-txt-color focus:placeholder:opacity-60"
              onChange={setNewTodo}
              value={newTodo}
            />
            <button className="bg-[green] h-9 w-9 rounded-full hover:bg-[#07b907] text-[white] font-bold">
              {' '}
              +{' '}
            </button>
          </form>
        </div>
        <div style={{ marginLeft: '-1.2rem' }} className="w-full">
          <Todos
            todos={todos}
            handleChecks={handleChecks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </section>
  );
};

export default TodoFeed;
