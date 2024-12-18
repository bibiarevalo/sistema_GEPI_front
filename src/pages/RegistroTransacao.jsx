import React, { useState } from 'react';
import axios from 'axios';

const RegistroTransacao = () => {
    const [registrarTr, setRegistrarTr] = useState({
        funcionario_matricula: '',
        data: '',
        epi_id: '',
        acao: '',
    });

    const registrarTransacaoEpiHandler = async (e) => {
        e.preventDefault();

        const { funcionario_matricula, data, epi_id, acao } = registrarTr;

        if (!funcionario_matricula || !data || !epi_id || !acao) {
            alert('Por favor, preencha todos os campos e selecione uma ação.');
            return;
        }

        const jsonData = { funcionario_matricula, data, epi_id, acao };

        const url = `http://localhost:6969/epis/gerenciamento`;

        try {
            const resposta = await axios.post(url, jsonData);
            console.log(resposta);

            if (resposta.status === 201) {
                alert('Registrado com sucesso!');
                setRegistrarTr({
                    funcionario_matricula: '',
                    data: '',
                    epi_id: '',
                    acao: '',
                });
            } else {
                alert('Erro ao registrar transação.');
            }
        } catch (error) {
            console.error('Erro ao registrar transação:', error);
            alert('Erro ao registrar transação de epi, tente novamente.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegistrarTr((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAcaoChange = (acao) => {
        setRegistrarTr((prevState) => ({
            ...prevState,
            acao,
        }));
    };

    return (
        <div className="form-container">
            <h1>Registrar Transação de EPI</h1>

            <h1 style={{color: '#010401'}}>Ação</h1>
            <div className="form-group">
                <button onClick={() => handleAcaoChange('Retirar')}>Retirar</button>
            </div>
            <div className="form-group">
                <button onClick={() => handleAcaoChange('Devolver')}>Devolver</button>
            </div>

            <form onSubmit={registrarTransacaoEpiHandler}>
                <div className="form-group">
                    <label htmlFor="funcionario_matricula">Funcionário Matrícula:</label>
                    <input
                        type="text"
                        id="funcionario_matricula"
                        name="funcionario_matricula"
                        value={registrarTr.funcionario_matricula}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="epi_id">ID EPI:</label>
                    <input
                        type="text"
                        id="epi_id"
                        name="epi_id"
                        value={registrarTr.epi_id}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Data:</label>
                    <input
                        type="date"
                        id="data"
                        name="data"
                        value={registrarTr.data}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Enviar</button>
                </div>
            </form>

            
        </div>
    );
};

export default RegistroTransacao;
