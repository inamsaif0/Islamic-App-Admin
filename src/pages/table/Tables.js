import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

// import Muidatatable from '../../components/tables/muidatatable'

const Tables = () => {
  return (
    <>
      <Header />
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
              <h3 className="content-header-title mb-0 d-inline-block">Basic Tables</h3>
              <div className="row breadcrumbs-top d-inline-block">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item"><a href="#">Tables</a>
                    </li>
                    <li className="breadcrumb-item active">Basic Tables
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
            {/* Basic Tables start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Basic Tables</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Using the most basic table markup, here’s how <code>.table</code>-based
                        tables look in Bootstrap. You can use any example of below table
                        for your table and it can be use with any type of bootstrap tables.
                      </p>
                      <p>
                        <span className="text-bold-600">Example 1:</span> Table with outer spacing</p>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="px-1">
                      <span className="text-bold-600">Example 2:</span> Minimal Table with no outer spacing.</p>
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Basic Tables end */}
            {/*  Inverse table start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Inverse table</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>You can also invert the colors—with light text on dark backgrounds—with
                        <code className="highlighter-rouge">.table-inverse</code>.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-inverse mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Inverse table end */}
            {/* Inverse table with info background start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Inverse table with info background</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>You can also invert the colors—with light text on dark backgrounds—with
                        <code className="highlighter-rouge">.bg-info, .bg-success, .bg-warning and .bg-danger classes</code>.</p>
                      <p>To set the light background color use <code>.bg-[color]</code>                    class where <code>[color]</code> is the value of your selected
                        color from modern color palette. So for teal color background
                        class will be <code>.bg-teal</code>. Refer HTML markup line no
                        1. Background color class is a optional if you don't it will
                        take white background default.</p>
                      <p>To set the selected background color lighten use <code>.bg-lighten-[*]</code>                    class where <code>[*]</code> is the value between '1-5' of your
                        selected lighten color from modern color palette. So for color
                        lighten 4 background class will be <code>.bg-lighten-4</code>.
                        Refer HTML markup line no 1. Background lighten color class is
                        a optional if you don't it will take white background default.</p>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped bg-info mb-0 white">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Inverse table with info background end */}
            {/* Table head options start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Table head options</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Similar to default and inverse tables, use one of two modifier
                        classes <code className="highlighter-rouge">.thead-default</code>                    or <code className="highlighter-rouge">.thead-inverse</code> to make
                        <code className="highlighter-rouge">&lt;thead&gt;</code>s appear
                        light or dark gray.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table head options end */}
            {/* Table head options with primary background start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Table head options with primary background</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Use background classes <code className="highlighter-rouge">bg-*</code>                    to make custom <code className="highlighter-rouge">thead</code> background.
                        You can also use Modern Admin color palette classes for background.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="bg-primary white">
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="bg-teal bg-lighten-4">
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table head options with primary background end */}
            {/* Striped rows start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Striped rows</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Use <code className="highlighter-rouge">.table-striped</code> to add
                        zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                        This styling doesn't work in IE8 and below as <code>:nth-child</code>                    CSS selector isn't supported.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Striped rows end */}
            {/* Striped rows with inverse table start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Striped rows with inverse table</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Use <code>.table-inverse</code> with <code>.table-striped</code>                    to add zebra-striping to any inverse table row within the <code>&lt;tbody&gt;</code>.
                        This styling doesn't work in IE8 and below as <code>:nth-child</code>                    CSS selector isn't supported.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-inverse table-striped mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Striped rows with inverse table end */}
            {/* Bordered table start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Bordered table</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Add <code>.table-bordered</code> for borders on all sides of the
                        table and cells.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@TwBootstrap</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bordered table end */}
            {/* Bordered striped start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Bordered striped</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Use <code>.table-striped</code> with <code>.table-bordered</code>                    to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@TwBootstrap</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bordered striped end */}
            {/* Bordered table Inverse start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Bordered Table Inverse</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">Use <code>.table-inverse</code> with <code>.table-bordered</code>                    to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-inverse mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@TwBootstrap</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bordered table Inverse end */}
            {/* Hoverable rows start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Hoverable rows</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Add <code className="highlighter-rouge">.table-hover</code> to enable
                        a hover state on table rows within a <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hoverable rows end */}
            {/* Contextual classes start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Contextual classes</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Use contextual classes to color table rows or individual cells.</p>
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th>Class</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <code>.table-active</code>
                              </th>
                              <td>Applies the hover color to a particular row or cell</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <code>.table-success</code>
                              </th>
                              <td>Indicates a successful or positive action</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <code>.table-info</code>
                              </th>
                              <td>Indicates a neutral informative change or action</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <code>.table-warning</code>
                              </th>
                              <td>Indicates a warning that might need attention</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <code>.table-danger</code>
                              </th>
                              <td>Indicates a dangerous or potentially negative action</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-active">
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className="bg-success white">
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-warning white">
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-danger white">
                            <th scope="row">7</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-info white">
                            <th scope="row">8</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contextual classes end */}
            {/* Contextual classes inverse	start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Contextual classes inverse</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Regular table background variants are not available with the inverse
                        table, however, you may use text or background utilities to achieve
                        similar styles.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-inverse mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-active">
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className="bg-success">
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-warning">
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-danger">
                            <th scope="row">7</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="bg-info">
                            <th scope="row">8</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contextual classes inverse end */}
            {/* Captions start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Captions</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p className="card-text">A <code className="highlighter-rouge">&lt;caption&gt;</code> functions
                        like a heading for a table. It helps users with screen readers
                        to find a table and understand what it’s about and decide if
                        they want to read it.</p>
                      <div className="table-responsive">
                        <table className="table">
                          <caption>List of users</caption>
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Captions end */}
            {/* Responsive tables start */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Responsive tables</h4>
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
                  <div className="card-content collapse show">
                    <div className="card-body">
                      <p>Responsive tables allow tables to be scrolled horizontally with
                        ease. Make any table responsive across all viewports by adding
                        <code className="highlighter-rouge">.table-responsive</code> class
                        on <code className="highlighter-rouge">.table</code>. Or, pick a
                        maximum breakpoint with which to have a responsive table up to
                        by adding <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>.</p>
                      <div className="bs-callout-warning callout-border-left callout-transparent mt-1 p-1">
                        <h4 className="warning">Vertical clipping/truncation</h4>
                        <p>Responsive tables make use of <code className="highlighter-rouge">overflow-y: hidden</code>,
                          which clips off any content that goes beyond the bottom or
                          top edges of the table. In particular, this can clip off dropdown
                          menus and other third-party widgets.</p>
                      </div>
                      <h5 className="card-title mt-2">Always responsive</h5>
                    </div>
                    <div className="table-responsive">
                      <div className="bd-example">
                        <table className="table table-responsive">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="table table-bordered table-responsive-lg">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                              <th scope="col">Table heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Breakpoint specific</h5>
                      <p>Use <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>                    as needed to create responsive tables up to a particular breakpoint.
                        From that breakpoint and up, the table will behave normally and
                        not scroll horizontally.</p>
                    </div>
                    <div className="bd-example">
                      <table className="table table-responsive-sm">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-responsive-md">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-responsive-lg">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-responsive-xl">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                            <th scope="col">Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Responsive tables end */}
          </div>
        </div>
      </div>

      {/* <Muidatatable /> */}
      <Footer />
    </>

  )
}

export default Tables