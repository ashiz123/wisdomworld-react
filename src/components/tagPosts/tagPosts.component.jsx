import React, {Component, Suspense} from 'react';
import './tagPosts.styles.css';
import {withRouter, useParams} from 'react-router-dom';
import {fetchPostByTag} from '../../redux/posts/fetchPostsByTag';
import {connect} from 'react-redux';
import {selectedTagPosts, statusTagPosts} from '../../redux/posts/tagPosts.selector';
import {createStructuredSelector} from 'reselect';
import PostRender from '../PostsRender/postsRender.component';
import {Loading} from '../loading/loading.component';


const mapDispatchedToProps =  dispatch => ({
    postByTag : (tagId) => dispatch(fetchPostByTag(tagId))
  })


  
  const mapStateToProps = createStructuredSelector({
    tagPosts : selectedTagPosts,
    pending : statusTagPosts
   
   

  })

class TagPosts extends Component{


    constructor(props)
    {
        super(props);
       
    }

    

    componentDidMount()
    {
      
        this.props.postByTag(this.props.match.params.tagName)
    }


    componentDidUpdate(prevProps)
    {
      
        if (prevProps.match.params.tagName !== this.props.match.params.tagName) this.props.postByTag(this.props.match.params.tagName)
    }
    
        






    render() {
       

        if(this.props.pending === true)
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
        return ( 
         <div>
            {(Object.entries(this.props.tagPosts).length !== 0 )?
            this.props.tagPosts.map(({id, ...otherPropsPosts}) => {
               return (
               
                <PostRender key={id}  postId={id}  otherPropsPosts = {otherPropsPosts}  />
                
               )
           }) :  <div style={{margin:30}}>No Posts Found</div>

           }
        </div>
        
         )
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchedToProps)(TagPosts));