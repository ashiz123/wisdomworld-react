import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {useRouteMatch, Link} from 'react-router-dom'

export default function HomeNavigation() {

    // const {url} = useRouteMatch();
    return (
        <div>
            <ListGroup>
            <ListGroupItem style={{color:"gray"}}>Popular</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem>Trending Posts</ListGroupItem>
            <ListGroupItem>Latest Posts</ListGroupItem>
            <ListGroupItem>Hot Posts</ListGroupItem>
            </ListGroup>
        </div>
    )
}
