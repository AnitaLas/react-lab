import {useState} from "react";

export function LoginForm(props) {

    const [email, setEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (<div>
        <div>Zaloguj się e-mailem</div>
        <input type="text" value={email} onChange={handleChange}/>
        <button onClick={() => props.onLogin(email)}> Wchodzę</button>
    </div>);
}