import React from "react";
import { Row, Col } from "antd";
import { ApiOutlined, CodeOutlined, ControlOutlined, DeploymentUnitOutlined, FacebookFilled, FacebookOutlined, GithubOutlined, LinkedinFilled, LinkedinOutlined, MobileOutlined, SettingOutlined, TwitterOutlined } from "@ant-design/icons";
import client from "../assets/logo/client.png";
import ServizPic from "../assets/servizz.PNG";
import ContactForm from "./contactForm";

class MainContent extends React.Component {
    render() {
        return (
            <div className="main">
                <Row className="mt-15">
                    <Col xs={24} sm={16} className="te-left">
                        <strong className="intro">Hi, I'm Vikram.</strong>
                    </Col>
                    <Col xs={24} sm={16} className="te-left">
                        <h1 className="intro2">I'm a full-stack developer and solutions architect.</h1>
                    </Col>
                    <Col xs={24} sm={16} className="te-left">
                        <p className="desc">I have been sharing my need for speed since 2019 when I started developing websites on the internet. I help businesses build elegant, robust and scalable software with the best tools.</p>
                    </Col>
                </Row>
                <Row className="mt-12">
                    <Col xs={24} sm={16} className="te-left">
                        <h2 className="service-text">Here's How Can I Help You</h2>
                    </Col>
                    <Col span={24} className="te-left">
                        <Row>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <CodeOutlined className="service-icon" />
                                <h4 className="service-title">Backend Software Development</h4>
                                <p className="service-desc">I set the foundation for long-term stability, performance, and predictability. Using the latest tools and methodologies, I continuously produce high-quality code that is easy to maintain and scale. In a nutshell: I'm your backend.</p>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <ControlOutlined className="service-icon" />
                                <h4 className="service-title">Frontend Software Development</h4>
                                <p className="service-desc">Frontend development is not just fun and games, it's hell, knives, forks, spoons, and serving plates all in one kitchen! Allow me to worry about all the complexities of your project. I will provide you with the most beautiful experience possible for your customers.</p>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="mb-20">
                                <DeploymentUnitOutlined className="service-icon" />
                                <h4 className="service-title">Devops</h4>
                                <p className="service-desc">Sometimes you just want to Netflix and chill, but other times you want to deliver software at high velocity to mercilessly beat down your competition. Yeah, I'm the guy that sets up your infrastructure and deployment processes for fun... and um well profit.</p>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <SettingOutlined className="service-icon" />
                                <h4 className="service-title">System Architecture</h4>
                                <p className="service-desc">Software doesn't exist in a vacuum. It needs a database, firewalls, electro-conspicutators and many other components that form the bigger picture. You need someone that knows what the heck they're talking about here.</p>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <ApiOutlined className="service-icon" />
                                <h4 className="service-title">API Development</h4>
                                <p className="service-desc">It sounds technical, and it is. Your customers (might) love you more if you give them a way to interact with your software with their software. Whether it's REST, GraphQL or SOAP, look no further, I'm the API whisperer.</p>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="mb-20">
                                <MobileOutlined className="service-icon" />
                                <h4 className="service-title">Mobile App Development</h4>
                                <p className="service-desc">If it's the selfie generation that you are targeting, you'd better have a mobile application in place that delivers that instant Dopamine hit. I use Cordova to cost-effectively build fast mobile apps for Android and iOS.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-12">
                    <Col xs={24} sm={16} className="te-left">
                        <h2 className="service-text">I'm Currently Working On</h2>
                    </Col>
                    <Col span={24} className="te-left">
                        <Row>
                            <Col xs={24} sm={12} md={12} className="pr-20 mb-20">
                                <h3><a href="https://servizz.in/" className="project-visit">Servizz</a></h3>
                                <p className="project-title">Best Computer & Laptop repair services in Mumbai. with seven-plus services at the best price🤩</p>
                                <p className="project-desc">I’ve been responsible for the design, customization and some customization in software development behind the Servizz platform. Initially, we started with Servizz app and later on we added Servizz website.</p>
                                <a href="https://servizz.in/" title="Visit Servizz" className="ico-visit" target="_blank" rel="noopener">Visit Servizz</a>
                            </Col>
                            <Col xs={24} sm={12} md={12} className="mb-20">
                                <img className="project-img" src={ServizPic} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-12">
                    <Col xs={24} sm={16} className="te-left">
                        <h2 className="service-text">Some Of My Recent Projects</h2>
                    </Col>
                    <Col span={24} className="te-left">
                        <Row>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <h4 className="service-title">Saverr - Story, Video & Reels Downloader for Instagram</h4>
                                <p className="service-desc">This is an all in one saver for Instagram that lets you download pretty much every type of content from Instagram. So Install Saverr App to start downloading your favorite Instagram videos and photos now!!!</p>
                                <a href="https://play.google.com/store/apps/details?id=com.saverr.android" title="Visit Saverr" className="ico-visit" target="_blank" rel="noopener">Visit Saverr</a>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <h4 className="service-title">Satus Saverr: Status Downloader for Whatsapp</h4>
                                <p className="service-desc">This app has an inbuilt video player to play video statuses so you can always play them before downloading. Similarly, Image viewer helps you see image statuses before you actually download them.</p>
                                <a href="https://play.google.com/store/apps/details?id=com.statussaver.mobile" title="Visit Status Saver" className="ico-visit" target="_blank" rel="noopener">Visit Status Saver</a>
                            </Col>
                            <Col xs={24} sm={16} md={8} className="pr-20 mb-20">
                                <h4 className="service-title">SVKKENDHRA</h4>
                                <p className="service-desc">Service booking app for prohitors with detailed report on bookings made. You can add, edit your booking very easily. It is an user friendly app.</p>
                                <a href="https://play.google.com/store/apps/details?id=com.iyerapp.svkkendhra" title="Visit SVKKENDHRA" className="ico-visit" target="_blank" rel="noopener">Visit SVKKENDHRA</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-12">
                    <Col xs={24} sm={16} className="te-left">
                        <h2 className="service-text">About Me</h2>
                    </Col>
                    <Col span={24} className="te-left">
                        <Row>
                            <Col xs={16} sm={24} xs={24} md={16} className="pr-20 mb-20">
                                <p className="service-desc" style={{ fontSize: 18 }}>I'm a full stack developer. I've created dozens of websites and also some apps. I had also made dashboards and worked on WordPress during my part time job under the company.</p>
                                <p className="service-desc" style={{ fontSize: 18 }}>I can deliver the most efficient and cost effective website under the client required timeline. I am working in this field for about 2 years.</p>
                                <p className="service-desc" style={{ fontSize: 18 }}>I'm expertise at making websites, apps and dashboards using technologies like HTML, CSS, JS, jQuery, AJAX, JSON, React JS and other web development technologies. As I said I'm a full stack developer so I had also worked on backend using PHP, Node Js and python along with mysql & mongodb.</p>
                                <p className="service-desc" style={{ fontSize: 18 }}>Along with all these, I've developed apps for clients using Cordova and React Native and some apps are available on play store too. you can just check those out by the link given above there.</p>
                            </Col>
                            <Col xs={8} sm={24} xs={24} md={8} className="mb-20">
                                <p className="f-20">&quot;I had seen Vikram's proposal on my project posted on freelancer that he's willing to work at lowest price. I was skeptical at first but when I saw the results he delivered, I was amazed! We had a complex project delivered to us in a record time. An extremely capable & helpful developer.&quot;</p>
                                <div className="flex-between">
                                    <img src={client} alt="Client Image" className="client-icn" />
                                    <div className="ml-20">
                                        <strong className="f-18">Mr. Ramesh Subburaj</strong>
                                        <p className="service-desc mb-0">CEO & Founder - <span className="f-18">OnAndGo Technologies</span> / Bangalore, India</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="contact" className="mt-12">
                    <Col xs={24} sm={16} className="te-left">
                        <h2 className="service-text">Get In Touch</h2>
                    </Col>
                    <Col span={24} className="te-left">
                        <Row>
                            <Col xs={8} sm={24} xs={24} md={8} className="pr-20 mb-20">
                                <p className="service-desc" style={{ fontSize: 20 }}>Let's connect, chat about your project, or simply stay in touch.</p>
                                <p></p>
                                <h6>Email Me</h6>
                                <a href="mailto:vkpandit1909@gmail.com" title="My Email Address" style={{ fontSize: 18 }}>vkpandit1909@gmail.com</a>
                                <p></p>
                                <h6>Online</h6>
                                <div className="social">
                                    <a href="https://github.com/VKPandit1909" className="icon github" title="Follow me on Github" rel="author noopener"><GithubOutlined /></a>
                                    <a href="https://twitter.com/codec_stack" className="icon twitter" title="Follow me on Twitter" rel="author noopener"><TwitterOutlined /></a>
                                    <a href="https://www.instagram.com/vickykumar476/" className="icon linkedin" title="Connect with me on LinkedIn" rel="author noopener"><LinkedinFilled /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100008456130552" className="icon youtube" title="Follow me on Facebook" rel="noopener"><FacebookFilled /></a>
                                </div>
                            </Col>
                            <Col xs={16} sm={24} xs={24} md={16} className="pl-20 mb-20" id="contact_form">
                                <ContactForm />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MainContent;