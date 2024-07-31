import React from 'react'

const email = () => {
    return (
        <div className="app-content content">
            <div className="sidebar-left">
                <div className="sidebar">
                    <div className="sidebar-content email-app-sidebar d-flex">
                        <div className="email-app-menu col-md-5 card d-none d-lg-block">
                            <div className="form-group form-group-compose text-center">
                                <button type="button" className="btn btn-danger btn-block my-1"><i className="ft-mail" /> Compose</button>
                            </div>
                            <h6 className="text-muted text-bold-500 mb-1">Messages</h6>
                            <div className="list-group list-group-messages">
                                <a href="#" className="list-group-item active border-0">
                                    <i className="ft-inbox mr-1" /> Inbox
                                    <span className="badge badge-secondary badge-pill float-right">8</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action border-0"><i className="la la-paper-plane-o mr-1" /> Sent</a>
                                <a href="#" className="list-group-item list-group-item-action border-0"><i className="ft-file mr-1" /> Draft</a>
                                <a href="#" className="list-group-item list-group-item-action border-0"><i className="ft-star mr-1" /> Starred<span className="badge badge-danger badge-pill float-right">3</span> </a>
                                <a href="#" className="list-group-item list-group-item-action border-0"><i className="ft-trash-2 mr-1" /> Trash</a>
                            </div>
                            <h6 className="text-muted text-bold-500 mt-1 mb-1">Labels</h6>
                            <div className="list-group list-group-messages">
                                <a href="#" className="list-group-item list-group-item-action border-0">
                                    <i className="ft-circle mr-1 warning" /> Work
                                    <span className="badge badge-warning badge-pill float-right">5</span>
                                </a>
                                {/*<a href="#" class="list-group-item list-group-item-action border-0"><i class="ft-circle mr-1 danger"></i> Family</a>*/}
                                {/*<a href="#" class="list-group-item list-group-item-action border-0"><i class="ft-circle mr-1 primary"></i> Friends</a>*/}
                                <a href="#" className="list-group-item list-group-item-action border-0"><i className="ft-circle mr-1 success" /> Private <span className="badge badge-success badge-pill float-right">3</span> </a>
                            </div>
                        </div>
                        <div className="email-app-list-wraper col-md-7 card p-0">
                            <div className="email-app-list">
                                <div className="card-body chat-fixed-search">
                                    <fieldset className="form-group position-relative has-icon-left m-0 pb-1">
                                        <input type="text" className="form-control" id="iconLeft4" placeholder="Search email" />
                                        <div className="form-control-position">
                                            <i className="ft-search" />
                                        </div>
                                    </fieldset>
                                </div>
                                <div id="users-list" className="list-group">
                                    <div className="users-list-padding media-list">
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-info">T</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading text-bold-500">Tonny Deep
                                                    <span className="float-right">
                                                        <span className="font-small-2 primary">4:14 AM</span>
                                                    </span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate text-bold-600 mb-0">PixInvent, I fount you...</p>
                                                <p className="list-group-item-text mb-0">I would be good.
                                                    <span className="float-right primary">
                                                        <span className="badge badge-danger mr-1">Family</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-danger">L</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading text-bold-500">Louis Welch
                                                    <span className="float-right"><i className="fa-paperclip fa" />
                                                        <span className="font-small-2 primary">2:15 AM</span>
                                                    </span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate text-bold-600 mb-0">Thanks, Let's do it.</p>
                                                <p className="list-group-item-text mb-0">Can we connect today...
                                                    <span className="float-right primary"><i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-warning">E</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading text-bold-500">Envato Market
                                                    <span className="float-right">
                                                        <span className="font-small-2 primary">11:18 PM</span>
                                                    </span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate text-bold-600 mb-0">You have new comment...</p>
                                                <p className="list-group-item-text mb-0">Hi Pixinvent...
                                                    <span className="float-right primary">
                                                        <span className="badge badge-warning mr-1">Work</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media bg-blue-grey bg-lighten-5 border-right-primary border-right-2">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Wayne Burton
                                                    <span className="font-small-2 float-right">Today</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Project ABC Status...</p>
                                                <p className="list-group-item-text mb-0">Andy, Lte's...
                                                    <span className="float-right primary">
                                                        <span className="badge badge-success mr-1">Private</span> <i className="font-medium-1 ft-star warning" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="Generic placeholder image" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Sarah Montgomery
                                                    <span className="font-small-2 float-right">Yesterday</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Your New UI.</p>
                                                <p className="list-group-item-text text-truncate mb-0">Everything looks good.</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-success">H</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Heather Howell
                                                    <span className="float-right"><i className="fa-paperclip fa" />
                                                        <span className="font-small-2">15 July</span>
                                                    </span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Thanks, Let's do it.</p>
                                                <p className="list-group-item-text mb-0">Can we connect today...
                                                    <span className="float-right primary"><i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="Generic placeholder image" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Kelly Reyes
                                                    <span className="font-small-2 float-right">12 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">I paid it, Thanks.</p>
                                                <p className="list-group-item-text mb-0">Check once...
                                                    <span className="float-right primary">
                                                        <span className="badge badge-warning mr-1">Work</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-warning">V</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Vincent Nelson
                                                    <span className="font-small-2 float-right">11 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0"><i className="ft-check primary font-small-2" /> Where are you
                                                    John?
                                                </p>
                                                <p className="list-group-item-text mb-0">Party tonight ?
                                                    <span className="float-right primary">
                                                        <span className="badge badge-primary mr-1">Friends</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-info">E</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Elizabeth Elliott
                                                    <span className="font-small-2 float-right">8 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Okay, I will call you.</p>
                                                <p className="list-group-item-text mb-0">Here they are work.
                                                    <span className="float-right primary"><i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Generic placeholder image" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Sarah Montgomery
                                                    <span className="font-small-2 float-right">Yesterday</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Your New UI.</p>
                                                <p className="list-group-item-text text-truncate mb-0">Everything looks good.</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-success">H</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Heather Howell
                                                    <span className="float-right"><i className="fa-paperclip fa" />
                                                        <span className="font-small-2">15 July</span>
                                                    </span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Thanks, Let's do it.</p>
                                                <p className="list-group-item-text mb-0">Can we connect today...
                                                    <span className="float-right primary"><i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="Generic placeholder image" />
                                                    <i />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Kelly Reyes
                                                    <span className="font-small-2 float-right">12 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">I paid it, Thanks.</p>
                                                <p className="list-group-item-text mb-0">Check once...
                                                    <span className="float-right primary">
                                                        <span className="badge badge-warning mr-1">Work</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-warning">V</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Vincent Nelson
                                                    <span className="font-small-2 float-right">11 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0"><i className="ft-check primary font-small-2" /> Where are you
                                                    John?
                                                </p>
                                                <p className="list-group-item-text mb-0">Party tonight ?
                                                    <span className="float-right primary">
                                                        <span className="badge badge-primary mr-1">Friends</span> <i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#" className="media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <span className="media-object rounded-circle text-circle bg-info">E</span>
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Elizabeth Elliott
                                                    <span className="font-small-2 float-right">8 July</span>
                                                </h6>
                                                <p className="list-group-item-text text-truncate mb-0">Okay, I will call you.</p>
                                                <p className="list-group-item-text mb-0">Here they are work.
                                                    <span className="float-right primary"><i className="font-medium-1 ft-star blue-grey lighten-3" /></span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <div className="card email-app-details d-none d-lg-block">
                            <div className="card-content">
                                <div className="email-app-options card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Replay"><i className="la la-reply" /></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Replay All"><i className="la la-reply-all" /></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Report SPAM"><i className="ft-alert-octagon" /></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="ft-trash-2" /></button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 text-right">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Previous"><i className="la la-angle-left" /></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Next"><i className="la la-angle-right" /></button>
                                            </div>
                                            <div className="btn-group ml-1">
                                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Mark as unread</a>
                                                    <a className="dropdown-item" href="#">Mark as unimportant</a>
                                                    <a className="dropdown-item" href="#">Add star</a>
                                                    <a className="dropdown-item" href="#">Add to task</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Filter mail</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-app-title card-body">
                                    <h3 className="list-group-item-heading">Project ABC Status Report</h3>
                                    <p className="list-group-item-text">
                                        <span className="primary">
                                            <span className="badge badge-primary">Previous</span> <i className="float-right font-medium-3 ft-star warning" /></span>
                                    </p>
                                </div>
                                <div className="media-list">
                                    <div id="headingCollapse1" className="card-header p-0">
                                        <a data-toggle="collapse" href="#collapse1" aria-expanded="true" aria-controls="collapse1" className="collapsed email-app-sender media border-0 bg-blue-grey bg-lighten-5">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="Generic placeholder image" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">John Doe</h6>
                                                <p className="list-group-item-text">Can you please provide me ABC Status Report.
                                                    <span className="float-right text muted">12 July</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div id="collapse1" role="tabpanel" aria-labelledby="headingCollapse1" className="card-collapse collapse" aria-expanded="true">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p>Hi Wayne,</p>
                                                <p>Can you please provide me ABC Status Report.</p>
                                                <p>Gmail Material Design Concept. Please check the full project
                                                    on Behance. Hope that will be fine for you.</p>
                                                <p>Thanks for your consideration !</p>
                                                <p>Regards,
                                                    <br />John</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="headingCollapse2" className="card-header p-0">
                                        <a data-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2" className="email-app-sender media border-0">
                                            <div className="media-left pr-1">
                                                <span className="avatar avatar-md">
                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                                </span>
                                            </div>
                                            <div className="media-body w-100">
                                                <h6 className="list-group-item-heading">Wayne Burton</h6>
                                                <p className="list-group-item-text">to me
                                                    <span>Today</span>
                                                    <span className="float-right">
                                                        <i className="la la-reply mr-1" />
                                                        <i className="la la-arrow-right mr-1" />
                                                        <i className="la la-ellipsis-v" />
                                                    </span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div id="collapse2" role="tabpanel" aria-labelledby="headingCollapse2" className="card-collapse" aria-expanded="false">
                                        <div className="card-content">
                                            <div className="email-app-text card-body">
                                                <div className="email-app-message">
                                                    <p>Hi John,</p>
                                                    <p>Thanks for your feedback ! Here's a new layout for a new
                                                        Modern Admin theme.</p>
                                                    <p>We will start the new application development soon once this
                                                        will be completed, I will provide you more details after
                                                        this Saturday. Hope that will be fine for you.</p>
                                                    <p>Hope your like it, or feel free to comment, feedback or rebound
                                                        !
                                                    </p>
                                                    <p>Cheers~</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-app-text-action card-body">
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

export default email