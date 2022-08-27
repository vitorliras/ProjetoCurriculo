import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useNavigate, useParams } from 'react-router-dom';
import LayoutDefault from '../../components/LayoutDefault';
import { Button } from 'antd';
import {FaPrint,  FaArrowLeft} from 'react-icons/fa'
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';



function Templates() {
  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const params = useParams()
  const gettemplate = () => {
    switch (params.id) {
      case '1': {
        return <Template1 />
      }
      case '2': {
        return <Template2 />
      }
      case '3': {
        return <Template3 />
      }
    }
  }
  return (

    <LayoutDefault>
      <div className='d-flex justify-content-end my-5 mx-5'>

        <Button className="back-btn" onClick={()=>navigate('/home')}><FaArrowLeft/></Button>
        <Button className='mx-5' onClick={handlePrint}><FaPrint/></Button>

      </div>
      <div ref={componentRef}>{gettemplate()}</div>

    </LayoutDefault>


  );
}

export default Templates;
