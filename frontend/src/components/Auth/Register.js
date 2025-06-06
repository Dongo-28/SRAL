import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client',
  });

  const { name, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      onAuth(res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      </div>
      <div>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      </div>
      <div>
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      </div>
      <div>
        <select name="role" value={role} onChange={onChange} required>
          <option value="client">Client</option>
          <option value="host">Host</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;