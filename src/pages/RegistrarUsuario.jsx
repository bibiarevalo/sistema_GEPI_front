import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

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
    <div className="form-container">
    <h1>Cadastro de usuário</h1>

    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <button type="submit">Registrar</button>
        </div>
    </form>
</div>

  );
};

export default RegisterForm;
