import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1624/1624014.png"
                    alt="Ícone de Gerenciamento"
                    style={{ width: "40px", height: "40px" }}
                />
                <div>
                    <Link to="/home" style={navButtonStyle}>Home</Link> 
                    <Link to="/registro" style={navButtonStyle}>Registro</Link>
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
                    <br />
                    <Link to="/excluirEpi">
                        <button style={addButtonStyle}>
                            excluir
                        </button>
                    </Link>
                    <br />
                    <Link to="/edicaoEpi">
                        <button style={addButtonStyle}>
                            Editar 
                        </button>
                    </Link>
                  
                </div>

                <div style={sectionStyle}>
                    <h2>Gerenciamento de Funcionários</h2>
                    <Link to="/cadastroFuncionario">
                        <button style={addButtonStyle}>
                            Adicionar novo Funcionário
                        </button>
                    </Link>
                    <br />

                    <Link to="/excluir">
                        <button style={addButtonStyle}>
                            excluir
                        </button>
                    </Link>
                    <br />
                    <Link to="/edicao">
                        <button style={addButtonStyle}>
                            Editar 
                        </button>
                    </Link>
                 
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
    padding: "50px",
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
    padding: "200px",
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
