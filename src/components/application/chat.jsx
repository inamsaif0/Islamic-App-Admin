import React from 'react'

const chat = () => {
    return (
        <div className="app-content content">
            <div className="sidebar-left sidebar-fixed">
                <div className="sidebar">
                    <div className="sidebar-content card d-none d-lg-block">
                        <div className="card-body chat-fixed-search">
                            <fieldset className="form-group position-relative has-icon-left m-0">
                                <input type="text" className="form-control" id="iconLeft4" placeholder="Search user" />
                                <div className="form-control-position">
                                    <i className="ft-search" />
                                </div>
                            </fieldset>
                        </div>
                        <div id="users-list" className="list-group position-relative">
                            <div className="users-list-padding media-list">
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-online">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Elizabeth Elliott
                                            <span className="font-small-3 float-right info">4:14 AM</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check primary font-small-2" /> Okay
                                            <span className="float-right primary"><i className="font-medium-1 icon-pin blue-grey lighten-3" /></span>
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-busy">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Kristopher Candy
                                            <span className="font-small-3 float-right info">9:04 PM</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check primary font-small-2" /> Thank you
                                            <span className="float-right primary">
                                                <span className="badge badge-pill badge-danger">12</span>
                                            </span>
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-away">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Sarah Woods
                                            <span className="font-small-3 float-right info">2:14 AM</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check font-small-2" /> Hello krish!
                                            <span className="float-right primary"><i className="font-medium-1 icon-volume-off blue-grey lighten-3 mr-1" />
                                                <span className="badge badge-pill badge-danger">3</span>
                                            </span>
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="media bg-blue-grey bg-lighten-5 border-right-info border-right-2">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-online">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Wayne Burton
                                            <span className="font-small-3 float-right info">Today</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check primary font-small-2" /> Can we connect?</p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-away">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Sarah Montgomery
                                            <span className="font-small-3 float-right info">Yesterday</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check font-small-2" /> Will connect you</p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-online">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Heather Howell
                                            <span className="font-small-3 float-right info">Friday</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check font-small-2" /> Thank you
                                            <span className="float-right primary">
                                                <span className="badge badge-pill badge-danger">4</span>
                                            </span>
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-busy">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Kelly Reyes
                                            <span className="font-small-3 float-right info">Thrusday</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check font-small-2" /> I love you </p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-online">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-14.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Vincent Nelson</h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check primary font-small-2" /> Who you are?</p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-online">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Elizabeth Elliott
                                            <span className="font-small-3 float-right info">4:14 AM</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check font-small-2" /> Okay
                                            <span className="float-right primary"><i className="font-medium-1 icon-pin blue-grey lighten-3" /></span>
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="media border-0">
                                    <div className="media-left pr-1">
                                        <span className="avatar avatar-md avatar-busy">
                                            <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                            <i />
                                        </span>
                                    </div>
                                    <div className="media-body w-100">
                                        <h6 className="list-group-item-heading">Kristopher Candy
                                            <span className="font-small-3 float-right info">9:04 PM</span>
                                        </h6>
                                        <p className="list-group-item-text text-muted mb-0"><i className="ft-check primary font-small-2" /> Thank you
                                            <span className="float-right primary">
                                                <span className="badge badge-pill badge-danger">12</span>
                                            </span>
                                        </p>
                                    </div>
                                </a>
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
                        <section className="chat-app-window">
                            <div className="badge badge-default mb-1">Chat History</div>
                            <div className="chats">
                                <div className="chats">
                                    <div className="chat">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>How can we help? We're here for you!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat chat-left">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out?</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>It should be Bootstrap 4 compatible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>Absolutely!</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>Modern admin is the responsive bootstrap 4 admin template.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="time">1 hours ago</p>
                                    <div className="chat chat-left">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>Looks clean and fresh UI.</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>It's perfect for my next project.</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>How can I purchase it?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>Thanks, from ThemeForest.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat chat-left">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>I will purchase it for sure.</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>Thanks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat">
                                        <div className="chat-avatar">
                                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                                                <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-content">
                                                <p>Great, Feel free to get in touch on</p>
                                            </div>
                                            <div className="chat-content">
                                                <p>https://pixinvent.ticksy.com/</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="chat-app-form">
                            <form className="chat-app-input d-flex">
                                <fieldset className="form-group position-relative has-icon-left col-10 m-0">
                                    <div className="form-control-position">
                                        <i className="icon-emoticon-smile" />
                                    </div>
                                    <input type="text" className="form-control" id="iconLeft4" placeholder="Type your message" />
                                    <div className="form-control-position control-position-right">
                                        <i className="ft-image" />
                                    </div>
                                </fieldset>
                                <fieldset className="form-group position-relative has-icon-left col-2 m-0">
                                    <button type="button" className="btn btn-info"><i className="la la-paper-plane-o d-lg-none" />
                                        <span className="d-none d-lg-block">Send</span>
                                    </button>
                                </fieldset>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default chat