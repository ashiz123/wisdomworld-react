import React, { useEffect } from 'react'
// import {Link, Switch, Route} from 'react-router-dom';
// import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
// import {Row,Col,ListGroup, ListGroupItem} from 'reactstrap';
import PostRender from '../PostsRender/postsRender.component';
import {Loading} from '../loading/loading.component';

import Post from '../post/post.component';
import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import Paginate from '../paginate/paginate.component';




// import AllPosts from '../../pages/allPosts/allPosts.component';



    
 const Posts = (props) => {

 

    const location = useLocation();
    let { path, url } = useRouteMatch();


    // const paginate = Object.keys().map(i => peopleObj[i])



    if(props.allPostStatus === true)
    {
        
            // conditional rendering
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
            
    }
    else{
        return(
            <>


              
               {location.pathname === "/posts" &&
               <div>
               <br />
               <p style={{fontWeight:"bold"}} className="text-primary">Latest Posts</p>
               </div>
                }

                
                
                {props.allPosts ? 
               <div>
                    {props.allPosts.map(({id, ...otherPropsPosts}) => {
                   return (
                   <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts} url = {url}  />
                   )
                })}
               </div>
                : <div> <br/><h4>No any posts</h4></div>
               }

               <div style={{marginLeft: 50}}> 
               <Paginate currentUser = {props.currentUser} pagination = {props.pagination}/>
               </div>
               
                </>
               
    
       )
    }
    
   

}
 

export default Posts;





  
