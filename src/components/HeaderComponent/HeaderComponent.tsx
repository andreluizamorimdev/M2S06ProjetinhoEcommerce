import { Link } from "react-router-dom";
import IMenu from "../../shared/interfaces/IMenu";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const menu = [
    {
      id: 1,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      label: 'Produtos',
      path: '/produtos'
    },
    {
      id: 3,
      label: 'Contato',
      path: '/contato'
    },

  ];

  const renderMenuItem = (menuItem : IMenu) => {
    return (
      <li key={menuItem.id}><Link to={menuItem.path}>{menuItem.label}</Link></li>
    )
  }
  return (
    <nav className="menu-principal-box">
        <div className="logo-box">
          <h1>DevDede</h1>
        </div>
        <ul className="menu-box">
            {menu.map(renderMenuItem)}
        </ul>
        <div className="profile-box">

        </div>
    </nav>
  );
};

export default HeaderComponent;
