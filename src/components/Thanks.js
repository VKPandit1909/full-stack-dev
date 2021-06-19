import React from 'react';

import { Layout } from "antd";
import HeaderContent from "./headerContent";
import FooterContent from './footerContent';
const { Header, Footer, Content } = Layout;

export default function Thanks() {
    return (
        <div className="App dark container">
            <Layout>
                <Header>
                    <HeaderContent />
                </Header>
                <Content>
                    <div class="thanks">
                        <h1>Thanks</h1>
                        <p>Thanks for reaching out to me, I’ll get back to you soon.</p>
                    </div>
                </Content>
                <Footer>
                    <FooterContent />
                </Footer>
            </Layout>
        </div>
    )
}