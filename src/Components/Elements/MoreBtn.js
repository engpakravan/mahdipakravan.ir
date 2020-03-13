import React from 'react'

function MoreBtn(props) {
    return(
        <div class="d-flex justify-content-center">
            <a href={props.link} class="btn btn-outline-secondary">{props.text}</a>
        </div>
    )
}

export default MoreBtn