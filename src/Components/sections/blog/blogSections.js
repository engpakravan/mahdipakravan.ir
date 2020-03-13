import React from 'react'
import {Container , Row} from 'react-bootstrap'

import BlogElement from './BlogElement'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'
class BlogSection extends React.Component{
    static contextType = ThemeContext
    state = this.context.Sections.blog

    render(){
        return(
            <MethodsContext.Consumer>
                {
                    Methods => (
                        <div className="section__blog my-5">
                            <Container>
                                <h3 className="text-center">{this.state.title}</h3>
                                <h6 className="text-center pt-2">{Methods.Comp_To_Html(this.state.title_meta)}</h6>
            
                                <Row className="mt-4">
                                    {this.state.elements.map(val => {
                                       return <BlogElement data={val} key={val.key}/>
                                    })}
                                </Row>
                            </Container>
                        </div>
                    )
                }
            </MethodsContext.Consumer>
        )
    }
}

export default BlogSection