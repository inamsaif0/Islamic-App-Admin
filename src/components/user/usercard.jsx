import React from 'react'

const usercard = () => {
  return (
    <div className="app-content content">
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
        <h3 className="content-header-title mb-0 d-inline-block">User Cards</h3>
        <div className="row breadcrumbs-top d-inline-block">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item"><a href="#">Users</a>
              </li>
              <li className="breadcrumb-item active">User Cards
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
      {/* Simple User Cards */}
      <section id="simple-user-cards" className="row">
        <div className="col-12">
          <h4 className="text-uppercase">Simple User Cards</h4>
          <p>A very basic simple user cards.</p>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Michelle Howard</h4>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-1.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Joseph Ryan</h4>
                <h6 className="card-subtitle text-muted">Marketing Head</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-6.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Frances Butler</h4>
                <h6 className="card-subtitle text-muted">Technical Lead</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-5.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Andrew Davis</h4>
                <h6 className="card-subtitle text-muted">UI/UX Designer</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Simple User Cards */}
      {/* Simple User Cards with Border*/}
      <section id="simple-user-cards-with-border" className="row mt-2">
        <div className="col-12">
          <h4 className="text-uppercase">Simple User Cards with Border</h4>
          <p>Use color palette border class <code>border-color</code>, <code>border-lighten-*</code>.</p>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card border-teal border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Michelle Howard</h4>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card border-pink border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-1.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Joseph Ryan</h4>
                <h6 className="card-subtitle text-muted">Marketing Head</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card border-blue border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-6.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Frances Butler</h4>
                <h6 className="card-subtitle text-muted">Technical Lead</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card border-amber border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-5.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Andrew Davis</h4>
                <h6 className="card-subtitle text-muted">UI/UX Designer</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Simple User Cards with Border*/}
      {/* Simple User Cards with Shadow*/}
      <section id="user-cards-with-square-thumbnail" className="row mt-2">
        <div className="col-12">
          <h4 className="text-uppercase">Simple User Cards with Square Thumbnail</h4>
          <p>Use shadow helper class <code>box-shadow-*</code> to add show in cards.</p>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card box-shadow-1">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Michelle Howard</h4>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card box-shadow-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-1.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Joseph Ryan</h4>
                <h6 className="card-subtitle text-muted">Marketing Head</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card box-shadow-3">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-6.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Frances Butler</h4>
                <h6 className="card-subtitle text-muted">Technical Lead</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card box-shadow-4">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-5.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Andrew Davis</h4>
                <h6 className="card-subtitle text-muted">UI/UX Designer</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Simple User Card with Border*/}
      {/* User Profile Cards */}
      <section id="user-profile-cards" className="row mt-2">
        <div className="col-12">
          <h4 className="text-uppercase">User Profile Cards</h4>
          <p>User profile cards with border &amp; shadow variant.</p>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Frances Butler</h4>
                <h6 className="card-subtitle text-muted">Technical Lead</h6>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-danger mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-primary mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item"><i className="la la-briefcase" /> Overview</a>
              <a href="#" className="list-group-item"><i className="ft-mail" /> Email</a>
              <a href="#" className="list-group-item"><i className="ft-check-square" /> Task</a>
              <a href="#" className="list-group-item"> <i className="ft-message-square" /> Calender</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card card border-teal border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-5.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Andrew Davis</h4>
                <h6 className="card-subtitle text-muted">UI/UX Designer</h6>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-danger mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-primary mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item"><i className="la la-briefcase" /> Overview</a>
              <a href="#" className="list-group-item"><i className="ft-mail" /> Email</a>
              <a href="#" className="list-group-item"><i className="ft-check-square" /> Task</a>
              <a href="#" className="list-group-item"> <i className="ft-message-square" /> Calender</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card box-shadow-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-6.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Michelle Howard</h4>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-danger mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-primary mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item"><i className="la la-briefcase" /> Overview</a>
              <a href="#" className="list-group-item"><i className="ft-mail" /> Email</a>
              <a href="#" className="list-group-item"><i className="ft-check-square" /> Task</a>
              <a href="#" className="list-group-item"> <i className="ft-message-square" /> Calender</a>
            </div>
          </div>
        </div>
      </section>
      {/*/ User Profile Cards */}
      {/* User Profile Cards with Stats */}
      <section id="user-profile-cards-with-stats" className="row mt-2">
        <div className="col-12">
          <h4 className="text-uppercase">User Profile Cards with Stats</h4>
          <p>User profile cards with Stats in border &amp; shadow variant.</p>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-stats">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-8.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Linda Holland</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@lindah</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="btn-group" role="group" aria-label="Profile example">
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info">
                  <span className="ladda-label"><i className="la la-bell-o" />
                    <span>12+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info">
                  <span className="ladda-label"><i className="la la-heart-o" />
                    <span>25</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info">
                  <span className="ladda-label"><i className="la la-briefcase" />
                    <span>5</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info">
                  <span className="ladda-label"><i className="ft-mail" />
                    <span>75+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info">
                  <span className="ladda-label"><i className="la la-dashcube" />
                    <span>125</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores
                  id quo, sed ei.</p>
                <button type="button" className="btn btn-outline-danger btn-md mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-outline-primary btn-md mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-stats border-teal border-lighten-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-7.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Philip Garrett</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@philipg</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="btn-group" role="group" aria-label="Profile example">
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-round">
                  <span className="ladda-label"><i className="la la-bell-o" />
                    <span>12+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-round">
                  <span className="ladda-label"><i className="la la-heart-o" />
                    <span>25</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-round">
                  <span className="ladda-label"><i className="la la-briefcase" />
                    <span>5</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-round">
                  <span className="ladda-label"><i className="ft-mail" />
                    <span>75+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-round">
                  <span className="ladda-label"><i className="la la-dashcube" />
                    <span>125</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores
                  id quo, sed ei.</p>
                <button type="button" className="btn btn-outline-danger btn-md btn-round mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-outline-primary btn-md btn-round mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-stats box-shadow-2">
            <div className="text-center">
              <div className="card-body">
                <img src="../../../app-assets/images/portrait/medium/avatar-m-10.png" className="rounded-circle  height-150" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Christine Wood</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@christine</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="btn-group" role="group" aria-label="Profile example">
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-square">
                  <span className="ladda-label"><i className="la la-bell-o" />
                    <span>12+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-square">
                  <span className="ladda-label"><i className="la la-heart-o" />
                    <span>25</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-square">
                  <span className="ladda-label"><i className="la la-briefcase" />
                    <span>5</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-square">
                  <span className="ladda-label"><i className="ft-mail" />
                    <span>75+</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
                <button type="button" className="btn btn-float box-shadow-0 btn-outline-info btn-square">
                  <span className="ladda-label"><i className="la la-dashcube" />
                    <span>125</span>
                  </span>
                  <span className="ladda-spinner" />
                </button>
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores
                  id quo, sed ei.</p>
                <button type="button" className="btn btn-outline-danger btn-md btn-square mr-1"><i className="la la-plus" /> Follow</button>
                <button type="button" className="btn btn-outline-primary btn-md btn-square mr-1"><i className="ft-user" /> Profile</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Profile Cards with Stats */}
      {/* User Profile Cards with Cover Image */}
      <section id="user-profile-cards-with-cover-image" className="row mt-2">
        <div className="col-12">
          <h4 className="text-uppercase">User Profile Cards with Cover Image</h4>
          <p>User profile cards with Cover Image in border &amp; shadow variant.</p>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-cover">
            {/*<img class="card-img-top img-fluid" src="../../../app-assets/images/carousel/18.jpg" alt="Card cover image">*/}
            <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/carousel/18.jpg")'}} />
            <div className="card-profile-image">
              <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" className="rounded-circle img-border box-shadow-1" alt="Card image" />
            </div>
            <div className="profile-card-with-cover-content text-center">
              <div className="card-body">
                <h4 className="card-title">Linda Holland</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@lindah</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-github">
                  <span className="la la-github font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-cover border-teal border-lighten-2">
            {/*<img class="card-img-top img-fluid" src="../../../app-assets/images/carousel/16.jpg" alt="Card cover image">*/}
            <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/carousel/16.jpg")'}} />
            <div className="card-profile-image">
              <img src="../../../app-assets/images/portrait/small/avatar-s-9.png" className="rounded-circle img-border" alt="Card image" />
            </div>
            <div className="profile-card-with-cover-content text-center">
              <div className="card-body">
                <h4 className="card-title">Philip Garrett</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@philip</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-github">
                  <span className="la la-github font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
          <div className="card profile-card-with-cover box-shadow-2">
            <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/carousel/17.jpg")'}} />
            <div className="card-profile-image">
              <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" className="rounded-circle img-border box-shadow-4" alt="Card image" />
            </div>
            <div className="profile-card-with-cover-content text-center">
              <div className="card-body">
                <h4 className="card-title">Christine Wood</h4>
                <ul className="list-inline list-inline-pipe">
                  <li>@christine</li>
                  <li>domain.com</li>
                </ul>
                <h6 className="card-subtitle text-muted">Managing Director</h6>
              </div>
              <div className="text-center">
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                  <span className="la la-facebook" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                  <span className="la la-twitter" />
                </a>
                <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                  <span className="la la-linkedin font-medium-4" />
                </a>
                <a href="#" className="btn btn-social-icon mb-1 btn-outline-github">
                  <span className="la la-github font-medium-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ User Profile Cards with Cover Image */}
    </div>
  </div>
</div>

  )
}

export default usercard