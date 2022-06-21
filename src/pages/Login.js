import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios";



export default function Login() {
    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate();
    const defaultUser = {
        ID: 1,
        name: "user name",
        playlist: ["1", "2"],
        token: "2222"
    }
    function validateUser(username, password) {
        axios.post(`http://localhost:3001/api/users/login`, { username, password })
            .then(res => {
                setUser(res);
            })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        validateUser(username, password)
        if (user) {
            setUser(defaultUser)
            navigate("/")
        } else {
            console.log("wrong details");
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input name="username" required type="text" />
            </label>
            <br />
            <label>
                Password:
                <input name="password" required type="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}