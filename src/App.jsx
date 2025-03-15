import { useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  function addTask(newTaskText) {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function stateComplete(taskId) {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    )
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask}
            stateComplete={stateComplete}
          />
        ))}
      </ul>
    </>
  )
}

export default App
