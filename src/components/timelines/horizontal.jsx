import React from 'react'

const horizontal = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Horizontal Timeline</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Gallery</a>
                                    </li>
                                    <li className="breadcrumb-item active">Timeline Horizontal
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
                    {/* Basic Horizontal Timeline */}
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Basic Horizontal Timeline</h4>
                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                            <div className="heading-elements">
                                <ul className="list-inline mb-0">
                                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>This horizontal time line contain just date based post timeline.</p>
                                    <section className="cd-horizontal-timeline">
                                        <div className="timeline">
                                            <div className="events-wrapper">
                                                <div className="events">
                                                    <ol>
                                                        <li><a href="#0" data-date="16/01/2015" className="selected">16 Jan</a></li>
                                                        <li><a href="#0" data-date="28/02/2015">28 Feb</a></li>
                                                        <li><a href="#0" data-date="20/04/2015">20 Mar</a></li>
                                                        <li><a href="#0" data-date="20/05/2015">20 May</a></li>
                                                        <li><a href="#0" data-date="09/07/2015">09 Jul</a></li>
                                                        <li><a href="#0" data-date="30/08/2015">30 Aug</a></li>
                                                        <li><a href="#0" data-date="15/09/2015">15 Sep</a></li>
                                                        <li><a href="#0" data-date="01/11/2015">01 Nov</a></li>
                                                        <li><a href="#0" data-date="10/12/2015">10 Dec</a></li>
                                                        <li><a href="#0" data-date="19/01/2016">29 Jan</a></li>
                                                        <li><a href="#0" data-date="03/03/2016">3 Mar</a></li>
                                                    </ol>
                                                    <span className="filling-line" aria-hidden="true" />
                                                </div>
                                                {/* .events */}
                                            </div>
                                            {/* .events-wrapper */}
                                            <ul className="cd-timeline-navigation">
                                                <li><a href="#0" className="prev inactive">Prev</a></li>
                                                <li><a href="#0" className="next">Next</a></li>
                                            </ul>
                                            {/* .cd-timeline-navigation */}
                                        </div>
                                        {/* .timeline */}
                                        <div className="events-content">
                                            <ol>
                                                <li className="selected" data-date="16/01/2015">
                                                    <h2>Horizontal Timeline</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>January 16th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="28/02/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>February 28th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="20/04/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>March 20th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="20/05/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>May 20th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="09/07/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>July 9th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="30/08/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>August 30th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="15/09/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>September 15th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="01/11/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>November 1st, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="10/12/2015">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>December 10th, 2015</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="19/01/2016">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>January 19th, 2016</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                                <li data-date="03/03/2016">
                                                    <h2>Event title here</h2>
                                                    <h3 className="text-muted mb-1">
                                                        <em>March 3rd, 2016</em>
                                                    </h3>
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                        fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                        aspernatur at, eaque hic repellendus sit dicta consequatur
                                                        quae, ut harum ipsam molestias maxime non nisi reiciendis
                                                        eligendi! Doloremque quia pariatur harum ea amet quibusdam
                                                        quisquam, quae, temporibus dolores porro doloribus.
                                                    </p>
                                                </li>
                                            </ol>
                                        </div>
                                        {/* .events-content */}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Basic Horizontal Timeline */}
                </div>
            </div>
        </div>

    )
}

export default horizontal