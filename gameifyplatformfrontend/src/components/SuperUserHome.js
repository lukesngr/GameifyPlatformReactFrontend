import { useState } from "react"
import NewTask from "./NewTask"
import Navbar from "./Navbar";
import '../styles/userhome.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { toast } from "react-toastify";

export default function SuperUserHome() {
    const [tasks, setTasks] = useState([{name: 'example', description: 'example'}]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [ultimateTaskName, setUltimateTaskName] = useState("");
    const [ultimateTaskDescription, setUltimateTaskDescription] = useState("");
    const [selectedOption, setSelectedOption] = useState("1");

    function sendToServer() {
        
        let newTasks = [];

        tasks.forEach(task => {
            newTasks.push({ name: task.name, description: task.description, completed: false });
        });

        //let overall = {'name': ultimateTaskName, description: ultimateTaskDescription, completed: false, tasks_list: tasks, reward_type: parseInt(selectedOption)};
        axios.post("http://api.shash.win/hackathon/cu7igeg7cl/super-user/", {'name': ultimateTaskName, description: ultimateTaskDescription, completed: false, tasks_list: newTasks, reward_type: parseInt(selectedOption)}, {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}).then((response) => {
            toast.success(`${response.data.id} is the session code`, {position: "top-center"});
        }).catch((error) => {
            console.log(error);
        });

    }

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
                <div className="checklistFields">
                    <label htmlFor="ultimateTaskName">Checklist Name</label>
                    <input id="ultimateTaskName" type="text" value={ultimateTaskName} onChange={e => setUltimateTaskName(e.target.value)}></input><br />
                    <label htmlFor="ultimateTaskDescription">Checklist Description</label>
                    <input id="ultimateTaskDescription" type="text" value={ultimateTaskDescription} onChange={e => setUltimateTaskDescription(e.target.value)}></input>
                    <label htmlFor="rewardType">Reward Type</label>
                    <select id="rewardType" value={selectedOption} onChange={setSelectedOption}>
                        <option value="1">Monsters</option>
                        <option value="2">Vouchers</option>
                    </select>
                    <button type="button" className="addTaskButton" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
                    <br />
                    
                </div>
                {tasks.map((task, index) => {
                    return <div className="task" key={index}>
                    <p className="createdTaskName">{task.name}</p>
                    <button className="deleteCreatedTask" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>;
                })}
                <button onClick={sendToServer}>Send to Server</button>
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
                                <input id="taskName" type="text" value={taskName} onChange={e => setTaskName(e.target.value)}></input><br />
                                <label for="taskDescription">Task Description</label>
                                <input id="taskDescription" type="text"  value={taskDescription} onChange={e => setTaskDescription(e.target.value)}></input>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={() => setTasks(previousState => ([...previousState, {'name': taskName, taskDescription}]))}>Save</button>
                            <button type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}