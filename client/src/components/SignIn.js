import React, { useState } from "react";
import styled from "styled-components";

const handleSubmit = (ev) => {
  ev.preventDefault();
};
const SignIn = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <Wrapper>
      <BoxContainer>
        <DIV className="Login">
          <Form
            onSubmit={handleSubmit}
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Label>
            email:
            <Input
              type="text"
              name="email"
              placeholder="your@email.com"
              value="tbd"
            />
          </Label>
          <Form
            onSubmit={handleSubmit}
            type="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <Label>
            name:
            <Input
              type="text"
              name="name"
              placeholder="your name here!"
              value="tbd"
            />
          </Label>
          <Form
            onSubmit={handleSubmit}
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          {/* <Label>
            password:
            <Input
              type="text"
              name="password"
              placeholder="your password"
              value="tbd"
            />
          </Label> */}
        </DIV>
      </BoxContainer>
      <Button className="Login">submit</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 51px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 222px;
  width: 411px;
  justify-content: center;
  border-radius: 21px;
  box-shadow: 2px 21px 111px hsl(47, 14%, 49%);
`;

const DIV = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: hsl(245, 74%, 20%);
  margin: 31px;
`;

const Form = styled.form`
  padding: 11px;
`;

const Label = styled.div`
  font-weight: lighter;
  font-size: 19px;
`;

const Input = styled.input`
  margin-left: 8px;
  border: none;
  border-radius: 3px;
  width: 100px;
`;

const Button = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 19px;
  border-radius: 5px;
  background-color: hsl(200, 46%, 77%);
  border: hsl(245, 74%, 20%) 1px solid;
  color: hsl(245, 74%, 20%);
  height: 31px;
  width: 91px;
  margin: 21px;
`;

export default SignIn;
