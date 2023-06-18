import "./Header.css";

const Header = () => {
  const menu = [
    {
      id: 1,
      label: 'Camisetas',
      path: '/Camisetas'
    },
    {
      id: 2,
      label: 'Moletons',
      path: '/Moletons'
    },
    {
      id: 3,
      label: 'Quadros',
      path: '/Quadros'
    },

  ];

  type itensMenu = {
      id: number,
      label: string,
      path?: string
  }

  const renderMenuItem = (menuItem : itensMenu) => {
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
