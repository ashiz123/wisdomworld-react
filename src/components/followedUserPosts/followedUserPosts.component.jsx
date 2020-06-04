import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
// import {fetchFollowedUserPosts} from '../../redux/followUserPosts/fetchFollowedUserPosts';
import {createStructuredSelector} from 'reselect';
import {selectPosts, statusPost} from '../../redux/posts/post.selectors';
import PostRender from '../PostsRender/postsRender.component';
import {Loading} from '../loading/loading.component';
import {} from '../../redux/followUserPosts/followUserPosts.actions';



// const mapDispatchedToProps = dispatch => ({
//   fetchPosts : id => dispatch(fetchFollowedUserPosts(id))
// })

// const mapStateToProps = createStructuredSelector({
//     status : statusPost,  //followed user post status
//     posts : selectPosts  //followed user posts
// })

function FollowedUserPosts(props) {

    const { status, followedUserPosts, currentUser} = props;


    useEffect(() =>
    {

    })


   


    if(status)
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
              {/* no data  */}
               {Object.entries(followedUserPosts).length >0 ? 
               <div>
                    {followedUserPosts.filter((post, id) => id < 5).map(({id, ...otherPropsPosts}) => {
                   return (
                   <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts}  />
                   )
               })}
               </div>
              
             
                : <div> <br/><h4>No any user followed</h4></div>
               }
               </>
    
       )
    }
}

export default (FollowedUserPosts);
