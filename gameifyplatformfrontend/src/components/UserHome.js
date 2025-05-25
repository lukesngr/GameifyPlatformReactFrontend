import Navbar from "./Navbar";
import '../styles/userhome.scss';
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function UserHome() {

    const [sessionCode, setSessionCode] = useState(0);
    const navigate = useNavigate();

    function loginUsingSessionCode() {
        axios.get(`http://api.shash.win/hackathon/cu7igeg7cl/super-user/${sessionCode}`).then((response) => {
            Cookies.set("sessionCode", JSON.stringify(response.data), { expires: 7 });
        }).catch((error) => {
            toast.error("Invalid session code", {position: "top-center"})
        });
        navigate("/usertasks");
    }
    
    return (
        <div>
            <Navbar />
            <div className="tasksContainer">
                <h1>Enter session code</h1>
                <input type="number" max="999999" value={sessionCode} onChange={e => setSessionCode(e.target.value)}></input>
                <button onClick={loginUsingSessionCode}>Join Game</button>
            </div>
        </div>
    );
}