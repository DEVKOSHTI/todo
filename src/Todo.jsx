import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')

    const addTask = () => {
        if (text.trim() !== '') {
            setTasks([...tasks, { text, completed: false }]);
            setText('');
        }
    }

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className="todo-container">
            <div className="input-container">
                <input 
                    type="text" 
                    className="task-input"
                    placeholder='Add Task' 
                    value={text}
                    onChange={event => setText(event.target.value)}
                    onKeyDown={(e) => {if((e.code || e.key) === 'Enter') addTask()}}
                />
                <button onClick={addTask} className="add-button">Add Task</button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="task-item">
                        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                            {task.text}
                        </span>
                        <button 
                            onClick={() => toggleTask(index)} 
                            className={`task-button ${task.completed ? 'undo-button' : 'complete-button'}`}
                        >
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button 
                            onClick={() => removeTask(index)}
                            className="task-button remove-button"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo