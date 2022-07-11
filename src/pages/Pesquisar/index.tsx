import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useEffect, useState } from 'react';
import { Usuario } from 'types/users';
import { BASE_URL } from 'util/requests';
import Painel from 'components/Painel';
import './styles.css';

type FormData = {
  user: string;
};

const Pesquisar = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const [usuario, setUsuario] = useState<Usuario>();
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData( { ...formData, [name]: value })
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
      axios.get(`${BASE_URL}/users/${formData.user}`).then((response) => {
        setUsuario(response.data);
      }).catch((error => {
        setUsuario(undefined);
      }));
   
  };

  return (
    <>
      <div className="main-container bg">
        <div className="card-container">
          <div className="car-title">
            <h1>Encontre um perfil Github</h1>
          </div>
          <form onSubmit={handlerSubmit}>
            <div className="card-input">
              <input
                name="user"
                value={formData.user}
                type="text"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Encontar
              </button>
            </div>
          </form>
        </div>
        {usuario && <Painel usuario={usuario} />}
      </div>
    </>
  );
};

export default Pesquisar;
