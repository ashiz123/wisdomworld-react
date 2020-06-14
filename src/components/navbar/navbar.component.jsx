import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './navbar.styles.css';
import {logoutUser} from '../../redux/user/user.actions'
import {Link} from 'react-router-dom';
import {Spinner} from 'reactstrap';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser, selectIsLoggedIn} from '../../redux/user/user.selector';
import storage from 'redux-persist/lib/storage';
import {filterPosts} from '../../redux/followUserPosts/filterPosts.component';
import {useHistory} from 'react-router-dom';
import {selectFilteredPosts} from '../../redux/followUserPosts/followUserPosts.selectors';
import Notifications from '../notifications/notifications.component';



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
   Dropdown,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   Input
} from 'reactstrap';



const mapStateToProps = createStructuredSelector({
  loadingLogin: selectIsLoggedIn,

  
})

const mapDispatchToProps = dispatch => ({
  removeUser : user => dispatch(logoutUser(user)),
  filteringPost:(filter, followUserPosts) => dispatch(filterPosts(filter, followUserPosts) )
})


const NavbarComponent = ({notifications, toggleNavbar, toggleLogin, isNavOpen, currentUser, removeUser, loadingLogin, followUserPosts, filteringPost }) =>
{

  const[filter, setFilter] = useState("");
  const history = useHistory();

  const [notificationDropdown, setnotificationDropdown] = useState(false);

  const toggle = () => setnotificationDropdown(prevState => !prevState);


 function logoutUser()
{
 
 removeUser(currentUser); 
 
 
 }


// useEffect(() =>
// {
//   if(filter !== "")
//   {
//     filteringPost(filter, followUserPosts);
//     // console.log(filteredPost);
//   }
 
//   // console.log(filteredPost);
// }, [filter])



// var filteredPost = followUserPosts.filter(
//   (post) => {
//     return post.title.indexOf(filter) !== -1;
//   }
// )

function filterPosts(e)
{
  if (e.key === "Enter" && !e.shiftKey) {
           
    e.preventDefault();
    filteringPost(filter, followUserPosts);
  
   
  }
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



              {/* Notifications menu start */}
              {
                notifications &&
               
                <NavItem>
                {/* <NavLink href="/notifications"  >Notifications</NavLink> */}
                <Dropdown isOpen={notificationDropdown} toggle={toggle}>
                  <DropdownToggle nav caret>
                    Notifications
                  </DropdownToggle>
                  <DropdownMenu
                    modifiers={{
                      setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: (data) => {
                          return {
                            ...data,
                            styles: {
                              ...data.styles,
                              overflow: 'auto',
                              maxHeight: '300px',
                              minWidth: '300px'
                            },
                          };
                        },
                      },
                    }}
                  >
                    <DropdownItem header>
                       <Notifications notifications = {notifications} />
                    </DropdownItem>
                   
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              }
               
                {/* Notification menu end */}
               
                <NavItem style={{marginLeft:30}}>
                  <Input placeholder="Search" name="search" onChange={e => setFilter(e.target.value)} value= {filter} onKeyPress = {filterPosts}/>
                </NavItem>
                </Nav>

              <Nav className="ml-auto" navbar>
              <NavItem style={{marginLeft:30}}>
                  <NavLink href="/add_post">Create Post </NavLink>
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