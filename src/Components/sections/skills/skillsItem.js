import React from 'react'
import {Col} from 'react-bootstrap'

import Progress from './skillsProgress'
function SkillsItems(props){
    return(
        <Col md={6} lg={4}>
           <h5 className="text-center mt-lg-0">{props.skillsTitle}</h5>     
           <div className="skills">
                {
                    props.childs.map(val =>{
                        return <Progress progress={val.percent} key={Math.floor(Math.random() * 987969)} skillName={val.name} />
                    })
                }
           </div>        
        </Col>
    )
}

export default SkillsItems