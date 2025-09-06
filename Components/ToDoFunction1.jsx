import React, { useState } from "react";
function ToDoFunction() {
const [tasks, setTasks] = useState([]); // State to store tasks
const [task, setTask] = useState(""); // State for input field
// Add a new task
const addTask = () => {
if (task.trim() !== "") {
setTasks([...tasks, { text: task, completed: false }]);
setTask(""); // Clear input after adding task
}
};
// Toggle task completion
const toggleTask = (index) => {
const updatedTasks = [...tasks];
updatedTasks[index].completed = !updatedTasks[index].completed;
setTasks(updatedTasks);
};
// Delete a task
const deleteTask = (index) => {
const updatedTasks = tasks.filter((_, i) => i !== index);
setTasks(updatedTasks);
};
return (
<div className="todo-container">
<input
type="text"
placeholder="Enter a task..."
value={task}
onChange={(e) => setTask(e.target.value)}
/>
<button onClick={addTask}>Add Task</button>
<ul>
{tasks.map((t, index) => (
<li key={index} className={t.completed ? "completed" : ""}>
<span onClick={() => toggleTask(index)}>{t.text}</span>
<button className="delete-btn" onClick={() => deleteTask(index)}>
delete
</button>
</li>
))}
</ul>
</div>
);
}
export default ToDoFunction;