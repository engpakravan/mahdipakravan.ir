import React , {useContext , useState , useEffect} from 'react'
import {Container} from 'react-bootstrap'

import HowWorkingElement from './howWorking_Element'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

const axios = require('axios')
function HowWorking(){    
    const context = useContext(ThemeContext)
    const methods = useContext(MethodsContext)
    
    const [state , setState] = useState(context.Sections.howWorking)
    
    useEffect(()=>{
        axios(`/getSection/HowWorking`)
            .then(val => {
                setState(val.data)
            }).catch(err => {
                setState({error : true , loading : true})
            })
    },[])

    let order = 0
    return (
        <div className="section__howWorking pb-4">
            {
                state.loading ? (
                    state.error 
                        ? (methods.errorComponent())
                        : (methods.get_spinner_w100())
                )
                : (
            <Container>
                <h4 className="text-center">{state.title}</h4>
                <h6 className="text-center pt-2">{methods.Comp_To_Html(state.title_meta)}</h6>
                {state.elements.map((val) => { 
                    order++
                    return (
                        <HowWorkingElement key={val._id} display={
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
                )
            }
                
        </div>
    )
}

export default HowWorking