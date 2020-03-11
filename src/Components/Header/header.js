import React from 'react'

import NavBar from './navBar'
import {Container , Col , Row} from 'react-bootstrap'

class Header extends React.Component{

    getList(){
        return [
            {
                id : 1 , 
                name : 'خانه' ,
                href : "/home"
            },
            {
                id : 2 , 
                name : 'چطوری کار میکنیم ؟' ,
                href : "/howWorking"
            },
            {
                id : 3 , 
                name : 'توانایی ها' ,
                href : "/skills"
            },
            {
                id : 4 , 
                name : 'نمونه کار ها' ,
                href : "/portfoilo"
            },
            {
                id : 5 , 
                name : 'تماس با ما' ,
                href : "/contactMe"
            }
        ]
    }

    render(){
        return (
            this.props.HeaderJumborton ? (
                // Show Header With HeaderJumborton
                <header>
                <NavBar title={['وبسایت' , 'مهدی پاکروان']} list={this.getList()} />
                <Container>
                    <Row className="mt-5 d-flex justify-content-lg-between">
                        <Col lg={5} className="d-flex flex-column justify-content-end d-lg-block">
                            <div className="img-holder" id="imageHeader">
                                <img src={require("../../Images/Programmer.png")} className="img-fluid" alt=""/>
                            </div>
                        </Col>

                        <Col id="headerContent" lg={7} className="pr-md-5 pt-lg-4 d-flex flex-column align-items-center d-lg-block">
                            <h2 class="pt-5">سلام من <span class="text-red">مهدی</span> هستم !</h2>
                            <h5 class="pt-3">میتونم با <kbd>جاوااسکریپت</kbd> آرزو های شما رو بسازم !</h5> 
                            <p class="pt-3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <div class="social pt-2 d-flex justify-content-center d-lg-block">
                                <a href="#" class="social-item">
                                    <span class="ti-1x ti-facebook"></span>
                                </a>
                                <a href="#" class="social-item">
                                    <span class="ti-1x ti-linkedin"></span>
                                </a>
                                <a href="#" class="social-item">
                                    <span class="ti-1x ti-instagram"></span>
                                </a>
                                <a href="#" class="social-item">
                                    <span class="ti-1x ti-twitter"></span>
                                </a>
                                <a href="#" class="social-item">
                                    <span class="ti-1x ti-github"></span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </header>
            ) : (
                <header>
                <NavBar title={['وبسایت' , 'مهدی پاکروان بدون']} list={this.getList()} />
                </header>
            )
        )
    }
}

export default Header