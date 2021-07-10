// import logo from './logo.svg';
import { Route, Switch } from 'react-router';
import './App.css';
import { Layout } from './Components/Layout';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { SignUp } from './Components/SignUp';

function App() {
  return (
   <main>
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/signup" component={SignUp}/>
       <Route exact path="/dashboard" component={Layout}/>
       <Route exact path="/notifications" component={Layout}/>
       <Route exact path="/userprofile" component={Layout}/>
       <Route exact path="/analytics" component={Layout}/>
       {/* <Route exact path="/home" component={Home}/> */}
     </Switch>
     {/* <Layout/> */}
   </main>
  );
}

export default App;
