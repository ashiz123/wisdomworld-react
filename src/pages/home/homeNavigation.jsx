import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default function HomeNavigation() {
    return (
        <div>
            <ListGroup>
            <ListGroupItem style={{color:"gray"}}>Popular</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
           </ListGroup>
        </div>
    )
}
