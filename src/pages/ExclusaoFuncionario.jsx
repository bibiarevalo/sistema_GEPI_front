import axios from 'axios';
import { useState } from 'react';

const RemoverFuncionario = () => {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [status, setStatus] = useState('');

    const removerFuncionarioHandler = async (e) => {
        e.preventDefault();

        const url = `http://localhost:6969/funcionarios/remover/${matricula}`;

        try {
            const resposta = await axios.delete(url);

            if (resposta.status === 200) {
                setStatus('Funcionário removido com sucesso!');
                setNome('');
                setMatricula('');
            } else {
                setStatus('Erro ao remover o funcionário.');
            }
        } catch (error) {
            console.error("Erro ao remover funcionário:", error);
            setStatus('Erro ao remover o funcionário, tente novamente.');
        }
    };

    return (
        <div className="form-container">
            <h1>Remover Funcionário</h1>
            <form onSubmit={removerFuncionarioHandler}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="matricula">Matrícula:</label>
                    <input
                        type="text"
                        name="matricula"
                        id="matricula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Remover Funcionário</button>
                </div>
            </form>

            {status && <p>{status}</p>}
        </div>
    );
};

export default RemoverFuncionario;
