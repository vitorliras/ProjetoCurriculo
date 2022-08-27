import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const {TextArea} = Input

function ExperienceProjects() {

    return (

        <div>
            <h5>Experiência</h5>
            <Form.List name="experiencia">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'empresa']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Empresa" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'cargo']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Cargo" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'local']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Local" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'tempoexperiencia']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Duração" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-12'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'comentario1']}
                                            rules={[{ required: false, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="comentário sobre sua experiência (opcional)" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-12'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'comentario2']}
                                            rules={[{ required: false, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="comentário sobre sua experiência (opcional)" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-11'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'comentario3']}
                                            rules={[{ required: false, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="comentário sobre sua experiência (opcional)" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-1'>
                                        <MinusCircleOutlined className='minuscircle' style={{ fontSize: 18, color: 'orangered' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Adicionar Experiência
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <h5>Projetos</h5>                        
            <Form.List name="projetos">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'titulo']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Título" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-5'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'descricao']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <TextArea placeholder="Descrição" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'tempoprojeto']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Tempo" />
                                        </Form.Item>
                                    </div>
                                    
                                    <div className='col-md-1'>
                                        <MinusCircleOutlined className='minuscircle' style={{ fontSize: 18, color: 'orangered' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Adicionar projeto
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>


    );
}

export default ExperienceProjects;