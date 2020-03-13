import React , { useState , useContext} from 'react'
import {Container , Row} from 'react-bootstrap'

import SkillsItem from './skillsItem'

import ThemeContext from '../../../Context/ThemeContext'
import FuncContext from '../../../Context/MethodsContext'

function Skills(){
    const Context = useContext(ThemeContext).Sections.skills
    const Methods = useContext(FuncContext)
    const [stateSkills] = useState(Context)
    return (
        <div className="section__ability">
            <Container>
                <h4 className="text-center">{stateSkills.title}</h4>
                <h6 className="text-center pt-2">{Methods.Comp_To_Html(stateSkills.title_meta)}</h6>

                <Row className="mt-5">
                    {
                        stateSkills.elements.map((val) => {
                            return <SkillsItem
                                key={val.skillsKey}
                                skillsTitle = {val.skillsTitle} childs={val.elements}/>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Skills