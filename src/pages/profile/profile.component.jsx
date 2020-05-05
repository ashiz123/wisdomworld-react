import React, { Component } from 'react';
import {fetchCurrentUserPost} from '../../redux/profile/fetchCurrentUserPost';
import {connect} from 'react-redux';
import {selectPosts} from './profile.selector';
import {createStructuredSelector} from 'reselect';
import {Row,Col, Container,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle} from 'reactstrap';
import PostRender from '../../components/PostsRender/postsRender.component';



const mapDispatchToProps = dispatch => ({
    fetchCurrentUserPost : userId => dispatch(fetchCurrentUserPost(userId))
})

const mapStateToProps = createStructuredSelector({
    posts : selectPosts
})




class Profile extends Component {
   constructor(props)
   {
       super(props);
     
   }

   componentDidMount()
   {
    //    console.log(this.props.currentUser.id)
       this.props.fetchCurrentUserPost(this.props.currentUser.id);
        // const currentUserPost = this.state.posts.filter(({post,id}) => id === 1)
        // console.log(currentUserPost);
        
        
        // this.setState({
        //     posts : currentUserPost
        // })
        
   }


    render() { 
        console.log(this.props.posts);
        return ( 
            <div className="container">
              
              <Row >
                      <Col md="3"></Col>
                      
                      <Col md="6">
                {this.props.posts
                ?
                this.props.posts.map(({id, ...otherPostProps}) => (
                  
                     <PostRender key={id} {...otherPostProps}/>
                

                )): " "
                
                
                }
                 </Col>
                 <Col md="3"></Col>
                 </Row>

            </div>
         );
    }
}
 

 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);