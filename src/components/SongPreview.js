import './SongPreview.css'
export default function SongPreview({ song }) {
    return <div>
        <h4>{song.title}</h4>
        <img className='thumbnail' src={song.thumbnail.url} alt={song.title} />
    </div>
}