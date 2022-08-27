import { Form, Input } from 'antd';
import React from 'react';

const {TextArea} = Input

function PersonalInfo() {

    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <Form.Item name='nomecompleto' label='Nome Completo' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                
                <div className='col-md-3'>
                    <Form.Item name='email' label='Email' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className='col-md-3'>
                    <Form.Item name='nacionalidade' label='Nacionalidade' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className='col-md-2'>
                    <Form.Item name='estadocivil' label='Estado Civil' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>


                <div className='col-md-1'>
                    <Form.Item name='idade' label='Idade' rules={[{required:true}]}>
                        <Input style={{width:'70%' }} type="numeric" maxLength={2} />
                    </Form.Item>
                </div>

                <div className='col-md-3'>
                    <Form.Item name='datanascimento' label='Data de nascimento (acrescentar o "/")' rules={[{required:true}]}>
                        <Input style={{width:'50%'}} maxLength={10} />
                    </Form.Item>
                </div>

                <div className='col-md-5'>
                    <Form.Item name='endereco' label='Endereço' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                
                <div className='col-md-3'>
                    <Form.Item name='numero' label='Número de telefone' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Form.Item name='linkedin' label='Linkedin' >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='col-md-4'>
                        <Form.Item name='github' label='Github' >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='col-md-4'>
                        <Form.Item name='portfolio' label=' Portfólio' >
                            <Input />
                        </Form.Item>
                    </div>

                </div>               

                <div className='col-md-12'>
                    <Form.Item name='objetivo' label='Objetivo' rules={[{required:true}]}>
                        <TextArea style={{height: 80}}/>
                    </Form.Item>
                </div>

                <div className='col-md-12'>
                    <Form.Item name='perfilprofissional' label='Perfil Profissional'>
                        <TextArea style={{height: 100}} />
                    </Form.Item>
                </div>
               
            </div>
        </div>
    );
}

export default PersonalInfo;