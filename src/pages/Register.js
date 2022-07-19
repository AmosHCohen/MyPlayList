import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Register() {
    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate();

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    function sendData(user) {
        return axios.post(`http://localhost:3001/api/users/register`, user)
            .then(res => {
                console.log("feedback from the server ", res);
                localStorage.userToken = JSON.stringify(res.data)
            }).catch(e => {
                console.log(e)
                // setLoginError("error")
            })

    }
    async function onSubmit(e) {
        e.preventDefault()
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value
        }
        await sendData(user)
        console.log("data sent to the server ", user);
        if (localStorage.userToken) {
            setUser(JSON.parse(localStorage.userToken));
            console.log("I was registered");
            navigate("/")
        }
    }
    return <form onSubmit={onSubmit}>
        <label>
            First name:
            <input ref={firstName} name="firstName" required type="text" />
        </label>
        <br />
        <label>
            Last name:
            <input ref={lastName} name="lastName" required type="text" />
        </label>
        <br />

        <label>
            email:
            <input ref={email} name="email" required type="text" />
        </label>
        <br />
        <label>
            Password:
            <input ref={password} name="password" required type="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>

}