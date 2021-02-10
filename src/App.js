import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from "./pages/CreateAccount";
import Feed from './pages/Feed';
import Page from './pages/Page';

import './App.scss';
import { AuthProvider } from './AuthContext';

import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyC4R5ffJiOtriAkq1fBGajGAU7z6lcZgg0",
    authDomain: "niche-e2f93.firebaseapp.com",
    databaseURL: "https://niche-e2f93-default-rtdb.firebaseio.com",
    projectId: "niche-e2f93",
    storageBucket: "niche-e2f93.appspot.com",
    messagingSenderId: "266437560854",
    appId: "1:266437560854:web:167a19f720fc0cd1dc4337",
    measurementId: "G-02ZPSQT4WE"
};

firebase.initializeApp(config);

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/login' component={Login} />
                        <Route path='/createaccount' component={CreateAccount} />
                        <Route path='/feed' component={Feed} />
                        <Route path='/page' component={Page} />
                    </Switch>
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;