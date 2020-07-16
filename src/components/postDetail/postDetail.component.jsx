import React, {useEffect} from 'react';
import {Container} from 'reactstrap';
import {useParams} from "react-router-dom";
import {container, connect} from 'react-redux';
import {fetchPostDetail} from '../../redux/posts/fetchPostDetail';
import {selectPosts, statusPost} from '../../redux/posts/post.selectors';
import {createStructuredSelector} from 'reselect';
import {Card, CardText, CardBody, CardLink,
    CardTitle,Button, CardSubtitle} from 'reactstrap';
import {Loading} from '../loading/loading.component';   
import './postDetail.styles.css';
import { fetchUserFollowStatus, fetchFollowUser, fetchUnfollowUser } from '../../redux/posts/fetchUserFollow';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectFollowUserStatus} from '../../redux/followUser/followUser.selectors';
import Like from '../like/like.component';
import Comment from '../comment/comment.component';
import { useState } from 'react';
import Paginate from '../paginate/paginate.component';


const mapDispatchedToProps = dispatch =>({
    fetchPostDetail : id => dispatch(fetchPostDetail(id)),
    fetchUserFollowStatus : (leader_id, follower_id) => dispatch(fetchUserFollowStatus(leader_id, follower_id)),
    fetchFollowUser : (leader_id, follower_id) => dispatch(fetchFollowUser(leader_id, follower_id)),
    fetchUnfollowUser : (leader_id, follower_id) => dispatch(fetchUnfollowUser(leader_id, follower_id)),
    
})


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    postDetail : selectPosts,
    pending : statusPost,
    followUserStatus : selectFollowUserStatus
    })






function PostDetail(props) {

    const { fetchPostDetail, postDetail, pending, currentUser,  fetchUserFollowStatus, followUserStatus, fetchFollowUser, fetchUnfollowUser} = props

    let { postId, leaderId } = useParams();

    const [disablefollow, setDisablefollow] = useState(false);

    const [disableunfollow, setDisableunfollow] = useState(false);

    

   

    useEffect(() => {
        fetchPostDetail(postId);
       if(Object.entries(postDetail).length > 0)
       {
        fetchUserFollowStatus(postDetail.user.id, currentUser.id );
       }
       
    }, [currentUser])



    
    function followUser(e)
    {
        if(fetchFollowUser(postDetail.user.id, currentUser.id))
        {
            setDisablefollow(true);
            setDisableunfollow(false);
           
        }
        
    }


    function unfollowUser(e)
    {
        
        if(fetchUnfollowUser(postDetail.user.id, currentUser.id))
        {
            setDisableunfollow(true);
            setDisablefollow(false);
        }

       
    }

   

 return (
       <Container>  
           { pending === true ?
               
               <div style ={{textAlign:"center", marginTop:50}}>
               <Loading /> 

               </div>:
                <Card>
        <CardBody>

    {postDetail.user &&
    <CardSubtitle>
         <img  src={postDetail.user.image !==null ? postDetail.user.image.profile_image : process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="Card image cap" className="user-image"/>
         <span style={{marginRight:5}}>{postDetail.user.name}</span>
         
         {
             postDetail.user.id !== currentUser.id ?
            ( Object.entries(followUserStatus).length === 0) ?
              <button className="btn btn-primary btn-sm" onClick={followUser} disabled={disablefollow}>Follow </button>
              
              :
            <button className="btn btn-danger btn-sm"   onClick={unfollowUser} disabled={disableunfollow}>Unfollow </button>
            : ''
         }
        
        <span style={{float: "right"}}>
            <i>Posted: {postDetail.difference}</i>
        </span>
    
    
    </CardSubtitle>
    }
    

    <p>
        <b>Tags: </b>
        { postDetail.tags &&
        
        Object.entries(postDetail.tags).length > 0 &&
            postDetail.tags.map((tag, id) => {
                return (
                   <i key={id}> {tag.title}, </i>
                )
            })
        }
    </p>

    <p>
    
    </p>

    <CardTitle>
        <h4>{postDetail.title}</h4>
    </CardTitle>
    
    


    
         
        </CardBody>
        <div className= "post_image">
        <img   src={postDetail.image} alt="Card image cap" width="100%" />
        </div>
        
        <CardBody>
        <CardText>{postDetail.description}</CardText>
            <span className="text-primary" >{postDetail.like_count}</span> {' '}
           
          <CardLink href="#">Like</CardLink>{''} &nbsp; &nbsp;

          <span className="text-primary" >{postDetail.comment_count}</span>{' '}
          <CardLink href="#">Comment</CardLink>
                <br/>
                
                <Like currentUserId = {currentUser.id}  postId = {postDetail.id}/>{' '}
                <Comment  currentUserId = {currentUser.id}  postId = {postDetail.id}/>
               
         
        </CardBody>

        
      </Card>
           }
          
    </Container>
    )
}


export default connect(mapStateToProps, mapDispatchedToProps)(PostDetail)
