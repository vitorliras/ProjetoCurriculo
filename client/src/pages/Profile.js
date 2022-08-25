import { Button, Form, Tabs, message, Spin } from 'antd';
import React, { useState } from 'react';
import ExperienceProjects from '../components/ExperienceProjects';
import LayoutDefault from '../components/LayoutDefault';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import axios from 'axios'

const { TabPane } = Tabs;

function Profile() {

    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('curriculo-user'))

    const onFinish = async (values) => {
        setLoading(true);
        try {
          const result = await axios.post("api/user/atualizar", {...values, _id : user._id});
          localStorage.setItem('curriculo-user', JSON.stringify(result.data))
          setLoading(false);
          message.success('Perfil atualizado com sucesso')
        } catch (error) {
          setLoading(false);
          message.error('Falha no registro')
        }
      };

    return (
        <LayoutDefault>
            {loading && (<Spin size='large' />)}
            <div className='update-profile'>
                
                <Form layout='vertical' onFinish={(onFinish)} initialValues={user}>
                    <div className='titulo-perfil'>
                        <h4>Atualizando Perfil</h4>
                       
                        <Button htmlType='submit'>Atualizar</Button>
                    </div>
                    <hr/>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Informação pessoal" key="1">
                            <PersonalInfo />
                        </TabPane>
                        <TabPane tab="Skills / Educação" key="2">
                            <SkillsEducation />
                        </TabPane>
                        <TabPane tab="Experiências / projetos" key="3">
                            <ExperienceProjects />
                        </TabPane>
                    </Tabs>

                </Form>
            </div>
        </LayoutDefault >
    );
}

export default Profile;