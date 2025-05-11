import MeetingsPage from "./meetings/MeetingsPage";

export function UserPanel(props) {
    return (
        <div>
            <div> Witaj {props.userName} </div>
            <button  onClick={() => props.onLogout()}> Wyloguj</button>
            <MeetingsPage/>
        </div>

    );
}

//v2
// export function UserPanel({userName ,onLogout }) {
    // return (
    //     <div>
    //         <div> Witaj {props.userName} </div>
    //         <button  onClick={() => props.onLogout()}> Wyloguj</button>
    //     </div>
    //
    // );
// }
