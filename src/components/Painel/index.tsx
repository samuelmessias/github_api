import axios from 'axios';
import { useEffect, useState } from 'react';
import { Usuario } from 'types/users';
import { BASE_URL } from 'util/requests';
import './styles.css';

const Painel = () => {

  const [usuario, setProduct] = useState<Usuario>();
    useEffect(() => {
        axios.get(BASE_URL + "/users/acenelio")
            .then(response => {
                setProduct(response.data);
            });
    }, []);



  return (
    <div className="row painel-container">
      <div className="col-sm-12 col-md-4 col-lg-3 painel-imagem">
        <img
          src={usuario?.avatar_url}
          alt={usuario?.name}
        />
      </div>
      <div className="col-sm-12 col-md-8 col-lg-9 ">
        <div className="painel-content">
          <h4>Informações</h4>
          <p>Perfil: <span>{usuario?.url}</span></p>
          <p>Seguidores: {usuario?.followers}</p>
          <p>Localidade:{usuario?.location}</p>
          <p>Nome: {usuario?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Painel;
