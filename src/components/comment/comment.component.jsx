import React , {useEffect}from 'react';
import { UncontrolledCollapse,FormGroup, Label, Input, Button, CardBody, Card, Row,Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import './comment.styles.css';
import {connect} from 'react-redux';
import {fetchComment} from '../../redux/comment/fetchComment';
import {createStructuredSelector} from 'reselect';
import {selectComments} from '../../redux/comment/comment.selectors';


const mapStateToProps = createStructuredSelector({
     comments : selectComments
})

const mapDispatchedToProps= dispatch =>
({
    commentPost : (postId, userId, comment) => dispatch(fetchComment(postId, userId, comment))
})


const Comment = (props) => {


    const { register, handleSubmit, watch, errors } = useForm();
    const{currentUserId, postId, commentPost, comments} = props;



    const onSubmit = data => 
    {
      commentPost(postId, currentUserId, data.comment)
    }

   
  


    function handleUserKeyPress(e){
    
        if (e.key === "Enter" && !e.shiftKey) {
           
          e.preventDefault();
          if(handleSubmit(onSubmit)())
          {
            document.getElementById('comment').value = ''
          } 
         
        }
    };
   

    



    return(
        <>
        <button className="btn btn-primary btn-sm" id="toggler" >
          Comment
        </button>
       
        <UncontrolledCollapse toggler="#toggler" className="collapse_comment">
        
           <CardBody>
               
                {
                    comments &&
                    comments.map((comment, id) => {

                        return(
                            <Row style={{margin:10}}>
                        <Col  md="2" xs="12" sm="12">
                            <div style={{height:105, marginTop:8, overflow:'hidden'}}>
                              {comment.user_image !== null ?
                              <img src={comment.user_image} className="img img-thumbnail" alt="" /> :
                               process.env.PUBLIC_URL + '/profile_placeholder.png'}
                            
                            </div>
                                  
                              <span>{comment.user_name}</span>  
                        </Col>
                        <Col  md="10" xs="12" sm="12">
                                
                                <div className="comment_user_image">
                                {comment.comment}
                                </div>
                        
                            
                        </Col>
                        </Row>
                        )
                        
                    })
                }
                
                
                 
    
                    {/* //Row end */}
    
                <Row>
                  <Input type="textarea" id="comment" placeholder="Enter your comment" name="comment" defaultValue="" innerRef={register} rows="4" onKeyPress={handleUserKeyPress}/>
                </Row>

                </CardBody>
                
            
         
        </UncontrolledCollapse>
      </>
    )
 
    };

export default connect(mapStateToProps, mapDispatchedToProps)(Comment);