import { useState } from "react";
import { Link } from "react-router-dom";
import Do from "../../img/do.jpg";
import NavBar from "./NavBar";

const AllTests = () => {
    const [types, setQts] = useState([
        { title: 'Psychological self-test for anger',  id: 1 },
        { title: 'Psychological self-test for anxiety',  id: 2},
        { title: 'Psychological self-test for depression',   id: 3 },
        { title: 'Psychological self-test for self-efficacy',   id: 4 }
      ]) 
    return ( 
        <div style={{marginLeft: 70}}>
            <NavBar />
            <div>
            <h3 style={{color: "#3914BB" , fontWeight:"bold"}}>Psychological self-tests as a guide to yourself </h3> <br />
            <h5 style={{color: "#3914BB", fontWeight:"bold", marginLeft: 12}}>Find out how you feel right now..</h5> <br />
            </div>
            
            <img src={Do} style={{float: "right", margin: 80}}></img>

            { types.map ((ty) => (
                <div style={{backgroundImage: 'linear-gradient(to bottom right, #E794B1, #EEECBB)', width: 500, height: 34, marginBottom: 15, borderRadius: 20, marginLeft: 40}}>
             <center> <Link to={`/types/${ty.title}`} style={{textDecoration: 'none', color: "black", opacity: 0.5, fontSize: 18}}> {ty.title}</Link> </center>
            
            </div>
            ))  }
         
        </div>
     );
}
 
export default AllTests;