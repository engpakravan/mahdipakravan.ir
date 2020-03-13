import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'
import {
    Link
} from "react-router-dom";

class navBar extends React.Component{
    
    getBrand(arg){
        return (
            <Navbar.Brand href="/"> {arg[0]} 
                <span className="text-red"> {arg[1]} </span>
            </Navbar.Brand>
        )
    }

    render(){
        return (
            <Navbar expand="lg" className="fixed-top" id="navHeader">
                {this.getBrand(this.props.title)}

                <Navbar.Toggle aria-controls="navHeader"/>
                
                <Navbar.Collapse id="navHeader">
                    <Nav className="mr-lg-4 text-center mt-3 mt-lg-0">
                        {
                            this.props.list.map((val)=>{
                                return <Link className="nav-link d-flex align-items-start" key={val.id} to={val.href}>{val.name}{
                                    val.new === true 
                                        ? (<span className="badge badge-danger mr-1">جدید</span>)
                                        : (<div></div>)
                                }</Link>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navBar