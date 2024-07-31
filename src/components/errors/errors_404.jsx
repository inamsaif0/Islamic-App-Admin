import React from 'react'

const errors_404 = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 p-0">
                                <div className="card-header bg-transparent border-0">
                                    <h2 className="error-code text-center mb-2">404</h2>
                                    <h3 className="text-uppercase text-center">Page Not Found !</h3>
                                </div>
                                <div className="card-content">
                                    <fieldset className="row py-2">
                                        <div className="input-group col-12">
                                            <input type="text" className="form-control form-control-xl input-xl border-grey border-lighten-1 " placeholder="Search..." aria-describedby="button-addon2" />
                                            <span className="input-group-append" id="button-addon2">
                                                <button className="btn btn-lg btn-secondary border-grey border-lighten-1" type="button"><i className="ft-search" /></button>
                                            </span>
                                        </div>
                                    </fieldset>
                                    <div className="row py-2">
                                        <div className="col-12 col-sm-6 col-md-6">
                                            <a href="index.html" className="btn btn-primary btn-block"><i className="ft-home" /> Back to Home</a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6">
                                            <a href="search-website.html" className="btn btn-danger btn-block"><i className="ft-search" />  Advanced search</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        <p className="text-muted text-center col-12 py-1">© 2018 <a href="#">Modern </a>Crafted with <i className="ft-heart pink"> </i>                    by <a href="http://themeforest.net/user/pixinvent/portfolio" target="_blank">PIXINVENT</a></p>
                                        <div className="col-12 text-center">
                                            <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                                                <span className="la la-facebook" />
                                            </a>
                                            <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                                                <span className="la la-twitter" />
                                            </a>
                                            <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                                                <span className="la la-linkedin font-medium-4" />
                                            </a>
                                            <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-github">
                                                <span className="la la-github font-medium-4" />
                                            </a>
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

export default errors_404