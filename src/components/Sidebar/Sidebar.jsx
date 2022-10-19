import React from "react";
import { Link } from "react-router-dom";
import { Sidebar__Section } from "./SidebarStyles";

const Sidebar = ({ sidebarSize }) => {
  return (
    <Sidebar__Section sidebarSize={sidebarSize}>
      <h1>JCI - ADMIN</h1>
      <ul>
        <li>
          <h2>
            <Link to="/jci-home">
              <button>Perfil</button>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/suscripciones">
              <button>Suscripciones</button>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/actas">
              <button>Actas</button>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/informes">
              <button>Informes</button>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/login">
              <button>Salir</button>
            </Link>
          </h2>
        </li>
      </ul>
    </Sidebar__Section>
  );
};

export default Sidebar;
