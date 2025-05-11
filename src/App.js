import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";
import {UserPanel} from "./UserPanel";

function App() {

    const[loggedIn, setLoggedIn] = useState(null);

    function login(email){
        if(email){
            setLoggedIn(email);
        }
    }

    function logout(){
        setLoggedIn(false);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel userName={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
