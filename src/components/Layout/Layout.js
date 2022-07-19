import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Layout() {
    const [user, setUser] = useState()

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Main />
            </UserContext.Provider>
        </div>

    );

}