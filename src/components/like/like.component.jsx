import React, {useState}from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap';
import { fetchLikePost} from '../../redux/likePost/fetchLikePost';

const mapDispatchedToProps = dispatch => {
    return{
        userLikePost : (currentUserId, postId) => dispatch(fetchLikePost(currentUserId, postId))
    }
}


const mapStateToProps = (state) => ({
    like_loading : state.post.like_loading
  })




function Like(props)
{

    const{currentUserId, postId, userLikePost, like_loading} = props;

    function likePost()
    {
        userLikePost(currentUserId, postId);
        
    }


    return (
    
         
    <button className="btn btn-primary btn-sm"  onClick= {likePost}>Like {like_loading &&  <Spinner size="sm" color="light" />}  </button>
    
    )
}


export default connect(mapStateToProps, mapDispatchedToProps)(Like);