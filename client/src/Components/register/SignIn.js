import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../../redux/action/userAction';

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData,navigate));
  };

  return (
    <div className='signupForm'>
    <Form onSubmit={handleSubmit}>
      <h3>Saisir votre adresse e-mail pour connecter</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">               
            <Form.Control 
                className='input'
                value={formData.email}
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
                className='input'
                value={formData.password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
            />
        </Form.Group>
        <Button className='btn' variant="primary" type="submit">
            Continuer
        </Button>
        <a href='/Signup'>Sign-up ?</a>
    </Form>
  </div>
  )
}
