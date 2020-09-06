import React from 'react';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from './SinglePost/SinglePost';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <React.Fragment>
      <Header></Header>

         <Router>
              <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>

                    <Route exact path='/post/:key'>
                        <SinglePost></SinglePost>
                    </Route>

                    <Route path='*'>
                      <NotFound></NotFound>
                    </Route>
              </Switch>
          </Router>
    </React.Fragment>
  )   
}

export default App;
