import { useNavigate } from "react-router-dom";

export default function Logout() {
    let navigate = useNavigate();

    function onSubmit() {
        delete localStorage.userToken
        navigate("/login")

    }
    return (
        <form onSubmit={onSubmit}>
            <button onSubmit={onSubmit}>Logout?</button>
            <button onClick={() => console.log("cancel")}>Cancel</button>
        </form>
    )
}