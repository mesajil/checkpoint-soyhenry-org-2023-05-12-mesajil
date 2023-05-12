/* 2️⃣ ***COMPONENTE NAV*** 2️⃣
Implementar el componente Nav. En este ejercicio tendrás que asociar dos etiquetas Link to='' a 
distintos elementos.

REQUISITOS
🟢 El primer <Link> debe dirigir a "/" con el texto "Home".
🟢 El segundo <Link> debe dirigir a "/celulares/create" con el texto "Create Celular".

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
*/

import "./nav.css";
import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return <div className="nav">
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/celulares/create">
      <button>Create Celular</button>
    </Link>
  </div>;
};

export default Nav;
