import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gerencia = () => {
  const [formData, setFormData] = useState({
    nome: "",
    nomeUsuario: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api/gerencia", formData);// fazer api
      navigate("/gerenciamento"); 
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar. Tente novamente.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Gerência</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Coloque seu nome completo"
              value={formData.nome}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome do Usuário</label>
            <input
              type="text"
              name="nomeUsuario"
              placeholder="Crie um nome de usuário"
              value={formData.nomeUsuario}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Coloque uma senha segura"
              value={formData.senha}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => navigate(-1)}
              style={styles.buttonSecondary}
            >
              Voltar
            </button>
            <button type="submit" style={styles.buttonPrimary}>
              Próximo
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              style={styles.buttonSecondary}
            >
             
              Já tenho registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#B97D7D",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    gap: "10px",
  },
  buttonPrimary: {
    backgroundColor: "#B97D7D",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    flex: 1,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    color: "#B97D7D",
    border: "1px solid #B97D7D",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    flex: 1,
  },
};

export default Gerencia; 
