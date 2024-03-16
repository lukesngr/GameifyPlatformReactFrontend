import { useState } from "react"
import NewTask from "./NewTask"
import Navbar from "./Navbar";

export default function SuperUserHome() {
    const [tasks, setTasks] = useState(['1', '2']);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    return (
        <div>
            <Navbar />
            <div className="superUserHome">
                <h1>Create List</h1>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
                {tasks.map((task, index) => {
                    return <p>{task}</p>;
                })}
                <button>Create</button>
            </div>
            <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add task</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className="newTask">
                                <label for="taskName">Task Name</label>
                                <input id="taskName" type="text" value={taskName} onChange={setTaskName}></input>
                                <label for="taskDescription">Task Description</label>
                                <input id="taskDescription" type="text"  value={taskDescription} onChange={setTaskDescription}></input>
                            </form>
                            <button onClick={() => setTasks([...tasks, {taskName, taskDescription}])}>Add</button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}