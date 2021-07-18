import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/faq.css";

export default function Faq(){
    return(
<Container fluid className="faq-body">
<div>
<h2 style={{paddingTop: '170px', textAlign: 'center'}}>Frequently Asked <div className="h2-color" style={{display: 'inline-block'}}> Questions </div></h2>
<br />
</div>
 <Row className="row">
     <Col>
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1" />
        <label class="tab-label" for="chck1"><h4>Question</h4></label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2" />
        <label class="tab-label" for="chck2"><h4>Question</h4></label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </Col>
  <Col>
  <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck3" />
        <label class="tab-label" for="chck3"><h4>Question</h4></label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck4" />
        <label class="tab-label" for="chck4"><h4>Question</h4></label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </Col>
</Row>
</Container>
  )
}