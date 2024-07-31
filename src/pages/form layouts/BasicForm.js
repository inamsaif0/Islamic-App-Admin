import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const BasicForm = () => {
  return (
    <>
     <Header />
     <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
              <h3 className="content-header-title mb-0 d-inline-block">Basic Forms</h3>
              <div className="row breadcrumbs-top d-inline-block">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item"><a href="#">Form Layouts</a>
                    </li>
                    <li className="breadcrumb-item active"><a href="#">Basic Forms</a>
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
              <div className="row match-height">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-form">Project Info</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This is the most basic and default form having form sections.
                            To add form section use <code>.form-section</code> class
                            with any heading tags. This form has the buttons on the bottom
                            left corner which is the default position.</p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <h4 className="form-section"><i className="ft-user" /> Personal Info</h4>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput1">First Name</label>
                                  <input type="text" id="projectinput1" className="form-control" placeholder="First Name" name="fname" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput2">Last Name</label>
                                  <input type="text" id="projectinput2" className="form-control" placeholder="Last Name" name="lname" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput3">E-mail</label>
                                  <input type="text" id="projectinput3" className="form-control" placeholder="E-mail" name="email" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput4">Contact Number</label>
                                  <input type="text" id="projectinput4" className="form-control" placeholder="Phone" name="phone" />
                                </div>
                              </div>
                            </div>
                            <h4 className="form-section"><i className="la la-paperclip" /> Requirements</h4>
                            <div className="form-group">
                              <label htmlFor="companyName">Company</label>
                              <input type="text" id="companyName" className="form-control" placeholder="Company Name" name="company" />
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput5">Interested in</label>
                                  <select id="projectinput5" name="interested" className="form-control">
                                    <option value="none" selected disabled>Interested in</option>
                                    <option value="design">design</option>
                                    <option value="development">development</option>
                                    <option value="illustration">illustration</option>
                                    <option value="branding">branding</option>
                                    <option value="video">video</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput6">Budget</label>
                                  <select id="projectinput6" name="budget" className="form-control">
                                    <option value={0} selected disabled>Budget</option>
                                    <option value="less than 5000$">less than 5000$</option>
                                    <option value="5000$ - 10000$">5000$ - 10000$</option>
                                    <option value="10000$ - 20000$">10000$ - 20000$</option>
                                    <option value="more than 20000$">more than 20000$</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Select File</label>
                              <label id="projectinput7" className="file center-block">
                                <input type="file" id="file" />
                                <span className="file-custom" />
                              </label>
                            </div>
                            <div className="form-group">
                              <label htmlFor="projectinput8">About Project</label>
                              <textarea id="projectinput8" rows={5} className="form-control" name="comment" placeholder="About Project" defaultValue={""} />
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-colored-form-control">User Profile</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>You can always change the border color of the form controls
                            using <code>border-*</code> class. In this example we have
                            user <code>border-primary</code> class for form controls.
                            Form action buttons are on the bottom right position.</p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <h4 className="form-section"><i className="la la-eye" /> About User</h4>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="userinput1">Fist Name</label>
                                  <input type="text" id="userinput1" className="form-control border-primary" placeholder="Name" name="name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="userinput2">Last Name</label>
                                  <input type="text" id="userinput2" className="form-control border-primary" placeholder="Company" name="company" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="userinput3">Username</label>
                                  <input type="text" id="userinput3" className="form-control border-primary" placeholder="Username" name="username" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="userinput4">Nick Name</label>
                                  <input type="text" id="userinput4" className="form-control border-primary" placeholder="Nick Name" name="nickname" />
                                </div>
                              </div>
                            </div>
                            <h4 className="form-section"><i className="ft-mail" /> Contact Info &amp; Bio</h4>
                            <div className="form-group">
                              <label htmlFor="userinput5">Email</label>
                              <input className="form-control border-primary" type="email" placeholder="email" id="userinput5" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="userinput6">Website</label>
                              <input className="form-control border-primary" type="url" placeholder="http://" id="userinput6" />
                            </div>
                            <div className="form-group">
                              <label>Contact Number</label>
                              <input className="form-control border-primary" id="userinput7" type="tel" placeholder="Contact Number" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="userinput8">Bio</label>
                              <textarea id="userinput8" rows={5} className="form-control border-primary" name="bio" placeholder="Bio" defaultValue={""} />
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
              <div className="row match-height">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-tooltip">Issue Tracking</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This form shows tooltips on hover to provide useful information
                            while user is filling the form. Use data attributes like
                            toggle <code>data-toggle</code>, trigger <code>data-trigger</code>,
                            placement <code>data-placement</code>, title <code>data-title</code>                        to show tooltips on form controls.</p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label htmlFor="issueinput1">Issue Title</label>
                              <input type="text" id="issueinput1" className="form-control" placeholder="issue title" name="issuetitle" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Issue Title" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="issueinput2">Opened By</label>
                              <input type="text" id="issueinput2" className="form-control" placeholder="opened by" name="openedby" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Opened By" />
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="issueinput3">Date Opened</label>
                                  <input type="date" id="issueinput3" className="form-control" name="dateopened" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Opened" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="issueinput4">Date Fixed</label>
                                  <input type="date" id="issueinput4" className="form-control" name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="issueinput5">Priority</label>
                              <select id="issueinput5" name="priority" className="form-control" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="issueinput6">Status</label>
                              <select id="issueinput6" name="status" className="form-control" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Status">
                                <option value="not started">Not Started</option>
                                <option value="started">Started</option>
                                <option value="fixed">Fixed</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="issueinput8">Comments</label>
                              <textarea id="issueinput8" rows={5} className="form-control" name="comments" placeholder="comments" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Comments" defaultValue={""} />
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-icons">Timesheet</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This form shows the use of icons with form controls. Define
                            the position of the icon using <code>has-icon-left</code>                        or <code>has-icon-right</code> class. Use <code>icon-*</code>                        class to define the icon for the form control. See Icons
                            sections for the list of icons you can use. </p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label htmlFor="timesheetinput1">Employee Name</label>
                              <div className="position-relative has-icon-left">
                                <input type="text" id="timesheetinput1" className="form-control" placeholder="employee name" name="employeename" />
                                <div className="form-control-position">
                                  <i className="ft-user" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="timesheetinput2">Project Name</label>
                              <div className="position-relative has-icon-left">
                                <input type="text" id="timesheetinput2" className="form-control" placeholder="project name" name="projectname" />
                                <div className="form-control-position">
                                  <i className="la la-briefcase" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="timesheetinput3">Date</label>
                              <div className="position-relative has-icon-left">
                                <input type="date" id="timesheetinput3" className="form-control" name="date" />
                                <div className="form-control-position">
                                  <i className="ft-message-square" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Rate Per Hour</label>
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
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="timesheetinput5">Start Time</label>
                                  <div className="position-relative has-icon-left">
                                    <input type="time" id="timesheetinput5" className="form-control" name="starttime" />
                                    <div className="form-control-position">
                                      <i className="ft-clock" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="timesheetinput6">End Time</label>
                                  <div className="position-relative has-icon-left">
                                    <input type="time" id="timesheetinput6" className="form-control" name="endtime" />
                                    <div className="form-control-position">
                                      <i className="ft-clock" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="timesheetinput7">Notes</label>
                              <div className="position-relative has-icon-left">
                                <textarea id="timesheetinput7" rows={5} className="form-control" name="notes" placeholder="notes" defaultValue={""} />
                                <div className="form-control-position">
                                  <i className="ft-file" />
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
              <div className="row match-height">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-round-controls">Complaint Form</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This is a variation to the default form control styling. In
                            this example all the form controls has round styling. To
                            apply round style add class <code>round</code> to any form
                            control.
                          </p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label htmlFor="complaintinput1">Company Name</label>
                              <input type="text" id="complaintinput1" className="form-control round" placeholder="company name" name="companyname" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="complaintinput2">Employee Name</label>
                              <input type="text" id="complaintinput2" className="form-control round" placeholder="employee name" name="employeename" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="complaintinput3">Date of Complaint</label>
                              <input type="date" id="complaintinput3" className="form-control round" name="complaintdate" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="complaintinput4">Supervisor's Name</label>
                              <input type="text" id="complaintinput4" className="form-control round" placeholder="supervisor name" name="supervisorname" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="complaintinput5">Complaint Details</label>
                              <textarea id="complaintinput5" rows={5} className="form-control round" name="complaintdetails" placeholder="details" defaultValue={""} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="complaintinput6">Signature</label>
                              <input type="text" id="complaintinput6" className="form-control round" placeholder="signature" name="signature" />
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-square-controls">Donation</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This is another variation to the default form control styling.
                            In this example all the form controls has square styling.
                            To apply square style add class <code>square</code> to any
                            form control.</p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label htmlFor="donationinput1">Full Name</label>
                              <input type="text" id="donationinput1" className="form-control square" placeholder="name" name="fullname" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="donationinput2">Email</label>
                              <input type="email" id="donationinput2" className="form-control square" placeholder="email" name="email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="donationinput3">Contact Number</label>
                              <input type="tel" id="donationinput3" className="form-control square" name="contact" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="donationinput4">Dontaion Type</label>
                              <input type="text" id="donationinput4" className="form-control square" placeholder="type of donation" name="donationtype" />
                            </div>
                            <div className="form-group">
                              <label>Amount</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control square" placeholder="amount" aria-label="Amount (to the nearest dollar)" name="amount" />
                                <div className="input-group-append">
                                  <span className="input-group-text">.00</span>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="donationinput7">Comments</label>
                              <textarea id="donationinput7" rows={5} className="form-control square" name="comments" placeholder="comments" defaultValue={""} />
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
              <div className="row match-height">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-form-center">Event Registration</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This example shows a way to center your form in the card. Here
                            we have used <code>col-md-6 ml-auto</code> classes to center
                            the form in a full width card. User can always change those
                            classes according to width and offset requirements. This
                            example also uses form action buttons in the center bottom
                            position of the card.</p>
                        </div>
                        <form className="form">
                          <div className="row justify-content-md-center">
                            <div className="col-md-6">
                              <div className="form-body">
                                <div className="form-group">
                                  <label htmlFor="eventInput1">Full Name</label>
                                  <input type="text" id="eventInput1" className="form-control" placeholder="name" name="fullname" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="eventInput2">Title</label>
                                  <input type="text" id="eventInput2" className="form-control" placeholder="title" name="title" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="eventInput3">Company</label>
                                  <input type="text" id="eventInput3" className="form-control" placeholder="company" name="company" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="eventInput4">Email</label>
                                  <input type="email" id="eventInput4" className="form-control" placeholder="email" name="email" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="eventInput5">Contact Number</label>
                                  <input type="tel" id="eventInput5" className="form-control" name="contact" placeholder="contact number" />
                                </div>
                                <div className="form-group">
                                  <label>Existing Customer</label>
                                  <div className="input-group">
                                    <div className="d-inline-block custom-control custom-radio mr-1">
                                      <input type="radio" name="customer1" className="custom-control-input" id="yes" />
                                      <label className="custom-control-label" htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="d-inline-block custom-control custom-radio">
                                      <input type="radio" name="customer1" className="custom-control-input" id="no" />
                                      <label className="custom-control-label" htmlFor="no">No</label>
                                    </div>
                                  </div>
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
              <div className="row justify-content-md-center">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-card-center">Event Registration</h4>
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
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>This example shows a ways to center your card with form. Here
                            we have used <code>col-md-6 ml-auto</code> classes to center
                            the card as its not full width. User can always change those
                            classes according to width and offset requirements. This
                            example also uses form action buttons in the center bottom
                            position of the card.</p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <div className="form-group">
                              <label htmlFor="eventRegInput1">Full Name</label>
                              <input type="text" id="eventRegInput1" className="form-control" placeholder="name" name="fullname" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="eventRegInput2">Title</label>
                              <input type="text" id="eventRegInput2" className="form-control" placeholder="title" name="title" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="eventRegInput3">Company</label>
                              <input type="text" id="eventRegInput3" className="form-control" placeholder="company" name="company" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="eventRegInput4">Email</label>
                              <input type="email" id="eventRegInput4" className="form-control" placeholder="email" name="email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="eventRegInput5">Contact Number</label>
                              <input type="tel" id="eventRegInput5" className="form-control" name="contact" placeholder="contact number" />
                            </div>
                            <div className="form-group">
                              <label>Existing Customer</label>
                              <div className="input-group">
                                <div className="d-inline-block custom-control custom-radio mr-1">
                                  <input type="radio" name="customer2" className="custom-control-input" id="yes1" />
                                  <label className="custom-control-label" htmlFor="yes1">Yes</label>
                                </div>
                                <div className="d-inline-block custom-control custom-radio">
                                  <input type="radio" name="customer2" className="custom-control-input" id="no1" />
                                  <label className="custom-control-label" htmlFor="no1">No</label>
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

export default BasicForm