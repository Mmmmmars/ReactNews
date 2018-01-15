import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from "antd";
const TabPane = Tabs.TabPane;
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";
import PCProduct from "./pc_products";

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="/src/images/carousel_1.jpg"/></div>
                                    <div><img src="/src/images/carousel_2.jpg"/></div>
                                    <div><img src="/src/images/carousel_3.jpg"/></div>
                                    <div><img src="/src/images/carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock
                                count={6}
                                type="guoji"
                                width="400px"
                                cardTitle="国际头条"
                                imageWidth="112px"/>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={21} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际新闻" key="2">
                                <PCNewsBlock count={21} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs className="tabs_product">
                            <TabPane tab="腾讯产品" key="1">
                                <PCProduct/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock
                                count={10}
                                type="guonei"
                                width="100%"
                                cardTitle="国内新闻"
                                imageWidth="132px"/>
                            <PCNewsImageBlock
                                count={20}
                                type="yule"
                                width="100%"
                                cardTitle="娱乐新闻"
                                imageWidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}