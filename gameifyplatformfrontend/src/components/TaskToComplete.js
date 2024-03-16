export default function TaskToComplete(props) {
    function completeTask() {
        //axios.post("/api/user/completeTask", {taskName: props.taskName});
        console.log("hghgh");
    }

    return (
        <div>
            <input type="checkbox" onClick={completeTask}/>
            <p>{props.taskName}</p>
        </div>
    )
}