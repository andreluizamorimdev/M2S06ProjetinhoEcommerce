import IMenu from "../../shared/interfaces/IMenu";
import "./Header.css";

const Header = () => {
  const menu = [
    {
      id: 1,
      label: 'Produtos',
      path: '/produtos'
    },
    {
      id: 2,
      label: 'Contato',
      path: '/contato'
    },

  ];

  const renderMenuItem = (menuItem : IMenu) => {
    return (
      <li key={menuItem.id}><a href={menuItem.path}>{menuItem.label}</a></li>
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

export default Header;
