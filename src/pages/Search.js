import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import SongList from "../components/SongList";
import { UserContext } from "../context/UserContext";
export default function Search() {
    const { user, setUser } = useContext(UserContext)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
            'X-RapidAPI-Key': 'df4b477e21msh6673074c888e530p1c32e0jsn2dc8d73d5a6d'
        }
    };
    const [results, setResults] = useState()
    function getResults(e) {
        const searchValue = e.target.elements.search.value
        e.preventDefault()
        fetch('https://simple-youtube-search.p.rapidapi.com/search?safesearch=false&query=' + searchValue, options)
            .then(response => response.json())
            .then(response => setResults(response.results))
            .catch(err => console.error(err));


    }
    if (!user) return (
        <Navigate to="/login" />
    )

    return (
        <div>
            <form onSubmit={getResults}>
                <label>
                    song:
                    <input name="search" required type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <SongList results={results} />
        </div>
    )
}