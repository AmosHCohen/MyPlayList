import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom";


export default function List() {
    const { user, setUser } = useContext(UserContext)
    if (!user) return (
        <Navigate to="/login" />
    )
    return (
        <div>
        </div>
    )
}