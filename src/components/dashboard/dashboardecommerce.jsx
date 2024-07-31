import React ,{useState}from 'react'

const Dashboardecommerce = () => {

    const [isHovering, setIsHovering] = useState(false);

    
    return (

        
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    



                    {/* eCommerce statistic */}
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="info">850</h3>
                                                <h6>Products Sold</h6>
                                            </div>
                                            <div>
                                                <i className="icon-basket-loaded info font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="warning">$748</h3>
                                                <h6>Net Profit</h6>
                                            </div>
                                            <div>
                                                <i className="icon-pie-chart warning font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="success">146</h3>
                                                <h6>New Customers</h6>
                                            </div>
                                            <div>
                                                <i className="icon-user-follow success font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="danger">99.89 %</h3>
                                                <h6>Customer Satisfaction</h6>
                                            </div>
                                            <div>
                                                <i className="icon-heart danger font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ eCommerce statistic */}
                    
             

                </div>
            </div>
        </div>
    )
}

export default Dashboardecommerce