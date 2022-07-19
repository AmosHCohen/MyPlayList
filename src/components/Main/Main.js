import Search from "../../pages/Search";
import List from "../../pages/List";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound"
import { Routes, Route } from 'react-router-dom'
import Song from "../Song/Song"
import Register from "../../pages/Register";
import Logout from "../../pages/Logout";


export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/song" element={<Song />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}