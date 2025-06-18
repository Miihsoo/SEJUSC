import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/sicad.png";
import "../styles/header.module.css";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
             <img src={logo} alt="Logo do site" className="sicad" />
          </a>
        </div>

        <nav className="nav-center">
          <a href="/">Home</a>
          <a href="#">Cursos</a>
         <Link to="/sobre">Sobre</Link>
        </nav>

        <div className="user-menu" ref={dropdownRef}>
          <div className="user-name" onClick={toggleDropdown}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Ícone do usuário"
              className="user-icon"
            />
            <span>Olá, Maria</span>
          </div>

          <div
            id="dropdown"
            style={{ display: isDropdownVisible ? "block" : "none" }}
            className="dropdown"
          >
            <a href="/perfil">Perfil</a>
            <a href="/login">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
