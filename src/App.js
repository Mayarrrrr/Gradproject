import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Test from './component/Test';
import SeeMore from './component/SeeMore';
import AllTests from './component/AllTests';
import Sign from './component/Sign';
import Land from './component/Land';
import { Chatbot } from 'react-chatbot-kit';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Prof from './component/Prof';
import EditProf from './component/EditProf';
import Post from './component/Post';
import TherapistProfile from './component/TherapistProfile';
import LandingPage from './component/LandingPage';
import ItemList from './component/ItemList';
import DrList from './component/DrList';
import SignupForm from './component/SignupForm';
import SignupDoc from './component/SignupDoc';
import Bngrb from './component/Bngrb';

function App() {
  return (
    <div>  
      
        <Router>
      <div >
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/Bngrb">
            <Bngrb/>
          </Route>

          <Route exact path="/ItemList">
            <ItemList/>
          </Route>

          <Route exact path="/SignupPatient">
            <SignupForm/>
          </Route>

          <Route exact path="/SignupDoc">
            <SignupDoc/>
          </Route>

          <Route exact path="/DrList">
            <DrList/>
          </Route>

          <Route exact path="/TherapistProfile">
            <TherapistProfile/>
          </Route>

          <Route exact path="/LandingPage">   
            <LandingPage/>
          </Route>

          <Route exact path="/types/:title">   
            <Test />
          </Route>

          <Route exact path="/sign">
            <Sign/> 
          </Route>

          <Route exact path="/prof">
            <Prof/>
          </Route>
          <Route exact path="/editprof">
            <EditProf/>
          </Route>
          
          <Route exact path="/alltests">
            <AllTests />
          </Route>

          <Route exact path="/post">
            <Post/>
          </Route>

          <Route exact path="/land">
            <Land />
          </Route>

          <Route exact path="/cards/:title/:body" component={SeeMore}/>  
            
          
        </Switch>
    </div>
    
    </Router>
    </div>
  );
}

export default App;
