import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import Painel from 'components/Painel';
import './styles.css';
const Pesquisar = () => {
  return (
    <>
      <Navbar />
      <div className="main-container bg">
        <div className="card-container">
          <div className="car-title">
            <h1>Encontre um perfil Github</h1>
          </div>
          <div className="card-input">
            <input placeholder="Usuário Github" />
          </div>
          <div>
            <ButtonIcon />
          </div>
        </div>
        <Painel />
      </div>
    </>
  );
};

export default Pesquisar;
