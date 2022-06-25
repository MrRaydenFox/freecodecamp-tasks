import { useState } from 'react'
import '../stylesheets/TaskForm.css'
import {v4 as uuidv4} from 'uuid'

function TaskForm(props) {

  const [input, setInput] = useState('')

  const manageChange = e => {
    setInput(e.target.value)
  }

  const manageSubmit = e => {
    e.preventDefault()
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask)
  }

  return (
    <form
      className='task-form'
      onSubmit={manageSubmit}
    >
      <input
        className='task-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manageChange}
      />
      <button className='task-button'>Agregar tarea</button>
    </form>
  )
}

export default TaskForm