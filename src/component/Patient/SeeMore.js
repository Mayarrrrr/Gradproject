import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";

const SeeMore = () => {
    const {title, body}= useParams();
    
    return ( 
        
        <div>
            <NavBar />
        <h2>MOREEEE about {title} </h2>
        <Card>
            <Card.Img variant="top" />
                 <Card.Body >
                    <Card.Text style={{marginLeft: 50}}>
                        {body} 
                        <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod accusantium saepe harum illum ad magni enim, reiciendis adipisci nisi doloremque, dolorum inventore soluta fugit suscipit expedita facere hic quaerat?
                        <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis minima iste voluptates, reiciendis provident aliquam quos corrupti! Ullam sequi quaerat quibusdam quia dolore. Minus, quisquam libero. Excepturi, cumque aut.
                        <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum reiciendis sunt quibusdam veniam ut optio illum ipsam itaque autem inventore voluptatem impedit fugit iste dolor, modi eius quidem repudiandae.
                     </Card.Text>
                 </Card.Body>
         </Card>
  <br />
    </div>
     );
}
 
export default SeeMore;