import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import fetchPosts from '../../redux/posts/fetchPosts';
import {fetchTags} from '../../redux/tags/fetchTags';
import Header from '../header/header.component';

// import SigninAndSignup from '../../pages/signinAndSignup/signinAndSignup.component';
import Register from '../register/register.component';
import {getProfileFetch, setCurrentUser} from '../../redux/user/user.actions'
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectLoginFormOpen} from '../../redux/loginForm/loginForm.selector';
import {selectPosts, statusPost  } from '../../redux/posts/post.selectors';
import {selectAllTags} from '../../redux/tags/tags.selector';
import {createStructuredSelector} from 'reselect';



import PrivateRoute from '../authenticated/privateRoute';
import {loginForm} from '../../redux/loginForm/loginForm.actions';

import PostDetail from '../postDetail/postDetail.component';
import  {fetchFollowedUserPosts} from '../../redux/followUserPosts/fetchFollowedUserPosts';
import {fetchCurrentUserPost} from '../../redux/profile/fetchCurrentUserPost';
import {selectFollowedUserPosts, selectFollowedUserPostsStatus} from '../../redux/followUserPosts/followUserPosts.selectors';
import { fetchCurrentUserTags} from '../../redux/CurrentUserTags/currentUserTags.service';
import {selectCurrentUserTags} from '../../redux/CurrentUserTags/currentUserTags.selectors';
import {selectCurrentUserPosts } from '../../redux/profile/profile.selector'


import {withRouter} from 'react-router';


//pages (presentational components)
import Index from '../../pages/index/index.component';
import TagPage from '../../pages/tagPage/tagPage.component';
import Profile from '../../pages/profile/profile.component';
import CreatePost from '../../pages/createPost/createPost.component';
import Home from '../../pages/home/home.component';
import {NoMatch} from '../../pages/no-match/NoMatch.component';




const mapDispatchToProps = dispatch => ({
       setCurrentUser: (user) => dispatch(setCurrentUser(user)),
       getCurrentUser : () => dispatch(getProfileFetch()),
       fetchPosts : () => dispatch(fetchPosts()),
       fetchTags : () => dispatch(fetchTags()),
       toggleLogin : (isLoginFormOpen) => dispatch(loginForm(isLoginFormOpen)),
       fetchFollowedUserPosts : (id) => dispatch(fetchFollowedUserPosts(id)),
       fetchCurrentUserTags : (userId) => dispatch(fetchCurrentUserTags(userId)),
       fetchCurrentUserPost : userId => dispatch(fetchCurrentUserPost(userId))
      
  })

 

  const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    posts : selectPosts,
    postStatus : statusPost,
    tags: selectAllTags,
    loginFormOpen : selectLoginFormOpen,
    followedUserPosts : selectFollowedUserPosts,
    followedUserPostsStatus : selectFollowedUserPostsStatus,
    subscribedTags : selectCurrentUserTags,
    currentUserPosts: selectCurrentUserPosts
    
    
   

  
    // tags: selectTags,
   })







class Main extends React.Component {
   

    constructor(props)
    {
        super(props);
        this.state = ({
         currentUser : null
        })
       
    }



    componentDidMount()
  {
    this.props.getCurrentUser();
    this.props.fetchPosts();
    this.props.fetchTags();
    



    
     if(this.props.currentUser === null)
     {
       localStorage.removeItem('token');
     }

     if(localStorage.getItem('token') === null)
     {
       this.props.history.push('/');
      
     }
     this.props.fetchFollowedUserPosts(this.props.currentUser.id);
     this.props.fetchCurrentUserPost(this.props.currentUser.id);
     
  }


  componentDidUpdate(prevProps)
  {
    if(prevProps.currentUser.id !== this.props.currentUser.id)
    {
      this.props.fetchFollowedUserPosts(this.props.currentUser.id);
      this.props.fetchCurrentUserPost(this.props.currentUser.id);
    } 
  }

 
 

  render()
    {
    
      return (
        <div className="App">
          
        <Header currentUser = {this.props.currentUser} />
        <Switch>
                    <Route  path = "/home" > <Home followUserPosts= {this.props.followedUserPosts} currentUserPosts={this.props.currentUserPosts} tags={this.props.tags} currentUser={this.props.currentUser}  allPostStatus = {this.props.postStatus} fetchTags={() => this.props.fetchTags()} fetchPosts={() => this.props.fetchPosts()}/> </Route>
                    {/* <Route  path = "/login" component={SigninAndSignup} /> */}
                    <Route  path = "/register" component= {Register }  />
                    
                    <Route  path = "/" exact >
                      {this.props.currentUser &&
                      
                      Object.entries(this.props.currentUser).length >0 ?
                               <Redirect to= "/home" /> :
                               <Index toggleLogin= {this.props.toggleLogin} loginFormOpen={this.props.loginFormOpen} /> 
                      }
                     </Route>
                   
                    <Route  path = "/tags" component= {() => <TagPage allTags = {this.props.tags} subscribedTags= {this.props.subscribedTags}  currentUser = {this.props.currentUser} fetchCurrentUserTags={() => this.props.fetchCurrentUserTags()}/>  } />
                    <Route path = "/post_details/:postId/:leaderId" children={<PostDetail />}/>
                    <Route path = "/create_post"  >
                      <CreatePost currentUser= {this.props.currentUser} tags={this.props.tags}/>
                    </Route>
                    <PrivateRoute path='/profile' component={() => <Profile currentUser = {this.props.currentUser}  getCurrentUser = {() => this.props.getCurrentUser()} />}  />
                   
                   
                    <Route path="*" component={NoMatch} />
        </Switch>
       </div>
        
      );
}
    }

   

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
