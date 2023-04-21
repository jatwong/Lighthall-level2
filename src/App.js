import './App.css';
import AllTasksList from './components/pages/AllTasksList';
import Login from './components/pages/login';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(Cookies.get("user") || "");
  }, [user]);

  let page = user? <AllTasksList user={user} setUser={setUser}/>: <Login setUser={setUser}></Login>

  return (
    <div className='App'>
      {page}
    </div>
  );
}

export default App;
