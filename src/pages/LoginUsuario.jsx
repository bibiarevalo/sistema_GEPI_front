import React, { useState } from 'react';


const LoginForm = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('http://localhost:6969/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Login realizado com sucesso!');
      } else {
        alert(result.error || 'Erro no login.');
      }
    } catch (error) {
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <div className="form-container">
    <h1>Login</h1>

    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
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
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
</div>

  );
};

export default LoginForm;
