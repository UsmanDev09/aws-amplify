import RegisterAccount from './components/RegisterAccount';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

import './App.css';
import './tailwind.generated.css';


Amplify.configure(awsconfig)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route path = "/signup" component = {RegisterAccount}/>
            <Route path = "/signin" component = {SignIn}/>
            <Route path = "/profile" component = {Profile}/>
         </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App
