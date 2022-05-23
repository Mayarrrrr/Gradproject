import { Link } from 'react-router-dom';
import './prof.css';
import Pic from '../img/avatar.png';
import NavBar from './NavBar';
const Prof = () => {
    return ( 
      
           <div className="container">
             <NavBar />
                  <div className="main-body">
                    <div className="row gutters-sm">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                              <img src={Pic} alt="Admin" className="rounded-circle" width={150} />
                              <div className="mt-3">
                                <h4>Abdallah Yasser </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div className="col-md-8">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                Abdallah Yasser
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                abdallah.yasser@gmail.com
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                25
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Gender </h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                Male
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-12">
                                  <Link to={'/EditProf'}>
                                <a className="btn btn-info " target="" href="EditProf.js">Edit</a>
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
         
export default Prof;