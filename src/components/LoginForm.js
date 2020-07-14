import React, { useState } from "react"
import { Button, Form, FormGroup,Label,Input, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import axios from 'axios'
import { toast } from "react-toastify"

const LoginForm = ({toggle, toggleForm, setToken}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleInput = (e)=>{
    if (e.target.name === "username"){
      setUsername(e.target.value)
    }
    if (e.target.name === "password"){
      setPassword(e.target.value)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        username: username,
        password: password
      }
    }).then((res) => {
      localStorage.setItem("token", res.data.auth_token)
      setToken(res.data.auth_token)
      toggle()
    }).catch(() => {
      toast.error("Please ensure that you keyed in the right username or password.")
    })
    
  }
  
  return (
    <>
      <ModalHeader toggle={toggle}>Login Form</ModalHeader>
      <ModalBody>
        <Form id="login-form" onSubmit={handleLogin}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleInput}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <input type="submit" className="btn btn-primary" form="login-form"  value="Login" />{' '}
        <Button color="warning" onClick={toggleForm}>Sign up now</Button>
      </ModalFooter>
    </>
  );
};
export default LoginForm