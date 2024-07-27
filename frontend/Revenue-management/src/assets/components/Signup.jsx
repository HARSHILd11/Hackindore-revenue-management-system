import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gif from"../img/waving.png"

import "./SignUp.css";



function SignUp() {
    const navigate = useNavigate()
    // All about field state change ----- -------- -------- ------ ------ ------

    const [userName, setuserName] = useState("")
    const [aadharNumber, setaadharNumber] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [password, setpassword] = useState("")


    let handleUserNameChange = (event) => {
        console.log(event.target);
        se(event.target.value)
    };
    let handleAadharChange = (event) => {
        console.log(event.target);
        setemail(event.target.value)
    };
    let handleMobileChange = (event) => {
        console.log(event.target);
        setpassword(event.target.value)
    };
    let handlePasswordChange = (event) => {
        console.log(event.target);
        setpassword(event.target.value)
    };

    // Data posting function -----------

    const postData = () => {
        console.log({ name, email, username, password })
        fetch("http://localhost:8080/signup",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    password: password,
                    email: email
                })
            }
        ).then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    notifyA(data.message)
                    navigate("/signin")
                }
                if (data.error) {
                    notifyB(data.error)
                }
            })

        // Toast Function ----------- ---------- --------- -------
        const notifyA = (msg) => toast.success(msg)
        const notifyB = (msg) => toast.error(msg)
    }

    return (
        <>
          

            <div className='signup-form-container'>
                <div className='signup-form-gif'> <img src={gif} alt="" /></div>
                <div className='signup-form w-100'><Form className='m-5'>

                    <Form.Group className="mb-3 " controlId="name">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' placeholder="Enter Full Name" value={name} name='name' onChange={handleUserNameChange} />
                        <Form.Text className="text-muted inp-bx">
                            We'll never share your email with anyone else.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="email">
                        <Form.Label>Aadhar Number</Form.Label>
                        <Form.Control type='email' placeholder="xyz@gmail.com" value={email} name='email' onChange={handleAadharChange} />
                        <Form.Text className="text-muted ">
                            We'll never share your email with anyone else.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="username">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type='text' placeholder="Enter Username" name='username' value={username} onChange={handleMobileChange} autoComplete='username' />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handlePasswordChange} autoComplete='email-first' />
                        <Form.Text className="text-muted">
                            Create a Strong Password
                        </Form.Text>
                    </Form.Group>

                

                    {/* <Button variant="primary" type="submit" onClick={postData}>
    Submit
</Button> */}
                    <input type="button" value="Sign-up" onClick={postData} className="signup-btn" />

                </Form></div>
            </div>
        </>
    );
}

export default SignUp;