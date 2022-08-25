import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutDefault from '../components/LayoutDefault';
import templateImg from "../resources/templates/template1.png"
import template2Img from "../resources/templates/template2.png"

function Home() {
  const navigate = useNavigate();
  const templates =[
    {
      title:'Currículo 1',
      image: templateImg,
    },
    {
      title:'Currículo 2',
      image: template2Img,
    }
  ]
  return (
    <LayoutDefault>
        <div className='row home'>
            {templates.map((template, index) =>{
              return <div className='col-md-4'>
                <div className='template'>
                    <img src={template.image} alt=""/>
                    <div className='text'>
                      <p>{template.title}</p>
                      <button onClick={()=>navigate(`/templates/${index+1}`)}>Click</button>
                    </div>
                </div> 
              </div>

            })}
        </div>

    </LayoutDefault>
  );
}

export default Home;
