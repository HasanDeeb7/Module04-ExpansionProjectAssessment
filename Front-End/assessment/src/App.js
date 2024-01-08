import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import axios from "axios";
function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/single" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
