// import logo from './logo.svg';
import { Route, Switch } from 'react-router';
import './App.css';
import { Layout } from './Components/Layout';
// import { Login } from './Components/Login';

function App() {
  return (
   <main>
     {/* <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/home" component={Home}/>
     </Switch> */}
     <Layout/>
   </main>
  );
}

export default App;
