import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSaveTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.taskName);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      taskName,
      priority,
      completed: taskToEdit ? taskToEdit.completed : false
    };
    onSaveTask(newTask);
    setTaskName('');

    setPriority('Low');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
