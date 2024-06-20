"use client";
import { Button, Input, Form, Card, message, Typography } from "antd";
import { useState } from "react";

export default function Login() {
  var [email, setEmail] = useState("");

  function handleButtonClick() {
    message.info(email);
  }

  function handleChange(evt) {
    email = evt.target.value;
    setEmail(email);
  }

  return (
    <Card title="My Login Form" className="max-w-md mx-auto my-44">
      <Typography.Title className="text-green-900">
        Hello world
      </Typography.Title>
      <p>Please Enter your details below</p>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Email" onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleButtonClick}>
        Login
      </Button>
    </Card>
  );
}
