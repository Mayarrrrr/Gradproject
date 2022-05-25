import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Figure from 'react-bootstrap/Figure'
import { Col, Row , Container} from 'react-bootstrap'
import CardDoc from "./CardDoc";
import Book from "./Book";


    const Homedoc = () =>{
       return (

<div className="na">
    <h1 className="article">
Your articles
    </h1>
   

<div className="figure" style={{width: '100%', paddingBottom: '30px'}} >
  <Container>
    <Figure>
      <Row>
        <Col sm={6} xs={12}>
          <img src={"./imgs/Depression_GettyImages-947804676.webp"} style={{width:'100%', borderRadius:'40px'}}/> 
        </Col>
        <Col sm={6} xs={12}>
          <Figure.Caption className="caption">
            <h2 className="til"> Most read article</h2>

            <h1 className="symp"> Symptoms of Depression </h1>

            <h4 className="capt">
          Most of us feel sad, lonely, or depressed at times. It's a normal <br></br>
        reaction to loss, lite's struggles, or an injured self-esteem. But when <br></br>
        these feelings become overwhelming. cause physical symptoms, <br></br>
        and last for long periods of time, they can keep you from leading a
        normal active life . <br></br>
        Recognizing the symptoms is key. Unfortunately, about half the <br></br>
                people who have depression never get it diganosed or treated
            </h4>
           
            <p className="art"> 2 hours ago</p> 
           
          </Figure.Caption>
        </Col>
      </Row>
    </Figure>
  </Container>
</div>

<CardDoc/>

<Book/>

<p className="feedbk" >Feedbacks</p>


<Carousel fade  >
  <Carousel.Item>
   
    <img
      className="d-block w-100"
      src="./imgs/istockphoto-1217216727-170667a.jpg" />

    <Carousel.Caption>
    <img src={"./imgs/images (9).jfif"} style={{width: '170px',height: '160px','border-radius': '50%',
              float: 'left','margin-bottom': '80px','margin-right': '40px'}}/>
      <h3 className="car1">Jess Santiago</h3>
      <p  className="car2">View profile</p>
      <h4 className="car4">I have been with Kristy over 3years.SHE is AMAZING... She doesn't judge you,  She will do all that she can to help u. I come to her with 
       anxiety,grief,self esteem depression childhood abuse  and many other things.. 
       </h4>
    </Carousel.Caption>
  </Carousel.Item>


   <Carousel.Item>
    <img
      className="d-block w-100"
      src="./imgs/istockphoto-1217216727-170667a.jpg"
      alt="Second slide" />

    <Carousel.Caption>
    <img src={"./imgs/images (7).jfif"} style={{width: '170px',height: '160px','border-radius': '50%',
              float: 'left','margin-bottom': '80px','margin-right': '40px'}}/>
      <h3 className="car1">Anthony Matthew</h3>
      <p className="car2">View Profile</p>
      <h4 className="car4"> I haven’t been paired with Isatu long, but she is always thorough with her responses and explanations.
       From day one she has been incredibly helpful with sifting</h4>
    </Carousel.Caption>
 
  </Carousel.Item>

  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./imgs/istockphoto-1217216727-170667a.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <img src={"./imgs/images (8).jfif"} style={{width: '170px',height: '160px','border-radius': '50%',
              float: 'left','margin-bottom': '80px','margin-right': '40px'}}/>
      <h3 className="car1" >Emily Steven</h3>
      <p className="car2">View profile</p>
      <h4 className="car4"> Nullam done dolor justo elit pharetra accumsan eget neque.  Et fusce maecenas sagittis
enim.<br></br> Non mattis nec purus mi facilisi</h4>
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>

</div> 




)
    }
    
    export default  Homedoc;








    