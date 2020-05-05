import React from 'react';
import {Route, Switch, Redirect, useLocation } from 'react-router-dom';
import {connect} from 'react-redux';


import fetchPosts from '../../redux/posts/fetchPosts';
import {fetchCurrentUserPost} from '../../redux/posts/fetchPosts';
import Header from '../header/header.component';
import {Home} from '../../pages/home/home.component';
import SigninAndSignup from '../../pages/signinAndSignup/signinAndSignup.component';
import Posts from '../posts/posts.component';
import Register from '../register/register.component';
import {getProfileFetch} from '../../redux/user/user.actions'
import {selectCurrentUser} from '../../redux/user/user.selector';
import {postToView  } from '../../redux/posts/post.selectors';
import {createStructuredSelector} from 'reselect';
import {NoMatch} from '../no-match/NoMatch.component';
import Profile from '../../pages/profile/profile.component';
import PostPage from '../../pages/postPage/postPage.component';





 const mapDispatchToProps = dispatch => ({
       getProfileFetch : () => dispatch(getProfileFetch()),
       fetchPosts : () => dispatch(fetchPosts()),
      
  })


  

  const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    posts : postToView,
   

  })



class Main extends React.Component {
   

    constructor(props)
    {
        super(props);
        
    }



    componentDidMount()
  {
    
     this.props.getProfileFetch();
     this.props.fetchPosts();
    
  }


  

 

  render()
    {
      return (
        <div className="App">
        <Header currentUser = {this.props.currentUser} />
        <Switch>
                    <Route exact path = "/" component={() => <Home allPosts= {this.props.posts}></Home>} />
                    <Route  path = "/login" component={SigninAndSignup} />
                    <Route  path = "/register"component= {Register } />
                    <Route  path = "/posts" component= {() => <PostPage  allPosts= {this.props.posts}/> } />
                    {/* <Route  path = "/post" component={() => <Posts allPosts= {this.props.posts}/>} /> */}
                    <Route  path = "/profile" component={() => <Profile currentUser = {this.props.currentUser} posts = {this.props.posts}/>} />
                    {/* <Redirect to= "/home" /> */}
                   
                    <Route path="*">
        <NoMatch />
      </Route>
        </Switch>
       </div>
        
      );
}
    }

export default connect(mapStateToProps, mapDispatchToProps)(Main);
