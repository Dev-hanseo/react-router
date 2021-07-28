import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import { Profiler } from 'react';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
      <Switch>
        <Route path={['/',"/home"]} exact component={Home}/> 
        <Route path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
