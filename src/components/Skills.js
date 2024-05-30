import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import image1 from "../assets/img/image1.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Pie } from './Pie';


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Hey</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <Pie percentage="50" text="Item1"></Pie>
                                </div>
                                <div className="item">
                                    <Pie percentage="90" text="Item2"></Pie>
                                </div>
                                <div className="item">
                                    <Pie percentage="80" text="Item3"></Pie>
                                </div>
                                <div className="item">
                                    <Pie percentage="30" text="Item4"></Pie>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}

    