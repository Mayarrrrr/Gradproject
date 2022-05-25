import Qt from "./Qt";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Test = () => {
    var f=0; 
    const {title}= useParams();
    const [qts, setQts] = useState([
        {  
            title: 'Psychological self-test for anger',
            id: 1,
            q:['q1 anger','q2 anger','q3 anger','q4 anger'] 
        },
        { 
            title: 'Psychological self-test for anxiety', 
            id: 2, q:['q1 anxiety',  'q2 anxiety','q3 anxiety','q4 anxiety']
        },
        { 
            title: 'Psychological self-test for depression',  
            id: 3 , 
            q:['q1 depression',  'q2 depression','q3 depression','q4 depression']
        },
        { 
            title: 'Psychological self-test for self-efficacy',  
            id: 4 , 
            q:['q1 self', 'q2 self','q3 self','q4 self']}
      ])   

    return ( 
                <div>
                  <div> 
                    <center><h1>Psychological self-test for {title}</h1></center> <br />
                    <center><h3>Do you tend to feel not okay? Take the {title} test.</h3></center> <br />
                    <font color="grey" size="5px"> <center>For many disorders affecting your wellbeing, taking a critical look at your own mental state <br />can put you on course towards feeling better. Using our online self-test you can find out for <br /> yourself whether you’re exhibiting signs of depression and whether you need psychological help.</center></font>
                  </div> <br />
                  <div>
                    
                    <div style={{marginLeft: '220px', padding: '40px'}}>

                   

                      <ol>
                      <li style={{color: 'black', fontFamily: '"Lucida Console"'} } > q1 <br /> <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

                          <label className="form-check-label" htmlFor="inlineRadio2" style={{color: 'grey'}}>
                               not at all right now </label> &nbsp; &nbsp; &nbsp; 
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q1" onClick={f=1}/>
                          </div> &nbsp; 

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q1"onClick={f=2}/>
                          </div> &nbsp; 

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q1"onClick={f=3}/>
                          </div> &nbsp; 

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"  name="q1" onClick={f=4}/> &nbsp; &nbsp; &nbsp; 
                          </div> <label className="form-check-label" htmlFor="inlineRadio2" style={{color: 'grey'}}>nearly always</label> &nbsp; 
                </li> <br/> <br/>
                      </ol>

                    </div> <center>
                      <form action="" method="get">
                        <input type="text" name="depr" id="result" style={{visibility: 'hidden'}} size={1} />
                        <Link to={'/alltests'}> 
                        <button type="submit" className="btn btn-outline-warning" style={{fontFamily: '"Lucida Console"'}} >Evaluation</button></Link> </form></center> <br /> <br />
                        
                    </div>
                </div>
              );
            }
          
export default Test;