import './signup.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/action/userAction';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state) => state.user);

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
        dispatch(addUser(formData,navigate));
        console.log(user)
    };

    return (
      <div className='signupForm'>
        <Form onSubmit={handleSubmit}>
          <h3>Saisir votre adresse e-mail pour nous rejoindre</h3>
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
        </Form>
      </div>
    );
}
