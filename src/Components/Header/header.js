import React from 'react'

import NavBar from './navBar'
import {Container , Col , Row} from 'react-bootstrap'

import ThemeContext from '../../Context/ThemeContext'
import MethodContext from '../../Context/MethodsContext'

class Header extends React.Component{
    static contextType = ThemeContext
    state = {
        HeaderJumborton : this.context.Header.HeaderJumborton ,
        Brand : this.context.Header.Brand , 
        list : this.context.Header.list ,
        Welcome : this.context.Header.Welcome ,
        what_can_i_do : this.context.Header.what_can_i_do ,
        header_long_text : this.context.Header.header_long_text
    }

    getComponent(element){
        return <div dangerouslySetInnerHTML={{__html : element}} />
    }

    getProgrammerImage(){
        return <img src={this.context.Header.programmerImage} className="img-fluid" alt=""/>
    }
    
    render(){
        return (
            this.state.HeaderJumborton ? (
                <header>
                <NavBar title={this.state.Brand} list={this.state.list} />
                <Container>
                    <MethodContext.Consumer>
                        {
                            Methods => (
                                <Row className="mt-5 d-flex justify-content-lg-between">
                                    <Col lg={5} className="d-flex flex-column justify-content-end d-lg-block">
                                        <div className="img-holder" id="imageHeader">
                                            {this.getProgrammerImage()}
                                        </div>
                                    </Col>

                                    <Col id="headerContent" lg={7} className="pr-md-5 pt-lg-4 d-flex flex-column align-items-center d-lg-block">
                                        <h2 className="pt-5">{Methods.Comp_To_Html(this.state.Welcome)}</h2>
                                        <h5 className="pt-3">{Methods.Comp_To_Html(this.state.what_can_i_do)}</h5> 
                                        <p className="pt-3 text-justify">{this.state.header_long_text}</p>
                                    </Col>
                                </Row>
                            )
                        }
                    </MethodContext.Consumer>
                </Container>
                </header>
            ) : (
                <header>
                    <NavBar title={this.context.Header.Brand} list={this.context.Header.list} />
                </header>
            )
        )
    }
}

export default Header