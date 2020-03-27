import React from 'react'
import {Container , Col , Row } from 'react-bootstrap'
class header_element extends React.Component{
    
    render(){
        return(
            <Container>
                <Row className="mt-5 d-flex justify-content-lg-between">
                    <Col lg={5} className="d-flex flex-column justify-content-end d-lg-block">
                    <div className="img-holder programmer_pic" id="imageHeader">    
                        <img src={this.props.programmerImage} 
                            className={`img-fluid ${this.props.image_loading === true ? ('blur') : ('')}`}
                            alt=""/>
                    </div>
                    </Col>
                    <Col id="headerContent" lg={7} className="pr-md-5 pt-lg-4 d-flex flex-column align-items-center d-lg-block">
                        <h2 className="pt-5" >{this.props.Methods.Comp_To_Html(this.props.Welcome)}</h2>
                        <h5 className="pt-3">{this.props.Methods.Comp_To_Html(this.props.what_can_i_do)}</h5> 
                        <p className="pt-3 text-justify">{this.props.header_long_text}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default header_element