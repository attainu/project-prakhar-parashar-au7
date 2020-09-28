import React from 'react';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import CreatePost from './Components/CreatePost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'






function App() {
  return (
    <Router>
      

        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Home" component = {Home}/>
        <Route exact path="/createPost" component={CreatePost} />
    
    </Router>

  );
}

export default App;
