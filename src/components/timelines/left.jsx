import React from 'react'

const left = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Timeline Left</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Gallery</a>
                                    </li>
                                    <li className="breadcrumb-item active">Timeline Left
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
                    <section id="timeline" className="timeline-left timeline-wrapper">
                        <h3 className="page-title text-center text-lg-left">Timeline</h3>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="ft-calendar" /> Today</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-red bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i className="la la-plane" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Portfolio project work</a></h4>
                                        <p className="card-subtitle text-muted pt-1">
                                            <span className="font-small-3">5 hours ago</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline pt-1">
                                                <li><a data-action="reload"><i className="ft-repeat" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <img className="img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-2.jpg" alt="Timeline Image 1" />
                                                    <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                        vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                        elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                    <ul className="list-inline mb-1">
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-heart-o" /> Like</a>
                                                        </li>
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-comments-o" /> Comment</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-share-alt" /> Share</a>
                                                        </li>
                                                    </ul>
                                                    <div className="media">
                                                        <div className="media-left pr-1">
                                                            <a href="#">
                                                                <span className="avatar avatar-online">
                                                                    <img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-bold-600 mb-0"><a href="#">Jason Ansley</a></p>
                                                            <p className="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                                metus scelerisque ante sollicitudin commodo.</p>
                                                            <ul className="list-inline mb-1">
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-heart-o" /> Like</a>
                                                                </li>
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-comments-o" /> Replay</a>
                                                                </li>
                                                            </ul>
                                                            <div className="media">
                                                                <div className="media-left pr-1">
                                                                    <a href="#">
                                                                        <span className="avatar avatar-online">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="text-bold-600 mb-0"><a href="#">Janice Johnston</a></p>
                                                                    <p className="m-0">Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                                                    <ul className="list-inline mb-1">
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-heart-o" /> Like</a>
                                                                        </li>
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-comments-o" /> Replay</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <fieldset className="form-group position-relative has-icon-left mb-0">
                                                            <input type="text" className="form-control" placeholder="Write comments..." />
                                                            <div className="form-control-position">
                                                                <i className="ft-message-square" />
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <img className="img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-3.jpg" alt="Timeline Image 1" />
                                                    <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                        vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                        elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                    <ul className="list-inline mb-1">
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-heart-o" /> Like</a>
                                                        </li>
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-comments-o" /> Comment</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-share-alt" /> Share</a>
                                                        </li>
                                                    </ul>
                                                    <div className="media">
                                                        <div className="media-left pr-1">
                                                            <a href="#">
                                                                <span className="avatar avatar-online">
                                                                    <img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-bold-600 mb-0"><a href="#">Jason Ansley</a></p>
                                                            <p className="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                                metus scelerisque ante sollicitudin commodo.</p>
                                                            <ul className="list-inline mb-1">
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-heart-o" /> Like</a>
                                                                </li>
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-comments-o" /> Replay</a>
                                                                </li>
                                                            </ul>
                                                            <div className="media">
                                                                <div className="media-left pr-1">
                                                                    <a href="#">
                                                                        <span className="avatar avatar-online">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="text-bold-600 mb-0"><a href="#">Janice Johnston</a></p>
                                                                    <p className="m-0">Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                                                    <ul className="list-inline mb-1">
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-heart-o" /> Like</a>
                                                                        </li>
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-comments-o" /> Replay</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <fieldset className="form-group position-relative has-icon-left mb-0">
                                                            <input type="text" className="form-control" placeholder="Write comments..." />
                                                            <div className="form-control-position">
                                                                <i className="ft-message-square" />
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-red bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i className="la la-plus-square-o" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Project work</a></h4>
                                        <p className="card-subtitle text-muted pt-1">
                                            <span className="font-small-3">5 hours ago</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline pt-1">
                                                <li><a data-action="reload"><i className="ft-repeat" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <img className="img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-1.jpg" alt="Timeline Image 1" />
                                                    <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                        vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                        elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                    <ul className="list-inline mb-1">
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-heart-o" /> Like</a>
                                                        </li>
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-comments-o" /> Comment</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-share-alt" /> Share</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="media">
                                                        <div className="media-left pr-1">
                                                            <a href="#">
                                                                <span className="avatar avatar-online">
                                                                    <img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-bold-600 mb-0"><a href="#">Jason Ansley</a></p>
                                                            <p className="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                                metus scelerisque ante sollicitudin commodo.</p>
                                                            <ul className="list-inline mb-1">
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-heart-o" /> Like</a>
                                                                </li>
                                                                <li className="pr-1">
                                                                    <a href="#" className="text-muted">
                                                                        <span className="la la-comments-o" /> Replay</a>
                                                                </li>
                                                            </ul>
                                                            <div className="media">
                                                                <div className="media-left pr-1">
                                                                    <a href="#">
                                                                        <span className="avatar avatar-online">
                                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="text-bold-600 mb-0"><a href="#">Janice Johnston</a></p>
                                                                    <p className="m-0">Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                                                    <ul className="list-inline mb-1">
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-heart-o" /> Like</a>
                                                                        </li>
                                                                        <li className="pr-1">
                                                                            <a href="#" className="text-muted">
                                                                                <span className="la la-comments-o" /> Replay</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <fieldset className="form-group position-relative has-icon-left mb-0">
                                                            <input type="text" className="form-control" placeholder="Write comments..." />
                                                            <div className="form-control-position">
                                                                <i className="ft-message-square" />
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item mt-3">
                                <div className="timeline-badge">
                                    <span className="avatar avatar-online" data-toggle="tooltip" data-placement="left" title="Eu pid nunc urna integer">
                                        <img src="../../../app-assets/images/portrait/small/avatar-s-14.png" alt="avatar" />
                                    </span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Sofia Orav</a></h4>
                                        <p className="card-subtitle text-muted pt-1">
                                            <span className="font-small-3">8 hours ago</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-check font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body row">
                                            <div className="col-lg-6 col-12">
                                                <div className="embed-responsive embed-responsive-4by3">
                                                    <iframe src="https://player.vimeo.com/video/118589137?title=0&byline=0" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="card-content">
                                                    <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                        vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                        elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                    <p className="card-text">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                        facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                        in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus
                                                        pulvinar adipiscing adipiscing montes! Elementum risus
                                                        adipiscing non, cras scelerisque risus penatibus? Massa
                                                        vut, habitasse, tincidunt! Dolor lacus pulvinar adipiscing
                                                        adipiscing montes! Elementum risus adipiscing non, cras
                                                        scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>
                                                    <ul className="list-inline mb-1">
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-heart-o" /> Like</a>
                                                        </li>
                                                        <li className="pr-1">
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-comments-o" /> Comment</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-muted">
                                                                <span className="la la-share-alt" /> Share</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-footer px-0 py-0">
                                                    <fieldset className="form-group position-relative has-icon-left mb-0">
                                                        <input type="text" className="form-control" placeholder="Write comments..." />
                                                        <div className="form-control-position">
                                                            <i className="ft-message-square" />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-success bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i className="la la-bar-chart-o" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="text-center pt-1">
                                            <h4>Campaign Report</h4>
                                            <p className="timeline-date">18 hours ago</p>
                                            <p>Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing
                                                adipiscing montes! Elementum risus adipiscing non, cras scelerisque
                                                risus penatibus? Massa vut, habitasse, tincidunt!</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="chart-container">
                                                <div id="stacked-column" className="height-400 overflow-hidden echart-container" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* 2016 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="ft-calendar" /> 2016</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            {/* /.timeline-line */}
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="avatar avatar-online" data-toggle="tooltip" data-placement="right" title="Eu pid nunc urna integer">
                                        <img src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" />
                                    </span>
                                </div>
                                <div className="row match-height">
                                    <div className="col-lg-8 col-12">
                                        <div className="timeline-card card bg-dark text-white">
                                            <img className="card-img img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-2.jpg" alt="Card image" />
                                            <div className="card-img-overlay bg-overlay">
                                                <h4 className="card-title white">Good Morning</h4>
                                                <p className="card-text">
                                                    <small>26 Aug, 2016 at 2.00 A.M</small>
                                                </p>
                                                <p className="card-text">This is a wider card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-body">
                                                    <h4 className="card-title">List Group</h4>
                                                    <p className="card-text">Some quick example text to build on the card title and make
                                                        up the bulk of the card's content.</p>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <span className="badge badge-default badge-pill bg-primary float-right">4</span> Cras justo odio
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="badge badge-default badge-pill bg-info float-right">2</span> Dapibus ac facilisis in
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="badge badge-default badge-pill bg-warning float-right">1</span> Morbi leo risus
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="badge badge-default badge-pill bg-success float-right">3</span> Porta ac consectetur ac
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="badge badge-default badge-pill bg-danger float-right">8</span> Vestibulum at eros
                                                    </li>
                                                </ul>
                                                <div className="card-body">
                                                    <a href="#" className="card-link">Card link</a>
                                                    <a href="#" className="card-link">Another link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item mt-3">
                                <div className="timeline-badge">
                                    <span className="bg-teal bg-lighten-1" data-toggle="tooltip" data-placement="left" title="Nullam facilisis fermentum"><i className="la la-check" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Sofia Orav</a></h4>
                                        <p className="card-subtitle text-muted pt-1">
                                            <span className="font-small-3">18 June, 2016 at 4.50 P.M</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="ft-minus font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="row card-body">
                                            <div className="col-lg-6 col-12">
                                                <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <ul className="list-group icheck-task">
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-1" /> Cras justo odio</li>
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-2" defaultChecked /> Dapibus ac facilisis in</li>
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-3" /> Morbi leo risus</li>
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-4" disabled defaultChecked /> Porta ac consectetur ac</li>
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-5" /> Vestibulum at eros</li>
                                                    <li className="list-group-item">
                                                        <input type="checkbox" id="input-6" disabled defaultChecked /> Porta ac consectetur ac</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <p className="card-text m-0">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <div className="chart-container">
                                                    <div id="non-ribbon-chord" className="height-300 overflow-hidden echart-container" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="ft-message-square" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* 2015 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="ft-calendar" /> 2015</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            {/* /.timeline-line */}
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-success bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i className="la la-image" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="text-center pt-1">
                                            <h4>Media Gallery</h4>
                                            <p className="timeline-date">July 1, 2015</p>
                                            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                in et?</p>
                                        </div>
                                    </div>
                                    {/* Image grid */}
                                    <div className="card-body my-gallery" itemScope itemType="http://schema.org/ImageGallery">
                                        <div className="row">
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/1.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/1.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/2.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/2.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/3.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/3.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/4.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/4.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="row">
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/5.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/5.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/6.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/6.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/7.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/7.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/8.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/8.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="row">
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/9.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/9.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/10.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/10.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/11.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/11.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                            <figure className="col-md-3 col-sm-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                                <a href="../../../app-assets/images/gallery/12.jpg" itemProp="contentUrl" data-size="480x360">
                                                    <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/12.jpg" itemProp="thumbnail" alt="Image description" />
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                    {/*/ Image grid */}
                                    {/* Root element of PhotoSwipe. Must have class pswp. */}
                                    <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
                                        {/* Background of PhotoSwipe. 
             It's a separate element as animating opacity is faster than rgba(). */}
                                        <div className="pswp__bg" />
                                        {/* Slides wrapper with overflow:hidden. */}
                                        <div className="pswp__scroll-wrap">
                                            {/* Container that holds slides. 
                PhotoSwipe keeps only 3 of them in the DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. */}
                                            <div className="pswp__container">
                                                <div className="pswp__item" />
                                                <div className="pswp__item" />
                                                <div className="pswp__item" />
                                            </div>
                                            {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
                                            <div className="pswp__ui pswp__ui--hidden">
                                                <div className="pswp__top-bar">
                                                    {/*  Controls are self-explanatory. Order can be changed. */}
                                                    <div className="pswp__counter" />
                                                    <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                                                    <button className="pswp__button pswp__button--share" title="Share" />
                                                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                                                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                                                    {/* Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR */}
                                                    {/* element will get class pswp__preloader-active when preloader is running */}
                                                    <div className="pswp__preloader">
                                                        <div className="pswp__preloader__icn">
                                                            <div className="pswp__preloader__cut">
                                                                <div className="pswp__preloader__donut" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                                    <div className="pswp__share-tooltip" />
                                                </div>
                                                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                                                </button>
                                                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                                                </button>
                                                <div className="pswp__caption">
                                                    <div className="pswp__caption__center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ PhotoSwipe */}
                                </div>
                            </li>
                        </ul>
                        {/* 2014 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="ft-calendar" /> 2014</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            {/* /.timeline-line */}
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-primary bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Moved to Brooklyn"><i className="la la-map" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header ">
                                        <div className="text-center pt-1">
                                            <h4>Moved to Brooklyn</h4>
                                            <p className="timeline-date">Jan 1, 2014</p>
                                            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar
                                                adipiscing adipiscing montes! Elementum risus adipiscing non,
                                                cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div id="moved-brooklyn" className="height-450" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* 2014 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="ft-calendar" /> Founded in 2012</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default left