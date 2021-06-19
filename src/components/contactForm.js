import React from 'react';
import emailjs from 'emailjs-com';
import { Row, Col } from "antd";

export default function contactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_39sxbwm', 'template_r3drt76', e.target, 'user_nNazSfeMpZxzGyO0zvcTR')
            .then((result) => {
                console.log(result.text);
                if (result.text == "OK") {
                    alert("Message Sent Successfully.");
                    window.location.href="/thanks";
                }
            }, (error) => {
                console.log(error.text);
                alert("Unknown error occurred. Please try again later.");
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <input type="hidden" name="to_name" value="Vikram" />
            <Row>
                <Col span={24}>
                    <label className="w-100 form-label" htmlFor="from_name">Your Name</label>
                    <input type="text" name="from_name" placeholder="Your Name" className="w-100 form-input" id="from_name" required />
                </Col>
                <Col span={24}>
                    <label className="w-100 form-label" htmlFor="user_email">Your Email</label>
                    <input type="email" name="user_email" placeholder="Your Email" className="w-100 form-input" id="user_email" required />
                </Col>
                <Col span={24}>
                    <label className="w-100 form-label" htmlFor="message">Your Message</label>
                    <textarea name="message" rows="6" placeholder="Your Message" className="w-100 form-input" id="message" required />
                </Col>
                <Col span={24}>
                    <input type="submit" value="Send" className="w-100 form-input" value="Send" />
                </Col>
            </Row>
        </form>
    );
}