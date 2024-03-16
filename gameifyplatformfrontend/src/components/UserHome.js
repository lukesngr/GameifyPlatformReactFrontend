import { useQuery } from "@tanstack/react-query";
import TaskToComplete from "./TaskToComplete";
import Navbar from "./Navbar";
import '../styles/userhome.scss';

export default function UserHome() {
    //const {data, status} = useQuery("userTasks", () => axios.get("/api/user/tasks"));
    let status = "success";
    let data = {tasks: [{taskName: "task1", taskDescription: "fdfdsf", taskID: 5, taskCompleted: false}]};

    if (status == "success") {
        return (<div>
            <Navbar /> 
            <div className="tasksContainer">
                <h1>Tasks</h1>
                {data.tasks.map((task, index) => {
                    return <TaskToComplete key={index} task={task} />;
                })}
            </div>
        </div>);
    }
}