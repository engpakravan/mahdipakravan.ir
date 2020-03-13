import React from 'react'

function Footer(props) {
    return (
        <div className="section__footer mt-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <h6 className="text-center text-light pt-2">{props.text}</h6>
            </div>
        </div>
    )
}

export default Footer