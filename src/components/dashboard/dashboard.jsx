import React from 'react'

const Dashboardmain = () => {
  return (
    
    <div class="app-content content">
                <div class="content-wrapper">
                    <div class="content-header row">
                    </div>
                    <div class="content-body">
                        <div className="row">
                            <div className="col-xl-6 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Revenue</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body pt-0">
                                            <div className="row mb-1">
                                                <div className="col-6 col-md-4">
                                                    <h5>Current week</h5>
                                                    <h2 className="danger">$82,124</h2>
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <h5>Previous week</h5>
                                                    <h2 className="text-muted">$52,502</h2>
                                                </div>
                                            </div>
                                            <div className="chartjs">
                                                <canvas id="thisYearRevenue" width={400} style={{ position: 'absolute' }} />
                                                <canvas id="lastYearRevenue" width={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="card pull-up">
                                            <div className="card-header bg-hexagons">
                                                <h4 className="card-title">Hit Rate
                                                    <span className="danger">-12%</span>
                                                </h4>
                                                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                                <div className="heading-elements">
                                                    <ul className="list-inline mb-0">
                                                        <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-content collapse show bg-hexagons">
                                                <div className="card-body pt-0">
                                                    <div className="chartjs">
                                                        <canvas id="hit-rate-doughnut" height={275} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="card pull-up">
                                            <div className="card-content collapse show bg-gradient-directional-danger ">
                                                <div className="card-body bg-hexagons-danger">
                                                    <h4 className="card-title white">Deals
                                                        <span className="white">-55%</span>
                                                        <span className="float-right">
                                                            <span className="white">152</span>
                                                            <span className="red lighten-4">/200</span>
                                                        </span>
                                                    </h4>
                                                    <div className="chartjs">
                                                        <canvas id="deals-doughnut" height={275} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="card pull-up">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h6 className="text-muted">Order Value </h6>
                                                            <h3>$ 88,568</h3>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="icon-trophy success font-large-2 float-right" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="card pull-up">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h6 className="text-muted">Calls</h6>
                                                            <h3>3,568</h3>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="icon-call-in danger font-large-2 float-right" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Revenue, Hit Rate & Deals */}
                        {/* Emails Products & Avg Deals */}
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Emails</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body pt-0">
                                            <p>Open rate
                                                <span className="float-right text-bold-600">89%</span>
                                            </p>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-1">
                                                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="pt-1">Sent
                                                <span className="float-right">
                                                    <span className="text-bold-600">310</span>/500</span>
                                            </p>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-1">
                                                <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '48%' }} aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Top Products</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a href="#">Show all</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="border-top-0">iPone X</th>
                                                            <td className="border-top-0">2245</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">One Plus</th>
                                                            <td>1850</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Samsung S7</th>
                                                            <td>1550</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title text-center">Average Deal Size</h4>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-md-6 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                                    <h6 className="danger text-bold-600">-30%</h6>
                                                    <h4 className="font-large-2 text-bold-400">$12,536</h4>
                                                    <p className="blue-grey lighten-2 mb-0">Per rep</p>
                                                </div>
                                                <div className="col-md-6 col-12 text-center">
                                                    <h6 className="success text-bold-600">12%</h6>
                                                    <h4 className="font-large-2 text-bold-400">$18,548</h4>
                                                    <p className="blue-grey lighten-2 mb-0">Per team</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Emails Products & Avg Deals */}
                        {/* Total earning & Recent Sales  */}
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="earning-chart position-relative">
                                            <div className="chart-title position-absolute mt-2 ml-2">
                                                <h1 className="display-4">$1,596</h1>
                                                <span className="text-muted">Total Earning</span>
                                            </div>
                                            <canvas id="earning-chart" className="height-450" />
                                            <div className="chart-stats position-absolute position-bottom-0 position-right-0 mb-2 mr-3">
                                                <a href="#" className="btn round btn-danger mr-1 btn-glow">Statistics <i className="ft-bar-chart" /></a>
                                                <span className="text-muted">for the <a href="#" className="danger darken-2">last year.</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="recent-sales" className="col-12 col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Recent Sales</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right" href="invoice-summary.html" target="_blank">View all</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content mt-1">
                                        <div className="table-responsive">
                                            <table id="recent-orders" className="table table-hover table-xl mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="border-top-0">Product</th>
                                                        <th className="border-top-0">Customers</th>
                                                        <th className="border-top-0">Categories</th>
                                                        <th className="border-top-0">Popularity</th>
                                                        <th className="border-top-0">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-truncate">iPone X</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Rebecca Jones" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+8 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-outline-danger round">Mobile</button>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-truncate">$ 1200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">iPad</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+5 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-outline-success round">Tablet</button>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                                <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-truncate">$ 1190.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">OnePlus</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Rebecca Jones" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+3 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-outline-danger round">Mobile</button>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-truncate">$ 999.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">ZenPad</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-11.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-12.png" alt="Avatar" />
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-outline-success round">Tablet</button>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                                <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-truncate">$ 1150.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">Pixel 2</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="Avatar" />
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-outline-danger round">Mobile</button>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-truncate">$ 1180.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Total earning & Recent Sales  */}
                        {/* Analytics map based session */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card box-shadow-0">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col-md-9 col-12">
                                                <div id="world-map-markers" className="height-450" />
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="card-body text-center">
                                                    <h4 className="card-title mb-0">Visitors Sessions</h4>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p className="pb-1">Sessions by Browser</p>
                                                            <div id="sessions-browser-donut-chart" className="height-200" />
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="sales pr-2 pt-2">
                                                                <div className="sales-today mb-2">
                                                                    <p className="m-0">Today's
                                                                        <span className="success float-right"><i className="ft-arrow-up success" /> 6.89%</span>
                                                                    </p>
                                                                    <div className="progress progress-sm mt-1 mb-0">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                                <div className="sales-yesterday">
                                                                    <p className="m-0">Yesterday's
                                                                        <span className="danger float-right"><i className="ft-arrow-down danger" /> 4.18%</span>
                                                                    </p>
                                                                    <div className="progress progress-sm mt-1 mb-0">
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '65%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default Dashboardmain