import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './app/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
