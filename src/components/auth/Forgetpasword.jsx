import React from 'react'
import { useState ,useEffect } from "react";
// import Swal from "sweetalert2";
// import { Loader } from "react-overlay-loader"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

// import BaseUrl from '../../baseurl/BaseUrl';

const ForgetPassword = () => {

    const [Email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [myemail, setmyemail] = useState('')

    const Navigate = useNavigate()

    const handleInputChange = (event, func) => {
        func(event.target.value);
    }

    // const forgetpass = () => {
    //     var formdata = new FormData();
    //     formdata.append("Email", Email);

    //     var requestOptions = {
    //         method: 'POST',
    //         body: formdata,
    //         redirect: 'follow'
    //     };

    //     fetch(`${BaseUrl.baseUrl}/forgetpasswords`, requestOptions)
    //         .then(response => response.json())
    //         .then(result => {

    //             if (result.status ) {
    //                 console.log(result)

    //                 Swal.fire({
    //                     title: "Success",
    //                     text: result.message,
    //                     icon: "success",
    //                     confirmButtonColor: "#29BF12",
    //                 });
    //                 setmyemail(result.Email)
    //                 Navigate("/verifycode", { state: { userEmail: result.Email } })

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
    //         )
    //         .catch(error => console.log('error', error));
    // }


    useEffect(() => {
        document.body.classList.remove(
            "2-columns", "fixed-navbar", "menu-collapsed"
        );
        document.body.classList.add(
            "vertical-layout", "vertical-menu-modern", "1-column", "blank-page", "blank-page", "pace-done", "menu-collapsed"
            // "vertical-layout", "vertical-menu-modern", "1-column", "bg-full-screen-image", "blank-page", "blank-page", "pace-done", "menu-collapsed"
        );
    }, [])


    return (
        <div className="app-content content" style={{ marginLeft: 0 }}>
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 px-2 py-2 m-0">
                                    <div className="card-header border-0 pb-5 ">
                                        <div className="card-title text-center">
                                            <img src="../../../app-assets/images/logo/logoIslamic.jpeg" height={110}  alt="branding logo" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>We will send you a link to reset password.</span>
                                        </h6>
                                    </div>
                                    <div className="card-content pb-5">
                                        <div className="card-body">
                                            <form className="form-horizontal" action="login-simple.html" noValidate>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="email" className="form-control form-control-lg input-lg" onChange={(e) => handleInputChange(e, setEmail)} value={Email} name="emailaddress" id="id_email" required maxLength={64} placeholder="Email Address" />
                                                    <div className="form-control-position">
                                                        <i className="ft-mail" />
                                                    </div>
                                                </fieldset>
                                                <button type="button" 
                                                // onClick={forgetpass}
                                                 className="btn btn-outline-info btn-lg btn-block mt-5"><i className="ft-unlock" /> Recover Password</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-footer border-0">
                                        {/* <p className="float-sm-left text-center"><Link to="/login" className="card-link">Login</Link></p> */}
                                        {/* <p className="float-sm-right text-center">New to Modern ? <Link to="/register" className="card-link">Create Account</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default ForgetPassword