import React from 'react'

const center = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Timeline Center</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Gallery</a>
                                    </li>
                                    <li className="breadcrumb-item active">Responsive Timeline
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
                    <section id="timeline" className="timeline-center timeline-wrapper">
                        <h3 className="page-title text-center">Timeline</h3>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="la la-calendar-o" /> Today</a>
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
                                        <p className="card-subtitle text-muted mb-0 pt-1">
                                            <span className="font-small-3">5 hours ago</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <img className="img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-1.jpg" alt="Timeline Image 1" />
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <ul className="list-inline mb-1">
                                                    <li className="pr-1">
                                                        <a href="#" className>
                                                            <span className="la la-thumbs-o-up" /> Like</a>
                                                    </li>
                                                    <li className="pr-1">
                                                        <a href="#" className>
                                                            <span className="la la-commenting-o" /> Comment</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className>
                                                            <span className="la la-share-alt" /> Share</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
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
                                                                <a href="#" className>
                                                                    <span className="la la-thumbs-o-up" /> Like</a>
                                                            </li>
                                                            <li className="pr-1">
                                                                <a href="#" className>
                                                                    <span className="la la-commenting-o" /> Replay</a>
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
                                                                <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                                                <ul className="list-inline mb-1">
                                                                    <li className="pr-1">
                                                                        <a href="#" className>
                                                                            <span className="la la-thumbs-o-up" /> Like</a>
                                                                    </li>
                                                                    <li className="pr-1">
                                                                        <a href="#" className>
                                                                            <span className="la la-commenting-o" /> Replay</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="la la-dashcube" />
                                                    </div>
                                                </fieldset>
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
                                        <p className="card-subtitle text-muted mb-0 pt-1">
                                            <span className="font-small-3">8 hours ago</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe src="https://player.vimeo.com/video/118589137?title=0&byline=0" />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <p className="card-text">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                    facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                    in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus
                                                    pulvinar adipiscing adipiscing montes! Elementum risus adipiscing
                                                    non, cras scelerisque risus penatibus? Massa vut, habitasse,
                                                    tincidunt!
                                                </p>
                                                <ul className="list-inline mb-1">
                                                    <li className="pr-1">
                                                        <a href="#" className>
                                                            <span className="la la-thumbs-o-up" /> Like</a>
                                                    </li>
                                                    <li className="pr-1">
                                                        <a href="#" className>
                                                            <span className="la la-commenting-o" /> Comment</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className>
                                                            <span className="la la-share-alt" /> Share</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="la la-dashcube" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item block">
                                <div className="timeline-badge">
                                    <a title data-context="inverse" data-container="body" className="border-silc" href="#" data-original-title="block highlight" />
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="text-center">
                                            <p><i className="la la-bar-chart font-medium-4" /></p>
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
                                                <div id="stacked-column" className="height-400 echart-container overflow-hidden" />
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
                                <a href="#" className="btn btn-primary"><i className="la la-calendar-o" /> 2016</a>
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
                                <div className="timeline-card card text-white">
                                    <img className="card-img img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-2.jpg" alt="Card image" />
                                    <div className="card-img-overlay bg-overlay">
                                        <h4 className="card-title white">Good Morning</h4>
                                        <p className="card-text">
                                            <small>26 Aug, 2016 at 2.00 A.M</small>
                                        </p>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item mt-3">
                                <div className="timeline-badge">
                                    <span className="bg-teal bg-lighten-1" data-toggle="tooltip" data-placement="left" title="Nullam facilisis fermentum"><i className="la la-check-square-o" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Sofia Orav</a></h4>
                                        <p className="card-subtitle text-muted mb-0 pt-1">
                                            <span className="font-small-3">18 June, 2016 at 4.50 P.M</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
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
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="la la-dashcube" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-purple bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Nullam facilisis fermentum"><i className="la la la-area-chart" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Non-ribbon Chord Chart</a></h4>
                                        <p className="card-subtitle text-muted mb-0 pt-1">
                                            <span className="font-small-3">6 Feb, 2016 at 6.00 A.M</span>
                                        </p>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <div className="chart-container">
                                                    <div id="non-ribbon-chord" className="height-400 echart-container overflow-hidden" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="la la-dashcube" />
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
                                <a href="#" className="btn btn-primary"><i className="la la-calendar-o" /> 2015</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            {/* /.timeline-line */}
                            <li className="timeline-item block">
                                <div className="timeline-badge">
                                    <a title data-context="inverse" data-container="body" className="border-silc" href="#" data-original-title="block highlight" />
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="text-center">
                                            <p className="mt-1"><i className="la la-file-image-o font-medium-4" /></p>
                                            <h4>Media Gallery</h4>
                                            <p className="timeline-date">July 1, 2015</p>
                                            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                in et?</p>
                                        </div>
                                    </div>
                                    {/* Image grid */}
                                    <div className="card-content">
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
                                    </div>
                                    {/*/ PhotoSwipe */}
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge">
                                    <span className="bg-warning bg-darken-1" data-toggle="tooltip" data-placement="right" title="Application API Support"><i className="la la-life-ring" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="media">
                                            <div className="media-left pr-1">
                                                <a href="#">
                                                    <span className="avatar avatar-md avatar-busy">
                                                        <img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" />
                                                    </span>
                                                    <i />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="card-title"><a href="#">Application API Support</a></h4>
                                                <p className="card-subtitle text-muted mb-0 pt-1">
                                                    <span className="font-small-3">15 Oct, 2015 at 8.00 A.M</span>
                                                    <span className="badge badge-pill badge-default badge-warning float-right">High</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <img className="img-fluid" src="../../../app-assets/images/portfolio/width-1200/portfolio-3.jpg" alt="Timeline Image 1" />
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor
                                                    vitae libero hendrerit auctor lacinia a ligula. Curabitur
                                                    elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                                                <ul className="list-inline mb-1">
                                                    <li className="pr-1">
                                                        <a href="#" className>
                                                            <span className="la la-commenting-o" /> Comment</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer px-0 py-0">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="media-left pr-1">
                                                        <a href="#">
                                                            <span className="avatar avatar-online">
                                                                <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" />
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <p className="text-bold-600 mb-0"><a href="#">Crystal Lawson</a></p>
                                                        <p className="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                            metus scelerisque ante sollicitudin commodo.</p>
                                                        <div className="media">
                                                            <div className="media-left pr-1">
                                                                <a href="#">
                                                                    <span className="avatar avatar-online">
                                                                        <img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-bold-600 mb-0"><a href="#">Rafila Găitan</a></p>
                                                                <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control" placeholder="Write comments..." />
                                                    <div className="form-control-position">
                                                        <i className="la la-dashcube" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item mt-3">
                                <div className="timeline-badge">
                                    <span className="bg-amber bg-darken-1" data-toggle="tooltip" data-placement="left" title="Quote of the day"><i className="la la-smile-o" /></span>
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <h4 className="card-title"><a href="#">Quote of the day</a></h4>
                                        <p className="card-subtitle text-muted mb-0 pt-1">
                                            <span className="font-small-3">03 March, 2015 at 5 P.M</span>
                                        </p>
                                    </div>
                                    <div className="card-content">
                                        <img className="img-fluid" src="../../../app-assets/images/portfolio/width-600/portfolio-3.jpg" alt="Timeline Image 1" />
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote">
                                                <p className="card-text">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                    facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                    in et?</p>
                                                <footer>Someone famous in
                                                    <cite title="Source Title"> - Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* 2014 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="la la-calendar-o" /> 2014</a>
                            </li>
                        </ul>
                        <ul className="timeline">
                            <li className="timeline-line" />
                            {/* /.timeline-line */}
                            <li className="timeline-item block">
                                <div className="timeline-badge">
                                    <a title data-context="inverse" data-container="body" className="border-silc" href="#" data-original-title="block highlight" />
                                </div>
                                <div className="timeline-card card border-grey border-lighten-2">
                                    <div className="card-header">
                                        <div className="text-center">
                                            <p><i className="la la-map-marker font-medium-4" /></p>
                                            <h4>Moved to Brooklyn</h4>
                                            <p className="timeline-date">Jan 1, 2014</p>
                                            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus
                                                facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis
                                                in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar
                                                adipiscing adipiscing montes! Elementum risus adipiscing non,
                                                cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div id="moved-brooklyn" className="height-450" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* 2014 */}
                        <ul className="timeline">
                            <li className="timeline-line" />
                            <li className="timeline-group">
                                <a href="#" className="btn btn-primary"><i className="la la-calendar-o" /> Founded in 2012</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default center