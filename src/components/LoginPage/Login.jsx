import React, { useContext, useState } from 'react';
import FormInput from './loginFormInput.jsx';
import { Container, Form, Title, Button } from './style';
import { MainContext } from '../Context/HomeContext.js';

const Login = () => {
  const { setOnLoginPage } = useContext(MainContext);

  const [credential, setCredential] = useState({
    username: '',
    password: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username or Email address',
      errorMessage: 'Username or Email address is wrong',
      errorMessageIfEmpty: 'Field cannot be Empty',
      label: 'Username or Email address',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password is incorrect',
      errorMessageIfEmpty: 'Field cannot be Empty',
      label: 'Password',
      pattern: `Oybek`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOnLoginPage(true);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Log in</Title>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={credential[input.name]}
            onChange={onChange}
          />
        ))}

        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
