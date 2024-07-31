import React from 'react'

const simpleregister = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 px-2 py-2 m-0">
                                    <div className="card-header border-0">
                                        <div className="card-title text-center">
                                            <img src="../../../app-assets/images/logo/logo-dark.png" alt="branding logo" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>Create Account</span>
                                        </h6>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <form className="form-horizontal form-simple" action="index.html" noValidate>
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                    <input type="text" className="form-control form-control-lg input-lg" id="user-name" placeholder="User Name" />
                                                    <div className="form-control-position">
                                                        <i className="ft-user" />
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                    <input type="email" className="form-control form-control-lg input-lg" id="user-email" placeholder="Your Email Address" required />
                                                    <div className="form-control-position">
                                                        <i className="ft-mail" />
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="password" className="form-control form-control-lg input-lg" id="user-password" placeholder="Enter Password" required />
                                                    <div className="form-control-position">
                                                        <i className="la la-key" />
                                                    </div>
                                                </fieldset>
                                                <button type="submit" className="btn btn-info btn-lg btn-block"><i className="ft-unlock" /> Register</button>
                                            </form>
                                        </div>
                                        <p className="text-center">Already have an account ? <a href="login-simple.html" className="card-link">Login</a></p>
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

export default simpleregister