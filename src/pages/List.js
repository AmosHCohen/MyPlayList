import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom";
import Login from "./Login";


export default function List() {
    const { user, setUser } = useContext(UserContext)
    console.log(user);
    if (user == "test") return (
        <div>
            <div>you are not authorized!</div>
            <Login />
        </div>
    )
    return (
        <div>
            this is the user name - {user.name}
        </div>
    )
}