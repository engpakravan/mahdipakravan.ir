import React from 'react'
import {Row , Col} from 'react-bootstrap'

function PortfoiloItem(props){
    const Constants = props.Constants
    props = props.data
    return (
        props.order %2 === 0
            ? (
                <div>
                <Row className="py-53">
                    <Col lg={8} className="d-flex flex-column justify-content-center d-lg-block order-lg-2 order-2">
                        <div className="portfoilo__title d-flex align-items-baseline">
                            <span className="portfoilo__count">{props.order}</span>
                            <h5 className="text-center mr-2">{props.name}</h5>
                        </div>
                        <div className="portfoilo__detail">
                            <kbd>{Constants.myJobText}</kbd>
                            <span className="portfoilo__myWork">{ props.job }</span>
                            
                            <br/>

                            <kbd>{Constants.usesTechnologyText}</kbd>
                            <br/>
                            <span className="portfoilo__technology">{props.technology}</span>
                            
                            <br/>
                            <kbd>{Constants.descText}</kbd>
                            <p className="portfoilo__description">{props.desc}</p>
                        </div>
                    </Col>
                    <Col lg={4} className="d-flex pb-5 pb-lg-0 justify-content-center order-lg-1 order-1">
                        <img src={props.imgSrc} alt="" className="img-fluid portfoilo__img"/>
                    </Col>
                </Row>
                </div>
            )
            : (
                <div>
                    <Row className="py-3">
                        <Col lg={8} className="d-flex flex-column justify-content-center d-lg-block order-lg-1 order-2">
                            <div className="portfoilo__title d-flex align-items-baseline">
                                <span className="portfoilo__count">{props.order}</span>
                                <h5 className="text-center mr-2">{props.name}</h5>
                            </div>
                            <div className="portfoilo__detail">
                                <kbd>{Constants.myJobText}</kbd>
                                <span className="portfoilo__myWork">{ props.job }</span>
                                
                                <br/>

                                <kbd>{Constants.usesTechnologyText}</kbd>
                                <br/>
                                <span className="portfoilo__technology">{props.technology}</span>
                                
                                <br/>
                                <kbd>{Constants.descText}</kbd>
                                <p className="portfoilo__description">{props.desc}</p>
                            </div>
                        </Col>
                        <Col lg={4} className="d-flex pb-5 pb-lg-0 justify-content-center order-lg-2 order-1">
                            <img src={props.imgSrc} alt="" className="img-fluid portfoilo__img"/>
                        </Col>
                    </Row>
                </div>
            )
    )
}

export default PortfoiloItem