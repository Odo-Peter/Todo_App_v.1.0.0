import React from 'react';

const Todos = ({ todos }) => {
  const borderColors = [
    'border-purple',
    'border-green',
    'border-orange',
    'border-red',
    'border-pale-blue',
    'border-blue',
  ];

  const randIndex = Math.floor(Math.random() * borderColors.length);

  return (
    <form className="w-txt pt-5">
      <ul className="mb-12">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="flex justify-start items-center">
              <input type="checkbox" className="hover:cursor-pointer" />
              <li
                key={todo.id}
                className="ml-4 leading-relaxed hover:text-[red] hover:cursor-pointer border-borderColors[2]"
              >
                {todo.content}
              </li>
            </div>
          );
        })}
      </ul>

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Enter Todo..."
          className="text-xs text-txt-color rounded-lg outline-none px-3 py-3 w-5/6 bg-bg-color focus:text-txt-color focus:placeholder:opacity-60"
        />
        <button className="bg-[green] h-9 w-9 rounded-full hover:bg-[#07b907]">
          {' '}
          +{' '}
        </button>
      </div>
    </form>
  );
};

export default Todos;
