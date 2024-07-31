import React from 'react'

const hover = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Gallery Hover Effects</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Gallery</a>
                                    </li>
                                    <li className="breadcrumb-item active">Gallery Hover Effects
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
                    {/* Description */}
                    <section id="description" className="card">
                        <div className="card-header">
                            <h4 className="card-title">Description</h4>
                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                            <div className="heading-elements">
                                <ul className="list-inline mb-0">
                                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                    <li><a data-action="close"><i className="ft-x" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>Some creative and subtle hover effect inspiration using modern CSS
                                        techniques including 3D translate and pseudo elements.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*/ Description */}
                    {/* Hover Effects */}
                    <section id="hover-effects" className="card">
                        <div className="card-header">
                            <h4 className="card-title">Hover Effects</h4>
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
                        <div className="card-content">
                            <div className="card-body pb-0">
                                <div className="card-text">
                                    <p>Image gallery grid with 30 subtle hover effect. Try to hover below
                                        demo images to show each hover effect.</p>
                                </div>
                            </div>
                            <div className="card-body my-gallery" itemScope itemType="http://schema.org/ImageGallery">
                                <div className="grid-hover row">
                                    <h5 className="col-12">Lily</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-lily">
                                            <img src="../../../app-assets/images/gallery/12.jpg" alt="img12" />
                                            <figcaption>
                                                <div>
                                                    <h2>Nice
                                                        <span>Lily</span>
                                                    </h2>
                                                    <p>Lily likes to play with crayons and pencils</p>
                                                </div>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-lily">
                                            <img src="../../../app-assets/images/gallery/1.jpg" alt="img1" />
                                            <figcaption>
                                                <div>
                                                    <h2>Nice
                                                        <span>Lily</span>
                                                    </h2>
                                                    <p>Lily likes to play with crayons and pencils</p>
                                                </div>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Sadie</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-sadie">
                                            <img src="../../../app-assets/images/gallery/2.jpg" alt="img02" />
                                            <figcaption>
                                                <h2>Holy
                                                    <span>Sadie</span>
                                                </h2>
                                                <p>Sadie never took her eyes off me.
                                                    <br />She had a dark soul.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-sadie">
                                            <img src="../../../app-assets/images/gallery/14.jpg" alt="img14" />
                                            <figcaption>
                                                <h2>Holy
                                                    <span>Sadie</span>
                                                </h2>
                                                <p>Sadie never took her eyes off me.
                                                    <br />She had a dark soul.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Honey</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-honey">
                                            <img src="../../../app-assets/images/gallery/4.jpg" alt="img04" />
                                            <figcaption>
                                                <h2>Dreamy
                                                    <span>Honey</span> <i>Now</i></h2>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-honey">
                                            <img src="../../../app-assets/images/gallery/5.jpg" alt="img05" />
                                            <figcaption>
                                                <h2>Dreamy
                                                    <span>Honey</span> <i>Now</i></h2>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Layla</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-layla">
                                            <img src="../../../app-assets/images/gallery/6.jpg" alt="img06" />
                                            <figcaption>
                                                <h2>Crazy
                                                    <span>Layla</span>
                                                </h2>
                                                <p>When Layla appears, she brings an eternal summer along.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-layla">
                                            <img src="../../../app-assets/images/gallery/3.jpg" alt="img03" />
                                            <figcaption>
                                                <h2>Crazy
                                                    <span>Layla</span>
                                                </h2>
                                                <p>When Layla appears, she brings an eternal summer along.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Zoe</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-zoe">
                                            <img src="../../../app-assets/images/gallery/25.jpg" alt="img25" />
                                            <figcaption>
                                                <h2>Creative
                                                    <span>Zoe</span>
                                                </h2>
                                                <p className="icon-links">
                                                    <a href="#" className="mr-1"><i className="ft-heart" /></a>
                                                    <a href="#" className="mr-1"><i className="ft-eye" /></a>
                                                    <a href="#" className="mr-1"><i className="ft-edit" /></a>
                                                </p>
                                                <p className="description">Zoe never had the patience of her sisters. She deliberately
                                                    punched the bear in his face.</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-zoe">
                                            <img src="../../../app-assets/images/gallery/26.jpg" alt="img26" />
                                            <figcaption>
                                                <h2>Creative
                                                    <span>Zoe</span>
                                                </h2>
                                                <p className="icon-links">
                                                    <a href="#" className="mr-1"><i className="ft-heart" /></a>
                                                    <a href="#" className="mr-1"><i className="ft-eye" /></a>
                                                    <a href="#" className="mr-1"><i className="ft-edit" /></a>
                                                </p>
                                                <p className="description">Zoe never had the patience of her sisters. She deliberately
                                                    punched the bear in his face.</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Oscar</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-oscar">
                                            <img src="../../../app-assets/images/gallery/9.jpg" alt="img09" />
                                            <figcaption>
                                                <h2>Warm
                                                    <span>Oscar</span>
                                                </h2>
                                                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-oscar">
                                            <img src="../../../app-assets/images/gallery/10.jpg" alt="img10" />
                                            <figcaption>
                                                <h2>Warm
                                                    <span>Oscar</span>
                                                </h2>
                                                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Marley</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-marley">
                                            <img src="../../../app-assets/images/gallery/11.jpg" alt="img11" />
                                            <figcaption>
                                                <h2>Sweet
                                                    <span>Marley</span>
                                                </h2>
                                                <p>Marley tried to convince her but she was not interested.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-marley">
                                            <img src="../../../app-assets/images/gallery/12.jpg" alt="img12" />
                                            <figcaption>
                                                <h2>Sweet
                                                    <span>Marley</span>
                                                </h2>
                                                <p>Marley tried to convince her but she was not interested.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Ruby</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-ruby">
                                            <img src="../../../app-assets/images/gallery/13.jpg" alt="img13" />
                                            <figcaption>
                                                <h2>Glowing
                                                    <span>Ruby</span>
                                                </h2>
                                                <p>Ruby did not need any help. Everybody knew that.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-ruby">
                                            <img src="../../../app-assets/images/gallery/14.jpg" alt="img14" />
                                            <figcaption>
                                                <h2>Glowing
                                                    <span>Ruby</span>
                                                </h2>
                                                <p>Ruby did not need any help. Everybody knew that.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Roxy</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-roxy">
                                            <img src="../../../app-assets/images/gallery/15.jpg" alt="img15" />
                                            <figcaption>
                                                <h2>Charming
                                                    <span>Roxy</span>
                                                </h2>
                                                <p>Roxy was my best friend. She'd cross any border for me.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-roxy">
                                            <img src="../../../app-assets/images/gallery/1.jpg" alt="img01" />
                                            <figcaption>
                                                <h2>Charming
                                                    <span>Roxy</span>
                                                </h2>
                                                <p>Roxy was my best friend. She'd cross any border for me.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Bubba</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-bubba">
                                            <img src="../../../app-assets/images/gallery/2.jpg" alt="img02" />
                                            <figcaption>
                                                <h2>Fresh
                                                    <span>Bubba</span>
                                                </h2>
                                                <p>Bubba likes to appear out of thin air.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-bubba">
                                            <img src="../../../app-assets/images/gallery/16.jpg" alt="img16" />
                                            <figcaption>
                                                <h2>Fresh
                                                    <span>Bubba</span>
                                                </h2>
                                                <p>Bubba likes to appear out of thin air.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Romeo</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-romeo">
                                            <img src="../../../app-assets/images/gallery/17.jpg" alt="img17" />
                                            <figcaption>
                                                <h2>Wild
                                                    <span>Romeo</span>
                                                </h2>
                                                <p>Romeo never knows what he wants. He seemed to be very cross
                                                    about something.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-romeo">
                                            <img src="../../../app-assets/images/gallery/18.jpg" alt="img18" />
                                            <figcaption>
                                                <h2>Wild
                                                    <span>Romeo</span>
                                                </h2>
                                                <p>Romeo never knows what he wants. He seemed to be very cross
                                                    about something.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Dexter</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-dexter">
                                            <img src="../../../app-assets/images/gallery/19.jpg" alt="img19" />
                                            <figcaption>
                                                <h2>Strange
                                                    <span>Dexter</span>
                                                </h2>
                                                <p>Dexter had his own strange way. You could watch him training
                                                    ants.
                                                </p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-dexter">
                                            <img src="../../../app-assets/images/gallery/12.jpg" alt="img12" />
                                            <figcaption>
                                                <h2>Strange
                                                    <span>Dexter</span>
                                                </h2>
                                                <p>Dexter had his own strange way. You could watch him training
                                                    ants.
                                                </p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Sarah</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-sarah">
                                            <img src="../../../app-assets/images/gallery/13.jpg" alt="img13" />
                                            <figcaption>
                                                <h2>Free
                                                    <span>Sarah</span>
                                                </h2>
                                                <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-sarah">
                                            <img src="../../../app-assets/images/gallery/20.jpg" alt="img20" />
                                            <figcaption>
                                                <h2>Free
                                                    <span>Sarah</span>
                                                </h2>
                                                <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Chico</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-chico">
                                            <img src="../../../app-assets/images/gallery/15.jpg" alt="img15" />
                                            <figcaption>
                                                <h2>Silly
                                                    <span>Chico</span>
                                                </h2>
                                                <p>Chico's main fear was missing the morning bus.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-chico">
                                            <img src="../../../app-assets/images/gallery/4.jpg" alt="img04" />
                                            <figcaption>
                                                <h2>Silly
                                                    <span>Chico</span>
                                                </h2>
                                                <p>Chico's main fear was missing the morning bus.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="grid-hover row">
                                    <h5 className="col-12 mt-3">Milo</h5>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-milo">
                                            <img src="../../../app-assets/images/gallery/11.jpg" alt="img11" />
                                            <figcaption>
                                                <h2>Faithful
                                                    <span>Milo</span>
                                                </h2>
                                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="effect-milo">
                                            <img src="../../../app-assets/images/gallery/3.jpg" alt="img03" />
                                            <figcaption>
                                                <h2>Faithful
                                                    <span>Milo</span>
                                                </h2>
                                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                                                <a href="#">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Image grid */}
                    </section>
                    {/*/ Hover Effects */}
                </div>
            </div>
        </div>

    )
}

export default hover