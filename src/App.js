import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  
  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/login" element={ <Register></Register>} />
        <Route path="/register" element={<Login></Login> } />
        <Route path="/ForgetPassword" element={<ForgetPassword></ForgetPassword> } />
      </Routes>
    </>
  );
}

export default App;
