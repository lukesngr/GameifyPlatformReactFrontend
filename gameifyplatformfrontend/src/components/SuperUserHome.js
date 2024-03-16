import { useState } from "react"
import NewTask from "./NewTask"
import Navbar from "./Navbar";
import '../styles/userhome.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function SuperUserHome() {
    const [tasks, setTasks] = useState([{taskName: 'fd'}, {taskName: 'fdfd'}]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function deleteTask(index) {
        setTasks(previousState => {
            return previousState.filter((_, i) => i !== index);
        });
    }

    return (
        <>
            <Navbar />
            <div className="tasksContainer">
                <h1>Create List</h1>
                <button type="button" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
                {tasks.map((task, index) => {
                    return <div className="task" key={index}>
                    <p className="createdTaskName">{task.taskName}</p>
                    <button className="deleteCreatedTask" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>;
                })}
                <button>Send to Server</button>
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
                                <input id="taskName" type="text" value={taskName} onChange={e => setTaskName(e.target.value)}></input>
                                <label for="taskDescription">Task Description</label>
                                <input id="taskDescription" type="text"  value={taskDescription} onChange={e => setTaskDescription(e.target.value)}></input>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={() => setTasks(previousState => ([...previousState, {taskName, taskDescription}]))}>Save</button>
                            <button type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}