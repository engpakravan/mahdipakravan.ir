import React , { useState , useContext , useEffect} from 'react'
import {Container , Row} from 'react-bootstrap'

import SkillsItem from './skillsItem'

import ThemeContext from '../../../Context/ThemeContext'
import FuncContext from '../../../Context/MethodsContext'

const axios = require('axios')
function Skills(){
    const Context = useContext(ThemeContext)
    const Methods = useContext(FuncContext)
    const [state , setState] = useState(Context.Sections.skills)

    useEffect(()=>{
        axios(`/getSection/Skills`).then(val => {
            setState(val.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="section__ability">
            {
                state.loading ? (Methods.get_spinner_w100()) 
                    : (
                        <Container>
                            <h4 className="text-center">{state.title}</h4>
                            <h6 className="text-center pt-2">{Methods.Comp_To_Html(state.title_meta)}</h6>

                            <Row className="mt-5">
                                {
                                    state.elements.map((val) => {
                                        return <SkillsItem
                                            key={val.skillsKey}
                                            skillsTitle = {val.skillsTitle} childs={val.elements}/>
                                    })
                                }
                            </Row>
                        </Container>
                    )
            }
        </div>
    )
}

export default Skills