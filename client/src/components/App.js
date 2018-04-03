
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch,  Route, BrowserRouter } from 'react-router-dom';
//import HomePage from './HomePage';
import Header from './Header';
import Dropdown  from './Dropdown';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.






class App extends React.Component {
  

  render() {
    //const activeStyle = { color: 'blue' };
    return (
      <div>
        
        <Header/>
         <Dropdown/>
        
        {/*<BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        </BrowserRouter> 
         <HomePage/>
*/}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};


export default App;
