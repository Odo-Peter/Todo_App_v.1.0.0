import React from 'react';
import TimeImage from './TimeImage';
import Todos from './Todos';

const TodoFeed = () => {
  const todos = [
    {
      content: 'Create a functional todo app',
      id: 1,
      checked: false,
    },
    {
      content: 'Test the functionality of the app',
      id: 2,
      checked: false,
    },
    {
      content: 'Send in a Test Todo',
      id: 3,
      checked: false,
    },
    {
      content: 'Send in a Test Todo',
      id: 4,
      checked: false,
    },
    {
      content: 'Send in a Test Todo',
      id: 5,
      checked: false,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center md:w-2/5 w-3/5 h-card bg-container-bg shadow-card-shadow rounded-2xl transition duration-300 ease-in-out">
      <TimeImage />
      <Todos todos={todos} />
    </section>
  );
};

export default TodoFeed;
