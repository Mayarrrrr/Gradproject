import './App.css';
import Home from './component/Patient/Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Test from './component/Patient/Test';
import SeeMore from './component/Patient/SeeMore';
import AllTests from './component/Patient/AllTests';
import Sign from './component/Sign';
import { Chatbot } from 'react-chatbot-kit';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Prof from './component/Patient/Prof';
import EditProf from './component/Patient/EditProf';
import Post from './component/Patient/Post';
import TherapistProfile from './component/Patient/TherapistProfile';
import LandingPage from './component/LandingPage';
import ItemList from './component/Patient/ItemList';
import DrList from './component/Patient/DrList';
import SignupForm from './component/Patient/SignupForm';
import SignupDoc from './component/Doctor/SignupDoc';
import Bngrb from './component/Bngrb';
import PatientLogin from './component/Patient/PatientLogin';
import Login from './component/Doctor/Login';
import Homedoc from './component/Doctor/Homedoc';
import Chat from './component/Patient/Chat';

function App() {
  return (
    <div>  
      
        <Router>
      <div >
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/HomeDoc">
            <Homedoc/>
          </Route>

          <Route exact path="/Bngrb">
            <Bngrb/>
          </Route>

          <Route exact path="/ItemList">
            <ItemList/>
          </Route>

          <Route exact path="/Plogin">
            <PatientLogin/>
          </Route>

          <Route exact path="/SignupPatient">
            <SignupForm/>
          </Route>

          <Route exact path="/SignupDoc">
            <SignupDoc/>
          </Route>

          <Route exact path="/LoginDoc">
            <Login/>
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

          <Route exact path="/Chat">
            <Chat/>
          </Route>

          <Route exact path="/cards/:title/:body" component={SeeMore}/>  
            
          
        </Switch>
    </div>
    
    </Router>
    </div>
  );
}

export default App;
