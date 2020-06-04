import React, { Component } from 'react';

import {Row,Col, Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import PostRender from '../../components/PostsRender/postsRender.component';
import ProfileNav from '../../components/profileNav/profileNav.component';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {CurrentUserPost} from '../../components/currentUserPost/currentUserPost.component';
import UserDetail from '../../components/userDetail/userDetail.component';
import {selectCurrentUserPosts, currentUserPostStatus, currentUserError} from '../../redux/profile/profile.selector'


const mapStateToProps = createStructuredSelector({
    
    currentUserPosts : selectCurrentUserPosts,
    postStatus : currentUserPostStatus,
    error : currentUserError 
})
    


class Profile extends Component {
   constructor(props)
   {
       super(props);
     
   }

   componentDidMount()
   {

       console.log(this.props.currentUser)
       this.props.getCurrentUser();
    //    this.props.fetchCurrentUserPost(this.props.currentUser.id);
    //     // const currentUserPost = this.state.posts.filter(({post,id}) => id === 1)
    //     // console.log(currentUserPost);
        
        
    //     // this.setState({
    //     //     posts : currentUserPost
    //     // })
        
   }

   


    render() { 
       
        const {path} = this.props.match;
        // const{postStatus, error, currentUser, currentUserPosts} = this.props
       
        return ( 
            <div className="container">
             
              <Row >
                      <Col md="4">
                          <ProfileNav currentUser = {this.props.currentUser}/>
                      </Col>
                      
                      <Col md="8">
                          { this.props.currentUser.id === null || this.props.currentUser.other === null &&
                          <>
                          <br/> 
                          <Alert color="danger">
                              Please Update your profile
                          </Alert>
                          </>
                        }       
              
                <Switch>
                    <Route path={`${path}/posts`} component={() => <CurrentUserPost status = {this.props.postStatus} error={this.props.error} currentUserPosts = {this.props.currentUserPosts} /> } />
                    <Route path={`${path}/update-info`} component={() => <UserDetail currentUser = {this.props.currentUser}/>} />
                    <Redirect to={`${path}/posts`} />
                </Switch>


                 </Col>


                
                 </Row>

            </div>
         );
    }
}
 

 
export default withRouter(connect(mapStateToProps)(Profile));