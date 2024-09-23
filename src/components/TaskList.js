import React from 'react';


const TaskList = ({ tasks, onEditTask, onDeleteTask, onCompleteTask }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
        
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            <span>{task.taskName} - {task.priority}</span>
            <div>
              <button onClick={() => onEditTask(task)}>Edit</button>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
              <button onClick={() => onCompleteTask(task.id)} disabled={task.completed}>
                {task.completed ? 'Completed' : 'Mark as Completed'}
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
