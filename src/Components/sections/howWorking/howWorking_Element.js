import React from 'react'
import {Row , Col} from 'react-bootstrap'

function howWorking_Element(props){

    let getStepText = (stepText , hyperText)=>{
        return (
            <h5 className="text-center text-lg-right"><kbd className="part">{stepText}</kbd>{hyperText}</h5>
        )
    }

    
    const Method = props.methods
    const Props = props.display
    return(
        Props.order%2 === 0 ? (
            <div>
                <Row className="pt-4 d-flex align-items-center" key={Props.key}>
                    <Col key={Props.key} lg={8} className="d-flex flex-column justify-content-center d-lg-block order-2 order-lg-1">
                        {getStepText(Props.stepText , Props.hyperText)}
                        <div className="pt-3 p text-center text-lg-right">{Method.Comp_To_Html(Props.bodyText)}</div>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center order-1 order-lg-2">
                        <img src={Props.imageSource} className="img-fluid image__howWorking" alt=""/>
                    </Col>
                </Row>
                <hr/>
            </div>    
        ) : (
            <div>
                <Row className="pt-4 pb-2 d-flex align-items-center">
                    <Col lg={8} className="d-flex flex-column justify-content-center d-lg-block order-2 order-lg-2">
                    {getStepText(Props.stepText , Props.hyperText)}
                    <div className="pt-3 p text-center text-lg-right">{Method.Comp_To_Html(Props.bodyText)}</div>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center order-1 order-lg-1">
                    <img src={Props.imageSource} className="img-fluid image__howWorking" alt=""/>
                    </Col>
                    <hr/>
                </Row>
                <hr/>
            </div>
        )
    )
}

export default howWorking_Element