import React from 'react'

function Task({ task, deleteTask, stateComplete }) {
    return (
        <>
          <li className='task'>
              <p 
                onClick={() => stateComplete(task.id)}
                style={{ textDecoration: task.completed ? 'line-through' : 'none'}} 
              >
                {task.text}
              </p>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        </>
    )
}

export default Task