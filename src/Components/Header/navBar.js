import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'

class navBar extends React.Component{
    
    getBrand(arg){
        return (
            <Navbar.Brand href="/home"> {arg[0]} 
                <span className="text-red"> {arg[1]} </span>
            </Navbar.Brand>
        )
    }

    render(){
        return (
            <Navbar expand="lg">
                {this.getBrand(this.props.title)}

                <Navbar.Toggle aria-controls="navHeader"/>
                
                <Navbar.Collapse id="navHeader">
                    <Nav className="mr-lg-4 text-center mt-3 mt-lg-0">
                        {
                            this.props.list.map((val)=>{
                                return <Nav.Link href={val.href} key={
                                    //TODO Get it From Server
                                    'navHeader_'+Math.floor(Math.random() * 9849489)}
                                >{val.name}</Nav.Link>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navBar