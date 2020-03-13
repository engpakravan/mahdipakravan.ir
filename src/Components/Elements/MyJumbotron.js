import React from 'react'
import {Jumbotron} from 'react-bootstrap'

function MyJumbotron(props){
    return(
        <Jumbotron className="py-5 shadow">
            <h1 className="text-center">{props.title}</h1>
            <p className="text-center pt-2">{props.desc ? props.desc : ""}</p>
        </Jumbotron>
    )
}

export default MyJumbotron