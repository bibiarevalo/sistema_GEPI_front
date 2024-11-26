import axios from 'axios';
import { useState } from 'react';

const ExclusaoEpi = () => {
    const [tipo, setTipo] = useState('');
    const [id, setId] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [status, setStatus] = useState('');

    const removerEpiHandler = async (e) => {
        e.preventDefault();

        const url = `http://localhost:6969/epis/remover/${id}`;

        try {
            const resposta = await axios.delete(url);

            if (resposta.status === 200) {
                setStatus('Epi removida com sucesso!');
                setTipo('');
                setId('');
                setQuantidade('')
            } else {
                setStatus('Erro ao remover Epi.');
            }
        } catch (error) {
            console.error("Erro ao remover Epi:", error);
            setStatus('Erro ao remover Epi, tente novamente.');
        }
    };

    return (
        <div className="form-container">
            <h1>Remover Epi</h1>
            <form onSubmit={removerEpiHandler}>


                <div className="form-group">
                    <label htmlFor="id">id:</label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">tipo:</label>
                    <input
                        type="text"
                        name="tipo"
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">quantidade:</label>
                    <input
                        type="text"
                        name="quantidade"
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
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

export default ExclusaoEpi;
