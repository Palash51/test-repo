import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const Register = () => (
  <Grid textAlign="center" style={{ height: "100vh",  width: "70vh" }} verticalAlign="middle">
    <Grid.Column>
      <Header
        as="h2"
        textAlign="center"
        // image="/assets/logo_square.svg"
        content="Create your account"
        style={{ marginBottom: "32px" }}
      />
      <Form size="large">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="First name"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Input
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="E-mail address"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />
        <Button
          type="submit"
          color="purple"
          fluid
          size="large"
          style={{ marginBottom: "32px" }}
        >
          Sign up
        </Button>
      </Form>
      <p>
        Already a member? <Link to="/login">Sign in</Link>
      </p>
    </Grid.Column>
  </Grid>
    
);

export default Register;
