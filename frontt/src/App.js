import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin';
import  Register from './components/register';
import Home from './components/home';
import PostArticle from './components/postarticle';
import { BrowserRouter as Router,Route,Switch, Link } from 'react-router-dom'
import Profile from './components/viewprofile';
import Myaccount from './components/myaccount';
import PostDelete from './components/postDelete';
import postUpdate from './components/postUpdate';
function App() {

  return (
    <div className="App">
      {() => { if (localStorage.getItem('token') == null){
        (<Link to="/signup">Sign up</Link>)
        (<Link to="/signin">Sign in</Link>)
      }}}
      <Router>
        <Switch>
        <Route path="/signup" exact component={Register}/>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile/:id" component={Profile}/>
        <Route path="/postarticle" component={PostArticle}/>
        <Route path="/myaccount" component={Myaccount} />
        <Route path="/articledelete/:id" component={PostDelete}/>
        <Route path="/articleupdate/:id" component={postUpdate}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
