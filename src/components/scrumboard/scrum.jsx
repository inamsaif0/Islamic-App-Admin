import React from 'react'

const scrum = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Scrum Board</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Scrum Board
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
                    {/* Sample Project Scrumboard */}
                    <section id="sample-project-scrumboard" className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Sample Project Scrumboard</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            <li><a data-action="close"><i className="ft-x" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="overflow-hidden">
                                            <div id="todo-lists-basic-demo" className="lobilists-wrapper" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*/ Sample Project Scrumboard */}
                    {/*Custom controls*/}
                    <section id="custom-controls" className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Custom controls</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            <li><a data-action="close"><i className="ft-x" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>Custom controls allow you to show/hide controls on list card.</p>
                                            <div className="overflow-hidden">
                                                <div id="todo-lists-demo-controls" className="lobilists-wrapper" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*/ Custom controls*/}
                    {/*Disabled drag & drop*/}
                    <section id="disabled-drag-drop" className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Disabled drag &amp; drop</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                            <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                            <li><a data-action="close"><i className="ft-x" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>Disabled drag &amp; drop feature for list card.</p>
                                            <div className="overflow-hidden">
                                                <div id="todo-lists-demo-sorting" className="lobilists-wrapper" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*/ Disabled drag & drop*/}
                </div>
            </div>
        </div>

    )
}

export default scrum