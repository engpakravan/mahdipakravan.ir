import React from 'react'
import {Container} from 'react-bootstrap'

import PortfoiloItem from './portfoiloItem'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

class PortfoiloSection extends React.Component{
    static contextType = ThemeContext
    state = this.context.Sections.portfoilo

    render(){
        return (
            <MethodsContext.Consumer>
            {
                methods => (
                    <div className="section__portfoilo">
                    <Container>
                        <h4 className="text-center">{this.state.title}</h4>
                        <h6 className="text-center pt-2">{methods.Comp_To_Html(this.state.title_meta)}</h6>

                        {this.state.elements.map(val => {
                            return <PortfoiloItem data={val} key={val.order} Constants={this.state.Constant_data} />
                        })}
                    </Container>
                    </div>
                )
            }    
            </MethodsContext.Consumer>
        )
    }
}

export default PortfoiloSection