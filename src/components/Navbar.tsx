import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FiFlag, FiHome } from "react-icons/fi";
import "./css/components.css";

export default function Navbar(): React.FC {
  const { pathname } = useLocation();
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="/" class="link">
            <span class={pathname === "/" ? "linkIcoActive" : "linkIco"}>
              <FiHome />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/identify" class="link">
            <span
              class={pathname === "/identify" ? "linkIcoActive" : "linkIco"}
            >
              <BsGenderMale />
              <BsGenderFemale />
            </span>
            Identify
          </Link>
        </li>
      </ul>
    </nav>
  );
}
