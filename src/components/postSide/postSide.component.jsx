import React from 'react'
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './postSide.style.css';

export default function PostSide() {
    return (
        <div>
        <ListGroup>
            <br/>
            <ListGroupItem style={{color:"gray"}}>Popular</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem><Link to="/posts/allpost" > All Posts </Link></ListGroupItem>
            <ListGroupItem><Link to="/posts/testPage" > Test Page</Link></ListGroupItem>
       </ListGroup>
            
        </div>
    )
}
