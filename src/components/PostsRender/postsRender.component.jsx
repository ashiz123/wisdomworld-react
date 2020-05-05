import React from 'react'
import {Row,Col, Container,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle} from 'reactstrap';

export default function PostRender({title, description}) {
  return(
    <Col >
        <Card>
        <CardBody>
        <CardTitle >{title}</CardTitle>
          <CardSubtitle>this is subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardText>{description}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
        </Col>
)
}
