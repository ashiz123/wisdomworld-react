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




    


function Profile(props) {
 

  const {path} = props.match;
        // const{postStatus, error, currentUser, currentUserPosts} = props
       
        return ( 
            <div className="container">
             
              <Row >
                      <Col md="4">
                          <ProfileNav currentUser = {props.currentUser} getCurrentUser = {props.getCurrentUser}/>
                      </Col>
                      
                      <Col md="8">
                          {/* { props.currentUser.id === null || props.currentUser.other === null &&
                          <>
                          <br/> 
                          <Alert color="danger">
                              Please Update your profile
                          </Alert>
                          </>
                        }    */}
                       
              
                <Switch>
                    <Route path={`${path}/posts`} component={() => <CurrentUserPost status = {props.postStatus} error={props.error} currentUserPosts = {props.currentUserPosts} /> } />
                    <Route path={`${path}/update-info`} component={() => <UserDetail currentUser = {props.currentUser}/>} />
                    <Redirect to={`${path}/posts`} />
                </Switch>


                 </Col>


                
                 </Row>

            </div>
         );
    }

 

 
export default withRouter(connect(mapStateToProps)(Profile));