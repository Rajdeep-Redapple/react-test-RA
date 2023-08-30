import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bs from 'react-bootstrap';

function LoginPage(){

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        // fetch('https://127.0.0.1:3009/login')
        // .then(response => response.json())
        // .then(data => console.log(data));

        // await fetch('https://jsonplaceholder.typicode.com/posts', {
        // method: 'POST',
        // body: JSON.stringify({
        //     title: title,
        //     body: body,
        //     userId: Math.random().toString(36).slice(2),
        // }),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        // },
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     setPosts((posts) => [data, ...posts]);
        //     setTitle('');
        //     setBody('');
        // })
        // .catch((err) => {
        //     console.log(err.message);
        // });
    }

    return(
        <bs.Container>
            <div className='row h-100vh align-items-center'>
            <div className='col-md-6 d-block'>
                <h1 className='login-head d-block'>Unlock Your World</h1>
                <h3 className='login-subhead d-block'>Welcome Back</h3>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
                <bs.Card>
                <bs.Card.Header>
                    <h2>Welcome</h2>
                </bs.Card.Header>
                <bs.Card.Body>
                    <bs.Form>
                        <bs.Form.Group className="mb-3" controlId="formBasicEmail">
                            <bs.Form.Label>Email address</bs.Form.Label>
                            <bs.Form.Control type="email" placeholder="Enter email" className='formInput shadow-none' required/>
                        </bs.Form.Group>
                        <bs.Form.Group className="mb-3" controlId="formBasicPassword">
                            <bs.Form.Label>Password</bs.Form.Label>
                            <bs.Form.Control type="password" placeholder="Enter password"  className='formInput shadow-none' required/>
                        </bs.Form.Group>
                        <bs.Form.Group className="mb-3 text-end" controlId="formBasicButton">
                            <bs.Button type='submit' className='formBtn' onClick={ handleLoginSubmit }>Login</bs.Button>
                        </bs.Form.Group>
                    </bs.Form>
                </bs.Card.Body>
                </bs.Card>
            </div>
            </div>
        </bs.Container>
    )
}

export default LoginPage;