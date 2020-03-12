import React from 'react'
import {Row , Col} from 'react-bootstrap'

function howWorking_Element(props){

    let getStepText = (stepText , hyperText)=>{
        console.log(props)
        return (
            <h5 className="text-center text-lg-right"><kbd className="part">{stepText}</kbd>{hyperText}</h5>
        )
    }

    return(
        props.decoration === 'img_right' ? (
            <Row className="pt-5 d-flex align-items-center">
                <Col key={props.key} lg={8} className="d-flex flex-column justify-content-center d-lg-block order-2 order-lg-1">
                    {getStepText(props.stepText , 'در مورد کسب و کارتون صحبت میکنیم !')}
                    <p className="pt-3 text-center text-lg-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <kbd className="bg-red">صنعت چاپ</kbd> و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با <kbd className="bg-red">هدف بهبود</kbd> ابزارهای کاربردی می باشد</p>
                </Col>
                <Col lg={4} className="d-flex justify-content-center order-1 order-lg-2">
                    <img src="./style/images/discuss.png" className="img-fluid image__howWorking" alt=""/>
                </Col>
            </Row>
        ) : (
            <Row className="pt-5 d-flex align-items-center">
                <Col lg={8} className="d-flex flex-column justify-content-center d-lg-block order-1 order-lg-2">
                    <h5 className="text-center text-lg-right"><kbd className="part">مرحله اول</kbd>در مورد کسب و کارتون صحبت میکنیم !</h5>
                    <p className="pt-3 text-center text-lg-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <kbd className="bg-red">صنعت چاپ</kbd> و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با <kbd className="bg-red">هدف بهبود</kbd> ابزارهای کاربردی می باشد</p>
                </Col>
                <Col lg={4} className="d-flex justify-content-center order-2 order-lg-1">
                    <img src="./style/images/discuss.png" className="img-fluid image__howWorking" alt=""/>
                </Col>
            </Row>
        )
    )
}

export default howWorking_Element