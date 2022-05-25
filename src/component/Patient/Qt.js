import { useParams } from "react-router-dom";

const Qt = (props) => {
    const qtts = props.qt;   //bta5od b3d al props al asm al 2deto ll var hnak
    //const {title}= useParams();
    const t = props.tle;
    console.log({qtts});
    

    return ( 
        <div >
            
            { qtts.filter((z) => qtts.title === {t}).map ((z) => (
                <div key={z.id}> 
                <li style={{color: 'black', fontFamily: '"Lucida Console"'} } > {z.title} <br /> <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                          <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineRadio2" style={{color: 'grey'}}>not at all right now</label> &nbsp; &nbsp; &nbsp; 
                            <input className="form-check-input" type="radio"  />
                          </div> &nbsp; 
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" />
                          </div> &nbsp; 
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" />
                          </div> &nbsp; 
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"  /> &nbsp; &nbsp; &nbsp; 
                            <label className="form-check-label" htmlFor="inlineRadio2" style={{color: 'grey'}}>nearly always</label>
                          </div> &nbsp; 
                </li>
                </div>
             ) )  }  
            
            

        </div>
     );
}
 
export default Qt;