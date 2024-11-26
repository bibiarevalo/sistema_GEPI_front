import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Importando o Link do react-router-dom

const Gerenciamento = () => {
    const [epis, setEpis] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);

    const fetchEpis = async () => {
        try {
            const response = await axios.get("/api/epis");
            setEpis(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Erro ao buscar EPIs:", error);
        }
    };

    const fetchFuncionarios = async () => {
        try {
            const response = await axios.get("/api/funcionarios");
            setFuncionarios(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Erro ao buscar Funcionários:", error);
        }
    };

    useEffect(() => {
        fetchEpis();
        fetchFuncionarios();
    }, []);

    return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", height: "100vh", margin: 0 }}>
            <header
                style={{
                    backgroundColor: "#f5f5f5",
                    padding: "10px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <div style={{ width: "40px", height: "40px", backgroundColor: "#007f5f", borderRadius: "50%" }}></div>
                <div>
                    <Link to="/" style={navButtonStyle}>Home</Link> {/* Usando Link para redirecionamento */}
                    <Link to="/Gerenciamento" style={navButtonStyle}>Funcionários</Link>
                    <button to="/ajuda" style={navButtonStyle}>Ajuda</button> 
                </div>
            </header>

            <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
                <div style={sectionStyle}>
                    <h2>Gerenciamento de EPIs</h2>
                    <Link to="/cadastroEpi">
                        <button style={addButtonStyle}>
                            Adicionar novo EPI
                        </button>
                    </Link>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {epis.length > 0 ? (
                            epis.map((epi) => (
                                <li key={epi.id} style={cardStyle}>
                                    <span>{epi.nome}</span>
                                    <Link to={`/edicaoEpi/${epi.id}`}>
                                        <button style={editButtonStyle}>Editar</button>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>Nenhum EPI encontrado</li>
                        )}
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2>Gerenciamento de Funcionários</h2>
                    <Link to="/">
                        <button style={addButtonStyle}>
                            Adicionar novo Funcionário
                        </button>
                    </Link>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {funcionarios.length > 0 ? (
                            funcionarios.map((funcionario) => (
                                <li key={funcionario.id} style={cardStyle}>
                                    <span>{funcionario.nome}</span>
                                    <Link to={`/edicao/${funcionario.id}`}>
                                        <button style={editButtonStyle}>Editar</button>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>Nenhum Funcionário encontrado</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const navButtonStyle = {
    backgroundColor: "#007f5f",
    color: "white",
    border: "none",
    padding: "10px 15px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

const sectionStyle = {
    width: "45%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const addButtonStyle = {
    backgroundColor: "#007f5f",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
};

const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
};

const editButtonStyle = {
    backgroundColor: "#007f5f",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
};

export default Gerenciamento;
