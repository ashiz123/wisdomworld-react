import React from 'react';
import {connect} from 'react-redux';
import './navbar.styles.css';
import {logoutUser} from '../../redux/user/user.actions'
import {Link} from 'react-router-dom';
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


// const mapStateToProps = ({register: {currentUser}}) =>
// {
//   return {
//     currentUser: currentUser
//   }
// }

const mapDispatchToProps = dispatch => ({
  removeUser : user => dispatch(logoutUser(user))
})


const NavbarComponent = ({toggleNavbar, toggleLogin, isNavOpen, currentUser, removeUser }) =>
{




 function logoutUser()
{
 removeUser(currentUser); 
}


// function loginUser()
// {
//   console.log('login user');
// }






    return(
        <>
        <Navbar color="primary" light  expand="md">
          <Container>
            <NavbarBrand href="/" className="mr-auto" >Wisdom World</NavbarBrand>
            <NavbarToggler color="dark" className="mr-2" onClick= {toggleNavbar}/>


            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar className="mr-5" >
                <NavItem>
                  <NavLink href="/tags"  >Tags</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/posts" >Posts</NavLink>
                </NavItem>
                <NavItem style={{marginLeft:30}}>
                  <Input placeholder="Search" />
                </NavItem>
                </Nav>

              <Nav className="ml-auto" navbar>
                    

                    <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              {(Object.entries(currentUser).length === 0)  ? <span>Login</span> : <span>{currentUser.name}</span>}
              </DropdownToggle>
              <DropdownMenu right>
                 
                <DropdownItem  onClick =  {(Object.entries(currentUser).length === 0)  ? toggleLogin : logoutUser}>
                {(Object.entries(currentUser).length === 0)  ? <span>Login</span> : <span>Logout</span>}
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

export default connect(null, mapDispatchToProps)(NavbarComponent);