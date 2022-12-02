import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { Task } from '../model/task.model';
const TaskForm = () => {

  const [task, setTask] = useState<Task>({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(task))
  }
    
  return (
    <form onSubmit={ handleSubmit }>
      <input name='title' type="text" placeholder="title" onChange={handleChange} />
      <textarea name="description" placeholder="description" onChange={ handleChange }></textarea>
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm