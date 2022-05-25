import { useState } from "react";
import { Link } from "react-router-dom";
const ItemList = () => {
    const [cards, setCards] = useState([
        { title: 'Keeping your mental health HEALTHY', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life', 
          id: 1 , sr:require('../../img/unnamed.gif')},
        { title: 'What is Mental Health?', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life',
          id: 2, sr:require('../../img/mental.gif')},
        { title: 'Self-care is not selfish!', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life', 
          id: 3 , sr: require('../../img/giphy.gif') },
        { title: 'Why is mental health important?', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life',
          id: 4 , sr: require ('../../img/prio.png') }
        ])  
    return (  
        
      <div>     
        
        <div style={{marginLeft: '300px', padding: '20px', marginRight: '200px'}}> 
        { cards.map((crd) => (
            <div>
                <hr style={{width: '810px'}} />
          <h3 key={crd.id}> <strong>{crd.title}</strong></h3> 
          <img src="dr1.jpg" className="rounded-circle" height="200px" width="200px" style={{float: 'left'}} /> <br />
           <p><font color="grey"> &nbsp; &nbsp; &nbsp;Psychological psychotherapist <br /> &nbsp; &nbsp; &nbsp;
              {crd.body}</font> &nbsp; &nbsp; &nbsp; &nbsp; </p>
           <p><strong> &nbsp; &nbsp; &nbsp;SPECIALISED IN</strong></p>
           <p style={{color: '#7ebc89'}}> &nbsp; &nbsp; &nbsp;  DEPRESSION </p> 
            <img src="st.png" width="150px" height="40px" />
            <button type="button" className="btn btn-success" style={{marginLeft: '150px'}}> <Link to={'/Chat'}>Start counselling </Link></button><p /> 
            
        </div>
        )) }
         </div>
       
      </div>
       
    );
}
 
export default ItemList;
