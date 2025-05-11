export function UserPanel(props) {
    return (
        <div>
            <div> Witaj {props.userName} </div>
            <button  onClick={() => props.onLogout()}> Wyloguj</button>
        </div>

    );
}