import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const TaskList = () => {

  const task = useSelector((state: RootState) => state.tasks)
  console.log(task)

  return (
    <div>
      { task.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      )) }
    </div>
  )
}

export default TaskList