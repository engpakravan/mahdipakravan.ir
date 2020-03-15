import React from 'react'
import {Container , Row} from 'react-bootstrap'

import BlogElement from './BlogElement'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'
class BlogSection extends React.Component{
    static contextType = ThemeContext
    state = this.context.Sections.blog
    
    render(){
        let type = this.props.type
        return(
            <MethodsContext.Consumer>
                {
                    Methods => (
                        <div className="section__blog my-5">
                            <Container>
                            {
                                this.props.noTitle 
                                ? ('')
                                : (
                                <div>
                                <h4 className="text-center">{this.state.title}</h4>
                                <h6 className="text-center pt-2">{Methods.Comp_To_Html(this.state.title_meta)}</h6>
                                </div>
                                )
                            }
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
                                            <BlogElement data={val} key={val.key} type={type}/>
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
                }
            </MethodsContext.Consumer>
        )
    }
}

export default BlogSection