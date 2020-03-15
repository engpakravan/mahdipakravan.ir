import React from 'react'
import {Container} from 'react-bootstrap'

import PortfoiloItem from './portfoiloItem'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

class PortfoiloSection extends React.Component{
    static contextType = ThemeContext
    state = this.context.Sections.portfoilo

    render(){
        let order = 0
        return (
            <MethodsContext.Consumer>
            {
                methods => (
                    <div className="section__portfoilo">
                    <Container>
                        {
                            this.props.noTitle 
                            ? ('')
                            : (
                                <div>
                                <h4 className="text-center">{this.state.title}</h4>
                                <h6 className="text-center pt-2">{methods.Comp_To_Html(this.state.title_meta)}</h6>
                                </div>
                            )
                        }

                        {
                            this.props.type=== 'section' ? (
                                <div>
                                <PortfoiloItem data={this.state.elements[0]} key={this.state.elements[0].order} Constants={this.state.Constant_data} order={1}/>
                                <PortfoiloItem data={this.state.elements[1]} key={this.state.elements[1].order} Constants={this.state.Constant_data} order={2}/>
                                </div>
                                ) : (
                                this.state.elements.map(val => {
                                order++
                                return <PortfoiloItem data={val} key={val.order} Constants={this.state.Constant_data} order={order}/>
                                })
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

export default PortfoiloSection