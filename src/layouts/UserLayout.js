import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import localStorageUtil from '@/utils/storage';
class UserLayout extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //no-console
        console.log('Received values of form: ', values);
      }
      localStorageUtil.setItem('user', { ...values, userId: 1 });
      this.props.history.push('/');
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ width: 300, margin: '100px auto', textAlign: 'center' }}
      >
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登入
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(UserLayout);
