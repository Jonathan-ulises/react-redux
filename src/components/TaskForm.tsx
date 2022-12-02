import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { Task } from '../model/task.model';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../app/store';

const TaskForm = () => {

  const [task, setTask] = useState<Task>({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams();
  const tasks = useSelector((state: RootState) => state.tasks);

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }));
    }
    
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id)!);
    }
  }, []);
    
  return (
    <form onSubmit={ handleSubmit }>
      <input name='title' type="text" placeholder="title" onChange={handleChange} value={task.title}/>
      <textarea name="description" placeholder="description" onChange={ handleChange } value={task.description}></textarea>
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm