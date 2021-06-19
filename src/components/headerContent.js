import React from "react";
import { Row, Col } from "antd";

class HeaderContent extends React.Component {
    render() {
        return (
            <Row>
                <Col span={8} className="te-left">
                    <a href="/" className="logo">V</a>
                </Col>
                <Col span={8} offset={8} className="te-right">
                    <a href="https://www.freelancer.com/u/vkpandit1909" title="Hire Me" className="hire-me">Hire Me</a>
                </Col>
            </Row>
        );
    }
}

export default HeaderContent;