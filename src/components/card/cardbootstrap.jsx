import React from 'react'

const card_bootstrap = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Bootstrap Cards</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Components</a>
                                    </li>
                                    <li className="breadcrumb-item active">Bootstrap Cards
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
                    {/* Basic example section start */}
                    <section id="basic-examples">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Basic Examples</h4>
                                <p>Cards require a small amount of markup and classes to provide you with
                                    as much control as possible. These classes and markup are flexible
                                    though and can typically be remixed and extended with ease. For example,
                                    if your card has no flush content like images, feel free to put the
                                    <code>.card-body</code> class on the <code>.card</code> element to
                                    consolidate your markup.</p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/06.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Icing powder caramels macaroon. Toffee sugar plum brownie pastry
                                                gummies jelly.</p>
                                            <a href="#" className="btn btn-outline-amber">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <img className="card-img img-fluid mb-1" src="../../../app-assets/images/carousel/08.jpg" alt="Card image cap" />
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut
                                                jujubes jelly chocolate cake marzipan chocolate chocolate bar.</p>
                                            <a href="#" className="btn btn-outline-teal">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                        </div>
                                        <img className="img-fluid" src="../../../app-assets/images/carousel/10.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <p className="card-text">Bear claw sesame snaps gummies chocolate.</p>
                                            <a href="#" className="card-link pink">Card link</a>
                                            <a href="#" className="card-link pink">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
                                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                            <img className="img-fluid my-1" src="../../../app-assets/images/carousel/09.jpg" alt="Card image cap" />
                                            <p className="card-text">Topping dessert marshmallow gummi bears chupa chups marzipan.</p>
                                            <a href="#" className="card-link blue darken-2">Card link</a>
                                            <a href="#" className="card-link blue darken-2">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* // Basic example section end */}
                    {/* Content types section start */}
                    <section id="content-types">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Content Types</h4>
                                <p>Cards support a wide variety of content, including images, text, list
                                    groups, links, and more. Mix and match multiple content types to
                                    create the card you need.</p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Basic</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-outline-pink">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">List Group</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <span className="badge badge-default badge-pill bg-primary float-right">4</span>
                                                Cras justo odio
                                            </li>
                                            <li className="list-group-item">
                                                <span className="badge badge-default badge-pill bg-info float-right">2</span>
                                                Dapibus ac facilisis in
                                            </li>
                                            <li className="list-group-item">
                                                <span className="badge badge-default badge-pill bg-warning float-right">1</span>
                                                Morbi leo risus
                                            </li>
                                            <li className="list-group-item">
                                                <span className="badge badge-default badge-pill bg-success float-right">3</span>
                                                Porta ac consectetur ac
                                            </li>
                                            <li className="list-group-item">
                                                <span className="badge badge-default badge-pill bg-danger float-right">8</span>
                                                Vestibulum at eros
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Carousel</h4>
                                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                        </div>
                                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                                                <li data-target="#carousel-example-generic" data-slide-to={1} />
                                                <li data-target="#carousel-example-generic" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img src="../../../app-assets/images/carousel/02.jpg" className="d-block w-100" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="../../../app-assets/images/carousel/03.jpg" className="d-block w-100" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="../../../app-assets/images/carousel/01.jpg" className="d-block w-100" alt="Third slide" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
                                                <span className="la la-angle-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
                                                <span className="la la-angle-right icon-next" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Collapse</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                        </div>
                                        <div id="accordionWrap1" role="tablist" aria-multiselectable="true">
                                            <div className="card collapse-icon panel mb-0 box-shadow-0 border-0">
                                                <div id="heading11" role="tab" className="card-header border-bottom-blue-grey border-bottom-lighten-4">
                                                    <a data-toggle="collapse" data-parent="#accordionWrap1" href="#accordion11" aria-expanded="true" aria-controls="accordion11" className="h6 blue">Accordion Group Item #1</a>
                                                </div>
                                                <div id="accordion11" role="tabpanel" aria-labelledby="heading11" className="collapse show" aria-expanded="true">
                                                    <div className="card-body">
                                                        <p className="card-text">Caramels dessert chocolate cake pastry jujubes bonbon.
                                                            Jelly wafer jelly beans. Caramels chocolate cake liquorice
                                                            cake wafer jelly beans croissant apple pie.</p>
                                                    </div>
                                                </div>
                                                <div id="heading12" role="tab" className="card-header border-bottom-blue-grey border-bottom-lighten-4">
                                                    <a data-toggle="collapse" data-parent="#accordionWrap1" href="#accordion12" aria-expanded="false" aria-controls="accordion12" className="h6 blue collapsed">Accordion Group Item #2</a>
                                                </div>
                                                <div id="accordion12" role="tabpanel" aria-labelledby="heading12" className="collapse" aria-expanded="false">
                                                    <div className="card-body">
                                                        <p className="card-text">Sugar plum bear claw oat cake chocolate jelly tiramisu
                                                            dessert pie. Tiramisu macaroon muffin jelly marshmallow
                                                            cake. Pastry oat cake chupa chups.</p>
                                                    </div>
                                                </div>
                                                <div id="heading13" role="tab" className="card-header border-bottom-blue-grey border-bottom-lighten-4">
                                                    <a data-toggle="collapse" data-parent="#accordionWrap1" href="#accordion13" aria-expanded="false" aria-controls="accordion13" className="h6 blue collapsed">Accordion Group Item #3</a>
                                                </div>
                                                <div id="accordion13" role="tabpanel" aria-labelledby="heading13" className="collapse" aria-expanded="false">
                                                    <div className="card-body">
                                                        <p className="card-text">Candy cupcake sugar plum oat cake wafer marzipan jujubes
                                                            lollipop macaroon. Cake dragée jujubes donut chocolate
                                                            bar chocolate cake cupcake chocolate topping.</p>
                                                    </div>
                                                </div>
                                                <div id="heading14" role="tab" className="card-header border-bottom-blue-grey border-bottom-lighten-4">
                                                    <a data-toggle="collapse" data-parent="#accordionWrap1" href="#accordion14" aria-expanded="false" aria-controls="accordion14" className="h6 blue collapsed">Accordion Group Item #4</a>
                                                </div>
                                                <div id="accordion14" role="tabpanel" aria-labelledby="heading14" className="card-collapse collapse" aria-expanded="false" style={{ height: '0px' }}>
                                                    <div className="card-body">
                                                        <p className="card-text">Sesame snaps chocolate lollipop sesame snaps apple pie
                                                            chocolate cake sweet roll. Dragée candy canes carrot
                                                            cake chupa chups danish cake sugar plum candy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Video Embed</h4>
                                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                        </div>
                                        <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                                            <iframe className="img-thumbnail" src="https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0" allowFullScreen />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Candy cupcake sugar plum oat cake wafer marzipan jujubes lollipop
                                                macaroon. Cake dragée jujubes donut chocolate bar chocolate
                                                cake cupcake chocolate topping. Dessert jelly beans toffee
                                                muffin.
                                            </p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Contact Form</h4>
                                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                        </div>
                                        <div className="card-body">
                                            <form className="form">
                                                <div className="form-body">
                                                    <div className="form-group">
                                                        <label htmlFor="donationinput1" className="sr-only">Name</label>
                                                        <input type="text" id="donationinput1" className="form-control" placeholder="name" name="name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="donationinput2" className="sr-only">Email</label>
                                                        <input type="email" id="donationinput2" className="form-control" placeholder="email" name="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="donationinput7" className="sr-only">Message</label>
                                                        <textarea id="donationinput7" rows={5} className="form-control square" name="message" placeholder="message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="form-actions center">
                                                    <button type="submit" className="btn btn-outline-primary">Send</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Content types section end */}
                    {/* Card sizing section start */}
                    <section id="sizing">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Sizing</h4>
                                <p>Constrain the width of cards via custom CSS, our predefined grid classes,
                                    or with custom styles using our grid mixins.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Project Info</h4>
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
                                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                                    content.
                                                </p>
                                            </div>
                                            <form className="form">
                                                <div className="form-body">
                                                    <h4 className="form-section"><i className="ft-user" /> Personal Info</h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="projectinput1" className="sr-only">First Name</label>
                                                                <input type="text" id="projectinput1" className="form-control" placeholder="First Name" name="fname" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="projectinput2" className="sr-only">Last Name</label>
                                                                <input type="text" id="projectinput2" className="form-control" placeholder="Last Name" name="lname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="projectinput3" className="sr-only">E-mail</label>
                                                                <input type="text" id="projectinput3" className="form-control" placeholder="E-mail" name="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="projectinput4" className="sr-only">Contact Number</label>
                                                                <input type="text" id="projectinput4" className="form-control" placeholder="Phone" name="phone" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="form-section"><i className="ft-check-circle" /> Requirements</h4>
                                                    <div className="form-group">
                                                        <label htmlFor="companyName" className="sr-only">Company</label>
                                                        <input type="text" id="companyName" className="form-control" placeholder="Company Name" name="company" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="projectinput5" className="sr-only">Interested in</label>
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
                                                                <label htmlFor="projectinput6" className="sr-only">Budget</label>
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
                                                        <label htmlFor="projectinput8" className="sr-only">About Project</label>
                                                        <textarea id="projectinput8" rows={5} className="form-control" name="comment" placeholder="About Project" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="form-actions">
                                                    <button type="button" className="btn btn-outline-warning mr-1">
                                                        <i className="ft-x" /> Cancel
                                                    </button>
                                                    <button type="submit" className="btn btn-outline-primary">
                                                        <i className="ft-check" /> Save
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
                                        <h4 className="card-title">User Profile</h4>
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
                                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                                    content.
                                                </p>
                                            </div>
                                            <form className="form">
                                                <div className="form-body">
                                                    <h4 className="form-section"><i className="ft-eye" /> About User</h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="userinput1" className="sr-only">Fist Name</label>
                                                                <input type="text" id="userinput1" className="form-control" placeholder="Name" name="name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="userinput2" className="sr-only">Last Name</label>
                                                                <input type="text" id="userinput2" className="form-control" placeholder="Company" name="company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="userinput3" className="sr-only">Username</label>
                                                                <input type="text" id="userinput3" className="form-control" placeholder="Username" name="username" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="userinput4" className="sr-only">Nick Name</label>
                                                                <input type="text" id="userinput4" className="form-control" placeholder="Nick Name" name="nickname" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="form-section"><i className="ft-mail" /> Contact Info &amp; Bio</h4>
                                                    <div className="form-group">
                                                        <label htmlFor="userinput5" className="sr-only">Email</label>
                                                        <input className="form-control" type="email" placeholder="email" id="userinput5" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="userinput6" className="sr-only">Website</label>
                                                        <input className="form-control" type="url" placeholder="http://" id="userinput6" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="userinput8" className="sr-only">Bio</label>
                                                        <textarea id="userinput8" rows={5} className="form-control" name="bio" placeholder="Bio" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="form-actions right">
                                                    <button type="button" className="btn btn-outline-warning mr-1">
                                                        <i className="ft-x" /> Cancel
                                                    </button>
                                                    <button type="submit" className="btn btn-outline-primary">
                                                        <i className="ft-check" /> Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Card sizing section end */}
                    {/* Text alignment section start */}
                    <section id="text-alignment">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Text alignment</h4>
                                <p>You can quickly change the text alignment of any card—in its entirety
                                    or specific parts—with our text align classes.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title info">Text Align Left</h4>
                                            <p className="card-text">Gummi bears I love oat cake gingerbread donut cotton candy pie
                                                biscuit tart. Chocolate cake chocolate cake I love marzipan
                                                cookie macaroon. Tart I love I love carrot cake carrot cake
                                                chupa chups caramels. Carrot cake pastry cotton candy.</p>
                                            <p className="card-text">Dessert I love brownie biscuit topping I love chocolate cake
                                                gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate
                                                cake pastry macaroon.</p>
                                            <a href="#" className="btn btn-outline-info">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card text-center">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title success">Text Align Center</h4>
                                            <p className="card-text">Gummi bears I love oat cake gingerbread donut cotton candy pie
                                                biscuit tart. Chocolate cake chocolate cake I love marzipan
                                                cookie macaroon. Tart I love I love carrot cake carrot cake
                                                chupa chups caramels. Carrot cake pastry cotton candy.</p>
                                            <p className="card-text">Dessert I love brownie biscuit topping I love chocolate cake
                                                gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate
                                                cake pastry macaroon.</p>
                                            <a href="#" className="btn btn-outline-success">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card text-right">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title danger">Text Align Right</h4>
                                            <p className="card-text">Gummi bears I love oat cake gingerbread donut cotton candy pie
                                                biscuit tart. Chocolate cake chocolate cake I love marzipan
                                                cookie macaroon. Tart I love I love carrot cake carrot cake
                                                chupa chups caramels. Carrot cake pastry cotton candy.</p>
                                            <p className="card-text">Dessert I love brownie biscuit topping I love chocolate cake
                                                gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate
                                                cake pastry macaroon.</p>
                                            <a href="#" className="btn btn-outline-danger">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Text alignment section end */}
                    {/* Header footer section start */}
                    <section id="header-footer">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Header and footer</h4>
                                <p>Add an optional header and/or footer within a card.</p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Basic Card</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h5>Basic Card With Header &amp; Footer</h5>
                                        </div>
                                        <img className="img-fluid" src="../../../app-assets/images/carousel/02.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                        <span className="float-left">3 hours ago</span>
                                        <span className="float-right">
                                            <a href="#" className="card-link">Read More <i className="la la-angle-right" /></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Video Embed</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h5>Video Embed Card With Header &amp; Footer</h5>
                                        </div>
                                        <div className="embed-responsive embed-responsive-item embed-responsive-4by3">
                                            <iframe className="img-thumbnail" src="https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0" allowFullScreen />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Candy cupcake sugar plum oat cake wafer marzipan jujubes lollipop
                                                macaroon.
                                            </p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                        <span className="float-left">1 day ago</span>
                                        <span className="tags float-right">
                                            <span className="badge badge-pill badge-success">Technology</span>
                                            <span className="badge badge-pill badge-warning">Gaming</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Carousel</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h5 className="card-title">Carousel Card With Header &amp; Footer</h5>
                                        </div>
                                        <div id="carousel-example" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carousel-example" data-slide-to={0} className="active" />
                                                <li data-target="#carousel-example" data-slide-to={1} />
                                                <li data-target="#carousel-example" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img src="../../../app-assets/images/carousel/08.jpg" className="d-block w-100" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="../../../app-assets/images/carousel/03.jpg" className="d-block w-100" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="../../../app-assets/images/carousel/01.jpg" className="d-block w-100" alt="Third slide" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                                                <span className="la la-angle-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                                                <span className="la la-angle-right icon-next" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                        <span className="float-left">2 days ago</span>
                                        <span className="tags float-right">
                                            <span className="badge badge-pill badge-primary">Branding</span>
                                            <span className="badge badge-pill badge-danger">Design</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Header footer section end */}
                    {/* Card overlay section start */}
                    <section id="card-overlay">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Image caps, overlays &amp; Inverted text</h4>
                                <p>Similar to headers and footers, cards include top and bottom image
                                    caps.
                                </p>
                                <p>Turn an image into a card background and overlay your card’s text.
                                    Depending on the image, you may or may not need <code>.text-white</code></p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/09.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Top Image Cap</h4>
                                            <p className="card-text">Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon
                                                donut pastry gummies tiramisu chocolate bar muffin. Dessert
                                                bonbon caramels brownie chocolate bar chocolate tart dragée.</p>
                                            <p className="card-text">Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate
                                                bar muffin.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="card border-0 box-shadow-0">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <h4 className="card-title">Bottom Image Cap</h4>
                                            <p className="card-text">Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon
                                                donut pastry gummies tiramisu chocolate bar muffin. Dessert
                                                bonbon caramels brownie chocolate bar chocolate tart dragée.</p>
                                            <p className="card-text">Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate
                                                bar muffin.</p>
                                            <p className="card-text mt-1">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                        <img className="card-img-bottom img-fluid" src="../../../app-assets/images/carousel/15.jpg" alt="Card image cap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="card border-0 box-shadow-0">
                                    <div className="card-content">
                                        <img className="card-img img-fluid" src="../../../app-assets/images/carousel/06.jpg" alt="Card image" />
                                        <div className="card-img-overlay overlay-yellow">
                                            <h4 className="card-title">Card Image Overlay</h4>
                                            <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                chupa chups.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="card border-0 box-shadow-0">
                                    <div className="card-content">
                                        <img className="card-img img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image" />
                                        <div className="card-img-overlay overlay-danger overlay-lighten-2">
                                            <h4 className="card-title">Card Image Overlay</h4>
                                            <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                chupa chups.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="card text-white border-0 box-shadow-0">
                                    <div className="card-content">
                                        <img className="card-img img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image" />
                                        <div className="card-img-overlay overlay-warning">
                                            <h4 className="card-title">Inverse Text</h4>
                                            <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                chupa chups.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="card text-white border-0 box-shadow-0">
                                    <div className="card-content">
                                        <img className="card-img img-fluid" src="../../../app-assets/images/carousel/09.jpg" alt="Card image" />
                                        <div className="card-img-overlay overlay-blue">
                                            <h4 className="card-title">Inverse Text</h4>
                                            <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                chupa chups.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Card overlay section end */}
                    {/* Background variants section start */}
                    <section id="bg-variants">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Background variants</h4>
                                <p>Cards include their own variant classes for quickly changing the <code>background-color</code>                and <code>border-color</code> of a card. Darker colors require the
                                    use of <code>.text-white</code>.</p>
                                <p>Cards include a class for quickly toggling the text color. By default,
                                    cards use dark text and assume a light background. Add <code>.text-white</code>                for white text and specify the <code>background-color</code> and
                                    <code>border-color</code> to go with it.
                                    <br />You can also use <code>.text-white</code> with the contextual backgrounds
                                    variants.
                                </p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-primary text-center">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/01.png" alt="element 01" width={190} className="float-left" />
                                            <h4 className="card-title mt-3 text-white">Brand Minute</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-primary btn-darken-3">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-success text-center">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <img src="../../../app-assets/images/elements/06.png" alt="element 02" width={225} className="mb-1" />
                                            <h3 className="card-title text-white">Ceramic Bottle</h3>
                                            <p className="card-text">456 items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-danger text-center">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/14.png" alt="element 03" width={170} className="float-right" />
                                            <h4 className="card-title mt-3 text-white">Brand Minute</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-danger btn-darken-3">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-info text-center">
                                    <div className="card-content">
                                        <img src="../../../app-assets/images/elements/07.png" alt="element 04" width={210} className="float-left mt-3" />
                                        <div className="card-body pt-3">
                                            <h4 className="card-title mt-3 text-white">New Arriaval</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-info btn-darken-3">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-warning text-center">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <img src="../../../app-assets/images/elements/04.png" alt="element 05" width={250} className="mb-1" />
                                            <h4 className="card-title text-white">Storage Device</h4>
                                            <p className="card-text">945 items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-white bg-blue text-center">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/11.png" alt="element 06" width={190} className="float-right" />
                                            <h4 className="card-title mt-3 text-white">New Arriaval</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-blue btn-darken-3 white">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Background variants section end */}
                    {/* Outline variants section start */}
                    <section id="outline-variants">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Outline variants</h4>
                                <p>In need of a colored card, but not the hefty background colors they
                                    bring? Replace the default modifier classes with the <code>.border-*</code>                ones to style just the <code>border-color</code> of a card.</p>
                            </div>
                        </div>
                        <div className="row match-height">
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-primary text-center bg-transparent">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/01.png" alt="element 01" width={190} className="float-left" />
                                            <h4 className="card-title mt-3 text-white">Brand Minute</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-success text-center bg-transparent">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <img src="../../../app-assets/images/elements/06.png" alt="element 02" width={225} className="mb-1" />
                                            <h3 className="card-title">Ceramic Bottle</h3>
                                            <p className="card-text">456 items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-danger text-center bg-transparent">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/01.png" alt="element 03" width={190} className="float-right" />
                                            <h4 className="card-title mt-3">Brand Minute</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-danger">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-info text-center bg-transparent">
                                    <div className="card-content">
                                        <img src="../../../app-assets/images/elements/07.png" alt="element 04" width={210} className="float-left mt-3" />
                                        <div className="card-body pt-3">
                                            <h4 className="card-title mt-3">New Arriaval</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-info">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-warning text-center bg-transparent">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <img src="../../../app-assets/images/elements/04.png" alt="element 05" width={250} className="mb-1" />
                                            <h4 className="card-title">Storage Device</h4>
                                            <p className="card-text">945 items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card border-blue text-center bg-transparent">
                                    <div className="card-content">
                                        <div className="card-body pt-3">
                                            <img src="../../../app-assets/images/elements/11.png" alt="element 06" width={190} className="float-right" />
                                            <h4 className="card-title mt-3">New Arriaval</h4>
                                            <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                            <button className="btn btn-blue">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Outline variants section end */}
                    {/* Groups section start */}
                    <section id="groups">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Groups</h4>
                                <p>Use card groups to render cards as a single, attached element with
                                    equal width and height columns. By default, card groups use <code>display: table;</code>                and <code>table-layout: fixed;</code> to achieve their uniform sizing.
                                    However, enabling flexbox mode can switch that to use <code>display: flex;</code>                and provide the same effect.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-group">
                                    <div className="card">
                                        <div className="card-content">
                                            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/04.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-content">
                                            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/01.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-content">
                                            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/06.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-content">
                                            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/02.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Groups section end */}
                    {/* Decks section start */}
                    <section id="decks">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Decks</h4>
                                <p>Need a set of equal width and height cards that aren’t attached to
                                    one another? Use card decks. By default, card decks require two wrapping
                                    elements: <code>.card-deck-wrapper</code> and a <code>.card-deck</code>.
                                    We use table styles for the sizing and the gutters on <code>.card-deck</code>.
                                    The <code>.card-deck-wrapper</code> is used to negative margin out
                                    the <code>border-spacing</code> on the <code>.card-deck</code>.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck-wrapper">
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-content">
                                                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h4 className="card-title">Card title</h4>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in
                                                        to additional content.</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-content">
                                                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/09.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h4 className="card-title">Card title</h4>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in
                                                        to additional content.</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-content">
                                                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/02.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h4 className="card-title">Card title</h4>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in
                                                        to additional content.</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-content">
                                                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/03.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h4 className="card-title">Card title</h4>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in
                                                        to additional content.</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Decks section end */}
                    {/* Columns section start */}
                    <section id="columns">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Columns</h4>
                                <p>Cards can be organized into Masonry-like columns with just CSS by wrapping
                                    them in <code>.card-columns</code>. Only applies to small devices
                                    and above.</p>
                                <p>
                                    <strong>Heads up!</strong> This is
                                    <strong>not available in IE9</strong> and below as they have no support for
                                    the column-* CSS properties.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-1">
                                <div className="card-columns">
                                    <div className="card">
                                        <div className="card-content">
                                            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/06.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make
                                                    up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-white bg-primary text-center">
                                        <div className="card-content">
                                            <div className="card-body pt-3">
                                                <img src="../../../app-assets/images/elements/01.png" alt="element 01" width={190} className="float-left img-fluid" />
                                                <h4 className="card-title mt-3 text-white">Brand Minute</h4>
                                                <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                                <button className="btn btn-primary btn-darken-3">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-white bg-warning text-center border-0 box-shadow-0">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <img src="../../../app-assets/images/elements/04.png" alt="element 05" width={250} className="mb-1 img-fluid" />
                                                <h4 className="card-title text-white">Storage Device</h4>
                                                <p className="card-text">945 items</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-white bg-success text-center border-0 box-shadow-0">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <img src="../../../app-assets/images/elements/06.png" alt="element 02" width={225} className="mb-1 img-fluid" />
                                                <h3 className="card-title text-white">Ceramic Bottle</h3>
                                                <p className="card-text">456 items</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 box-shadow-0">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <h4 className="card-title">Bottom Image Cap</h4>
                                                <p className="card-text">Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake
                                                    macaroon donut pastry gummies tiramisu chocolate bar muffin.
                                                    Dessert bonbon caramels brownie chocolate bar chocolate tart
                                                    dragée.
                                                </p>
                                                <p className="card-text">Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate
                                                    bar muffin.</p>
                                                <p className="card-text mt-1">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                            <img className="card-img-bottom img-fluid" src="../../../app-assets/images/carousel/15.jpg" alt="Card image cap" />
                                        </div>
                                    </div>
                                    <div className="card text-white border-0 box-shadow-0">
                                        <div className="card-content">
                                            <img className="card-img img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image" />
                                            <div className="card-img-overlay overlay-cyan">
                                                <h4 className="card-title text-white">Inverse Text</h4>
                                                <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                    chupa chups carrot cake topping chupa chups.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-white border-0 box-shadow-0">
                                        <div className="card-content">
                                            <img className="card-img img-fluid" src="../../../app-assets/images/carousel/09.jpg" alt="Card image" />
                                            <div className="card-img-overlay overlay-blue-grey">
                                                <h4 className="card-title text-white">Inverse Text</h4>
                                                <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy
                                                    chupa chups carrot cake topping chupa chups.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-info text-center box-shadow-0 bg-transparent">
                                        <div className="card-content">
                                            <img src="../../../app-assets/images/elements/07.png" alt="element 04" width={210} className="float-left mt-3 img-fluid" />
                                            <div className="card-body pt-3">
                                                <h4 className="card-title mt-3">New Arriaval</h4>
                                                <p className="card-text">Donut toffee candy brownie soufflé macaroon.</p>
                                                <button className="btn btn-info">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 box-shadow-0">
                                        <div className="card-content">
                                            <img className="card-img img-fluid" src="../../../app-assets/images/carousel/02.jpg" alt="Card image cap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Columns section end */}
                </div>
            </div>
        </div>

    )
}

export default card_bootstrap