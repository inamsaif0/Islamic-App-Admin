import React from 'react'

const loginbg = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 m-0">
                                    <div className="card-header border-0">
                                        <div className="card-title text-center">
                                            <div className="p-1">
                                                <img src="../../../app-assets/images/logo/logo-dark.png" alt="branding logo" />
                                            </div>
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>Easily Using</span>
                                        </h6>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body pt-0 text-center">
                                            <a href="#" className="btn btn-social mb-1 mr-1 btn-outline-facebook">
                                                <span className="la la-facebook" />
                                                <span className="px-1">facebook</span>
                                            </a>
                                            <a href="#" className="btn btn-social mb-1 mr-1 btn-outline-google">
                                                <span className="la la-google-plus font-medium-4" />
                                                <span className="px-1">google</span>
                                            </a>
                                        </div>
                                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2">
                                            <span>OR Using Account Details</span>
                                        </p>
                                        <div className="card-body pt-0">
                                            <form className="form-horizontal" action="index.html">
                                                <fieldset className="form-group floating-label-form-group">
                                                    <label htmlFor="user-name">Your Username</label>
                                                    <input type="text" className="form-control" id="user-name" placeholder="Your Username" />
                                                </fieldset>
                                                <fieldset className="form-group floating-label-form-group mb-1">
                                                    <label htmlFor="user-password">Enter Password</label>
                                                    <input type="password" className="form-control" id="user-password" placeholder="Enter Password" />
                                                </fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-6 col-12 text-center text-sm-left">
                                                        <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me"> Remember Me</label>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" className="card-link">Forgot Password?</a></div>
                                                </div>
                                                <button type="submit" className="btn btn-outline-info btn-block"><i className="ft-unlock" /> Login</button>
                                            </form>
                                        </div>
                                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                                            <span>New to Modern ?</span>
                                        </p>
                                        <div className="card-body">
                                            <a href="register-with-bg.html" className="btn btn-outline-danger btn-block"><i className="ft-user" /> Register</a>
                                        </div>
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

export default loginbg