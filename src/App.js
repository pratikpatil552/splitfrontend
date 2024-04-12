import './App.css';

// all the routes
import Home from './components/Home'
import Signup from './components/Signup';
import Signin from './components/Signin';

import { UserContextProvider } from './UserContext';

import { Routes, Route } from "react-router-dom"
import axios from 'axios';
import Creategroup from './components/Creategroup';
import Groupinfo from './components/Groupinfo';


function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
        <Route path="/create" element={ <Creategroup/>} />
        <Route path="/group/:id" element={<Groupinfo/>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
