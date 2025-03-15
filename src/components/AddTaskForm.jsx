import { useState } from "react"

function AddTaskForm( {addTask} ) {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">Añadir tarea</button>
            </form>
        </>
    )
}

export default AddTaskForm