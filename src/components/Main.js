import Search from "../pages/Search";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}