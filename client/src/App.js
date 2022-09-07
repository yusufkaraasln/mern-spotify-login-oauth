import Auth from "./pages/Auth";

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import React from "react";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      }).then(res=>{
        if (res.status===200) {
            return res.json();
        }
        throw new Error("Oturum açma işlemi başarısız");

      }).then(resobj=>{
        setUser(resobj.user);
      }).catch(err=>{
        console.log(err);
      });
    };
    console.log(user);
    getUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route
          path="/post/:id"
          element={user ? <Post /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
