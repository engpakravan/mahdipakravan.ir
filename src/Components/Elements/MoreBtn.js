import React from 'react'

function MoreBtn(props) {
    return(
        <div className="d-flex justify-content-center">
            <a href={props.link} className="btn btn-outline-secondary">{props.text}</a>
        </div>
    )
}

export default MoreBtn