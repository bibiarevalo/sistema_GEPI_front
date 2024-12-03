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
    <div style={styles.homeContainer}>
    <h1 style={styles.homeTitle}>GEPI</h1>

    {data ? (
      <div>
        <h2>Dados da API:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    ) : (
      <p></p>
    )}

    <div style={styles.profilesContainer}>
      <div style={styles.profile}>
        <h3>Repositor</h3>
        <Link to="/loginRepositor">
          <button
            style={styles.profileButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.profileButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.profileButton.backgroundColor}
          >
            Ir para perfil Repositor
          </button>
        </Link>
      </div>

      <div style={styles.profile}>
        <h3>Gerência</h3>
        <Link to="/LoginGerente">
          <button
            style={styles.profileButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.profileButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.profileButton.backgroundColor}
          >
            Ir para perfil Gerência
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

const styles = {
  homeContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  homeTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  profilesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  profile: {
    textAlign: 'center',
  },
  profileButton: {
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  profileButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Home;