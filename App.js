import React from 'react';
import Mail from './Mail';
import {  BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from './Login';
import Check from './Check';


const App=()=>{
    return(
     <> 
<Router>
     <Switch>
    <Route exact path='/' component={Login}/>
   <Route path='/check' component={Check}/>
    <Route path='/mail' component={Mail}></Route>
    
    
    </Switch>
</Router>

    </>
    );

}
export default App;