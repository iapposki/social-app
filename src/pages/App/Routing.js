import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';


// BrowserRouter changes the route without refreshing the page

const Routes = () => {
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>

        </Switch>
    </Router>
}

export default Routes;