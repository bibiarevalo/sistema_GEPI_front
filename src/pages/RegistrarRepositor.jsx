import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrarRepositor = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6969/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message || 'Erro ao registrar');
    } catch (error) {
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Cadastro de Repositor</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Nome do Repositor:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite o nome do repositor"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite o e-mail"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite a senha"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => navigate('/loginRepositor')}
              style={styles.buttonSecondary}
            >
              Voltar
            </button>
            <button type="submit" style={styles.buttonPrimary}>
              Registrar
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
    padding: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "8px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    gap: "10px",
  },
  buttonPrimary: {
    backgroundColor: "#B97D7D",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "12px 15px",
    cursor: "pointer",
    fontSize: "14px",
    flex: 1,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    color: "#B97D7D",
    border: "1px solid #B97D7D",
    borderRadius: "4px",
    padding: "12px 15px",
    cursor: "pointer",
    fontSize: "14px",
    flex: 1,
  },
};

export default RegistrarRepositor;
