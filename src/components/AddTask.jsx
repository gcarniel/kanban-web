import { useState } from 'react';

export const AddTask = ({ socket }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    socket.emit('createTask', { task });
    setTask('');
  };

  return (
    <form className="form__input" onSubmit={handleAddTodo}>
      <label htmlFor="task">Nova Tarefa</label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        className="input"
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addTodoBtn">Adicionar Tarefa</button>
    </form>
  );
};
