import logo from './logo.svg';
import './App.css';
import RegisterandLogin from './components/RegisterandLogin';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <RegisterandLogin/>
    </div>
  );
}

export default App;
