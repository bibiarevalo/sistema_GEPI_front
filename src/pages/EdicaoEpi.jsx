import axios from 'axios';
import { useState, useEffect } from 'react';

const EditarEpi = ({ epiId }) => {
    const [epi, setEpi] = useState({
        nome: '',
        tipo: '',
        quantidade: '',
        id: ''
    });


    useEffect(() => {
        const carregarEpi = async () => {
            try {
                const resposta = await axios.get(`http://localhost:6969/epis/buscar/${epiId}`);
                setEpi(resposta.data);
            } catch (error) {
                console.error('Erro ao carregar dados da Epi:', error);
                alert('Erro ao carregar os dados da Epi.');
            }
        };

        if (epiId) {
            carregarEpi();
        }
    }, [epiId]);


    const editarEpiHandler = async (e) => {
        e.preventDefault();

        const nome = e.target.nome.value;
        const tipo = e.target.tipo.value;
        const quantidade = e.target.quantidade.value


        const jsonData = {
            nome,
            tipo,
            quantidade,
            id: Number(epi.id)
        };

        console.log(jsonData)

        const url = `http://localhost:6969/epis/editar/${jsonData.id}`;

        try {
            const resposta = await axios.put(url, jsonData);
            if (resposta.status === 200) {
                alert('Epi atualizada com sucesso!');
                setEpi(resposta.data);
            } else {
                alert('Erro ao editar Epi.');
            }
        } catch (error) {
            console.error('Erro ao editar Epi:', error);
            alert('Erro ao editar a Epi, tente novamente.');
        }
    };

    return (
        <div className="form-container">
            <h1>Editar Epi</h1>

            <form onSubmit={editarEpiHandler}>
                <div className="form-group">
                    <label htmlFor="nome">Nome do Epi:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        defaultValue={epi.nome}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="id">numero de Identificação do Epi:</label>    
                    <input type="number" id='id'
                        onChange={(e) => epi.id = e.target.value}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">tipo:</label>
                    <input
                        type="text"
                        name="tipo"
                        id="tipo"
                        defaultValue={epi.tipo}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">quantidade:</label>
                    <input
                        type="text"
                        name="quantidade"
                        id="quantidade"
                        defaultValue={epi.quantidade}
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Atualizar Epi</button>
                </div>
            </form>
        </div>
    );
};

export default EditarEpi;
