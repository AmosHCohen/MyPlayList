import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { UserContext } from './context/UserContext';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    if (localStorage.userToken) {
      axios.post(`http://localhost:3001/api/users/getid`, { Headers: { "Authorization": JSON.parse(localStorage.userToken) } })
        .then(res => {
          console.log("greate! validate user");
          setUser(res)
          console.log({ res });
        }).catch(e => {
          console.log(e)
        })

    }
  }, [])
  console.log({ user });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <Layout /> : <Login />}
    </UserContext.Provider>

  )
}

export default App;
