import React , {useContext } from 'react'
import {Container} from 'react-bootstrap'

import HowWorkingElement from './howWorking_Element'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

function HowWorking(){    
    const context = useContext(ThemeContext).Sections.howWorking
    const methods = useContext(MethodsContext)
    return (
        <div className="section__howWorking pb-4">
            <Container>
                <h4 className="text-center">{context.title}</h4>
                <h6 className="text-center pt-2">{methods.Comp_To_Html(context.title_meta)}</h6>
                
                {
                    context.elements.map((val) => {
                        return (
                            <HowWorkingElement key={val.key} display={
                            {
                                decoration : val.decoration , 
                                stepText : val.stepText ,
                                hyperText : val.hyperText ,
                                bodyText : val.bodyText ,
                                imageSource : val.imageSource
                            }
                            } methods = {methods} />
                        )
                    })
                }
                
            </Container>
        </div>
    )
}

export default HowWorking