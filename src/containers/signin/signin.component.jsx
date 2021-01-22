// import dependencies
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'


// import components 
import { Form, Input, Button, Checkbox, Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import actions 
import { login } from './../../redux/auth/auth.actions';

// import styling 
import './signin.styles.scss';


const SigninPage = () => {
    const dispatch = useDispatch();
    const { loadingLogin } = useSelector((state) => state.auth)

    const onFinish = values => {
        dispatch(login(values))
      };
    
      return (
         <div className="signin-container">
            <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                
                        <a className="login-form-forgot" href="/">
                        Forgot password
                        </a>
                    </Form.Item>
                
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {loadingLogin ? <Spin /> : 'Log In'} 
                        </Button>
                    </Form.Item>
                </Form>
            </div>
      
      );

};

export default SigninPage;
