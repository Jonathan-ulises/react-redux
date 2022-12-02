import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom'

const TaskList = () => {

  const task = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Tasks {task.length}</h1>
        <Link to={'/create-task'}>
          Create Task
        </Link>
      </header>
      { task.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id!)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      )) }
    </div>
  )
}

export default TaskList