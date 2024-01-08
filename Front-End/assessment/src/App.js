import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoutes";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/single"
            element={
              <ProtectedRoute isAllowed={user}>
                <SingleProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute isAllowed={user}>
                <AllProducts />{" "}
              </ProtectedRoute>
            }
          ></Route>
          <Route
            element={
              <ProtectedRoute isAllowed={user && user.role === "creator"} />
            }
          >
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
