import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css'
import axios from 'axios'

function Register() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/registro", values);
      setLoading(false);
      message.success('Registrado com sucesso')
      navigate('/login')
    } catch (error) {
      setLoading(false);
      message.error('Falha no registro')
    }
  };

  useEffect(() => {
    if (localStorage.getItem("curriculo-user")) {
      navigate("/home")
    }
  })

  return (
    <div className='auth-parent' style={{ backgroundImage: `url('./black3.jpg')` }}>
      {loading && (<Spin size='large' />)}
      <Form layout='vertical' onFinish={onFinish}>
        <h1>Registro</h1>
        <hr />
        <p>Nome do usuário</p>
        <Form.Item name='usuario'>
          <Input placeholder='Nome' />
        </Form.Item>

        <p>Senha</p>
        <Form.Item name='senha'>
          <Input type='password' />
        </Form.Item>

        <p>Confirmar a senha</p>
        <Form.Item name='csenha'>
          <Input type='password' />
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between'>
          <Link className='linkLogin' to='/login'>Login</Link>
          <Button type='primary' htmlType='submit'>Registrar</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;