import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";

function App() {

    const[loggedInAs, setLoggedInAs] = useState(null);

    function login(email){
        if(email){
            setLoggedInAs(email);
        }
    }
    //
    // function handleAuthenticate(event){
    //     setEmail(events.target.value)
    // }

    function logout(){
        setLoggedInAs(false);
    }

    let content;
    if(loggedInAs){
        content =
        <div>
            <div> Witaj {loggedInAs} </div>
            <button  onClick={logout}> Wyloguj.</button>
        </div>
    }else{
        content = <LoginForm onLogin={login}/>;
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęciach</h1>
            {content}
        </div>
    );
}

export default App;
