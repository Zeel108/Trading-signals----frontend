import {BrowserRouter as Router, Routes,Route} from 'react-router';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx"
import Success from './components/Success.jsx'
import Cancel from './components/Cancel.jsx'
import Signals from './components/Signals.jsx';
import './assets/CSS/style.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/signalstable' element={<Signals />} />
      </Routes>
    </Router>
  )
}

export default App
