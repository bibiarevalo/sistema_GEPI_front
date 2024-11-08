import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = ({ funcionarioId }) => {
    const [cadastrarFuncionario, setCadastrarFuncionario] = useState({
        nome: '',
        matricula: '',
        email: ''
    });

    const cadastrarFuncionarioHandler = async (e) => {
        e.preventDefault();

        const { nome, matricula, email } = cadastrarFuncionario;

        if (!nome || !matricula || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const jsonData = { nome, matricula, email };

        const url = `http://localhost:6969/funcionarios/cadastrar/${funcionarioId}`;

        try {
            const resposta = await axios.post(url, jsonData);
            console.log(resposta);

            
            if (resposta.status === 201) {
                alert('Funcionário cadastrado com sucesso!');
                setCadastrarFuncionario({ nome: '', matricula: '', email: '' });
            } else {
                alert('Erro ao cadastrar o funcionário.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar funcionário:', error);
            alert('Erro ao cadastrar o funcionário, tente novamente.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCadastrarFuncionario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <h1>Cadastro de Funcionário</h1>

            <form onSubmit={cadastrarFuncionarioHandler}>
                <div className="form-group">
                    <label htmlFor="matricula">Matrícula:</label>
                    <input 
                        type="text" 
                        id="matricula" 
                        name="matricula" 
                        value={cadastrarFuncionario.matricula}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={cadastrarFuncionario.nome}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={cadastrarFuncionario.email}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Cadastrar Funcionário</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
