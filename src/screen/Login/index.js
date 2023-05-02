import "./LoginScreen.css";
import Slider from "react-slick";

import { useState } from "react";
import { Components } from "../../components/";
import { useTranslation } from "react-i18next";
import { Card, Tabs, Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
export const LogInScreen = () => {
  const { t } = useTranslation();
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [FromH, setFromH] = useState("50%");
  const handleTabChange = (key) => {
    setActiveTabKey(key);
    if (key === "1") {
      setFromH("50%");
    } else {
      setFromH("80%");
      console.log(key);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "gold",
        }}
      >
        <Card
          bordered={false}
          style={{ width: 500, height: FromH, paddingTop: "-5px" }}
        >
          <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
            <TabPane tab={t("L")} key="1">
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
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ marginLeft: "38%", width: 100 }}
                    loading={true}
                    disabled={true}
                    color="black"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab={t("R")} key="2">
              <Form
                name="signup"
                className="signup-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not a valid email address",
                    },
                    {
                      required: true,
                      message: "Please input your email address",
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Form.Item
                  name="referral"
                  rules={[
                    {
                      message: "Please enter a valid referral code",
                    },
                  ]}
                >
                  <Input
                    prefix={<ShareAltOutlined />}
                    placeholder="Referral Code"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="agree" valuePropName="checked" noStyle>
                    <Checkbox>
                      I have read the <a href="/">agreement</a>
                    </Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signup-form-button"
                  >
                    Sign up
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </>
  );
};
