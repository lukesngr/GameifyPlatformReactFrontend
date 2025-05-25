import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import { useState } from "react";
import {toast } from 'react-toastify';

export default function UserTaskListView() {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [completedTask, setCompletedTask] = useState(false);

    function completeTask(index) {
        setData(previousState => {
            const updatedTasks = previousState.tasks_list.map((task, i) => {
                if (i === index) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            return { ...previousState, tasks_list: updatedTasks };
        });
    }

    useEffect(() => {
        if(Cookies.get("sessionCode") == undefined) {
            navigate('/')
        }else {
            //console.log(JSON.parse(Cookies.get("sessionCode")));
            setData(JSON.parse(Cookies.get("sessionCode")));
        }
    }, []);

    useEffect(() => {
        if(completedTask) {
            if(data.reward_type == 1) {
                console.log(completedTask, data);
                const completedTasks = data.tasks_list.filter(task => task.completed);
                const numCompletedTasks = completedTasks.length;
                toast.success(
                <>
                    <p>Congratulations, you have won a monster</p>
                    <img src={`/${numCompletedTasks}.png`} alt="monster" width="100" height="100"></img>
                </>, {position: "top-center"});
            }else {

            }
            setCompletedTask(false);
        }

    }, [completedTask]);

    return (<div>
        <Navbar /> 
        <div className="tasksContainer">
            <h1>Tasks</h1>
            {data && data.tasks_list.map((task, index) => (
                <div className="taskToComplete">
                    <input type="checkbox" id={index} name={task.name} value={task.completed} onClick={() => completeTask(index)}></input>
                    <span>{task.name}</span>
                </div>
            ))}
        </div>
    </div>);
}