import React from "react";
import { Layout } from "antd";
import HeaderContent from "./headerContent";
import MainContent from './content';
import FooterContent from './footerContent';
const { Header, Footer, Content } = Layout;

class HomePage extends React.Component {
    render() {
        return (
            <div className="App dark container">
                <Layout>
                    <Header>
                        <HeaderContent />
                    </Header>
                    <Content>
                        <MainContent />
                    </Content>
                    <Footer>
                        <FooterContent />
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default HomePage;