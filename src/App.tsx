import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './components/MainLayout'
import { Button, Checkbox, Input, Form } from 'antd';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // useState router 체크 후 isLogin false일 경우 baseURL로 redirect

  return (
    <div>
      {isLogin ? <MainLayout /> :
      <>
      <div style={{ display: 'flex', height: '720px'}}>
      <div style={{
        display: 'block',
        margin: 'auto'
      }}>
        <p>LOGO AREA</p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={()=>{setIsLogin(true)}}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        </div>
        </>

      }
    </div>
  );
  // 94b3df
}

export default App;
