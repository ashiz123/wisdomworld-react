import React from 'react';
import {Row,Col, Container, ListGroup, ListGroupItem,  Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle} from 'reactstrap';
import './home.styles.css';
import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
import PostRender from '../../components/PostsRender/postsRender.component';
import HomeNavigation from './homeNavigation';
import MyPost from './myPost.component';
import Test from './test.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export const Home = ({allPosts}) =>
{
 
  let  {path,url}= useRouteMatch();
  console.log(useRouteMatch());
 
  return(
   
    <Container>
        <Row className="padding-top">
        <Col md="3" xs="12" sm="12">
           {/* <HomeNavigation /> */}
           <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        
      </ul>

        </Col>
        <Col  md="6" xs="12" sm="12">
         <p style={{fontWeight:"bold"}} className="text-primary">Latest Posts</p>
          
         <Switch>
        <Route exact path={path} component= {MyPost} />
        
        <Route path={`${path}/:topicId`} component = {Test}>
          
        </Route>
      </Switch>
        </Col>
        <Col md="3" xs="12" sm="12">Column</Col> 
        </Row>

        
    
    </Container>
  )
    
      }



