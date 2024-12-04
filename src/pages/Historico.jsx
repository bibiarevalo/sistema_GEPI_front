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
                <h1>Histórico</h1>
            </header>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome do Funcionário</th>
                            <th>Matrícula</th>
                            <th>Nome do EPI</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historico.map((registro, index) => (
                            <tr key={index}>
                                {/* <td>{registro.Funcionario.nome}</td> */}
                                <td>{registro.Funcionario.matricula}</td>
                                <td>{registro.Epi.nome}</td>
                                <td>{registro.data}</td>
                                <td>{registro.acao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    tableContainer: {
        width: '80%',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    th: {
        padding: '15px 20px', 
        backgroundColor: '#343a40',
        color: '#fff',
        borderBottom: '2px solid #dee2e6',
    },
    td: {
        padding: '15px 10px', 
        borderBottom: '1px solid #dee2e6',
    },
};

export default Historico;