"use client";
import { Button, Input, Form, Card } from "antd";

export default function Login() {
  return (
    <Card title="My Login Form" className="sm:w-1/2 m-auto mt-52">
      <p>Please Enter your details below</p>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Email" />
        </Form.Item>

        <Form.Item>
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Button type="primary">Login</Button>
    </Card>
  );
}
