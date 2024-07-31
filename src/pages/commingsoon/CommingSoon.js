import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const CommingSoon = () => {
    return (
        <>
            {/* <Header /> */}

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        {/* coming soon flat design */}
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-6 col-10 p-0">
                                    <div className="card card-transparent box-shadow-0 border-0">
                                        <div className="card-content">
                                            <div className="text-center">
                                                <h5 className="card-text pb-2 white">WE ARE LAUNCHING SOON.</h5>
                                                <img src="../../../app-assets/images/logo/logo-light-lg.png" className="img-responsive block width-300 mx-auto" width={300} alt="bg-img" />
                                                <div id="clockFlat" className="card-text getting-started pt-1 mt-2 white d-inline-block" />
                                                <div className="col-12 pt-1">
                                                    <p className="card-text lead white">Our website is under construction.</p>
                                                </div>
                                                <div className="col-12 text-center pt-2">
                                                    <p className="socialIcon card-text">
                                                        <a href="#"><i className="la la-facebook-square white" /></a>
                                                        <a href="#"><i className="la la-twitter-square white" /></a>
                                                        <a href="#"><i className="la la-google-plus-square white" /></a>
                                                        <a href="#"><i className="la la-linkedin-square white" /></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*/ coming soon flat design */}
                    </div>
                </div>
            </div>


            {/* <Footer /> */}

        </>

    )
}

export default CommingSoon