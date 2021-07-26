import React from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.less';
import loginIcon from '../../assets/login/icon.png';

export default function Login(props) {

    const onFinish = (values) => {
        if (values.username && values.password) {
            props.history.push('/home');
        }
        console.log('Received values of form: ', values);
    };

    return (
        <div className='login'>
            <header>
                <img src={loginIcon} alt='后台管理系统图标' />
                <span>后台管理项目</span>
            </header>
            <section>
                <div className='formContent'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </section>
        </div>
    )
}
