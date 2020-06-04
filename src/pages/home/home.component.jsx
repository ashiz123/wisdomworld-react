import React, {useEffect} from 'react';
import {Row,Col, Container} from 'reactstrap';
import './home.styles.css';

import HomeNavigation from './homeNavigation';
import {connect} from 'react-redux';
import Posts from '../../components/posts/posts.component';
import {Switch, Route,Link, withRouter } from 'react-router-dom';
import TagPosts from '../../components/tagPosts/tagPosts.component';







function Home({followUserPosts, tags, postByTag, allPostStatus, currentUserPosts, fetchTags, fetchPosts, currentUser,...otherProps})

{

  


  useEffect(() => 
{
  fetchTags();
  fetchPosts();
  
}, [currentUser])



return(
  
      <Container>
      
      
       
      <Row className="padding-top">
      <Col md="3" xs="12" sm="12">
         <HomeNavigation />

      </Col>



      <Col  md="6" xs="12" sm="12">

        
       <p style={{fontWeight:"bold"}} className="text-primary">Latest Posts</p>
     

          {/* home tag navigation */}
        <Row>
        <Link className = "margin-button btn btn-success btn-sm" to={`${otherProps.match.url}`}>All Posts</Link> 
             {
             tags.filter((tag, idx) => idx < 6).map((tag, id) => {
               return(
                      <Link className = "margin-button btn btn-primary btn-sm" to={`${otherProps.match.url}/${tag.title}`} key={tag.id}>{tag.title}</Link>  
                 )
            
             })
           }
        </Row>

        <Switch>
        <Route exact path={otherProps.match.path}>
             <Posts allPosts = {followUserPosts} currentUserPosts = {currentUserPosts}  allPostStatus = {allPostStatus}/> 
        </Route>
        
        <Route exact  path={`${otherProps.match.url}/:tagName`} component={TagPosts}/>

      </Switch>
      
       

      </Col>



      <Col md="3" xs="12" sm="12">Column</Col> 


      </Row>
    
      
          
     
  </Container>
    )
   
    
      }

    



      // function AllPosts({allPosts})
      // {
      //   return(
      //   <div style={{marginTop:-30, padding: 0}}>
      //   {
      //     (allPosts) ?
      //     allPosts.filter((post, idx) => idx < 2).map(({id, ...otherPostProps})  => {
      //       return(
      //          <PostRender key={id} {...otherPostProps}/>
      //       )
      //     }): <div style={{margin:50}}>
      //       {(getPostsPending)? <div>Loading...</div> : <div>Error on page</div>}
      //     </div>
      // }
      // </div>
      //   )

      // }

      export default withRouter(connect(null, )(Home))



