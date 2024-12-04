import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Historico = () => {
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistorico = async () => {
            try {
                const response = await axios.get('http://localhost:6969/funcionarios/historico');
                setHistorico(response.data);
            } catch (err) {
                setError('Erro ao carregar o histórico.');
            } finally {
                setLoading(false);
            }
        };

        fetchHistorico();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Histórico</h1>
            </header>
            <div style={styles.cardContainer}>
                {historico.map((registro, index) => (
                    <div key={index} style={styles.card}>
                        <p><strong>Nome do Funcionário:</strong> {registro.Funcionario.nome}</p>
                        <p><strong>Matrícula:</strong> {registro.Funcionario.matricula}</p>
                        <p><strong>Nome do EPI:</strong> {registro.Epi.nome}</p>
                        <p><strong>Data:</strong> {registro.data}</p>
                        <p><strong>Ação:</strong> {registro.acao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f8f9fa',
    },
    header: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#007f5f',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '800px',
    },
    card: {
        backgroundColor: '#007f5f',
        color: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
};

export default Historico;
