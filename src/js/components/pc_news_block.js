import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Card} from "antd";

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }
    render() {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link>
                </li>
            ))
            : "没有加载到数据";
        return (
            <div class="topNewsList">
                <Card>
                    <Router>
                        <ul>
                            {newsList}
                        </ul>
                    </Router>
                </Card>
            </div>
        );
    }
}