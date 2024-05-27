import './Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">CHICO COINS</h1>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
