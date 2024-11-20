import axios from 'axios';
import { useState, useEffect } from 'react';

const EditarFuncionario = ({ funcionarioId }) => {
    const [funcionario, setFuncionario] = useState({
        nome: '',
        matricula: 0,
        email: ''
    });


    useEffect(() => {
        const carregarFuncionario = async () => {
            try {
                const resposta = await axios.get(`http://localhost:6969/funcionarios/buscar/${funcionarioId}`);
                setFuncionario(resposta.data);
            } catch (error) {
                console.error('Erro ao carregar dados do funcionário:', error);
                alert('Erro ao carregar os dados do funcionário.');
            }
        };

        if (funcionarioId) {
            carregarFuncionario();
        }
    }, [funcionarioId]);


    const editarFuncionarioHandler = async (e) => {
        e.preventDefault();

        const nome = e.target.nome.value;
        const email = e.target.email.value;


        const jsonData = {
            nome,
            email,
            matricula: Number(funcionario.matricula)
        };

        console.log(jsonData)

        const url = `http://localhost:6969/funcionarios/editar/${jsonData.matricula}`;

        try {
            const resposta = await axios.put(url, jsonData);
            if (resposta.status === 200) {
                alert('Funcionário atualizado com sucesso!');
                setFuncionario(resposta.data);
            } else {
                alert('Erro ao editar o funcionário.');
            }
        } catch (error) {
            console.error('Erro ao editar funcionário:', error);
            alert('Erro ao editar o funcionário, tente novamente.');
        }
    };

    return (
        <div className="form-container">
            <h1>Editar Funcionário</h1>

            <form onSubmit={editarFuncionarioHandler}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        defaultValue={funcionario.nome}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="matricula">Matrícula:</label>


                    <input type="number"
                        onChange={(e) => funcionario.matricula = e.target.value}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={funcionario.email}
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Atualizar Funcionário</button>
                </div>
            </form>
        </div>
    );
};

export default EditarFuncionario;
