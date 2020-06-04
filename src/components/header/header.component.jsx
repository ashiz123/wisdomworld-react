import React, {Component } from 'react';
import './header.styles.css';
import NavbarComponent from '../navbar/navbar.component';
import Login from '../login/login.component';
import {connect} from 'react-redux';
import {loginForm} from '../../redux/loginForm/loginForm.actions';
import {createStructuredSelector} from 'reselect';
import {selectToggleLoginForm} from '../../redux/loginForm/loginForm.selector';



 const mapDispatchedToProps = dispatch => 
 ({
  toggleLogin : (isLoginFormOpen) => dispatch(loginForm(isLoginFormOpen))
 })

//  const mapStateToProps = state => ({
//        isLoginFormOpen :  state.LoginFormOpen.toggleLoginForm
//  })

const mapStateToProps = createStructuredSelector({
    isLoginFormOpen : selectToggleLoginForm,
 

})
 



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
   
     this.props.toggleLogin(this.props.isLoginFormOpen);
    // this.setState((prevState) => {
    //   return {isLoginOpen: !prevState.isLoginOpen}
    // })
    
 }

 



  
render() {
 
  return (
    <>
      <NavbarComponent toggleNavbar = {this.toggleNavbar} toggleLogin={this.toggleLogin} isNavOpen = {this.state.isNavOpen}  currentUser= {this.props.currentUser}/>
      <Login isLoginOpen = {this.props.isLoginFormOpen} toggleLogin={this.toggleLogin} currentUser={this.props.currentUser} />
      
      {/* <Register toggleLogin={this.toggleLogin} /> */}
    </>
  );
  }
}

export default connect(mapStateToProps, mapDispatchedToProps)(Header);