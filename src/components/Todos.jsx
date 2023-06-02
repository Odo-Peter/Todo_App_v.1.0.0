import React from 'react';

const Todos = ({ todos, handleEdit, handleDelete, handleChecks }) => {
  const replaceChar = (str) => {
    const split = str.split('');
    split[0] = split[0].toUpperCase();
    const newStr = split.join('');
    return newStr;
  };

  return (
    <div className="w-9/12 flex justify-center item-center p-4 pr-5 h-todo bg-bg-color rounded-md shadow-time-shadow overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[gray]">
      <ul className="w-full">
        {todos.map((todo) => {
          return (
            <div className="flex flex-col" key={todo.id}>
              <div className="flex justify-start items-center border-b-2 pt-2">
                <input
                  type="checkbox"
                  className="hover:cursor-pointer"
                  onChange={handleChecks}
                />
                <li className="ml-2 w-full leading-relaxed text-sm pb-1">
                  {replaceChar(todo.todo)}
                </li>
              </div>
              <div className="flex justify-end items-center gap-2 text-xs mr-6 mt-2 mb-2">
                <button
                  className="bg-[#03ac13] flex justify-center items-center w-16 pt-0.5 pb-0.5 pl-4 pr-4 rounded-md hover:bg-[green] text-[white] text-center"
                  type="button"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="bg-[tomato] flex justify-center items-center w-16 pt-0.5 pb-0.5 pl-4 pr-4 rounded-md hover:bg-[red] text-[white]"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
