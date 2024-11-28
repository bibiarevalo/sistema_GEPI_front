import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')// fazer api da home
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home</h1>

      {data ? (
        <div>
          <h2>Dados da API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}

      <div style={{ marginTop: '20px' }}>
        <div>
          <h3>Repositor</h3>
          <Link to="/Repositor">
            <button style={{ padding: '10px 20px', margin: '10px' }}>Ir para perfil Repositor</button>
          </Link>
        </div>

        <div>
          <h3>Gerência</h3>
          <Link to="/Gerencia">
            <button style={{ padding: '10px 20px', margin: '10px' }}>Ir para Gerência</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;