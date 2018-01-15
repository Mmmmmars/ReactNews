import React from 'react';
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Card,
    notification
} from 'antd';
const FormItem = Form.Item;

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        };
    };
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({comments: json});
            })
    };
    handleSubmit() {
        event.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this
            .props
            .form
            .getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.componentDidMount();
            })
    }
    addUserCollection() {
        var myFetchOptions = {
            methon: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json =>{
                //收藏成功后进行全局提醒
                notification['success']({message:'ReactNews提醒',description:'收藏文章成功!'});
            });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length
            ? comments.map((comment, index) => (
                <Card
                    key={index}
                    title={comment.UserName}
                    extra={<a href="#" > 发布于 {comment.datetime} </a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            : '没有加载到任何评论';
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        <hr/>
                        <Form
                            layout="vertical"
                            onSubmit={this
                            .handleSubmit
                            .bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark')(<Input type="textarea" placeholder="请填写评论"/>)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏</Button>
                        </Form>
                        {commentList}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default CommonComments = Form.create({})(CommonComments);