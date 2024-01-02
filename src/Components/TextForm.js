import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function TextForm() {
    const [text,settext] = useState("Prepared by kausik,Enter Text here");
      
    const ChangeHandeler = (event)=>{
        settext(event.target.value)
    }
  return (
    <div>
      <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
          as="textarea"
          value={text?text:"Prepared by kausik:"}
          style={{ height: '300px',marginTop:'10px', width:'800px', margin:'auto' }}
          onChange={ChangeHandeler}
        />
      </FloatingLabel>
      <div style={{margin:'auto',marginTop:'5px', backgroundColor:'#F0FFFF', padding:'5px'}}>

      <button className='btn btn-primary'onClick={()=>{
        let newText = text.toUpperCase();
        settext(newText);
      }}>Convert Uppercase</button>
      
      </div>
      
    </div>
  )
}
