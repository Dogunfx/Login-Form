"use client";
import { Button, Input, Form, Card, message, Typography } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var router = useRouter();

  function handleLogin() {
    if (email == "dogunfx@gmail.com" && password == "12345") {
      message.success("Login Successful");
      router.push("/dashboard");
    } else {
      message.error("Login Fail");
    }
  }

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }
  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  return (
    <Card title="My Login Form" className="max-w-md mx-auto my-44">
      <Typography.Title className="text-green-900">Login Form</Typography.Title>
      <p>Please Enter your details below</p>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Email" onChange={handleEmailInput} />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Enter Password"
            onChange={handlePasswordInput}
          />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
}
