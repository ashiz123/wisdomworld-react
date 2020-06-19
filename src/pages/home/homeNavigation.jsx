import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {useRouteMatch, Link} from 'react-router-dom';
import './homeNavigation.css'

export default function HomeNavigation() {

    const {url} = useRouteMatch();
    return (
        <div>
            <ListGroup>
            <ListGroupItem style={{color:"gray"}}>Popular</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem>
            <Link to={`${url}`} >Followed Post</Link>  
            </ListGroupItem>
            <ListGroupItem>
            <Link to={`${url}/latest`} >Latest Post</Link>  
            </ListGroupItem>
            <ListGroupItem>Other Posts</ListGroupItem>
            <ListGroupItem>Hot Posts</ListGroupItem>
            </ListGroup>
        </div>
    )
}
