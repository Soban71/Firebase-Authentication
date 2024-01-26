import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/Signup';
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import DisplayPage from './components/displaypage';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    
   <BrowserRouter>

<Routes>
<Route path="/" element={<Login />} />
<Route path="/Signup" element={<Signup />} />
<Route path="/display" element={<DisplayPage />} />
<Route path="/ForgotPassword" element={<ForgotPassword />} />


</Routes>
</BrowserRouter>
    
  );
}

export default App;
