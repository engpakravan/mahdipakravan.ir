import React from 'react'
import {ProgressBar} from 'react-bootstrap'

function Progress(props){
    return(
        <div className="skill py-1">
            <h6 className="text-center">{props.skillName}</h6>
            <ProgressBar animated variant="success" now={props.progress} label={`${props.progress}%`}/>
        </div>
    )
}

export default Progress