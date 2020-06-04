import React, { Component } from 'react'
// import {Link, Switch, Route} from 'react-router-dom';
// import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
// import {Row,Col,ListGroup, ListGroupItem} from 'reactstrap';
import PostRender from '../PostsRender/postsRender.component';
import {Loading} from '../loading/loading.component';
import {Alert} from 'reactstrap'
// import AllPosts from '../../pages/allPosts/allPosts.component';
    
export const CurrentUserPost = (props) => {




    
    return(
        <>
        <br/>
          <p style={{fontWeight:"bold"}} className="text-primary">Latest Posts</p>



            {/* if profile status is pending */}
            {
                props.status=== "pending"  && 
                
                    <Loading />
               
            }



                  {/* if profile status is scuccess */}
            {
              props.status=== "success"  &&    
              <div>
              {Object.entries(props.currentUserPosts).length > 0 ? 
                <div>
                     {props.currentUserPosts.map(({id, ...otherPropsPosts}) => {
                    return (
                      <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts}  />
                    )
                })}
                </div>
               
              
                 : <div> <br/><h4>No any posts</h4></div>}
                 </div>
                
            }


              {/* if profile status is failed */}
         


            



         
           </>

   )

}
 






