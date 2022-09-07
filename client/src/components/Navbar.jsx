import React from "react";
import { Link } from "react-router-dom";
import Spotify from "../assets/spoti.svg";
function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div
      style={{
        background: "#333",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Link to="/">
        <i
          style={{
            fontSize: "35px",
            fill: "white",
            color: "white",
          }}
          class="fa-brands fa-spotify"
        ></i>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "10%",
        }}
      >
        {user ? (
          <>
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid white",
              }}
              src={user.photos[0].value}
              alt=""
            />
            <p
              style={{
                color: "white",
              }}
            >
              {user.displayName}
            </p>
            <i
              style={{
                fontSize: "25px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={logout}
              class="fa-solid fa-right-from-bracket"
            ></i>
          </>
        ) : (
          <Link to="/login">
          <span
            style={{
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            LOGIN
          </span>
          
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
