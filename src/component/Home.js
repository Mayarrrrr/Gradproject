import { useState } from "react";
import Cardd from "./Cardd";
import Carsl from "./Cars";
import Post from "./Post";
import NavBar from "./NavBar";

const Home = () => {
  const [cards, setCards] = useState([
  { title: 'Keeping your mental health HEALTHY', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life', 
    id: 1 , sr:require('../img/unnamed.gif')},
  { title: 'What is Mental Health?', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life',
    id: 2, sr:require('../img/mental.gif')},
  { title: 'Self-care is not selfish!', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life', 
    id: 3 , sr: require('../img/giphy.gif') },
  { title: 'Why is mental health important?', body: 'Mental health includes our emotional, psychological,  and social well-being. It affects how we think, feel,  and act. It also helps determine how we handle stress,  relate to others, and make choices.  Mental health is important at every stage of life',
    id: 4 , sr: require ('../img/prio.png') }
  ])  
  
  const handleDelete = () => {
    setCards("newBlogs");
  } 

  return (
      <div >
        <NavBar />
        <Post/> 
        <br/> <br/><br/>

       <Carsl/>
        <Cardd crd={cards} title="All Cards"/>

      </div> 
     
    );
  }
   
  export default Home;