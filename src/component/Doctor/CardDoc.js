import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function RenderingArrayOfObjects(){
  const data=[
    {image:"./imgs/download (3).jfif", title: "Can anxiety damage your nerves?", text:"While anety and stress. can play into neuropathy, they can't actually damage your nerves. This means that stress is not a root  cause of neuropathy Even if you're incredibly stressed every day for", link:"read more", p:"1 Day ago", footer:""},
    {image: "./imgs/download (4).jfif", title: "Eating disorders awarness", text:"Eating disorders are illnesses that severely affect the eating behaviors, thoughts, ond emotions of an individual", link:"read more" , p:"3 Day ago ", footer:""},
    {image: "./imgs/download.webp", title: "4 Tips for helping socially anxious teens", text:"Parenting teens is no mean task because part of the challenges you may foce in the process is  social anxiety disorder (SAD), When a teen is Suffering fom social anxiety" , link:"read more" , p:"2 Day ago", footer:""}
  ]
  const tableRows=data.map(
      (element)=>{
          return( 
             
              <Col sm={4} xs={12} >
            <Card>
                  <Card.Img variant="top" src={element.image}/>
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <Card.Text className='crt'>
                        {element.text}
                      </Card.Text>
                      <Card.Link> {element.link}</Card.Link>
                      <p><small className="text-muted"> {element.p}</small></p> 
                    <Card.Footer>
                      <small className="text-muted">{element.footer}</small>
                    </Card.Footer>
    
                    </Card.Body>
              </Card>
              </Col>
            
          )
      }
  )
  return(
      <div>
        <Container>
          <Row>   
            {tableRows}  
          </Row>   
          </Container>
      </div>
  )
}
function CardDoc() {
  return (
    <div className="Appi">
      
        <RenderingArrayOfObjects />
         
      </div>
  );
}
  
export default CardDoc;