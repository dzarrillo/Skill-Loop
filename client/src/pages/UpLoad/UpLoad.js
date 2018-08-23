import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class UpLoad extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <p>Name <span className="spanName">Don Zarrillo</span></p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p>Location: <span className="spanLocation">Middletown NJ</span></p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <h2>Skills</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <ul>
                            <li>
                                React
                            </li>

                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <input type="file" name="image_src" id="image_src" />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p>Or</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <button>Input Skills</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UpLoad;