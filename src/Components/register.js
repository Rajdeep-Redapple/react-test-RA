import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import * as bs from 'react-bootstrap';
import Loader from './loader';
import Messagebox from './message-div';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
function RegisterPage(){

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [mobile, setMobile] = useState('');
    let [loader, setLoader] = useState(false);
    let [repassword, setRepassword] = useState('');
    let [message, setMessage] = useState('');

    const handleRegistationSubmit = async(e) => {
        // add loader here
        setLoader(true);
        e.preventDefault();

        if(password !== repassword){
            setMessage('Password should match in both fields');
            setLoader(false);
            return false;
        }

        await fetch('http://localhost:3009/api/v1/register-user', {
        method: 'POST',
        body: JSON.stringify({
            name : name,
            mobile : '9012398729',
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
                        <h3 className='login-subhead d-block'>Welcome</h3>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <bs.Card>
                            <bs.Card.Header>
                                <h2>Sign Up Here</h2>
                                < Messagebox message= {message}/>
                            </bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Form>
                                    <bs.Form.Group className="mb-3" controlId="formBasicEmail">
                                        <bs.Form.Label>Full Name</bs.Form.Label>
                                        <bs.Form.Control type="text" placeholder="Enter your name" className='formInput shadow-none' onChange = { (e) => {setName(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3" controlId="formBasicEmail">
                                        <bs.Form.Label>Email Address</bs.Form.Label>
                                        <bs.Form.Control type="email" placeholder="Enter email" className='formInput shadow-none' onChange = { (e) => {setEmail(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    {/* <bs.Form.Group className="mb-3" controlId="formBasicEmail">
                                        <bs.Form.Label>Mobile Number</bs.Form.Label>
                                        <bs.Form.Control type="text" placeholder="Enter mobile number" className='formInput shadow-none' onChange = { (e) => {setMobile(e.target.value)} } required/>
                                    </bs.Form.Group> */}
                                    <bs.Form.Group className="mb-3" controlId="formBasicPassword">
                                        <bs.Form.Label>Password</bs.Form.Label>
                                        <bs.Form.Control type="password" placeholder="Enter password"  className='formInput shadow-none' onChange = { (e) => {setPassword(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3" controlId="formBasicPassword">
                                        <bs.Form.Label>Password Again</bs.Form.Label>
                                        <bs.Form.Control type="password" placeholder="Enter password again"  className='formInput shadow-none' onChange = { (e) => {setRepassword(e.target.value)} } required/>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3 text-end" controlId="formBasicButton">
                                        <bs.Button type='submit' className='formBtn shadow-none' onClick={ handleRegistationSubmit }>Register</bs.Button>
                                    </bs.Form.Group>
                                    <bs.Form.Group className="mb-3" controlId="formBasicButton">
                                        Already have an Account? <Link to= '/login'>Login Here</Link>
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

export default RegisterPage;