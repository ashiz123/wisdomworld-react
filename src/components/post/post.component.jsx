import React, {useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPostDetail} from '../../redux/posts/fetchPostDetail';
import {Card, CardText, CardBody, CardLink,
    CardTitle,Button, CardSubtitle} from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import {selectPosts, statusPost} from '../../redux/posts/post.selectors';





const mapDispatchedToProps = dispatch =>({
    fetchPostDetail : id => dispatch(fetchPostDetail(id))
})


const mapStateToProps = createStructuredSelector({
    postDetail : selectPosts
})







 function Post({currentUser, fetchPostDetail, postDetail}) {


    const match = useRouteMatch();
    


    useEffect(() => {
        fetchPostDetail(match.params.postId);

    }, [])
    
    return (
        <div className="container">
        <Card>
    
        <CardBody>
        <img  src={postDetail.user.image !==null ? postDetail.user.image.profile_image : process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="Card image cap" className="user-image-post"/>
        <span style={{marginRight:5}}>{postDetail.user.name}</span>
        <CardSubtitle>{postDetail.title}</CardSubtitle>
        </CardBody>
              <img width="100%" src={postDetail.image} alt="Card image cap" />
        <CardBody>
        <CardText>{postDetail.description}</CardText>
         
          {/* <CardLink href= {`home/post/${postId}`}>Read more...</CardLink> */}
          {/* <CardLink >Read more...</CardLink> */}
    
        </CardBody>
    
    
      </Card>
      </div>
    // <div></div>
    )
}


export default  connect(mapStateToProps, mapDispatchedToProps )(Post)

