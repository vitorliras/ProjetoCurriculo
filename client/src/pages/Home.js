import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutDefault from '../components/LayoutDefault';
import templateImg from "../resources/templates/template1.png"
import template2Img from "../resources/templates/template2.png"
import template3Img from "../resources/templates/template3.png"

function Home() {
  const navigate = useNavigate();
  const templates =[
    {
      title:'Currículo 1',
      msg:'(Em desenvolvimento)',
      image: templateImg,
    },
    {
      title:'Currículo 2',
      msg:'(Em desenvolvimento)',
      image: template2Img,
    },
    {
      title:'Currículo 3',
      msg:'(Recomendável)',
      image: template3Img,
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
                      <p>{template.msg}</p>
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
