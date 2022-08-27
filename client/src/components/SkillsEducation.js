import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';

function SkillsEducation() {

    return (

        <div>
            <h5>Educação</h5>
            <Form.List name="educacao">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'qualificacao']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Qualificação" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'periodo']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Período" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'instituicao']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Institução" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'tempoeducacao']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Ano inicio/fim" />
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
                                Adicionar curso
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <h5>Idiomas</h5>
            <Form.List name="idiomas">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'lingua']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Idioma" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'nivelliguagem']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Nível do idioma" />
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
                                Adicionar idiomas
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <h5>Skills</h5>
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'tecnologia']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Tecnologia" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'nivel']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="Nível" />
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
                                Adicionar skills
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>


    );
}

export default SkillsEducation;