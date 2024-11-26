import React, { useEffect, useState } from "react";
import axios from "axios";

const Gerenciamento = () => {
    const [epis, setEpis] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {

        fetchEpis();
        fetchFuncionarios();
    }, []);

    const fetchEpis = async () => {
        try {
            const response = await axios.get("/api/epis");
            setEpis(response.data);
        } catch (error) {
            console.error("Erro ao buscar EPIs:", error);
        }
    };

    const fetchFuncionarios = async () => {
        try {
            const response = await axios.get("/api/funcionarios");
            setFuncionarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar Funcionários:", error);
        }
    };

    const adicionarEpi = () => {

        console.log("Adicionar novo EPI");
    };

    const adicionarFuncionario = () => {

        console.log("Adicionar novo Funcionário");
    };

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "45%", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                    <h2>Gerenciamento de EPIs</h2>
                    <button onClick={adicionarEpi} style={{ backgroundColor: "#a05252", color: "#fff", border: "none", padding: "10px", borderRadius: "5px" }}>
                        Adicionar novo EPI
                    </button>
                    <ul>
                        {epis.map((epi) => (
                            <li key={epi.id} style={{ margin: "10px 0" }}>
                                {epi.nome}
                                <button style={{ marginLeft: "10px", backgroundColor: "#a05252", color: "#fff", border: "none", padding: "5px", borderRadius: "5px" }}>
                                    Editar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ width: "45%", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                    <h2>Gerenciamento de Funcionários</h2>
                    <button onClick={adicionarFuncionario} style={{ backgroundColor: "#a05252", color: "#fff", border: "none", padding: "10px", borderRadius: "5px" }}>
                        Adicionar novo Funcionário
                    </button>
                    <ul>
                        {funcionarios.map((funcionario) => (
                            <li key={funcionario.id} style={{ margin: "10px 0" }}>
                                {funcionario.nome}
                                <button style={{ marginLeft: "10px", backgroundColor: "#a05252", color: "#fff", border: "none", padding: "5px", borderRadius: "5px" }}>
                                    Editar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Gerenciamento;
