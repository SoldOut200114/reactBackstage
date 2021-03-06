import React from "react";

import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.less";
import loginIcon from "../../assets/common/icon.png";

export default function Login(props) {
  const checkUserInfo = (user) => {
    ajax.reqLogin(user).then((res) => {
      sessionStorage.setItem("isLogin", true);
      props.history.push("/home");
    });
  };

  return (
    <div className="login">
      <header>
        <img src={loginIcon} alt="后台管理系统图标" />
        <span>后台管理项目</span>
      </header>
      <section>
        <div className="formContent">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={checkUserInfo}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
}
