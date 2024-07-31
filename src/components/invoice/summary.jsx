import React from 'react'

const summary = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Invoice Summary</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Invoice</a>
                                    </li>
                                    <li className="breadcrumb-item active">Invoice Summary
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="content-header-right col-md-6 col-12">
                        <div className="dropdown float-md-right">
                            <button className="btn btn-danger dropdown-toggle round btn-glow px-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownBreadcrumbButton"><a className="dropdown-item" href="#"><i className="la la-calendar-check-o" /> Calender</a>
                                <a className="dropdown-item" href="#"><i className="la la-cart-plus" /> Cart</a>
                                <a className="dropdown-item" href="#"><i className="la la-life-ring" /> Support</a>
                                <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="la la-cog" /> Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section id="invoice-summary">
                        {/* Total Receivables */}
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Total Receivables</h4>
                                <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                <div className="heading-elements">
                                    <ul className="list-inline mb-0">
                                        <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                        <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                        <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-body overflow-hidden row">
                                    <div className="col-md-9 col-sm-12 border-right-grey border-right-lighten-2">
                                        <div id="invoice-total-recievables" className="height-400 echart-container" />
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 1200.00</h5>
                                                <p className="list-group-item-text">Current</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 450.00</h5>
                                                <p className="list-group-item-text">Overdue by 1-15 days</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 250.00</h5>
                                                <p className="list-group-item-text">Overdue by 16-30 days</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 150.00</h5>
                                                <p className="list-group-item-text">Overdue by 31-45 days</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 50.00</h5>
                                                <p className="list-group-item-text">Overdue by 45+ days</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Total Receivables */}
                        {/*/ Sales and Expenses */}
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Sales and Expenses</h4>
                                <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                <div className="heading-elements">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            This Fiscal Year
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Previous Fiscal Year</a>
                                            <a className="dropdown-item" href="#">Last 12 Months</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-body overflow-hidden row">
                                    <div className="col-md-9 col-sm-12 border-right-grey border-right-lighten-2">
                                        <div id="sales-and-expenses" className="height-300 echart-container" />
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 12080.00</h5>
                                                <p className="list-group-item-text primary">Total Sales</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 8500.00</h5>
                                                <p className="list-group-item-text success">Total Receipts</p>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <h5 className="list-group-item-heading">$ 560.00</h5>
                                                <p className="list-group-item-text warning">Total Expenses</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Sales and Expenses */}
                        <div className="row">
                            {/* Your Top Expenses */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Your Top Expenses</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    This Fiscal Year
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item" href="#">Previous Fiscal Year</a>
                                                    <a className="dropdown-item" href="#">Last 12 Months</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body ">
                                            <div id="your-top-expenses" className="height-250 echart-container" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Your Top Expenses */}
                            {/* Sales, Receipts and Dues */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Sales, Receipts and Dues</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body  px-0 py-0">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>Sales</th>
                                                            <th>Receipts</th>
                                                            <th>Due</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Today</th>
                                                            <td>$ 250.00</td>
                                                            <td>$ 200.00</td>
                                                            <td>$ 50.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">This Week</th>
                                                            <td>$ 450.00</td>
                                                            <td>$ 300.00</td>
                                                            <td>$ 150.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">This Month</th>
                                                            <td>$ 800.00</td>
                                                            <td>$ 600.00</td>
                                                            <td>$ 200.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">This Quarter</th>
                                                            <td>$ 1200.00</td>
                                                            <td>$ 950.00</td>
                                                            <td>$ 250.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">This Year</th>
                                                            <td>$ 1500.00</td>
                                                            <td>$ 1200.00</td>
                                                            <td>$ 300.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sales, Receipts and Dues */}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default summary