import React, {useEffect} from 'react'
import {Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Media, Row, Col} from 'reactstrap';
import './postsRender.styles.css';
import Post from '../post/post.component';
import {withRouter} from 'react-router-dom';




const PostRender = (props) =>{
   const {otherPropsPosts, postId, match} = props;


return(
    
   
  // <Card>

  //   <CardBody>
  //     <img src={otherPropsPosts.user.image !== null ? otherPropsPosts.user.image.profile_image : process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="Card image cap" className="user-image-post" />
  //     <span style={{ marginRight: 5 }}>{otherPropsPosts.user.name}</span>
  //     <CardSubtitle>{otherPropsPosts.title}</CardSubtitle>
  //   </CardBody>
  //   <img width="100%" src={otherPropsPosts.image} alt="Card image cap" />
  //   <CardBody>
  //     <CardText>{otherPropsPosts.description}</CardText>

  //     <CardLink href={`/post/${postId}`}>Read more...</CardLink>
  //     {/* <CardLink >Read more...</CardLink> */}

  //   </CardBody>


  // </Card>
<div className="post-div">

    
  <Row>
    <Col md="8" >
  <img src={otherPropsPosts.user.image !== null ? otherPropsPosts.user.image.profile_image : process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="Card image cap" className="user-image-post" />
  <span style={{ marginRight: 5, color:'blue' }}>{otherPropsPosts.user.name}</span>
  </Col>

  <Col md="4">
  <span style={{float: "right"}}>{otherPropsPosts.difference}</span>
  </Col>
  </Row>
    
    <Row>
  <Media left href="#">
  <img width="100" src={otherPropsPosts.image} alt="Card image cap" style={{marginTop:52}} />
  </Media>
  <Media body style={{padding:10}}>
    <Media heading>
    {otherPropsPosts.title}
    </Media>
      {otherPropsPosts.description}
  </Media>

 
</Row>
<a href= {`/post/${postId}`} style ={{float:"right"}}>Read more...</a>
     <br/>
  <br/>
</div>

)
 }

 export default withRouter(PostRender)
  









