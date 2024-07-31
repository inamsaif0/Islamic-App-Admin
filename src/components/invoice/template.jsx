import React from 'react'

const template = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Invoice Template</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Invoice</a>
                                    </li>
                                    <li className="breadcrumb-item active">Invoice Template
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
                    <section className="card">
                        <div id="invoice-template" className="card-body">
                            {/* Invoice Company Details */}
                            <div id="invoice-company-details" className="row">
                                <div className="col-md-6 col-sm-12 text-center text-md-left">
                                    <div className="media">
                                        <img src="../../../app-assets/images/logo/logo-80x80.png" alt="company logo" className />
                                        <div className="media-body">
                                            <ul className="ml-2 px-0 list-unstyled">
                                                <li className="text-bold-800">Modern Creative Studio</li>
                                                <li>4025 Oak Avenue,</li>
                                                <li>Melbourne,</li>
                                                <li>Florida 32940,</li>
                                                <li>USA</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 text-center text-md-right">
                                    <h2>INVOICE</h2>
                                    <p className="pb-3"># INV-001001</p>
                                    <ul className="px-0 list-unstyled">
                                        <li>Balance Due</li>
                                        <li className="lead text-bold-800">$ 12,000.00</li>
                                    </ul>
                                </div>
                            </div>
                            {/*/ Invoice Company Details */}
                            {/* Invoice Customer Details */}
                            <div id="invoice-customer-details" className="row pt-2">
                                <div className="col-sm-12 text-center text-md-left">
                                    <p className="text-muted">Bill To</p>
                                </div>
                                <div className="col-md-6 col-sm-12 text-center text-md-left">
                                    <ul className="px-0 list-unstyled">
                                        <li className="text-bold-800">Mr. Bret Lezama</li>
                                        <li>4879 Westfall Avenue,</li>
                                        <li>Albuquerque,</li>
                                        <li>New Mexico-87102.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12 text-center text-md-right">
                                    <p>
                                        <span className="text-muted">Invoice Date :</span> 06/05/2017</p>
                                    <p>
                                        <span className="text-muted">Terms :</span> Due on Receipt</p>
                                    <p>
                                        <span className="text-muted">Due Date :</span> 10/05/2017</p>
                                </div>
                            </div>
                            {/*/ Invoice Customer Details */}
                            {/* Invoice Items Details */}
                            <div id="invoice-items-details" className="pt-2">
                                <div className="row">
                                    <div className="table-responsive col-sm-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item &amp; Description</th>
                                                    <th className="text-right">Rate</th>
                                                    <th className="text-right">Hours</th>
                                                    <th className="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>
                                                        <p>Create PSD for mobile APP</p>
                                                        <p className="text-muted">Simply dummy text of the printing and typesetting industry.</p>
                                                    </td>
                                                    <td className="text-right">$ 20.00/hr</td>
                                                    <td className="text-right">120</td>
                                                    <td className="text-right">$ 2400.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <p>iOS Application Development</p>
                                                        <p className="text-muted">Pellentesque maximus feugiat lorem at cursus.</p>
                                                    </td>
                                                    <td className="text-right">$ 25.00/hr</td>
                                                    <td className="text-right">260</td>
                                                    <td className="text-right">$ 6500.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <p>WordPress Template Development</p>
                                                        <p className="text-muted">Vestibulum euismod est eu elit convallis.</p>
                                                    </td>
                                                    <td className="text-right">$ 20.00/hr</td>
                                                    <td className="text-right">300</td>
                                                    <td className="text-right">$ 6000.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 text-center text-md-left">
                                        <p className="lead">Payment Methods:</p>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <table className="table table-borderless table-sm">
                                                    <tbody>
                                                        <tr>
                                                            <td>Bank name:</td>
                                                            <td className="text-right">ABC Bank, USA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Acc name:</td>
                                                            <td className="text-right">Amanda Orton</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IBAN:</td>
                                                            <td className="text-right">FGS165461646546AA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SWIFT code:</td>
                                                            <td className="text-right">BTNPP34</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-12">
                                        <p className="lead">Total due</p>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Sub Total</td>
                                                        <td className="text-right">$ 14,900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>TAX (12%)</td>
                                                        <td className="text-right">$ 1,788.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-bold-800">Total</td>
                                                        <td className="text-bold-800 text-right"> $ 16,688.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Made</td>
                                                        <td className="pink text-right">(-) $ 4,688.00</td>
                                                    </tr>
                                                    <tr className="bg-grey bg-lighten-4">
                                                        <td className="text-bold-800">Balance Due</td>
                                                        <td className="text-bold-800 text-right">$ 12,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-center">
                                            <p>Authorized person</p>
                                            <img src="../../../app-assets/images/pages/signature-scan.png" alt="signature" className="height-100" />
                                            <h6>Amanda Orton</h6>
                                            <p className="text-muted">Managing Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Invoice Footer */}
                            <div id="invoice-footer">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12">
                                        <h6>Terms &amp; Condition</h6>
                                        <p>You know, being a test pilot isn't always the healthiest business
                                            in the world. We predict too much for the next year and yet far
                                            too little for the next 10.</p>
                                    </div>
                                    <div className="col-md-5 col-sm-12 text-center">
                                        <button type="button" className="btn btn-info btn-lg my-1"><i className="la la-paper-plane-o" /> Send Invoice</button>
                                    </div>
                                </div>
                            </div>
                            {/*/ Invoice Footer */}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default template