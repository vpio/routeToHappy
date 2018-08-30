import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Nav extends React.Component{

  changePage(){
    let path = `/happy`
    //this.props.history.push(path);
    console.log(this.props.hasOwnProperty)
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <link to="/happy"></link>
          </BrowserRouter>
      </div>
    )
  }
}

export default Nav;
