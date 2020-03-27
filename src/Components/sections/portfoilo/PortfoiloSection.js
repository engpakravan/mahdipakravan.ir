import React , {useContext , useEffect , useState} from 'react'
import {Container} from 'react-bootstrap'

import PortfoiloItem from './portfoiloItem'

import ThemeContext from '../../../Context/ThemeContext'
import MethodsContext from '../../../Context/MethodsContext'

const axios = require('axios')
function PortfoiloSection(props){
    const context = useContext(ThemeContext)
    const methods = useContext(MethodsContext)

    const [state , setState] = useState(context.Sections.portfoilo)

    useEffect(()=>{
        axios(`/getSection/portfoilo`).then(val => {
            setState(val.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="section__portfoilo">
            <Container>
            {
            state.loading 
                ? (methods.get_spinner_w100())
                : (
                <div>
                <h4 className="text-center">{props.noTitle ? ('') : state.title}</h4>
                <h6 className="text-center pt-2">{props.noTitle ? ('') : methods.Comp_To_Html(state.title_meta)}</h6>
                {props.type === 'section' 
                 ? (
                    <div>
                        <PortfoiloItem data={state.elements[0]} key={state.elements[0]._id} Constants={state.Constant_data} order={state.elements[0].order}/>
                        <PortfoiloItem data={state.elements[1]} key={state.elements[1]._id} Constants={state.Constant_data} order={state.elements[1].order}/>
                    </div>
                 )
                 : (
                    state.elements.map(val => {
                        return <PortfoiloItem data={val} key={val._id} Constants={state.Constant_data} order={val.order}/>
                    })
                 )}
                </div>
                )
            }
            </Container>
        </div>
        )
}

export default PortfoiloSection