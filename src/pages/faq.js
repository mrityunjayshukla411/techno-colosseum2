import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/faq.css";

export default function Faq(){
    return(
<Container fluid className="faq-body">
<div>
<h2 style={{textAlign: 'center'}}>Frequently Asked <div className="h2-color" style={{display: 'inline-block'}}> Questions </div></h2>
<br />
</div>
 <Row className="row">
     <Col>
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" htmlFor="chck1"><h4>Question</h4></label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2" />
        <label className="tab-label" htmlFor="chck2"><h4>Question</h4></label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </Col>
  <Col>
  <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck3" />
        <label className="tab-label" htmlFor="chck3"><h4>Question</h4></label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4" />
        <label className="tab-label" htmlFor="chck4"><h4>Question</h4></label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </Col>
</Row>
</Container>
  )
}