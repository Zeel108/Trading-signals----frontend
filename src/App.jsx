import {BrowserRouter as Router, Routes,Route} from 'react-router';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
