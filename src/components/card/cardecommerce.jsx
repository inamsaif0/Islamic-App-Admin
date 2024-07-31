import React from 'react'

export default function Ecommerce_Card() {
  return (
    <div className="app-content content">
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
        <h3 className="content-header-title mb-0 d-inline-block">Advance E-commerce Cards</h3>
        <div className="row breadcrumbs-top d-inline-block">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item"><a href="#">Components</a>
              </li>
              <li className="breadcrumb-item active">E-commerce Cards
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
      {/* E-commerce section start */}
      <section id="ecommerce-stats">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-uppercase">E-Commerce Analytics</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card text-white bg-success bg-lighten-1">
              <div className="card-header">
                <h4 className="card-title text-white">Top Selling Phones</h4>
                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                    <li><a data-action="close"><i className="ft-x" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-content collapse show">
                <div className="card-body">
                  <div id="doughnut" className="height-400 echart-container" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card text-white bg-danger bg-lighten-1">
              <div className="card-header">
                <h4 className="card-title text-white">Customer Browser's Stats</h4>
                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                    <li><a data-action="close"><i className="ft-x" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-content collapse show">
                <div className="card-body">
                  <div id="timeline" className="height-400 echart-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Nightingale Rose With Labels Chart */}
          <div className="col-md-6 col-sm-12">
            <div className="card bg-blue-grey bg-lighten-1 text-white">
              <div className="card-header">
                <h4 className="card-title text-white">Monthly Sales</h4>
                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                    <li><a data-action="close"><i className="ft-x" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-content collapse show">
                <div className="card-body">
                  <div id="nightingale-rose-labels" className="height-400 echart-container" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Recent Buyers</h4>
                <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-content">
                <div id="recent-buyers" className="media-list">
                  <a href="#" className="media border-0">
                    <div className="media-left pr-1">
                      <span className="avatar avatar-md avatar-online">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                        <i />
                      </span>
                    </div>
                    <div className="media-body w-100">
                      <h6 className="list-group-item-heading">Kristopher Candy
                        <span className="font-medium-4 float-right pt-1">$1,021</span>
                      </h6>
                      <p className="list-group-item-text mb-0">
                        <span className="badge badge-primary">Electronics</span>
                        <span className="badge badge-warning ml-1">Decor</span>
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
                      <h6 className="list-group-item-heading">Lawrence Fowler
                        <span className="font-medium-4 float-right pt-1">$2,021</span>
                      </h6>
                      <p className="list-group-item-text mb-0">
                        <span className="badge badge-danger">Appliances</span>
                      </p>
                    </div>
                  </a>
                  <a href="#" className="media border-0">
                    <div className="media-left pr-1">
                      <span className="avatar avatar-md avatar-busy">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="Generic placeholder image" />
                        <i />
                      </span>
                    </div>
                    <div className="media-body w-100">
                      <h6 className="list-group-item-heading">Linda Olson
                        <span className="font-medium-4 float-right pt-1">$1,112</span>
                      </h6>
                      <p className="list-group-item-text mb-0">
                        <span className="badge badge-primary">Electronics</span>
                        <span className="badge badge-success ml-1">Office</span>
                      </p>
                    </div>
                  </a>
                  <a href="#" className="media border-0">
                    <div className="media-left pr-1">
                      <span className="avatar avatar-md avatar-online">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="Generic placeholder image" />
                        <i />
                      </span>
                    </div>
                    <div className="media-body w-100">
                      <h6 className="list-group-item-heading">Roy Clark
                        <span className="font-medium-4 float-right pt-1">$2,815</span>
                      </h6>
                      <p className="list-group-item-text mb-0">
                        <span className="badge badge-warning">Decor</span>
                        <span className="badge badge-danger ml-1">Appliances</span>
                      </p>
                    </div>
                  </a>
                  <a href="#" className="media border-0">
                    <div className="media-left pr-1">
                      <span className="avatar avatar-md avatar-online">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-11.png" alt="Generic placeholder image" />
                        <i />
                      </span>
                    </div>
                    <div className="media-body w-100">
                      <h6 className="list-group-item-heading">Kristopher Candy
                        <span className="font-medium-4 float-right pt-1">$2,021</span>
                      </h6>
                      <p className="list-group-item-text mb-0">
                        <span className="badge badge-primary">Electronics</span>
                        <span className="badge badge-warning ml-1">Decor</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // E-commerce section end */}
      {/* Shopping cards section start */}
      <section id="shopping-cards">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-uppercase">Shopping Cards</h4>
          </div>
        </div>
        <div className="row match-height">
          <div className="col-lg-4 col-md-12">
            <div className="card text-center">
              <div className="card-content">
                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/24.png" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Formal Shoes</h4>
                  <p className="card-text">Some quick example text.</p>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <span className="btn btn-outline-blue-grey">$159</span>
                    <button type="button" className="btn btn-outline-blue-grey">Shop Now <i className="ft-shopping-cart" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-content">
                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/25.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Smart Wearable</h4>
                  <p className="card-text">Oat cake ice cream candy chocolate cake chocolate cake cotton
                    candy.
                  </p>
                </div>
              </div>
              <div className="card-footer text-muted">
                <span className="float-left">$349</span>
                <span className="float-right">Add To Cart <i className="la la-cart-plus" /></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-content">
                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/22.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Sunglass</h4>
                  <p className="card-text">Some quick example text.</p>
                </div>
              </div>
              <div className="card-footer text-muted mt-2">
                <span className="float-left">
                  <del className="grey">$99</del>
                  <span className="ml-1">$49</span>
                </span>
                <span className="float-right"><i className="la la-heart-o" /> Like</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div className="card text-center">
              <div className="card-content">
                <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/26.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Running Shoes</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="card text-white bg-gradient-y-pink text-center">
              <div className="card-content">
                <img src="../../../app-assets/images/carousel/29.png" alt="Relax" width={600} className="float-right pr-3 img-fluid" />
                <div className="card-body pt-3">
                  <h4 className="card-title mt-3 text-white">Brand Minute</h4>
                  <p className="card-text ">Donut toffee</p>
                  <button className="btn bg-white bg-darken-3 pink">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <p className="text-uppercase">You Are Purchasing</p>
                  <h3 className="text-uppercase">Apple Watch</h3>
                  <div className="rating">
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star-half-o" />
                  </div>
                  <img src="../../../app-assets/images/elements/apple-watch.png" alt="apple-watch" width="250px" className="img-fluid p-2" />
                  <button type="button" className="btn btn-success btn-block btn-glow text-uppercase p-1">Purchase</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <p className="text-uppercase">You Are Purchasing</p>
                  <h3 className="text-uppercase">Fitbit Watch</h3>
                  <div className="rating">
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star-half-o" />
                  </div>
                  <img src="../../../app-assets/images/elements/fitbit-watch.png" alt="apple-watch" width="250px" className="img-fluid p-2" />
                  <button type="button" className="btn btn-danger btn-block btn-glow text-uppercase p-1">Purchase</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <p className="text-uppercase">You Are Purchasing</p>
                  <h3 className="text-uppercase">Samsung Gear s2</h3>
                  <div className="rating">
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star" />
                    <i className="la la-star-half-o" />
                  </div>
                  <img src="../../../app-assets/images/elements/samsung-gear.png" alt="apple-watch" width="250px" className="img-fluid p-2" />
                  <button type="button" className="btn btn-warning btn-block btn-glow text-uppercase p-1">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-md-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-xl-6 col-md-12 p-2 pl-3">
                      <div className>
                        <h2>Unique Furniture</h2>
                        <div className="rating warning mb-1">
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star-half-o" /> 1290 review
                        </div>
                        <p>Nteresting furniture design from a man with an interesting
                          background: Alain Gilles is an banker who quit finance
                          to study industrial design.
                        </p>
                        <p>Since opening his studio he's worked banker who quit finance
                          to study industrial design..</p>
                      </div>
                      <h2 className="py-2">$329.00</h2>
                      <button type="button" className="btn btn-warning btn-block btn-glow text-uppercase p-1">Purchase</button>
                    </div>
                    <div className="col-xl-6 col-md-12 p-0">
                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src="../../../app-assets/images/gallery/34.png" alt="First slide" />
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="../../../app-assets/images/gallery/35.png" alt="First slide" />
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="../../../app-assets/images/gallery/36.png" alt="First slide" />
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="../../../app-assets/images/gallery/37.png" alt="First slide" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center bg-danger p-0">
                  <h2 className="text-white pt-1">IPHONE X</h2>
                  <img className="mx-auto d-block pt-1" width="120px;" src="../../../app-assets/images/icons/iphone.png" alt="First slide" />
                  <h2 className="text-white py-1 m-0">$999</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="bg-warning bg-darken-2 pl-2 pr-2 pt-2 text-white">
                    <img src="../../../app-assets/images/icons/nike.png" width="40px" />
                    <h3 className="text-white pt-2">HARTBEESPOORT</h3>
                    <p className="m-0">Support and Nike Zoom Air come together for a more supportive
                      feel.
                    </p>
                    <img src="../../../app-assets/images/elements/sws.png" alt="Relax" width={500} className="float-right img-fluid card-image-position-right" />
                    <h1 className="card-font-style-black">FAS</h1>
                  </div>
                  <div className="card-body p-2">
                    <h5>HARTBEE<b>SPOORT</b>
                      <span className="badge badge-success">New</span>
                    </h5>
                    <p className="m-0">BASKET BALL COLLECTION</p>
                    <div className="rating">
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star-half-o" />
                    </div>
                    <p className="mt-1">Size</p>
                    <span>7</span>
                    <span className="ml-2 badge badge badge-warning badge-glow badge-pill">8</span>
                    <span className="ml-2">9</span>
                    <span className="ml-2">10</span>
                    <span className="ml-2">11</span>
                    <span className="ml-2">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 offset-xl-1">
            <div className="card">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="bg-black pl-2 pr-2 pt-2 text-white">
                    <img src="../../../app-assets/images/icons/nike.png" width="40px" />
                    <h3 className="text-white text-uppercase pt-2">Virtual Reality</h3>
                    <p className="m-0">Virtual reality is a computer technology that uses virtual
                      reality headsets or multi-projected environments, sometimes
                      in combination with physical environments or props,</p>
                    <img src="../../../app-assets/images/elements/vr.png" alt="Relax" width={600} className="float-right img-fluid card-image-position-right-mid" />
                    <h1 className="card-font-style-white">SMART</h1>
                  </div>
                  <div className="card-body p-2">
                    <h5>HARTBEE<b>SPOORT</b>
                      <span className="badge badge-success">New</span>
                    </h5>
                    <p className="m-0">BASKET BALL COLLECTION</p>
                    <div className="rating">
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star" />
                      <i className="la la-star-half-o" />
                    </div>
                    <p className="mt-1">Size</p>
                    <span>7</span>
                    <span className="ml-2 badge badge badge-danger badge-glow badge-pill">8</span>
                    <span className="ml-2">9</span>
                    <span className="ml-2">10</span>
                    <span className="ml-2">11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // Shopping cards section end */}
    </div>
  </div>
</div>
  )
}
