import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import manitos from "./Images/Manitos2.jpeg";
import "./NavBar.scss";
// import { useHistory } from "react-router-dom";
// import user from "../MyProfile/Images/usuario.png";
import BagIcon from 'components/Icons/Bag'
import SettingsIcon from 'components/Icons/SettingsIcon'

function NavBar() {
  const loggedIn = true;

  // const history = useHistory();
  // const handleOnClickCart = () => {
  //     history.push(`/carrito`)
  //   }

  return (
    <>
      <div className="grid grid-container">
        <div className="grid grid1">
          <a href="/">
            <img src={manitos} alt="Imagen no encontrada" />
          </a>
        </div>
        <div className="grid grid2">
          <ul className="grid list">
            <li className="listee">
              <a href="/nosotros">Nosotros</a>
            </li>
            <li className="listee">
              <a href="/products">Productos</a>
            </li>
            <li className="listee">
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="grid grid3">
          <SearchBar />
        </div>
        <div className="grid grid4">
          <ul className="grid list">
            <li className="listee">
              <a href="/admin/products">Admin <SettingsIcon
                  fill="#fff"
                  style={{ marginLeft: "8px" }}
                /></a>
            </li>
            <li className="listee">
              <a href="/carrito"><BagIcon fill="#fff" /></a>
            </li>

            {!loggedIn ? (
              <>
                <li className="listee">
                  <a href="/register">Registrate</a>
                </li>
                <li className="listee">
                  <a href="/loginuser">Iniciar Sesión</a>
                </li>
              </>
            ) : <li className="profile">
                     <a href="/profile">Mi Perfil</a>
                     <ul className="menu">
                       <li><a>Mis Datos</a></li>
                       <li><a>Mis Ordenes</a></li>
                       <li><a>Ayuda</a></li>
                       <li><a>Cerrar Sesión</a></li>
                     </ul>
               </li>}

          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
