import { useEffect, useState } from 'react';
import todoService from '../services/todo';
import TodoFeed from '../components/TodoFeed';
import Login from './Login';
import SuccessMessage from '../components/Success';
import ErrorMessage from '../components/Error';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const Feed = () => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  const [modal, setModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');
  const [saveForEdit, setSaveForEdit] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const profileName = `${user?.firstname} ${user?.lastname}`;
  const navigate = useNavigate();

  useEffect(() => {
    const getTodos = async () => {
      const res = await todoService.getUserTodos();
      const renederedTodo = res.filter(
        (userTodo) => userTodo.user.username === user?.username
      );
      setTodos(renederedTodo);
    };
    getTodos();
  }, [user?.username]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      todoService.setToken(user.token);
    }
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const newTodoObject = {
        todo: newTodo,
        checked: false,
      };
      const data = await todoService.createTodo(newTodoObject);
      setTodos(todos.concat(data));
      setNewTodo('');

      setSuccessMessage(
        `New todo "${newTodoObject.todo.toUpperCase()}" has being added`
      );
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      if (error.response.data.error === 'Token expired') {
        setErrorMessage(
          `${user?.username.toUpperCase()}, please, login to continue`
        );
        setTimeout(() => {
          setErrorMessage(null);
          setUser(null);
        }, 5000);
      } else if (error.response.status === 403) {
        setErrorMessage(`${user?.username.toUpperCase()}, please enter a TODO`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const handleChecks = async (e) => {
    const todochecker =
      e.nativeEvent.srcElement.parentElement.parentElement.children[0]
        .innerText;
    const filteredTodo = todos.filter(
      (todo) => todo.todo.toLowerCase() === todochecker.toLowerCase()
    );
    const id = filteredTodo[0].id;

    if (e.target.checked) {
      e.target.nextElementSibling.className = `${e.target.nextElementSibling.className} line-through opacity-60`;

      try {
        await todoService.updateTodo(
          {
            todo: todochecker,
            checked: true,
          },
          id
        );
      } catch (error) {
        setErrorMessage('Oooops, this is not supposed to happen');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }

    if (!e.target.checked) {
      e.target.nextElementSibling.className = `ml-2 w-full leading-relaxed text-sm pb-1`;

      try {
        await todoService.updateTodo(
          {
            todo: todochecker,
            checked: false,
          },
          id
        );
      } catch (error) {
        setErrorMessage('Oooops, this is not supposed to happen');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const todochecker =
      e.nativeEvent.srcElement.parentElement.parentElement.children[0]
        .innerText;
    const filteredTodo = todos.filter(
      (todo) => todo.todo.toLowerCase() === todochecker.toLowerCase()
    );
    setSaveForEdit(saveForEdit.concat(filteredTodo));
    // console.log(saveForEdit.length);
    setEditedTodo(filteredTodo[0].todo);
    setModal(true);
  };

  const handleUpdatedTodo = async (e) => {
    e.preventDefault();
    const { id } = saveForEdit[0];
    try {
      await todoService.updateTodo(
        {
          todo: editedTodo,
          checked: false,
        },
        id
      );
      setEditedTodo('');
      setSaveForEdit([]);
      setModal(false);
      /* Soft reload*/
      const res = await todoService.getUserTodos();
      const renederedTodo = res.filter(
        (userTodo) => userTodo.user.username === user?.username
      );
      setTodos(renederedTodo);
      setSuccessMessage(`TODO has being edited to ${editedTodo.toUpperCase()}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      if (error.response.data.error === 'Token expired') {
        setErrorMessage(
          'Oooops, this is not supposed to happen, try logging in'
        );
        setModal(false);
        setTimeout(() => {
          setErrorMessage(null);
          setUser(null);
        }, 3000);
      } else if (error.response.status === 403) {
        setErrorMessage('Oooops, this is not supposed to happen');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
    setSaveForEdit([]);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const todochecker =
      e.nativeEvent.srcElement.parentElement.parentElement.children[0]
        .innerText;
    const filteredTodo = todos.filter(
      (todo) => todo.todo.toLowerCase() === todochecker.toLowerCase()
    );
    const id = filteredTodo[0].id;

    try {
      const confirm = window.confirm(`Do yo want to delete ${todochecker}`);

      if (confirm) {
        await todoService.deleteOne(id);
        setSuccessMessage('TODO has been deleted');
        setTimeout(() => {
          setSuccessMessage(null);
        }, 6000);
        /* Soft reload*/
        const res = await todoService.getUserTodos();
        const renederedTodo = res.filter(
          (userTodo) => userTodo.user.username === user?.username
        );
        setTodos(renederedTodo);
      }
    } catch (error) {
      if (error.response.data.error === 'Token expired') {
        setErrorMessage(
          `${user?.username.toUpperCase()}, please, login to continue`
        );
        setTimeout(() => {
          setErrorMessage(null);
          navigate('/');
        }, 6000);
      }
    }
  };

  const handleEnterTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const setTodoEdits = (e) => {
    e.preventDefault();
    setEditedTodo(e.target.value);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    setUser(null);
    window.localStorage.clear('loggedInUser');
    // console.log('logged out biytaaaccchhh!!!');
  };

  return (
    <>
      {user !== null ? (
        <div className="flex w-full justify-center items-center">
          {successMessage && (
            <div className="p-2 pl-4 pr-4 absolute top-1.5 z-50 left-10 bg-bg-color border-b-2 border-[green] rounded-md">
              <SuccessMessage message={successMessage} />
            </div>
          )}
          {errorMessage && (
            <div className="p-2 pl-4 pr-4 absolute top-1.5 z-50 left-10 bg-bg-color border-b-2 border-[red] rounded-md">
              <ErrorMessage message={errorMessage} />
            </div>
          )}
          {modal && (
            <Modal
              closeModal={closeModal}
              editedTodo={editedTodo}
              handleEditedTodo={setTodoEdits}
              handleUpdatedTodo={handleUpdatedTodo}
            />
          )}

          <TodoFeed
            setNewTodo={handleEnterTodo}
            newTodo={newTodo}
            addTodo={addTodo}
            todos={todos}
            user={user}
            handleEdit={handleEdit}
            handleChecks={handleChecks}
            handleDelete={handleDelete}
            handleLogout={handleLogout}
            profileName={profileName}
          />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Feed;
