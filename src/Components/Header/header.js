import React , {useContext , useState , useEffect} from 'react'

import NavBar from './navBar'
import HeaderElement from './header_element'

import ThemeContext from '../../Context/ThemeContext'
import MethodContext from '../../Context/MethodsContext'

const axios = require('axios')
function Header(props){
    const context = useContext(ThemeContext)
    const Methods = useContext(MethodContext)
    
    const [state , setState] = useState(context.Header)
    
    useEffect(()=>{
        axios(`/Header`)
            .then(val => {
                setState(val.data)
            }).catch(err => {
                setState({error : true , header_loading : true})
            })
    },[])
    return (
        ! state.header_loading 
            ? (
                <header>
                <NavBar title={state.Brand} list={state.list} />
                {props.HeaderJumborton ? (
                    <HeaderElement 
                        programmerImage={state.programmerImage} 
                        image_loading = {state.image_loading}
                        Welcome = {state.Welcome}
                        what_can_i_do = {state.what_can_i_do}
                        header_long_text = {state.header_long_text}
                        Methods={Methods} />
                ) : ('')}
                </header>
            ) : (
                state.error 
                    ? (
                        <header>
                            {Methods.errorComponent()}
                        </header>
                    )
                    : (
                        <header>
                            {Methods.get_spinner_w100()}
                        </header>
                    )
            )
        )
}

export default Header