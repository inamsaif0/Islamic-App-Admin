import React from 'react'

const list = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Invoices List</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Invoice</a>
                                    </li>
                                    <li className="breadcrumb-item active">Invoices List
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
                    <section className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-header">
                                        <h4 className="card-title">Invoices</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <button className="btn btn-primary btn-sm"><i className="ft-plus white" /> Create Invoice</button>
                                            <span className="dropdown">
                                                <button id="btnSearchDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-warning btn-sm dropdown-toggle dropdown-menu-right"><i className="ft-download-cloud white" /></button>
                                                <span aria-labelledby="btnSearchDrop1" className="dropdown-menu mt-1 dropdown-menu-right">
                                                    <a href="#" className="dropdown-item"><i className="la la-calendar" /> Due Date</a>
                                                    <a href="#" className="dropdown-item"><i className="la la-random" /> Priority </a>
                                                    <a href="#" className="dropdown-item"><i className="la la-bar-chart" /> Balance Due</a>
                                                    <a href="#" className="dropdown-item"><i className="la la-user" /> Assign to</a>
                                                </span>
                                            </span>
                                            <button className="btn btn-success btn-sm"><i className="ft-settings white" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        {/* Invoices List table */}
                                        <div className="table-responsive">
                                            <table id="invoices-list" className="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <input type="checkbox" className="input-chk-all" />
                                                        </th>
                                                        <th>Date</th>
                                                        <th>Invoice #</th>
                                                        <th>Order No</th>
                                                        <th>Customer Name</th>
                                                        <th>Status</th>
                                                        <th>Due</th>
                                                        <th>Amount</th>
                                                        <th>Balance Due</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* PAID */}
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>10/05/2017</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop2" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>16/07/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-001012</a></td>
                                                        <td>PO-001201</td>
                                                        <td>Andrew Davis</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>20/07/2017</td>
                                                        <td>$ 152.00</td>
                                                        <td>$ 100.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop3" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>12/11/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-001401</a></td>
                                                        <td>PO-014561</td>
                                                        <td>Megan Stephens</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>16/11/2017</td>
                                                        <td>$ 1450.00</td>
                                                        <td>$ 50.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop4" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>15/05/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-001201</a></td>
                                                        <td>PO-015201</td>
                                                        <td>Judith Carlson</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>20/05/2017</td>
                                                        <td>$ 1340.00</td>
                                                        <td>$ 150.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop5" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop5" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>18/06/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-005801</a></td>
                                                        <td>PO-002201</td>
                                                        <td>Harry Banks</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>23/06/2017</td>
                                                        <td>$ 560.00</td>
                                                        <td>$ 20.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop6" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop6" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>26/08/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-001011</a></td>
                                                        <td>PO-001201</td>
                                                        <td>Jeremy Wright</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>30/08/2017</td>
                                                        <td>$ 1821.00</td>
                                                        <td>$ 325.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop7" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop7" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>11/11/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-002101</a></td>
                                                        <td>PO-004511</td>
                                                        <td>Brittany Lewis</td>
                                                        <td>
                                                            <span className="badge badge-default badge-success badge-lg">Paid</span>
                                                        </td>
                                                        <td>16/11/2017</td>
                                                        <td>$ 1524.00</td>
                                                        <td>$ 562.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop8" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop8" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    {/* Overdue By 1-15 Days */}
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/12/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-01112</a></td>
                                                        <td>PO-008941</td>
                                                        <td>Doris Reyes</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>11/12/2017</td>
                                                        <td>$ 5685.00</td>
                                                        <td>$ 450.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop9" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop9" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>12/05/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-008101</a></td>
                                                        <td>PO-004229</td>
                                                        <td>Walter Robertson</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>18/05/2017</td>
                                                        <td>$ 1256.00</td>
                                                        <td>$ 45.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop10" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop10" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>20/01/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-004801</a></td>
                                                        <td>PO-001201</td>
                                                        <td>Edward Evans</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>25/01/2017</td>
                                                        <td>$ 850.00</td>
                                                        <td>$ 20.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop11" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop11" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>11/03/2017</td>
                                                        <td><a href="#" className="text-bold-600">INV-006548</a></td>
                                                        <td>PO-001345</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>16/03/2017</td>
                                                        <td>$ 1235.00</td>
                                                        <td>$ 123.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop12" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop13" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop13" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 1-15 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop14" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop14" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    {/* Overdue By 16-30 Days */}
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 16-30 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop15" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop15" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 16-30 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop16" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop16" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 16-30 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop17" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop17" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 16-30 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop18" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop18" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-warning badge-lg">Overdue By 16-30 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop19" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop19" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    {/* Overdue By 31-45 Days */}
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 31-45 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop20" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop20" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 31-45 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop21" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop21" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 31-45 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop22" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop22" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 31-45 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop23" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop23" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 31-45 Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop24" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop24" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    {/* Overdue By 45+ Days */}
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 45+ Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop25" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop25" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 45+ Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop26" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop26" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 45+ Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop27" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop27" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" className="input-chk" />
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td><a href="#" className="text-bold-600">INV-001001</a></td>
                                                        <td>PO-005201</td>
                                                        <td>Elizabeth Washington</td>
                                                        <td>
                                                            <span className="badge badge-default badge-danger badge-lg">Overdue By 45+ Days</span>
                                                        </td>
                                                        <td>06/05/201</td>
                                                        <td>$ 1200.00</td>
                                                        <td>$ 200.00</td>
                                                        <td>
                                                            <span className="dropdown">
                                                                <button id="btnSearchDrop28" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                <span aria-labelledby="btnSearchDrop28" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item"><i className="la la-eye" /> Open Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-pencil" /> Edit Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-check" /> Complete Task</a>
                                                                    <a href="#" className="dropdown-item"><i className="ft-upload" /> Assign to</a>
                                                                    <a href="#" className="dropdown-item"><i className="la la-trash" /> Delete Task</a>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>
                                                            <input type="checkbox" className="input-chk-all" />
                                                        </th>
                                                        <th>Date</th>
                                                        <th>Invoice #</th>
                                                        <th>Order No</th>
                                                        <th>Customer Name</th>
                                                        <th>Status</th>
                                                        <th>Due</th>
                                                        <th>Amount</th>
                                                        <th>Balance Due</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        {/*/ Invoices table */}
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

export default list