import React , {useContext } from 'react'
import {Container} from 'react-bootstrap'

import HowWorkingElement from './howWorking_Element'

import {ThemeContext} from '../../../Context/ThemeContext'
function HowWorking(){

    let Comp_To_Html = (element)=>{
        return <div dangerouslySetInnerHTML={{__html : element}} />
    }
    
    const context = useContext(ThemeContext).Sections.howWorking
    return (
        <div className="section__howWorking pb-4">
            <Container>
                <h4 className="text-center">{context.title}</h4>
                <h6 className="text-center pt-2">{Comp_To_Html(context.title_meta)}</h6>
                
                {
                    context.elements.map((val) => {
                        return (
                            <HowWorkingElement display={
                            {
                                decoration : val.decoration , 
                                stepText : val.stepText ,
                                hyperText : val.hyperText ,
                                bodyText : val.bodyText ,
                                key : val.key
                            }
                            } />
                        )
                    })
                }
                
            </Container>
        </div>
    )
}

export default HowWorking