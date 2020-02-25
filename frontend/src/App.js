import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { AuthProvider, AuthContext } from "./context/auth";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Route path="/admin" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
