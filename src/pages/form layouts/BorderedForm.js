import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const BorderedForm = () => {
    return (
        <>
            <Header />

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">Bordered Forms</h3>
                            <div className="row breadcrumbs-top d-inline-block">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Form Layouts</a>
                                        </li>
                                        <li className="breadcrumb-item active"><a href="#">Bordered Forms</a>
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
                        {/* Basic form layout section start */}
                        <section id="basic-form-layouts">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="bordered-layout-basic-form">Project Info</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Add <code>.form-bordered</code> to form tag to add border to
                                                        a form-group. In this example <code>.form-horizontal</code>                        is used to show the bordered form functionality.</p>
                                                </div>
                                                <form className="form form-horizontal form-bordered">
                                                    <div className="form-body">
                                                        <h4 className="form-section"><i className="ft-user" /> Personal Info</h4>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput1">First Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="projectinput1" className="form-control" placeholder="First Name" name="fname" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput2">Last Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="projectinput2" className="form-control" placeholder="Last Name" name="lname" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput3">E-mail</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="projectinput3" className="form-control" placeholder="E-mail" name="email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row last">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput4">Contact Number</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="projectinput4" className="form-control" placeholder="Phone" name="phone" />
                                                            </div>
                                                        </div>
                                                        <h4 className="form-section"><i className="ft-clipboard" /> Requirements</h4>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput5">Company</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="projectinput5" className="form-control" placeholder="Company Name" name="company" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput6">Interested in</label>
                                                            <div className="col-md-9">
                                                                <select id="projectinput6" name="interested" className="form-control">
                                                                    <option value="none" selected disabled>Interested in</option>
                                                                    <option value="design">design</option>
                                                                    <option value="development">development</option>
                                                                    <option value="illustration">illustration</option>
                                                                    <option value="branding">branding</option>
                                                                    <option value="video">video</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput7">Budget</label>
                                                            <div className="col-md-9">
                                                                <select id="projectinput7" name="budget" className="form-control">
                                                                    <option value={0} selected disabled>Budget</option>
                                                                    <option value="less than 5000$">less than 5000$</option>
                                                                    <option value="5000$ - 10000$">5000$ - 10000$</option>
                                                                    <option value="10000$ - 20000$">10000$ - 20000$</option>
                                                                    <option value="more than 20000$">more than 20000$</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control">Select File</label>
                                                            <div className="col-md-9">
                                                                <label id="projectinput8" className="file center-block">
                                                                    <input type="file" id="file" />
                                                                    <span className="file-custom" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row last">
                                                            <label className="col-md-3 label-control" htmlFor="projectinput9">About Project</label>
                                                            <div className="col-md-9">
                                                                <textarea id="projectinput9" rows={5} className="form-control" name="comment" placeholder="About Project" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions">
                                                        <button type="button" className="btn btn-warning mr-1">
                                                            <i className="ft-x" /> Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="la la-check-square-o" /> Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="bordered-layout-colored-controls">User Profile</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Add <code>.form-bordered</code> to form tag to add border to
                                                        a form-group. In this example 2-column <code>.form-horizontal</code>                        is used with primary color bordered form controls to show
                                                        the bordered form functionality.</p>
                                                </div>
                                                <form className="form form-horizontal form-bordered">
                                                    <div className="form-body">
                                                        <h4 className="form-section"><i className="la la-eye" /> About User</h4>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput1">Fist Name</label>
                                                                    <div className="col-md-9">
                                                                        <input type="text" id="userinput1" className="form-control border-primary" placeholder="First Name" name="firstname" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput2">Last Name</label>
                                                                    <div className="col-md-9">
                                                                        <input type="text" id="userinput2" className="form-control border-primary" placeholder="Last Name" name="lastname" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group row last">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput3">Username</label>
                                                                    <div className="col-md-9">
                                                                        <input type="text" id="userinput3" className="form-control border-primary" placeholder="Username" name="username" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group row last">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput4">Nick Name</label>
                                                                    <div className="col-md-9">
                                                                        <input type="text" id="userinput4" className="form-control border-primary" placeholder="Nick Name" name="nickname" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="form-section"><i className="ft-mail" /> Contact Info &amp; Bio</h4>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput5">Email</label>
                                                                    <div className="col-md-9">
                                                                        <input className="form-control border-primary" type="email" placeholder="email" id="userinput5" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput6">Website</label>
                                                                    <div className="col-md-9">
                                                                        <input className="form-control border-primary" type="url" placeholder="http://" id="userinput6" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row last">
                                                                    <label className="col-md-3 label-control">Contact Number</label>
                                                                    <div className="col-md-9">
                                                                        <input className="form-control border-primary" type="tel" placeholder="Contact Number" id="userinput7" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group row last">
                                                                    <label className="col-md-3 label-control" htmlFor="userinput8">Bio</label>
                                                                    <div className="col-md-9">
                                                                        <textarea id="userinput8" rows={6} className="form-control border-primary" name="bio" placeholder="Bio" defaultValue={""} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions right">
                                                        <button type="button" className="btn btn-warning mr-1">
                                                            <i className="ft-x" /> Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="la la-check-square-o" /> Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="bordered-layout-icons">Timesheet</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Add <code>.form-bordered</code> to form tag to add border to
                                                        a form-group. In this example icons are used with form controls
                                                        to show the bordered form functionality.</p>
                                                </div>
                                                <form className="form form-horizontal form-bordered">
                                                    <div className="form-body">
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput1">Employee Name</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="text" id="timesheetinput1" className="form-control" placeholder="employee name" name="employeename" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-user" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput2">Project Name</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="text" id="timesheetinput2" className="form-control" placeholder="project name" name="projectname" />
                                                                    <div className="form-control-position">
                                                                        <i className="la la-briefcase" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput3">Date</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="date" id="timesheetinput3" className="form-control" name="date" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-message-square" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control">Rate Per Hour</label>
                                                            <div className="col-md-9">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">$</span>
                                                                    </div>
                                                                    <input type="text" className="form-control" placeholder="Rate Per Hour" aria-label="Amount (to the nearest dollar)" name="rateperhour" />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput5">Start Time</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="time" id="timesheetinput5" className="form-control" name="starttime" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-clock" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput6">End Time</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="time" id="timesheetinput6" className="form-control" name="endtime" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-clock" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row last">
                                                            <label className="col-md-3 label-control" htmlFor="timesheetinput7">Notes</label>
                                                            <div className="col-md-9">
                                                                <div className="position-relative has-icon-left">
                                                                    <textarea id="timesheetinput7" rows={5} className="form-control" name="notes" placeholder="notes" defaultValue={""} />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-file" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions right">
                                                        <button type="button" className="btn btn-warning mr-1">
                                                            <i className="ft-x" /> Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="la la-check-square-o" /> Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="bordered-layout-card-center">Event Registration</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                    <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Add <code>.form-bordered</code> to form tag to add border to
                                                        a form-group. In this example centered card is used to show
                                                        the bordered form functionality.</p>
                                                </div>
                                                <form className="form form-horizontal form-bordered">
                                                    <div className="form-body">
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="eventRegInput1">Full Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="eventRegInput1" className="form-control" placeholder="name" name="fullname" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="eventRegInput2">Title</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="eventRegInput2" className="form-control" placeholder="title" name="title" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="eventRegInput3">Company</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="eventRegInput3" className="form-control" placeholder="company" name="company" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="eventRegInput4">Email</label>
                                                            <div className="col-md-9">
                                                                <input type="email" id="eventRegInput4" className="form-control" placeholder="email" name="email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 label-control" htmlFor="eventRegInput5">Contact Number</label>
                                                            <div className="col-md-9">
                                                                <input type="tel" id="eventRegInput5" className="form-control" name="contact" placeholder="contact number" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row last">
                                                            <label className="col-md-3 label-control">Existing Customer</label>
                                                            <div className="col-md-9">
                                                                <div className="input-group col-md-9">
                                                                    <label className="d-inline-block custom-control custom-radio ml-1">
                                                                        <input type="radio" name="customer" className="custom-control-input" />
                                                                        <span className="custom-control-indicator" />
                                                                        <span className="custom-control-description ml-0">Yes</span>
                                                                    </label>
                                                                    <label className="d-inline-block custom-control custom-radio">
                                                                        <input type="radio" name="customer" defaultChecked className="custom-control-input" />
                                                                        <span className="custom-control-indicator" />
                                                                        <span className="custom-control-description ml-0">No</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions center">
                                                        <button type="button" className="btn btn-warning mr-1">
                                                            <i className="ft-x" /> Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="la la-check-square-o" /> Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Basic form layout section end */}
                    </div>
                </div>
            </div>

            <Footer />

        </>


    )
}

export default BorderedForm