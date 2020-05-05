import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Col, Row} from 'reactstrap'
import PostSide from '../../components/postSide/postSide.component';
import {BrowserRouter } from 'react-router-dom';
import TestPage from '../allPosts/testPage.component';
import Posts from '../../components/posts/posts.component';

export default class PostPage extends Component {

render() {
        return (
            
            <div className="container">
              
                
                {/* post page row starts */}
                <Row>
                    {/* this is post navbar */}
                    <Col md="3">
                     <PostSide />
                    </Col>


                      {/* this is post container */}
                    <Col md="9">

                       {/* Route section  */}
                    <Switch>
                    <Route  path = "/posts/allpost" component= {() => <Posts allPosts= {this.props.allPosts}/> } />
                    <Route  path = "/posts/testPage" component= {TestPage } />
                    <Redirect to= "/posts/allpost" />
                    </Switch>
                    {/* End Route Section */}
                    
                    </Col>
                    {/* end post container */}
                   
                </Row>
                    {/* post page row end */}


               
            </div>
        )
    }
}
