import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard";
import Admin from './pages/Admin.jsx';
import Reports from './pages/Reports.jsx';
import About from './pages/About.jsx';
import Help from './pages/Help.jsx';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
