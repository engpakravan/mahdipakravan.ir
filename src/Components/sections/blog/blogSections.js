import React from 'react'
import {Container , Row} from 'react-bootstrap'

import BlogElement from './BlogElement'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

const axios = require('axios')
class BlogSection extends React.Component{
    static contextType = ThemeContext
    state = this.context.Sections.blog
    
    componentDidMount(){
        axios('/getSection/blog').then(val => {
            this.setState(val.data)
        })
    }

    render(){
        let type = this.props.type
        return(
            <MethodsContext.Consumer>
                {
                    Methods => (
                        ! this.state.loading 
                            ? (
                            <div className="section__blog my-5">
                            <Container>
                            <h4 className="text-center">{this.state.title}</h4>
                            <h6 className="text-center pt-2">{Methods.Comp_To_Html(this.state.title_meta)}</h6>
                            {
                            type === 'section' ? (
                                <Row className="mt-4">
                                    <BlogElement data={this.state.elements[0]} key={this.state.elements[0].key} type={type}/>
                                    <BlogElement data={this.state.elements[1]} key={this.state.elements[1].key} type={type}/>
                                    <BlogElement data={this.state.elements[2]} key={this.state.elements[2].key} type={type}/>
                                </Row>
                            ) : (
                                <div className="blog__back mb-4">
                                    <Container>
                                {
                                    this.state.elements.map(val => {
                                        return (
                                            <BlogElement data={val} key={val._id} type={type}/>
                                            )
                                        })
                                }
                                    </Container>
                                </div>
                            )   
                            }
                            </Container>
                        </div>
                            )
                            : (Methods.get_spinner_w100())
                    )
                }
            </MethodsContext.Consumer>
        )
    }
}

export default BlogSection