// Here, we create the component for signup
import React, { useRef} from 'react'
import {Form, Button, Card } from 'react-bootstrap'
import {Button} from "semantic-ui-react";

export default function signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>

          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>

            Sign Up
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account?
    </div>
  </>
  )
}
