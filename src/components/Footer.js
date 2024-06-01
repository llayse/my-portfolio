import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/myiconlcsg.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""></img></a>
                            <a href="#"><img src={navIcon3} alt=""></img></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved llayse</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}