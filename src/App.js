import "./App.css";
import Todo from "./component/Todo";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./component/Todo/hooks/useAuthContext";
import Login from "./component/Todo/pages/login";
import Signup from "./component/Todo/pages/signup";
import Navbar from "./component/Todo/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Todo /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        {/* <Todo/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
