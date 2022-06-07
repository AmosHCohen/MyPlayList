import { useNavigate } from 'react-router-dom';
import './SongPreview.css'
export default function SongPreview({ song }) {
    let navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        console.log(e.target.value);
        navigate(`/song?songId=${song.id}`)
    }
    return <div onClick={handleClick}>
        <h4>{song.title}</h4>
        <img className='thumbnail' src={song.thumbnail.url} alt={song.title} />
    </div>
}