import React, { useEffect } from 'react'
// import {Link, Switch, Route} from 'react-router-dom';
// import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
// import {Row,Col,ListGroup, ListGroupItem} from 'reactstrap';
import PostRender from '../PostsRender/postsRender.component';
import {Loading} from '../loading/loading.component';
import {useLocation} from 'react-router-dom';



// import AllPosts from '../../pages/allPosts/allPosts.component';



    
 const Posts = (props) => {


    const location = useLocation();

    useEffect(() => {
        console.log(location);
    })

    

    

    if(props.allPostStatus)
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

               {
                   location.pathname === "/home" &&
                   <div>
                    {props.currentUserPosts &&
                    props.currentUserPosts.filter((post, id) => id < 5).map(({id, ...otherPropsPosts}) => {
                   return (
                   <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts}  />
                   )
               })}
               </div>

               }


               
               
               
               {props.allPosts ? 
               <div>
                    {props.allPosts.filter((post, id) => id < 5).map(({id, ...otherPropsPosts}) => {
                   return (
                   <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts}  />
                   )
               })}
               </div>
              
             
                : <div> <br/><h4>No any posts</h4></div>
               }
               </>
    
       )
    }
    
   

}
 

export default Posts;





  
