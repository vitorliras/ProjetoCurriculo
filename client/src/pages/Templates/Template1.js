import React from 'react';
import '../../resources/templates.css'


function Template1() {

  const user = JSON.parse(localStorage.getItem('curriculo-user'))
  return (

    <div className='template1-parent'>

      <div className='top d-flex justify-content-between'>
        <h1>{user.primeiroNome.toUpperCase()} {user.ultimoNome.toUpperCase()} </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.endereco}</p>
          <p>{user.numero}</p>
        </div>
      </div>

      <div className='divider mt-4'></div>

      <div className='objective mt-4'>
        <h3>Objetivo</h3>
        <hr />
        <p>{user.objetivo}</p>
      </div>

      <div className='divider mt-4'></div>

      <div className='education mt-5'>
        <h3>Educação</h3>
        <hr />
        {user.educacao.map((educacao) => {
          return <div className='d-flex align-items-center'>
            <h6 style={{ width: 110 }}><b>{educacao.tempoeducacao}: </b></h6>
            <p>{educacao.qualificacao} - {educacao.instituicao} - {educacao.periodo}° período</p>
          </div>
        })}
      </div>

      <div className='expirience mt-5'>
        <h3>Experiência</h3>
        <hr />
        {user.experiencia.map((exp) => {
          return <div className='d-flex align-items-center'>
            <h6 style={{ width: 132 }}><b>{exp.tempoexperiencia}: </b></h6>
            <p>{exp.cargo} - {exp.empresa} - {exp.local}</p>
          </div>
        })}
      </div>

      <div className='projetos mt-5'>
        <h3>Projetos</h3>
        <hr />
        {user.projetos.map((projeto) => {
          return <div className='d-flex flex-column mt-2'>
            <h6 style={{ width: 140 }}><b>{projeto.titulo} </b></h6>
            <p>{projeto.descricao} </p>
          </div>
        })}
      </div>

      <div className='projetos mt-5'>
        <h3>Competências</h3>
        <hr />
        {user.skills.map((skill) => {
          return <div >
            {skill.tecnologia}
          </div>
        })}
      </div>

    </div>

  );
}

export default Template1;
