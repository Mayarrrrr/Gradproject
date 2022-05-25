import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cardd = (props) => {
     const cards = props.crd;
     const title = props.title;
     //const hand = props.handleDelete;
    // console.log(cards);
  
    return (
      <div >
        
        <h2 style={{marginTop: 40}}>{ title }</h2> <br/>
        { cards.map ((crd) => (
         <Card style={{ width: '18rem', display: 'inline-block', marginRight: 55 }} key={crd.id}>
         <Card.Img variant="top" src= {crd.sr.default} />
         <Card.Body style={{backgroundColor: '#71ABF8'}}>
           <Card.Title style={{color: 'white' , fontSize: 25, fontWeight: 'bold' }}>{ crd.title }</Card.Title>
           <Card.Text> {crd.body} </Card.Text>
           <Card.Link href={`/cards/${crd.title}/${crd.body}`}>See more</Card.Link>
         </Card.Body>
       </Card>

         /* <div  key={crd.id} >
            <h2>{ crd.title }</h2> 
            <p>Written by { crd.author }</p>
          </div> */
        ))  }
        
      </div>
    );
  }
  export default Cardd;