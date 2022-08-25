import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

import '../resources/layout.css'

function LayoutDefault(props) {

  const user = JSON.parse(localStorage.getItem('curriculo-user'))

  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/perfil">Perfil</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("curriculo-user");
          navigate("/login");
        }}
      >
        <span>Sair</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='layout' style={{ backgroundImage: `url('./black.jpg')` }}>
      <div className='header'>
        <img onClick={()=>navigate('/home')} style={{cursor: 'pointer'}} src='./cv.png'/>
        {/* <h1>TESTE CV</h1> */}
        <Dropdown className='btn-menu' overlay={menu} placement="bottomLeft">
          <Button  icon={<UserOutlined/>}>{user.usuario}</Button>
        </Dropdown>
      </div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  );
}

export default LayoutDefault;
