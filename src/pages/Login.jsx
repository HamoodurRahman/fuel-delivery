import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="LoginPageContainer" id='login'>
                <div className="LoginPageInnerContainer">
                    <div className="ImageContianer">
                        <img src="https://i.imgur.com/MYZd7of.png" alt="" className="GroupImage" />
                    </div>
                    <div className="LoginFormContainer">
                        <div className="LoginFormInnerContainer">
                            <div className="LogoContainer">
                                <img src="https://i.imgur.com/jz5bPWn.png" alt="" className="logo" />
                            </div>
                            <header className="header">Log in</header>
                            <header className="subHeader">Welcome Back! <b>Happy to see you again! </b><br/>Please Enter your Details</header>
                            <form>
                                <div className="inputContainer">
                                    <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" alt="" className="labelIcon" /><span>Email
                                        Address*</span></label>
                                    <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address" />
                                </div>
                                <div className="inputContainer">
                                    <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png" alt="" className="labelIcon" /><span>Password*</span></label>
                                    <input type="password" className="input" id="emailAddress" placeholder="Enter your Password" />
                                </div>
                                <div className="OptionsContainer">
                                    <div className="checkboxContainer">
                                        <input type="checkbox" id="RememberMe" className="checkbox" />
                                        <label htmlFor="RememberMe">Remember me</label>
                                    </div>
                                    <Link href="#" className="ForgotPasswordLink">Forgot Password?</Link>
                                </div>
                                <button className="LoginButton">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
