import React, { Component } from 'react';
import ItemPageContainer from '../containers/index'
class HomePage extends Component {
  
  render() {
    
    return (
      <div className="HomePage">
        <ItemPageContainer/>  
        <a href='/user'>chuyen sang user</a>        
      </div>
    )
  }
}

export default HomePage;
