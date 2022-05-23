import './editProf.css';
import Pic from '../img/avatar.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';


const EditProf = () => {
    return ( 
                <div className="container">
                  <NavBar />
                  <div className="main-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                              <img src={Pic} alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                              <div className="mt-3">
                                <h4>Abdallah Yasser</h4>
                              <form action="">
                                <br/> 
                                 <Form.Group controlId="formFile" className="mb-3" >
                                    <Form.Control type="file" accept="image/*" />
                                 </Form.Group>
                                 <Button variant="danger" type='submit'> Upload </Button> 
                              </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" defaultValue="Abdallah Yasser" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" defaultValue="abdallah.yasser@gmail.com" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" defaultValue="25" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Gender</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                              <input type="radio" name="gender" defaultValue="male" checked /> Male <br/>
                              <input type="radio" name="gender" defaultValue="female" /> Female
                              </div>
                            </div>
                           
                            <div className="row">
                              <div className="col-sm-3" />
                              <div className="col-sm-9 text-secondary">
                              <Link to={'/Prof'}>
                                <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          
   
 
export default EditProf;