
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
// import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);
  const [user, setUser] = useState({
    name: 'Lotus',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all tasks on component mount
    axios.get('http://localhost:8080/todos/all')
      .then(response => {
        setTodo(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const createTodo = (todo) => {
    const newTodo = { task: todo, isEditing: false };
    axios.post('http://localhost:8080/todos/add', newTodo)
      .then(response => {
        setTodo([...todoValue, response.data]);
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/todos/delete/${id}`)
      .then(() => {
        setTodo(todoValue.filter((todo) => todo.id !== id));
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  };

  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const updatedTodo = { id, task, isEditing: false };
    axios.put('http://localhost:8080/todos/update', updatedTodo)
      .then(response => {
        setTodo(
          todoValue.map((todo) =>
            todo.id === id ? response.data : todo
          )
        );
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear user data)
    console.log('User logged out');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <>
      <UserProfile user={user} onLogout={handleLogout} />
      <div className='flex justify-center items-center min-h-screen bg-gray-900'>
        <div className='w-full max-w-2xl bg-blue-900 mt-5 p-8 rounded-md'>
          <Data createTodo={createTodo} />
          <div className="mt-8">
            {todoValue.map((todo, idx) =>
              todo.isEditing ? (
                <Edit key={idx} editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={idx}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;

