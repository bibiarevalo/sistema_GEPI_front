import React, { useState } from 'react';
import axios from 'axios';

const CadastroEpi = () => {
    const [cadastrarEpi, setCadastrarEpi] = useState({
        nome: '',
        tipo: '',
        id: '',
        quantidade: ''
    });

    const cadastrarEpiHandler = async (e) => {
        e.preventDefault();

        const { nome,tipo, id, quantidade } = cadastrarEpi;

        if (!nome || !tipo || !id  || !quantidade) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const jsonData = { nome, tipo, id,  quantidade };

        const url = `http://localhost:6969/epis/cadastrar`;

        try {
            const resposta = await axios.post(url, jsonData);
            console.log(resposta);

            
            if (resposta.status === 201) {
                alert('Epi cadastrada com sucesso!');
                setCadastrarEpi({ nome: '',tipo: '', id: '', quantidade: ''});
            } else {
                alert('Erro ao cadastrar epi.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar epi:', error);
            alert('Erro ao cadastrar epi, tente novamente.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCadastrarEpi((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <h1>Cadastro de Epi</h1>

            <form onSubmit={cadastrarEpiHandler}>
                <div className="form-group">
                    <label htmlFor="id">Numero de Identificação:</label>
                    <input 
                        type="text" 
                        id="id" 
                        name="id" 
                        value={cadastrarEpi.id}
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
                        value={cadastrarEpi.nome}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">Tipo:</label>
                    <input 
                        type="text" 
                        id="tipo" 
                        name="tipo" 
                        value={cadastrarEpi.tipo}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input 
                        type="text" 
                        id="quantidade" 
                        name="quantidade" 
                        value={cadastrarEpi.quantidade}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Cadastrar EPI</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroEpi;
