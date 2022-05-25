import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
function RenderingArrayOfObjects(){
    const datum=[
      {image:"./imgs/320x400 (1).jpeg", title: "Amanda wants to book an appointment for fevruary 14th at 8 am", text:"anxiety"},
      {image: "./imgs/320x400 (2).jpeg", title: "Nour wants to book an appointment for fevruary 14th at 12 am", text:"depression"},
      {image: "./imgs/happy+woman+counselor+near+me.jpg", title: "jessica wants to book an appointment for fevruary 16th at 6 pm", text:"harrasment"},
      {image: "./imgs/twenty20_51cdead0-7448-40d2-bf5c-b94b3fdd8e02.jpg", title: "mariem wants to book an appointment for fevruary 15th at 8 am", text:"harrasment"}
    ]
    
  const tableRows=datum.map(
    (element)=>{
        return( 
           
            <div className='nava'  >
                  
            <div className="book" >
            
              <Figure className="imgd" >
                <Row>
                  <Col xs={3}>
                    <img src={element.image} style={{width:'100px'}}/>
                  </Col>
                  <Col xs={9}>
                    <Figure.Caption className="captionn">
                    {element.title}
                    </Figure.Caption>
                    
                    <div >
                      <Button className='btn' variant="primary">Accept</Button>{' '}
                      <Button className='btm' variant="primary">Reject</Button>{' '}
                    </div>
                  </Col>
                </Row>
              </Figure>
              
            </div>
            
            </div>
       )
    }
     )

        return(
            <div>
           {tableRows}  
                  
            </div>
    )
        } 
      function Book() {
        return (
          <div className="App">
            <div className='nav' style={{background:'#f0f8ff' }} >
            <p className='appoint' style={{color:"#004F98" , fontWeight:"bold", marginLeft:"40px", fontSize:"30px" }}>Appointment booking requests</p>
              <RenderingArrayOfObjects />
              <button className="sub" > View all requests </button>
              </div>
            </div>
        );
      }
        
    export default  Book;