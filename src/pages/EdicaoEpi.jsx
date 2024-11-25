import axios from 'axios';
import { useState, useEffect } from 'react';

const EditarEpi = ({ epiId }) => {
    const [epi, setEpi] = useState({
        nome: '',
        matricula: 0,
        email: ''
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
        const email = e.target.email.value;


        const jsonData = {
            nome,
            email,
            matricula: Number(epi.matricula)
        };

        console.log(jsonData)

        const url = `http://localhost:6969/epis/editar/${jsonData.matricula}`;

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
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        defaultValue={epi.nome}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="matricula">Matrícula:</label>


                    <input type="number"
                        onChange={(e) => epi.matricula = e.target.value}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={epi.email}
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
