import React , {useContext , useState} from 'react'
import {Container} from 'react-bootstrap'

import HowWorkingElement from './howWorking_Element'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

function HowWorking(){    
    const context = useContext(ThemeContext).Sections.howWorking
    const methods = useContext(MethodsContext)

    const [state] = useState(context)
    let order = 0
    return (
        <div className="section__howWorking pb-4">
            <Container>
                <h4 className="text-center">{state.title}</h4>
                <h6 className="text-center pt-2">{methods.Comp_To_Html(state.title_meta)}</h6>
                
                {
                    state.elements.map((val) => {
                        order++
                        return (
                            <HowWorkingElement key={val.key} display={
                            {
                                decoration : val.decoration , 
                                stepText : val.stepText ,
                                hyperText : val.hyperText ,
                                bodyText : val.bodyText ,
                                imageSource : val.imageSource,
                                order : order
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