import React, {Component } from 'react';
import './header.styles.css';
import NavbarComponent from '../navbar/navbar.component';
import Login from '../login/login.component';


class Header extends Component{
  constructor()
  {
    super();
    this.state = {
      isNavOpen : false,
      isLoginOpen: false,
    }
  }

 toggleNavbar =() =>
 {
   this.setState((prevState) => {
     return {isNavOpen: !prevState.isNavOpen}
   })
 }


 toggleLogin =(e) =>
 {
 
    this.setState((prevState) => {
      return {isLoginOpen: !prevState.isLoginOpen}
    })
    
 }

 



  
render() {
  return (
    <>
      <NavbarComponent toggleNavbar = {this.toggleNavbar} toggleLogin={this.toggleLogin} isNavOpen = {this.state.isNavOpen} currentUser= {this.props.currentUser}/>
      <Login isLoginOpen = {this.state.isLoginOpen} toggleLogin={this.toggleLogin} />
      
    </>
  );
  }
}

export default Header;