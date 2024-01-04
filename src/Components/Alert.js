import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Alert1 = (props) => {
    const [show, setShow] = useState(true);
    
    //  let mystyle = {
    //     .Heading
    //  }

  return (
    <>
    <Alert show={show} variant="warning">
        <Alert>{props.alert}</Alert>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button style={{float: "right", margin:"5px"}} onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  )
}

export default Alert1
