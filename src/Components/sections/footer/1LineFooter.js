import React from 'react'

function Footer(props) {
    return (
        <div class="section__footer mt-5 d-flex justify-content-center align-items-center">
            <div class="container">
                <h6 class="text-center text-light pt-2">{props.text}</h6>
            </div>
        </div>
    )
}

export default Footer