import React from 'react'

const cardsocial = () => {
  return (
    <div className="app-content content">
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
        <h3 className="content-header-title mb-0 d-inline-block">Advance Social Cards</h3>
        <div className="row breadcrumbs-top d-inline-block">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item"><a href="#">Components</a>
              </li>
              <li className="breadcrumb-item active">Social Cards
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
      {/* Social cards section start */}
      <section id="social-cards">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-uppercase">Social Cards</h4>
            <p>User's social profile cards with followers - following numbers and
              follow button.</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-xl-4 col-md-6 col-12">
            <div className="card profile-card-with-cover">
              <div className="card-content">
                {/*<img class="card-img-top img-fluid" src="../../../app-assets/images/carousel/18.jpg" alt="Card cover image">*/}
                <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/backgrounds/fb.jpg") 0 30%'}} />
                <div className="card-profile-image">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-4.png" className="rounded-circle img-border box-shadow-1" alt="Card image" />
                </div>
                <div className="profile-card-with-cover-content text-center">
                  <div className="profile-details mt-2">
                    <h4 className="card-title">Linda Holland</h4>
                    <ul className="list-inline clearfix mt-2">
                      <li className="mr-3">
                        <h2 className="block">3.5K</h2> Likes</li>
                      <li className="mr-3">
                        <h2 className="block">2845</h2> Followers</li>
                      <li>
                        <h2 className="block">645</h2> Following</li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn btn-social btn-min-width mr-1 mb-1 btn-facebook"><i className="la la-facebook" /> Follow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="card profile-card-with-cover">
              <div className="card-content">
                <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/backgrounds/in.jpg") 0 40%'}} />
                <div className="card-profile-image">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-9.png" className="rounded-circle img-border box-shadow-1" alt="Card image" />
                </div>
                <div className="profile-card-with-cover-content text-center">
                  <div className="profile-details mt-2">
                    <h4 className="card-title">Philip Garrett</h4>
                    <ul className="list-inline clearfix mt-2">
                      <li className="mr-3">
                        <h2 className="block">500+</h2> Connections</li>
                      <li className="mr-3">
                        <h2 className="block">485</h2> Posts</li>
                      <li>
                        <h2 className="block">35</h2> Following</li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn btn-social btn-min-width mr-1 mb-1 btn-linkedin">
                      <span className="la la-linkedin" /> Follow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="card profile-card-with-cover">
              <div className="card-content">
                <div className="card-img-top img-fluid bg-cover height-200" style={{background: 'url("../../../app-assets/images/backgrounds/tw.jpg") 0 30%'}} />
                <div className="card-profile-image">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" className="rounded-circle img-border box-shadow-1" alt="Card image" />
                </div>
                <div className="profile-card-with-cover-content text-center">
                  <div className="profile-details mt-2">
                    <h4 className="card-title">Christine Wood</h4>
                    <ul className="list-inline clearfix mt-2">
                      <li className="mr-3">
                        <h2 className="block">1.6K</h2> Likes</li>
                      <li className="mr-3">
                        <h2 className="block">264</h2> Followers</li>
                      <li>
                        <h2 className="block">85</h2> Following</li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn btn-social btn-min-width mr-1 mb-1 btn-twitter white">
                      <span className="la la-twitter" /> Follow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-12">
            <div className="card bg-twitter white">
              <div className="card-content p-2">
                <div className="card-body">
                  <div className="text-center mb-1">
                    <i className="la la-twitter font-large-3" />
                  </div>
                  <div className="tweet-slider carousel slide text-center" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>Congratulations to Rob Jones in accounting for winning
                          our
                          <span className="yellow">#NFL</span> football pool!</p>
                      </div>
                      <div className="carousel-item">
                        <p>Contests are a great thing to partner on. Partnerships
                          immediately
                          <span className="yellow">#DOUBLE</span> the reach.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Puns, humor, and quotes are great content on
                          <span className="yellow">#Twitter</span>. Find some related to your business.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Are there
                          <span className="yellow">#common-sense</span> facts related to your business?
                          Combine them with a great photo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="card bg-facebook white">
              <div className="card-content p-2">
                <div className="card-body">
                  <div className="text-center mb-1">
                    <i className="la la-facebook font-large-3" />
                  </div>
                  <div className="fb-post-slider carousel slide text-center" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>Congratulations to Rob Jones in accounting for winning
                          our #NFL football pool!</p>
                      </div>
                      <div className="carousel-item">
                        <p>Contests are a great thing to partner on. Partnerships
                          immediately #DOUBLE the reach.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Puns, humor, and quotes are great content on #Twitter.
                          Find some related to your business.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Are there #common-sense facts related to your business?
                          Combine them with a great photo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="card bg-linkedin white">
              <div className="card-content p-2">
                <div className="card-body">
                  <div className="text-center mb-1">
                    <i className="la la-linkedin font-large-3" />
                  </div>
                  <div className="linkedin-post-slider carousel slide text-center" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>Congratulations to Rob Jones in accounting for winning
                          our #NFL football pool!</p>
                      </div>
                      <div className="carousel-item">
                        <p>Contests are a great thing to partner on. Partnerships
                          immediately #DOUBLE the reach.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Puns, humor, and quotes are great content on #Twitter.
                          Find some related to your business.</p>
                      </div>
                      <div className="carousel-item">
                        <p>Are there #common-sense facts related to your business?
                          Combine them with a great photo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // Social cards section end */}
    </div>
  </div>
</div>

  )
}

export default cardsocial