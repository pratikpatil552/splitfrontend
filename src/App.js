import './App.css';

// all the routes
import Home from './components/Home'
import Signup from './components/Signup';
import Signin from './components/Signin';

import { UserContextProvider } from './UserContext';

import { Routes, Route } from "react-router-dom"
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
