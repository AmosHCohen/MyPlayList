import { useState } from "react"
export default function Login() {
    const [name, setName] = useState('')
    const [password, setpassword] = useState('')
    const onChange = (e) => {
        const username = e.target.value
        // const password = e.target.password
        console.log(username);
    }
    const onSubmit = (e) => {
        console.log("blabla");
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input name="username" type="text" value={FormData.username} onChange={onChange} />
            </label>
            <label>
                Password:
                <input name="password" type="password" value={FormData.password} onChange={onChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}