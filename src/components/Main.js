import Search from "../pages/Search";
import List from "../pages/List";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound"
import { Routes, Route } from 'react-router-dom'


export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}