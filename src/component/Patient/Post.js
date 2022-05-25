import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Post = () => {
    const [show, setShow] = useState(false);
    return ( 
        <div>
            <div>
            <FloatingLabel controlId="floatingTextarea2" label="Write your post here"className="mb-3" style={{width:'60%'}}>
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
            </FloatingLabel>
            <Form.Group controlId="formFile" className="mb-3" style={{width:'20%'}}>
                 <Form.Control type="file" accept="image/*"/>
            </Form.Group>
            <Button variant="dark" style={{float:'right', width:'10%', marginRight:'40%'}} onClick={() => setShow(true)} >Post</Button>
            <br/> <br/>
            </div>
            <div>
                
            <Alert show={show} variant="success" style={{width:'33%'}} onClose={() => setShow(false)} dismissible>
                 
                 <p> Your post is pending until the admin accepts it! <br/> Thanks for your time</p>
                 <hr />
                 <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Okay!
          </Button>
                </div>
            </Alert> 
            </div>
        </div>
     );
}
 
export default Post;