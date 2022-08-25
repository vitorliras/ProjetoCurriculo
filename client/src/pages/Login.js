import React, {useEffect, useState} from 'react';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css'
import axios from 'axios'

function Login() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("api/user/login", values);
      message.success("Logado com sucesso");
      localStorage.setItem("curriculo-user", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("falha no login");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('curriculo-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className='auth-parent' style={{ backgroundImage: `url('./black3.jpg')` }} >
      {loading && (<Spin size='large'/>)}
      <Form layout='vertical' onFinish={onFinish}>
        <h1>Login</h1>

        <hr style={{color:'white'}}/>

        <p>Nome do usuário</p>
        <Form.Item name='usuario'>
          <Input placeholder='Nome' />
        </Form.Item>

        <p>Senha</p>
        <Form.Item name='senha'>
          <Input type='password' />
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between'>
          <Link className='linkLogin' style={{fontWeight:'bold'}} to='/registro'>Crie um registro</Link>
          <Button type='primary' htmlType='submit'>Entrar</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
