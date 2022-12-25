import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import { AddProduct } from './AddProduct';
import { Navbar } from './Navbar';

function Login() {
   

    const [userDetail, setUserDetail] = useState({
        userid: "",
        password: ""
    })

    const [usertype, setUsertype] = useState('');

    function onTextFieldChange(e) {
        setUserDetail({
            [e.target.name]:e.target.value
        })
        console.log(userDetail)
    }

    function handleChange(e) {
        setUsertype(e.target.value)
    }


    function handleLogin() {
        console.log("type ",usertype)
        if(usertype=='admin')
        {
            localStorage.setItem("isLoggedIn","true")
            localStorage.setItem("isAdmin", "true")
            window.location.href = './addProduct'
        }
        else
        {
            localStorage.setItem("isLoggedIn", "true")
            localStorage.setItem("isAdmin", "false")
            window.location.href = './viewProduct'
            // console.log("Admin not found")
        }
    }

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
            <MDBRow>
                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                </MDBCol>
                <MDBCol col='4' md='6'>
                    <p>Select Login type</p>
                    <MDBRadio name='usertype' id='usertype' value='admin' label='Admin' checked={usertype === 'admin'} inline onChange={handleChange} />
                    <MDBRadio name='usertype' id='usertype' value='user' label='User' checked={usertype === 'user'} inline onChange={handleChange} />
                    <br /><br />
                    <MDBInput wrapperClass='mb-4' label='User ID' name='userid' id='userid' type='text' size="lg" onChange={onTextFieldChange} />
                    <MDBInput wrapperClass='mb-4' label='Password' name='password' id='password' type='password' size="lg" onChange={onTextFieldChange} />
                    {/* <div className='text-center text-md-start mt-4 pt-2 justify-content-center'>
                        <MDBBtn className="mb-0 px-5" size='sm' onClick={handleLogin}>Login</MDBBtn>
                    </div> */}
                    <button type="submit" class="btn btn-primary offset-md-5" onClick={handleLogin}>Login</button>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;