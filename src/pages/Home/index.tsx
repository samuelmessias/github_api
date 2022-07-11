import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';
const Home = () => {
  return (
    <>
      <div className="main-container bg">
        <h1 className="title-container">Desafio Github API</h1>
        <p className="content-container">Bootcamp Spring React - DevSuperior</p>
        <Link to="/pesquisar">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </>
  );
};

export default Home;
