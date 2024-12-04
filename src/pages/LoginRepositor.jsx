import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRepositor = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('http://localhost:6969/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Login realizado com sucesso!');
        navigate('/gerenciamento');
      } else {
        alert(result.error || 'Erro no login do repositor.');
      }
    } catch (error) {
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login de Repositor</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
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
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={() => navigate(-1)} style={styles.buttonSecondary}>
              Voltar
            </button>
            <button type="submit" style={styles.buttonPrimary}>
              Login
            </button>
          </div>
          <div style={styles.linkGroup}>
            <button
              type="button"
              onClick={() => navigate('/registrarRepositor')}
              style={styles.buttonLink}
            >
              Não tem login? Cadastre-se
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
    backgroundColor: "#007f5f",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    padding: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#010401",
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
    color: "#010401",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #007f5f",
    borderRadius: "4px",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    gap: "10px",
  },
  linkGroup: {
    marginTop: "15px",
  },
  buttonPrimary: {
    backgroundColor: "#007f5f",
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
    color: "#007f5f",
    border: "1px solid #007f5f",
    borderRadius: "4px",
    padding: "12px 15px",
    cursor: "pointer",
    fontSize: "14px",
    flex: 1,
  },
  buttonLink: {
    backgroundColor: "transparent",
    color: "#007f5f",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  },
};

export default LoginRepositor;
