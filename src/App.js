import logo from './images/logo.png';
import './App.css';
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='tasks-application'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Logo freecodecamp'
        />
      </div>
      <div className='principal-tasks-list'>
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  )
}

export default App;
