import React from "react";
import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="active" to="/">Главная</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/recomendations">Получить рекомендации</Link>
        </li>
      </ul>
      {/* <ul>
        <li>
          <Link to="/domain">Факторы домена</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/page">Факторы уровня страницы</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/site"> Факторы уровня сайта</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/feedback">Факторы обратной связи</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/communication">
            Факторы взаимодействия с пользователем
          </Link>
        </li>
      </ul> */}
      
    </nav>
  );
}
export default NavBar;
