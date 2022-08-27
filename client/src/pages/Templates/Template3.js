import React from 'react';
import '../../resources/templates.css'
import {FaCircle} from 'react-icons/fa'


function Template3() {

    const user = JSON.parse(localStorage.getItem('curriculo-user'))
    return (
          
        <div className='template3-parent'>
            {!user.nomecompleto && (<h2>Construa seu currículo no perfil</h2>)}
            <div className='top d-flex flex-column'>
                <h1>{user.nomecompleto.toUpperCase()} </h1>
                <div>
                    {user.email != "" &&(<p>{user.datanascimento} - {user.idade} anos</p>)}
                    <p>{user.endereco}</p>
                    <p>{user.numero}</p>
                    <p> </p>
                    {user.email != "" &&(<p>Email: {user.email}</p>)}
                    {user.linkedin != "" &&(<p>Linkedin: {user.linkedin}</p>)}
                    {user.github != "" &&(<p>Github: {user.github}</p>)}
                    {user.portfolio != "" &&(<p>Portfólio: {user.portfolio}</p>)}
                </div>
            </div>

            <div className='objective mt-4'>
                {user.perfilprofissional && (<h3>Perfil Profissional</h3>)}
                {user.perfilprofissional && (<div className='divider mt-1 my-2'></div>)}

                <p>{user.perfilprofissional}</p>
            </div>

            <div className='objective mt-4'>
                {user.objetivo && (<h3>Objetivo</h3>)}
                {user.objetivo && (<div className='divider mt-1 my-2'></div>)}

                <p>{user.objetivo}</p>
            </div>

            <div className='education mt-4'>
            {user.educacao.length > 0 && (<h3>Formação Acadêmica</h3>)}
            {user.educacao.length > 0 && (<div className='divider mt-1 my-2'></div>)}
                {user.educacao.map((educacao) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: '100%' }}>Graduação em <b>{educacao.qualificacao}</b> - {educacao.instituicao} - 
                    {educacao.periodo  &&(" "+educacao.periodo+'º período - ')}
                        {educacao.tempoeducacao}</h6>
                        {/* <p> - {educacao.instituicao} - {educacao.periodo}° período</p> */}
                    </div>
                })}
            </div>

            <div className='expirience mt-5'>
            {user.experiencia.length > 0 && (<h3>Experiência</h3>)}
            {user.experiencia.length > 0 && (<div className='divider mt-1 my-2'></div>)}
               
                {user.experiencia.map((exp) => {
                    return <div className='d-flex flex-column mt-2'>
                        <h6 style={{ width: '100%' }}><b>{exp.cargo} - {exp.empresa} </b></h6>
                        <h7 className='mt-1' style={{ }}>{exp.tempoexperiencia} </h7>

                        <div className='d-flex align-items-center'>                        
                            {exp.comentario1  &&(<FaCircle className='circle'/>)}
                            {exp.comentario1  &&(<p className='comments'>{exp.comentario1}</p>)}
                        </div>
                        <div className='d-flex align-items-center'>                                
                            {exp.comentario2  &&(<FaCircle className='circle'/>)}
                            {exp.comentario2  &&(<p className='comments'>{exp.comentario2}</p>)}
                        </div>
                        <div className='d-flex align-items-center'>                        
                            {exp.comentario3  &&(<FaCircle className='circle'/>)}
                            {exp.comentario3  &&(<p className='comments'>{exp.comentario3}</p>)}
                        </div>
                        
                    </div>
                })}
            </div>

            <div className='projects mt-5'>
            {user.projetos.length > 0 && (<h3>Projetos</h3>)}
            {user.projetos.length > 0 && (<div className='divider mt-1 my-2'></div>)}
                
                {user.projetos.map((projeto) => {
                    return <div className='d-flex align-items-center mt-2'>                       
                        <p className='mx-1'><b>{projeto.titulo}: </b>{projeto.descricao} </p>
                    </div>
                })}
            </div>

            <div className='idiomas mt-5'>
            {user.idiomas.length > 0 && (<h3>Idiomas</h3>)}
            {user.idiomas.length > 0 && (<div className='divider mt-1 my-2'></div>)}
                {user.idiomas.map((idioma) => {
                    return (
                        <div className='d-flex align-items-center'>
                            <p>
                                {idioma.lingua} {idioma.nivelliguagem}
                            </p>
                        </div>   
                    )     
                })}
            </div>

            <div className='skills mt-4'>
            {user.skills.length > 0 && (<h3>Cursos, Competências ou Qualificações</h3>)}
            {user.skills.length > 0 && (<div className='divider mt-1 my-2'></div>)}
                {user.skills.map((skill) => {
                    return (
                        <div className='d-flex align-items-center'>
                            <p>
                                <b>{skill.tecnologia}</b> conhecimento nível {skill.nivel}
                            </p>
                        </div>   
                    )     
                })}
            </div>

        </div>

    );
}

export default Template3;
