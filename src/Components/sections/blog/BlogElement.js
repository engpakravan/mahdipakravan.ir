import React from 'react'
import {Col , Card} from 'react-bootstrap'

function BlogElement(props){
    const type = props.type
    props = props.data
    
    return(
        type === "section" ? (
            <Col md={6} lg={4} className="mt-2 mt-lg-0">
                <Card>
                    <Card.Img src={props.imgSrc}></Card.Img>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.desc}</Card.Text>
                    </Card.Body>

                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <span className="text-red">{props.author}</span>
                        <span>{props.timeToRead}</span>
                    </Card.Footer>
                </Card>
            </Col>
        ) : (
            <Card>
                <Card.Img src={props.imgSrc}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <span className="text-red">{props.author}</span>
                    <span>{props.timeToRead}</span>
                </Card.Footer>
            </Card>
        )
    )
}

export default BlogElement