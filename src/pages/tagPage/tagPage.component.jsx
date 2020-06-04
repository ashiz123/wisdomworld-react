import React, {useEffect, useState} from 'react';
import './tag.styles.css';
import {fetchSubscribeTags, fetchCurrentUserTags} from '../../redux/CurrentUserTags/currentUserTags.service';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUserTags} from '../../redux/CurrentUserTags/currentUserTags.selectors';



const mapDispatchedToProps = dispatch => ({
   
    fetchSubscribeTags : (userId, tagId) => dispatch(fetchSubscribeTags(userId, tagId))
})

{/* <TagPage allTags = {this.props.tags} subscribedTags= {this.props.subscribedTags}  currentUser = {this.props.currentUser} fetchCurrentUserTags={() => this.props.fetchCurrentUserTags()}/>  } /> */}







 function TagPage({currentUser, allTags,subscribedTags, fetchSubscribeTags, fetchCurrentUserTags}) {

    

    var unsubscribeTags = allTags.filter(tag => !subscribedTags.some(subscribedTag => subscribedTag.id === tag.id));



    // const [tags, setTags ] = useState([]);

    // function currentUserTags(id)
    // {
    //     fetchCurrentUserTags(id);
    // }
   

    useEffect(() => {
        
        return () => {
            console.log('unmount');
        }
    }, [])

    
        
    


    function addTags(tagId)
    {
       
        fetchSubscribeTags(currentUser.id,tagId )
    }

    return (
        <div className="container">
            <div style={{marginTop:200}}> </div>
               <h1 style={{textAlign:"center"}}>Get smarter about what matters to you.</h1>
              
               
                    {
                         unsubscribeTags.map((taging, id) => {
                            return (
                                
                                <button className = "btn btn-success" style={{margin:5}} onClick= {() =>addTags(taging.id)} key={id} >{taging.title} <span className="fa fa-plus-circle"></span></button>
                               
                             
                             )
                         })
                    }



                    <br/><br/><br/>


                    {Object.entries(subscribedTags).length > 0 && <h3 style={{textAlign:"center"}}>You have already subscribed these tags</h3>}
                    
                   {               
                    subscribedTags.map((tag, id) => {
                       return (
                           
                           <button className="btn btn-success" 
                            disabled style={{margin:5}}
                           >{tag.title} <span className="fa fa-plus-circle"></span></button> 
                           
                        )
                    })
                }
        </div>
    )
}

export default connect(null, mapDispatchedToProps)(TagPage);
