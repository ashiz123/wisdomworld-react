import React, { Component } from 'react'
// import {Link, Switch, Route} from 'react-router-dom';
// import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
// import {Row,Col,ListGroup, ListGroupItem} from 'reactstrap';
import PostRender from '../PostsRender/postsRender.component';
// import AllPosts from '../../pages/allPosts/allPosts.component';
    
export const Posts = (props) => {
    
    
    return(
        <>
          <br/>
           <p style={{fontWeight:"bold"}} className="text-primary">Latest Posts</p>
           {props.allPosts ? 
           <div>
                {props.allPosts.map(({id, ...otherPropsPosts}) => {
               return (
               <PostRender key={id}  {...otherPropsPosts}/>
               )
           })}
           </div>
          
         
            : <div> <br/><h4>No any posts</h4></div>
           }
           </>

   )

}
 





    export default (Posts);
