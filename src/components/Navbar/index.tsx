import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar btn-primary navbar-expand-md navbar-dark bg-warning main-nav">
      <Link to="/">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
