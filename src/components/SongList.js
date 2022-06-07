import SongPreview from "./SongPreview"

export default function SongList({ results }) {
    if (!results) return <div></div>
    return <div>
        <h1>Results:</h1>
        {
            results.map(v => {
                return <SongPreview key={v.id} song={v} />
            })}
    </div>

}