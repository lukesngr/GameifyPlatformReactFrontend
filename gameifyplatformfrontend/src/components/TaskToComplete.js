export default function TaskToComplete(props) {
    function completeTask() {
        //axios.post("/api/user/completeTask", {taskName: props.taskName});
        console.log("hghgh");
    }

    return (
        <div className="taskToComplete">
            <label for="taskCheckBox">{props.task.taskName}</label>
            <input id="taskCheckBox" type="checkbox" onClick={completeTask}/>
        </div>
    )
}