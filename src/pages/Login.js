import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { Link, useNavigate } from "react-router-dom"
import LoginError from "../components/LoginError";
import axios from "axios";
import Register from "./Register";



export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const [loginError, setLoginError] = useState()
    let navigate = useNavigate();
    function validatedUser() {
        setUser(JSON.parse(localStorage.userToken));
        setLoginError()
        navigate("/")

    }
    useEffect(() => {
        if (localStorage.userToken) validatedUser()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        axios.post(`http://localhost:3001/api/users/login`, { email, password })
            .then(res => {
                console.log("greate! validate user");
                localStorage.userToken = JSON.stringify(res.data)
                validatedUser()
            }).catch(e => {
                console.log(e)
                setLoginError("error")
            })
    }
    return (
        <div>

            <form onSubmit={onSubmit}>
                <label>
                    email:
                    <input name="email" required type="text" />
                </label>
                <br />
                <label>
                    Password:
                    <input name="password" required type="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div>{loginError && <LoginError />}
            </div>
            <span> <Link to="/register">New user?</Link></span>

        </div>

    )
}