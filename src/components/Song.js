import ReactPlayer from 'react-player'
import { useSearchParams } from 'react-router-dom'

export default function Song() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);
    return <div>
        <ReactPlayer url={'https://www.youtube.com/watch?v=' + searchParams.get("songId")} />
    </div>

}