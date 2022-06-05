import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
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

export default App;
