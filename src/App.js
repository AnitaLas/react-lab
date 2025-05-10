import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // let email = 'fracz@agh.edu.pl';
    //
    // function handleChange(event) {
    //     console.log(event.target.value);
    // }

    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [infoText, setInfoText] = useState('Ale masz krótki adres email! ');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    // function changeInfo(event){
    //     if(email.length > 4){
    //         setInfoText("ffffff");
    //     }
    // }

    let message;
    if (email.length < 5) {
        // message = <div>Twój adres e-mail jest za krótki</div>;
        message = 'Twój adres e-mail jest za krótki';
    } else if (email.length < 15) {
        // message = <div>Twój adres e-mail jest w sam raz.</div>;
        message = 'Twój adres e-mail jest w sam raz.';
    } else {
        // message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
        message = 'Twój adres e-mail jest stanowczo za długi.';
    }

    //handleButtonClick()
    function alertEmail(){
  // console.log("test");
        alert(email);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {/*<h2>{infoText}</h2>*/}
            <h2>Twój e-mail to {email}</h2>
            {/*<h2>Twój e-mail to {email.toUpperCase()}</h2>*/}
            {/*<h2>Twój e-mail to {email.length}</h2>*/}
            {/*<h2>Twój e-mail to {2+6}</h2>*/}
            {/*<h2>Twój e-mail to {test +2+6}</h2>*/}
            {/*<h2>Twój e-mail to {'test' +2+6}</h2>*/}
            {/*<input type="text" value={email} onChange={handleChange}/>*/}

            <div>{message}</div>
            <input type="text" value={email} onChange={handleChange}/>

            {/*<button type="button" onClick={() => alert(email)}>*/}
            {/*    Wyświetl mój e-mail w alercie*/}
            {/*</button>*/}
            <button  onClick={alertEmail}> Wyświetl mój e-mail w alercie</button>

        </div>
    );
}

export default App;
