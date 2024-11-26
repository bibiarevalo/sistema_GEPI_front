const RegistroTransacao = () => {

    const [registrarTr, setRegistrarTr] = useState({
        funcionario_matricula: '',
        data: '',
        epi_id: '',
       
    });

    const cadastrarEpiHandler = async (e) => {
        e.preventDefault();

        const { funcionario_matricula,data, epi_id } = registrarTr;

        if (!funcionario_matricula || !data || !epi_id ) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const jsonData = { funcionario_matricula, data, epi_id };

        const url = `http://localhost:6969/epis/cadastrar`;

        try {
            const resposta = await axios.post(url, jsonData);
            console.log(resposta);

            
            if (resposta.status === 201) {
                alert('Epi cadastrada com sucesso!');
                setCadastrarEpi({ funcionario_matricula: '',data: '', epi_id: ''});
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
        setRegistrarTr((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    return(
        <div className="form-container">
            <h1>Registrar Transação de Epi</h1>

            <form onSubmit={cadastrarEpiHandler}>
                <div className="form-group">
                    <label htmlFor="id">funcionario Id:</label>
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
                    <label htmlFor="nome">ID EPI:</label>
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
                    <label htmlFor="tipo">data:</label>
                    <input 
                        type="text" 
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
    )

}
export default RegistroTransacao