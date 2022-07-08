import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import './styles.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container bg">
        <h1 className="title-container" >Desafio Github API</h1>
        <p className="content-container" >Bootcamp Spring React - DevSuperior</p>
        <ButtonIcon />
      </div>
    </>
  );
};

export default Home;
