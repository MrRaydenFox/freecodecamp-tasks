import '../stylesheets/Task.css'
import {AiFillDelete} from 'react-icons/ai'

function Task({id, text, completeTask, deleteTask, completed}) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <div
        className='task-icon-container'
        onClick={() => deleteTask(id)}
      >
        <AiFillDelete className='task-icon' />
      </div>
    </div>
  )
}

export default Task