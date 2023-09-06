import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import * as bs from 'react-bootstrap';
import Loader from './loader';
import Messagebox from './message-div';
import { ReactDOM } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(){

    const navigate = useNavigate();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [loader, setLoader] = useState(false);
    let [message, setMessage] = useState('');

    const handleLoginSubmit = async(e) => {
        // add loader here
        setLoader(true);
        e.preventDefault();

        const api_url = process.env.REACT_APP_API_BASE_URL;

        await fetch(`${api_url}login`, {
        method: 'POST',
        body: JSON.stringify({
            email : email,
            password : password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.err);
            if(!data.err){
                setMessage(data.message);
                navigate('/dashboard', { replace: true });
            }
            else{
                setMessage(data.message);
            }
            setLoader(false)
        })
        .catch((err) => {
            console.log(err.message);
            setMessage(err.message);
            setLoader(false)
        });
    }

    return(
        <div className="container-fluid">
            <bs.Container>
                <div className='row h-100vh align-items-center'>
                    <div className='col-md-6 d-block'>
                        <h1 className='login-head d-block'>Unlock Your World</h1>
                        <h3 className='login-subhead d-block'>Welcome Back</h3>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <bs.Card>
                            <bs.Card.Header>
                                <h2>Login Here</h2>
                                < Messagebox message= {message}/>
                            </bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Form>
                                    <bs.Form.Group className="mb-3" controlId="formBasicEmail">
                                        <bs.Form.Label>Email Address</bs.Form.Label>
                                        <bs.Form.Control type="email" placeholder="Enter email" className='formInput shadow-none' onChange = { (e) => {setEmail(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3" controlId="formBasicPassword">
                                        <bs.Form.Label>Password</bs.Form.Label>
                                        <bs.Form.Control type="password" placeholder="Enter password"  className='formInput shadow-none' onChange = { (e) => {setPassword(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3 text-end" controlId="formBasicButton">
                                        <bs.Button type='submit' className='formBtn shadow-none' onClick={ handleLoginSubmit }>Login</bs.Button>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3" controlId="formBasicButton">
                                        Don't have an Account? <Link to='/register'>Click Here</Link>
                                    </bs.Form.Group>
                                </bs.Form>
                            </bs.Card.Body>
                        </bs.Card>
                    </div>
                </div>
            </bs.Container>
            < Loader visible = {loader}/>
        </div>
    )
}

export default LoginPage;