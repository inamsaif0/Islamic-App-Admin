import React from 'react'

const userlist = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Contacts</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Users</a>
                                    </li>
                                    <li className="breadcrumb-item active">Contacts
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
                <div className="content-detached content-right">
                    <div className="content-body">
                        <section className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-head">
                                        <div className="card-header">
                                            <h4 className="card-title">All Contacts</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <button className="btn btn-primary btn-sm"><i className="ft-plus white" /> Add Contacts</button>
                                                <span className="dropdown">
                                                    <button id="btnSearchDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-warning dropdown-toggle dropdown-menu-right btn-sm"><i className="ft-download-cloud white" /></button>
                                                    <span aria-labelledby="btnSearchDrop1" className="dropdown-menu mt-1 dropdown-menu-right">
                                                        <a href="#" className="dropdown-item"><i className="ft-upload" /> Import</a>
                                                        <a href="#" className="dropdown-item"><i className="ft-download" /> Export</a>
                                                        <a href="#" className="dropdown-item"><i className="ft-shuffle" /> Find Duplicate</a>
                                                    </span>
                                                </span>
                                                <button className="btn btn-default btn-sm"><i className="ft-settings white" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            {/* Task List table */}
                                            <div className="table-responsive">
                                                <table id="users-contacts" className="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle">
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td>+658-254-256</td>
                                                            <td className="text-center"><i className="la la-star  yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop2" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td>+125-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop3" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop4" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td>+235-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop5" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop5" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop6" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop6" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-busy rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td>+954-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop7" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop7" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-away rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td>+254-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop8" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop8" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-off rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td>+545-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop9" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop9" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop10" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop10" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td>+632-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop11" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop11" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-busy rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td>+954-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop12" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-away rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td>+254-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop13" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop13" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-off rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td>+545-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop14" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop14" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop15" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop15" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td>+632-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop16" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop16" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td>+658-254-256</td>
                                                            <td className="text-center"><i className="la la-star  yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop17" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop17" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td>+125-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop18" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop18" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop19" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop19" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td>+235-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop20" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop20" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop21" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop21" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop22" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop22" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td>+235-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop23" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop23" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop24" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop24" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td>+658-254-256</td>
                                                            <td className="text-center"><i className="la la-star  yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop25" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop25" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td>+125-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop26" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop26" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-busy rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td>+954-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop27" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop27" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-away rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td>+254-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop28" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop28" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-off rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td>+545-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop29" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop29" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td>+987-654-564</td>
                                                            <td className="text-center"><i className="la la-star yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop30" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop30" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" className="input-chk" />
                                                            </td>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="media-left pr-1">
                                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="avatar" /><i /></span>
                                                                    </div>
                                                                    <div className="media-body media-middle">
                                                                        <a href="#" className="media-heading">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <a href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td>+632-654-564</td>
                                                            <td className="text-center"><i className="la la-star-o yellow darken-2" /></td>
                                                            <td>
                                                                <span className="dropdown">
                                                                    <button id="btnSearchDrop31" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle dropdown-menu-right"><i className="ft-settings" /></button>
                                                                    <span aria-labelledby="btnSearchDrop31" className="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="ft-trash-2" /> Edit</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-edit-2" /> Delete</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle primary" /> Projects</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle info" /> Team</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle warning" /> Clients</a>
                                                                        <a href="#" className="dropdown-item"><i className="ft-plus-circle success" /> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th />
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="sidebar-detached sidebar-left" >
                <div className="sidebar">
                    <div className="bug-list-sidebar-content">
                        {/* Predefined Views */}
                        <div className="card">
                            <div className="card-head">
                                <div className="media p-1">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                            <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                                    </div>
                                    <div className="media-body media-middle">
                                        <h5 className="media-heading">Margaret Govan</h5>
                                    </div>
                                </div>
                            </div>
                            {/* contacts search */}
                            <div className="card-body border-top-blue-grey border-top-lighten-5">
                                <div className="bug-list-search">
                                    <div className="bug-list-search-content">
                                        <form action="#">
                                            <div className="position-relative">
                                                <input type="search" id="search-contacts" className="form-control" placeholder="Search contacts..." />
                                                <div className="form-control-position">
                                                    <i className="la la-search text-size-base text-muted" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* /contacts search */}
                            {/* contacts view */}
                            <div className="card-body">
                                <div className="list-group">
                                    <a href="#" className="list-group-item active">All Contacts</a>
                                    <a href="#" className="list-group-item list-group-item-action">Recently contacted</a>
                                    <a href="#" className="list-group-item list-group-item-action">Favorite contacts</a>
                                </div>
                            </div>
                            {/* Groups*/}
                            <div className="card-body">
                                <p className="lead">Groups</p>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="badge badge-primary badge-pill float-right">14</span> <a href="#"> Project</a>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="badge badge-info badge-pill float-right">22</span> <a href="#"> Team</a>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="badge badge-warning badge-pill float-right">10</span> <a href="#"> Clients</a>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="badge badge-success badge-pill float-right">5</span> <a href="#"> Friends</a>
                                    </li>
                                </ul>
                            </div>
                            {/*/ Groups*/}
                            {/*More*/}
                            <div className="card-body ">
                                <p className="lead">More</p>
                                <ul className="list-group">
                                    <li><a href="#" className="list-group-item">Import</a></li>
                                    <li><a href="#" className="list-group-item">Export</a></li>
                                    <li><a href="#" className="list-group-item">Print</a></li>
                                    <li><a href="#" className="list-group-item">Restore contacts</a></li>
                                    <li><a href="#" className="list-group-item">Find duplicate</a></li>
                                </ul>
                            </div>
                            {/*/More*/}
                        </div>
                        {/*/ Predefined Views */}
                    </div>
                </div>
            </div>
        </div>
</div >


  )
}

export default userlist