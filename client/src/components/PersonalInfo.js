import { Form, Input } from 'antd';
import React from 'react';

const {TextArea} = Input

function PersonalInfo() {

    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <Form.Item name='primeiroNome' label='Primeiro Nome' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='ultimoNome' label='Último Nome' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='email' label='Email' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className='col-md-4'>
                    <Form.Item name='numero' label='Número de telefone' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='portfolio' label='Portfólio' rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className='col-md-12'>
                    <Form.Item name='objetivo' label='Objetivo' rules={[{required:true}]}>
                        <TextArea />
                    </Form.Item>
                </div>

                <div className='col-md-12'>
                    <Form.Item name='endereco' label='Endereço' rules={[{required:true}]}>
                        <TextArea />
                    </Form.Item>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;