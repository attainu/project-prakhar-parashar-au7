import React from 'react';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import CreatePost from './Components/CreatePost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import {useDispatch} from 'react-redux'
import {userLoggingActionCreator} from '../src/redux/Actions/userActions.js'
import ProfileDetails from './Pages/EditProfile/editProfile';







function App() {


 const dispatch = useDispatch()
 if(localStorage.getItem("token")){ 
 const token = localStorage.getItem("token")
 const user = jwt.verify(token, 'secret')
 dispatch(userLoggingActionCreator(user))
 }
 

  return (
    <Router>
      

        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Home" component = {Home}/>
        <Route exact path="/createPost" component={CreatePost} />
        <Route exact path="/ProfileDetails" component = {ProfileDetails} />
    
    </Router>

  );
}

export default App;
