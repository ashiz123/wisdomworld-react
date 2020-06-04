import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './postSide.style.css';



 function PostSide({match}) {


     
    return (
        <div>
        <ListGroup>
            <br/>
            <ListGroupItem style={{color:"gray"}}>Popular</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem><Link to= {`${match.url}`} > All Posts </Link></ListGroupItem>
            <ListGroupItem><Link to= {`${match.url}/follow_posts`} > Followed User Posts</Link></ListGroupItem>
       </ListGroup>
            
        </div>
    )
}


export default withRouter(PostSide)
