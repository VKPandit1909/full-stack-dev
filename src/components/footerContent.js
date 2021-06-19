import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

class FooterContent extends React.Component {
    render() {
        return (
            <Row id="footer" className="mt-5">
                <Col lg={8} sm={24} xs={24} className="te-left">
                    © 2021. All rights reserved
                </Col>
                <Col lg={16} sm={24} xs={24} className="te-right foot-text">
                    <a href="/terms" title="Terms Of Service" rel="noopener">Terms Of Service</a>
                    <a href="/privacy-policy" className="ml-20" title="Privacy Policy" rel="noopener">Privacy Policy</a>
                </Col>
            </Row>
        );
    }
}

export default FooterContent;