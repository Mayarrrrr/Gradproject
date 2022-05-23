import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import My from '../img/my.png'
import { useRef } from "react";
import { Link} from 'react-router-dom';

const Sign = () => {
    const nameRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();
        const nameInput = nameRef.current.value;
        console.log(nameInput);
      } 

    return (
        <div style={{backgroundColor: '#1977f5'}} >
           <div>
            <Form style={{ display: 'inline-block', marginTop: 100}} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={nameRef}/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remmber me" />
                </Form.Group>
                <Link to={'/Home'}>
                <Button variant="dark" type="submit">
                    Login
                </Button> </Link>
            </Form>
        <img src={My} style={{float: "left", margin: 30, height: 500,width: 800 }}></img>
        </div>
        </div>
      );
}
 
export default Sign;