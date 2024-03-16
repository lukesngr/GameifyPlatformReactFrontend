import { useState } from "react";

export default function NewTask(props) {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    return (
        <form className="newTask">
            <label for="taskName">Task Name</label>
            <input id="taskName" type="text" value={taskName} onChange={setTaskName}></input>
            <label for="taskDescription">Task Description</label>
            <input id="taskDescription" type="text"  value={taskDescription} onChange={setTaskDescription}></input>
        </form>
    )
}