import React, { useState ,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';

import Baseurl from '../../Baseurl/Baseurl';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {Loader} from 'react-overlay-loader';

const Simplelogin = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [loader,setLoader]=useState(false)

    const Navigate = useNavigate();

    const handleInputChange = (event, func) => {
        func(event.target.value);
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            loginUser();
        }
    };

    // this is used for add bg on login page

    // useEffect(() => {
    //     document.body.classList.remove(
    //         "2-columns", "fixed-navbar", "menu-collapsed"
    //     );
    //     document.body.classList.add(
    //         "vertical-layout", "vertical-menu-modern", "1-column", "bg-full-screen-image", "blank-page", "blank-page", "pace-done", "menu-collapsed"
    //     );
    // }, [])

    const loginUser = () => {

        Navigate('/dashboard')
        // var formdata = new FormData();
        // formdata.append("email", Email);
        // formdata.append("password", Password);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json'
        //     },
        //     body: formdata,
        //     redirect: 'follow'
        // };
        // setLoader(true)

        // fetch(`${Baseurl.baseUrl}/admin_login`, requestOptions)
        //     .then(response => response.json())
        //     .then(result =>
        //         {
        //             setLoader(false)
        //             if (result.status == true) {
        //                 console.log(result)
        //                 localStorage.setItem('AdminToken', result.token);
        //                 // localStorage.setItem('AdminData', JSON.stringify(result.data));
        //                 console.log("status check==================", localStorage.getItem('AdminToken'))
    
        //                 Swal.fire({
        //                     icon: 'success',
        //                     title: result.message,
        //                     showConfirmButton: false,
        //                     timer: 2000,
        //                 })
    
        //                 Navigate('/dashboard')
    
        //             }
        //             else {
        //                 Swal.fire({
        //                     title: "Oops",
        //                     text: result.message,
        //                     icon: "error",
        //                     confirmButtonColor: "#29BF12",
        //                 });
        //             }
    
        //         }
        //          )
        //     .catch(error => console.log('error', error));

    }



    return (
        <>
        {loader == true ?
            <Loader fullPage loading />:null
        }
            <div className="app-content content ahmed " style={{ marginLeft: 0 }}>
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 col-10 box-shadow-2 p-0">
                                    <div className="card border-grey border-lighten-3 m-0">
                                        <div className="card-header border-0 py-5">
                                            <div className="card-title text-center">
                                                <div className="p-1">
                                                    {/* <img src="../../../app-assets/images/logo/1.png" height={72} alt="branding logo" /> */}
                                                    <img src="../../../app-assets/images/logo/logoIslamic.jpeg" height={110} alt="branding logo" />

                                                   
                                                    {/* public\app-assets\images\logo\Pyurelywhite-01.png */}
                                                </div>
                                            </div>
                                            <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                                <span>Login with Islamic App</span>
                                            </h6>
                                        </div>
                                        <div className="card-content pb-5">
                                            <div className="card-body">
                                                <form className="form-horizontal form-simple" action="index.html" noValidate>
                                                    <fieldset className="form-group position-relative has-icon-left mb-0">
                                                        <input className="form-control form-control-lg input-lg" onChange={(e) => handleInputChange(e, setEmail)} defaultValue={Email} type="email" name="emailaddress" id="id_email" required maxLength={64} placeholder="Email Address" onKeyDown={(e) => handleKeypress(e)} />
                                                        <div className="form-control-position">
                                                            <i className="ft-user" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="form-group position-relative has-icon-left mt-2">
                                                        <input className="form-control form-control-lg input-lg" onChange={(e) => handleInputChange(e, setPassword)} defaultValue={Password} type="password" name="password" id="id_password" required maxLength={64} placeholder="Password" onKeyDown={(e) => handleKeypress(e)} />
                                                        <div className="form-control-position">
                                                            <i className="la la-key" />
                                                        </div>
                                                    </fieldset>
                                                    <div className="form-group row">
                                                        <div className="col-md-6 col-12 text-center text-md-left">
                                                            {/* <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me"> Remember Me</label>
                                                        </fieldset> */}
                                                        </div>
                                                        <div className="col-md-6 col-12 text-center text-md-right"><Link to="/forgetpassword" className="card-link">Forgot Password?</Link></div>
                                                    </div>
                                                    <button type="button" onClick={loginUser} className="btn btn-info btn-lg btn-block mt-5"><i className="ft-unlock" /> Login </button>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <div className="card-footer">
                                        <div className=""> */}
                                        {/* <p className="float-sm-left text-center m-0"><Link to="/forgetpassword" className="card-link">Recover password</Link></p> */}
                                        {/* <p className="float-sm-right text-center m-0">New to Moden Admin?<Link to="/register" className="card-link">Sign Up</Link></p> */}
                                        {/* </div>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Simplelogin