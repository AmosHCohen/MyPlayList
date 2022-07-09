import axios from "axios";
import { useRef } from "react";

export default function Register() {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    function sendData(user) {
        axios.post(`http://localhost:3001/api/users/register`, user)
            .then(res => {
                console.log("feedback from the server ", res);
            })

    }
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value
        }
        sendData(user)
        console.log("data sent to the server ", user);
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