import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; 

const Cadastro = () => {
  
    const [cadastrarFuncionario, setCadastrarFuncionario] = useState([]);

    const cadastrarFuncionarioHandler = async (e) => {
        e.preventDefault();

        const nome = e.target.nome.value;
        const matricula = e.target.matricula.value;
        const email = e.target.email.value;

        if (!nome || !matricula || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const jsonData = { nome, matricula, email };

        const url = 'http://localhost:8000/funcionarios/cadastrar';

        try {
            const resposta = await axios.post(url, jsonData);
            console.log(resposta);

            if (resposta.status === 201) {
                alert('Funcionário cadastrado com sucesso!');
            } else {
                alert('Erro ao cadastrar o funcionário.');
            }

            setCadastrarFuncionario(resposta.data);
        } catch (error) {
            console.error('Erro ao cadastrar funcionário:', error);
            alert('Erro ao cadastrar o funcionário, tente novamente.');
        }
    };

    return (
        <div className="form-container">
            <h1>Cadastro de Funcionário</h1>

            <form onSubmit={cadastrarFuncionarioHandler}>
                <div className="form-group">
                    <label htmlFor="matricula">Matrícula:</label>
                    <input type="text" id="matricula" name="matricula" required />
                </div>

                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <button type="submit">Cadastrar Funcionário</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
