import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './navbar.styles.css';
import {logoutUser} from '../../redux/user/user.actions'
import {Link} from 'react-router-dom';
import {Spinner} from 'reactstrap';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser, selectIsLoggedIn} from '../../redux/user/user.selector';
import storage from 'redux-persist/lib/storage';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   Container,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   Input
} from 'reactstrap';



const mapStateToProps = createStructuredSelector({
  loadingLogin: selectIsLoggedIn,
  
})

const mapDispatchToProps = dispatch => ({
  removeUser : user => dispatch(logoutUser(user))
})


const NavbarComponent = ({toggleNavbar, toggleLogin, isNavOpen, currentUser, removeUser, loadingLogin }) =>
{



 function logoutUser()
{
 
 removeUser(currentUser); 
 
 
}










    return(
        <>
        <Navbar color="primary" light  expand="md">
          <Container>
            <NavbarBrand href="/home" className="mr-auto" >Wisdom World</NavbarBrand>
            <NavbarToggler color="dark" className="mr-2" onClick= {toggleNavbar}/>


            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar className="mr-5" >
             
                <NavItem>
                  <NavLink href="/tags"  >Tags</NavLink>
                </NavItem>
               
                <NavItem style={{marginLeft:30}}>
                  <Input placeholder="Search" />
                </NavItem>
                </Nav>

              <Nav className="ml-auto" navbar>
              <NavItem style={{marginLeft:30}}>
                  <NavLink href="/create_post">Create Post </NavLink>
                </NavItem>
                
                    

                    <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {
                  loadingLogin ? <Spinner /> :
              (Object.entries(currentUser).length === 0)  ? <span>Login</span> : <span>{currentUser.name}</span>
                }
              </DropdownToggle>
              <DropdownMenu right>
                 
                <DropdownItem  onClick =  {currentUser &&(Object.entries(currentUser).length === 0)  ? toggleLogin : logoutUser}>
                {currentUser &&
                (Object.entries(currentUser).length === 0)  ? <span>Login</span> : <span>Logout</span>}
                </DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem>
                <Link to="/profile" >Profile</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                    
               </Nav>
               </Collapse>
          </Container>
          </Navbar>
        </>
    )
   
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);