import React from 'react'

const dashboardcrypto = () => {
    return (
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">

                    <div id="crypto-stats-3" className="row">
                        <div className="col-xl-4 col-12">
                            <div className="card crypto-card-3 pull-up">
                                <div className="card-content">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-2">
                                                <h1><i className="cc BTC warning font-large-2" title="BTC" /></h1>
                                            </div>
                                            <div className="col-5 pl-2">
                                                <h4>BTC</h4>
                                                <h6 className="text-muted">Bitcoin</h6>
                                            </div>
                                            <div className="col-5 text-right">
                                                <h4>$9,980</h4>
                                                <h6 className="success darken-4">31% <i className="la la-arrow-up" /></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <canvas id="btc-chartjs" className="height-75" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-12">
                            <div className="card crypto-card-3 pull-up">
                                <div className="card-content">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-2">
                                                <h1><i className="cc ETH blue-grey lighten-1 font-large-2" title="ETH" /></h1>
                                            </div>
                                            <div className="col-5 pl-2">
                                                <h4>ETH</h4>
                                                <h6 className="text-muted">Ethereum</h6>
                                            </div>
                                            <div className="col-5 text-right">
                                                <h4>$944</h4>
                                                <h6 className="success darken-4">12% <i className="la la-arrow-up" /></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <canvas id="eth-chartjs" className="height-75" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-12">
                            <div className="card crypto-card-3 pull-up">
                                <div className="card-content">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-2">
                                                <h1><i className="cc XRP info font-large-2" title="XRP" /></h1>
                                            </div>
                                            <div className="col-5 pl-2">
                                                <h4>XRP</h4>
                                                <h6 className="text-muted">Balance</h6>
                                            </div>
                                            <div className="col-5 text-right">
                                                <h4>$1.2</h4>
                                                <h6 className="danger">20% <i className="la la-arrow-down" /></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <canvas id="xrp-chartjs" className="height-75" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Candlestick Multi Level Control Chart */}
                    {/* Slaes & Purchase Order */}
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div id="accordionCrypto" role="tablist" aria-multiselectable="true">
                                <div className="card collapse-icon accordion-icon-rotate">
                                    <div id="heading31" className="card-header bg-info p-1 bg-lighten-1">
                                        <a data-toggle="collapse" data-parent="#accordionCrypto" href="#accordionBTC" aria-expanded="true" aria-controls="accordionBTC" className="card-title lead white">BTC</a>
                                    </div>
                                    <div id="accordionBTC" role="tabpanel" aria-labelledby="heading31" className="card-collapse collapse show" aria-expanded="true">
                                        <div className="card-content">
                                            <div className="card-body p-0">
                                                <div className="media-list list-group">
                                                    <div className="list-group-item list-group-item-action media p-1">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">BTC/USD</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">11916.9</p>
                                                                <p className="font-small-2 text-muted m-0 success">283.1 USD (+2.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">1029.1906 BTC</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1 bg-info bg-lighten-5">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">BTC/EUR</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">9213.3</p>
                                                                <p className="font-small-2 text-muted m-0 success">56.1 EUR (+5.52%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">560.1906 BTC</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1 border-bottom-0">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">BTC/GBP</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">8015.1</p>
                                                                <p className="font-small-2 text-muted m-0 danger">-183.1 USD (-1.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">320.1906 BTC</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="heading32" className="card-header bg-info p-1 bg-lighten-1 my-1">
                                        <a data-toggle="collapse" data-parent="#accordionCrypto" href="#accordionETH" aria-expanded="false" aria-controls="accordionETH" className="card-title lead white collapsed">ETH</a>
                                    </div>
                                    <div id="accordionETH" role="tabpanel" aria-labelledby="heading32" className="card-collapse collapse" aria-expanded="false">
                                        <div className="card-content">
                                            <div className="card-body p-0">
                                                <div className="media-list list-group">
                                                    <div className="list-group-item list-group-item-action media p-1">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">ETH/USD</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">11916.9</p>
                                                                <p className="font-small-2 text-muted m-0 success">283.1 USD (+2.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">1029.1906 ETH</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">ETH/EUR</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">9213.3</p>
                                                                <p className="font-small-2 text-muted m-0 success">56.1 EUR (+5.52%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">560.1906 ETH</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1 border-bottom-0">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">ETH/GBP</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">8015.1</p>
                                                                <p className="font-small-2 text-muted m-0 danger">-183.1 USD (-1.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">320.1906 ETH</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="heading33" className="card-header bg-info p-1 bg-lighten-1">
                                        <a data-toggle="collapse" data-parent="#accordionCrypto" href="#accordionXRP" aria-expanded="false" aria-controls="accordionXRP" className="card-title lead white collapsed">XRP</a>
                                    </div>
                                    <div id="accordionXRP" role="tabpanel" aria-labelledby="heading33" className="card-collapse collapse" aria-expanded="false">
                                        <div className="card-content">
                                            <div className="card-body p-0">
                                                <div className="media-list list-group">
                                                    <div className="list-group-item list-group-item-action media p-1">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">XRP/USD</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">11916.9</p>
                                                                <p className="font-small-2 text-muted m-0 success">283.1 USD (+2.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">1029.1906 XRP</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">XRP/EUR</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">9213.3</p>
                                                                <p className="font-small-2 text-muted m-0 success">56.1 EUR (+5.52%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">560.1906 XRP</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="list-group-item list-group-item-action media p-1 border-bottom-0">
                                                        <a className="media-link" href="#">
                                                            <span className="media-left">
                                                                <p className="text-bold-600 m-0">XRP/GBP</p>
                                                                <p className="font-small-2 text-muted m-0">24h Change</p>
                                                                <p className="font-small-2 text-muted m-0">24h Volume</p>
                                                            </span>
                                                            <span className="media-body text-right">
                                                                <p className="text-bold-600 m-0">8015.1</p>
                                                                <p className="font-small-2 text-muted m-0 danger">-183.1 USD (-1.33%)</p>
                                                                <p className="font-small-2 text-muted m-0 text-bold-600">320.1906 XRP</p>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">BTC/USD</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li className="text-center mr-4">
                                                <h6 className="text-muted">Last price</h6>
                                                <p className="text-bold-600 mb-0">$ 11916.9</p>
                                            </li>
                                            <li className="text-center mr-4">
                                                <h6 className="text-muted">Daily change</h6>
                                                <p className="text-bold-600 mb-0">$ 283.1</p>
                                            </li>
                                            <li className="text-center">
                                                <h6 className="text-muted">24h volume</h6>
                                                <p className="text-bold-600 mb-0"><i className="cc BTC-alt" title="BTC" /> 1029.1906 BTC</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content collapse show">
                                    <div className="card-body pt-0">
                                        <div id="btc-candlestick-control" className="height-350 echart-container" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Trade History & Place Order */}
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Trade History</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn round btn-sm btn-outline-info active">
                                                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Market
                                            </label>
                                            <label className="btn round btn-sm btn-outline-info">
                                                <input type="radio" name="options" id="option2" autoComplete="off" /> Yours
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive mt-1">
                                        <table className="table table-xs">
                                            <thead>
                                                <tr>
                                                    <th>Price($)</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="success">11900.12</td>
                                                    <td><i className="cc BTC-alt" /> 0.215</td>
                                                    <td>11:23:25</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11903.18</td>
                                                    <td><i className="cc BTC-alt" /> 1.545</td>
                                                    <td>11:23:05</td>
                                                </tr>
                                                <tr>
                                                    <td className="success">11899.56</td>
                                                    <td><i className="cc BTC-alt" /> 0.541</td>
                                                    <td>11:22:50</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11910.52</td>
                                                    <td><i className="cc BTC-alt" /> 0.321</td>
                                                    <td>11:22:15</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11901.15</td>
                                                    <td><i className="cc BTC-alt" /> 0.548</td>
                                                    <td>11:21:25</td>
                                                </tr>
                                                <tr>
                                                    <td className="success">11903.45</td>
                                                    <td><i className="cc BTC-alt" /> 0.587</td>
                                                    <td>11:21:01</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11895.50</td>
                                                    <td><i className="cc BTC-alt" /> 5.125</td>
                                                    <td>11:20:15</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11889.56</td>
                                                    <td><i className="cc BTC-alt" /> 0.894</td>
                                                    <td>11:20:03</td>
                                                </tr>
                                                <tr>
                                                    <td className="success">11885.69</td>
                                                    <td><i className="cc BTC-alt" /> 0.754</td>
                                                    <td>11:19:55</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11891.12</td>
                                                    <td><i className="cc BTC-alt" /> 0.889</td>
                                                    <td>11:19:15</td>
                                                </tr>
                                                <tr>
                                                    <td className="danger">11889.88</td>
                                                    <td><i className="cc BTC-alt" /> 0.654</td>
                                                    <td>11:18:18</td>
                                                </tr>
                                                <tr>
                                                    <td className="success">11881.15</td>
                                                    <td><i className="cc BTC-alt" /> 1.254</td>
                                                    <td>11:18:01</td>
                                                </tr>
                                                <tr>
                                                    <td className="success">11875.75</td>
                                                    <td><i className="cc BTC-alt" /> 0.885</td>
                                                    <td>11:17:25</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Place Order</h4>
                                    <div className="heading-elements">
                                        <h6 className="danger">Fee: 0.2%</h6>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-underline no-hover-bg">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="base-limit" data-toggle="tab" aria-controls="limit" href="#limit" aria-expanded="true">Limit</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="base-market" data-toggle="tab" aria-controls="market" href="#market" aria-expanded="false">Market</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="base-stop-limit" data-toggle="tab" aria-controls="stop-limit" href="#stop-limit" aria-expanded="false">Stop Limit</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content px-1 pt-1">
                                            <div role="tabpanel" className="tab-pane active" id="limit" aria-expanded="true" aria-labelledby="base-limit">
                                                <div className="row">
                                                    <div className="col-12 col-xl-6 border-right-blue-grey border-right-lighten-4 pr-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Buy BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">USD Balance: $ 5000.00</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-limit-buy-price">Price</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-limit-buy-price" className="form-control" placeholder="$ 11916.9" name="btc-limit-buy-price" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-limit-buy-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-limit-buy-amount" className="form-control" placeholder="0.026547 BTC" name="btc-limit-buy-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-limit-buy-total">Total</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-limit-buy-total" className="form-control" placeholder="$ 318.1856" name="btc-limit-buy-total" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-success btn-block btn-glow"> Buy BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-12 col-xl-6 pl-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Sell BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">BTC Balance: 1.2654898</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-price">Price</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-limit-sell-price" className="form-control" placeholder="$ 11916.9" name="btc-limit-sell-price" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-limit-sell-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-limit-sell-amount" className="form-control" placeholder="0.026547 BTC" name="btc-limit-sell-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-limit-sell-total">Total</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-limit-sell-total" className="form-control" placeholder="$ 318.1856" name="btc-limit-sell-total" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-danger btn-block btn-glow"> Sell BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="market" aria-labelledby="base-market">
                                                <div className="row">
                                                    <div className="col-12 col-xl-6 border-right-blue-grey border-right-lighten-4 pr-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Buy BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">USD Balance: $ 5000.00</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-market-buy-price">Price</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-market-buy-price" className="form-control" placeholder="Market prise $" name="btc-market-buy-price" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-market-buy-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-market-buy-amount" className="form-control" placeholder="0.026547 BTC" name="btc-market-buy-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-success btn-block btn-glow"> Buy BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-12 col-xl-6 pl-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Sell BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">BTC Balance: 1.2654898</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-price">Price</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-market-sell-price" className="form-control" placeholder="Market prise $" name="btc-market-sell-price" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-market-sell-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-market-sell-amount" className="form-control" placeholder="0.026547 BTC" name="btc-market-sell-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-danger btn-block btn-glow"> Sell BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="stop-limit" aria-labelledby="base-stop-limit">
                                                <div className="row">
                                                    <div className="col-12 col-xl-6 border-right-blue-grey border-right-lighten-4 pr-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Buy BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">USD Balance: $ 5000.00</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-buy">Stop</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-buy" className="form-control" placeholder="$ 11916.9" name="btc-stop-buy" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-buy-limit">Limit</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-buy-limit" className="form-control" placeholder="$ 12000.0" name="btc-stop-buy-limit" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-buy-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-buy-amount" className="form-control" placeholder="0.026547 BTC" name="btc-stop-buy-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-buy-total">Total</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-stop-buy-total" className="form-control" placeholder="$ 318.1856" name="btc-stop-buy-total" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-success btn-block btn-glow"> Buy BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-12 col-xl-6 pl-2 p-0">
                                                        <div className="row my-2">
                                                            <div className="col-4">
                                                                <h5 className="text-bold-600 mb-0">Sell BTC</h5>
                                                            </div>
                                                            <div className="col-8 text-right">
                                                                <p className="text-muted mb-0">BTC Balance: 1.2654898</p>
                                                            </div>
                                                        </div>
                                                        <form className="form form-horizontal">
                                                            <div className="form-body">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-sell">Stop</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-sell" className="form-control" placeholder="$ 11916.9" name="btc-stop-sell" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-sell-limit">Limit</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-sell-limit" className="form-control" placeholder="$ 12000.0" name="btc-stop-sell-limit" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-sell-amount">Amount</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" id="btc-stop-sell-amount" className="form-control" placeholder="0.026547 BTC" name="btc-stop-sell-amount" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-3" />
                                                                    <div className="col-md-9">
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">25%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">50%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">75%</button>
                                                                        <button type="button" className="btn round btn-outline-secondary btn-sm">100%</button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="btc-stop-sell-total">Total</label>
                                                                    <div className="col-md-9">
                                                                        <input type="number" disabled id="btc-stop-sell-total" className="form-control" placeholder="$ 318.1856" name="btc-stop-sell-total" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-actions pb-0">
                                                                    <button type="submit" className="btn round btn-danger btn-block btn-glow"> Sell BTC </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Trade History & Place Order */}
                    {/* Sell Orders & Buy Order */}
                    <div className="row match-height">
                        <div className="col-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Sell Order</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <p className="text-muted">Total BTC available: 6542.56585</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive">
                                        <table className="table table-de mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Price per BTC</th>
                                                    <th>BTC Ammount</th>
                                                    <th>Total($)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-success bg-lighten-5">
                                                    <td>10583.4</td>
                                                    <td><i className="cc BTC-alt" /> 0.45000000</td>
                                                    <td>$ 4762.53</td>
                                                </tr>
                                                <tr>
                                                    <td>10583.5</td>
                                                    <td><i className="cc BTC-alt" /> 0.04000000</td>
                                                    <td>$ 423.34</td>
                                                </tr>
                                                <tr>
                                                    <td>10583.7</td>
                                                    <td><i className="cc BTC-alt" /> 0.25100000</td>
                                                    <td>$ 2656.51</td>
                                                </tr>
                                                <tr>
                                                    <td>10583.8</td>
                                                    <td><i className="cc BTC-alt" /> 0.35000000</td>
                                                    <td>$ 3704.33</td>
                                                </tr>
                                                <tr>
                                                    <td>10595.7</td>
                                                    <td><i className="cc BTC-alt" /> 0.30000000</td>
                                                    <td>$ 3178.71</td>
                                                </tr>
                                                <tr className="bg-danger bg-lighten-5">
                                                    <td>10599.5</td>
                                                    <td><i className="cc BTC-alt" /> 0.02000000</td>
                                                    <td>$ 211.99</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Buy Order</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <p className="text-muted">Total USD available: 9065930.43</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive">
                                        <table className="table table-de mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Price per BTC</th>
                                                    <th>BTC Ammount</th>
                                                    <th>Total($)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-danger bg-lighten-5">
                                                    <td>10599.5</td>
                                                    <td><i className="cc BTC-alt" /> 0.02000000</td>
                                                    <td>$ 211.99</td>
                                                </tr>
                                                <tr>
                                                    <td>10583.5</td>
                                                    <td><i className="cc BTC-alt" /> 0.04000000</td>
                                                    <td>$ 423.34</td>
                                                </tr>
                                                <tr>
                                                    <td>10583.8</td>
                                                    <td><i className="cc BTC-alt" /> 0.35000000</td>
                                                    <td>$ 3704.33</td>
                                                </tr>
                                                <tr>
                                                    <td>10595.7</td>
                                                    <td><i className="cc BTC-alt" /> 0.30000000</td>
                                                    <td>$ 3178.71</td>
                                                </tr>
                                                <tr className="bg-danger bg-lighten-5">
                                                    <td>10583.7</td>
                                                    <td><i className="cc BTC-alt" /> 0.25100000</td>
                                                    <td>$ 2656.51</td>
                                                </tr>
                                                <tr>
                                                    <td>10595.8</td>
                                                    <td><i className="cc BTC-alt" /> 0.29697926</td>
                                                    <td>$ 3146.74</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Sell Orders & Buy Order */}
                    {/* Active Orders */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Active Order</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <button className="btn btn-sm round btn-danger btn-glow"><i className="la la-close font-medium-1" /> Cancel all</button>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive">
                                        <table className="table table-de mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Type</th>
                                                    <th>Amount BTC</th>
                                                    <th>BTC Remaining</th>
                                                    <th>Price</th>
                                                    <th>USD</th>
                                                    <th>Fee (%)</th>
                                                    <th>Cancel</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2018-01-31 06:51:51</td>
                                                    <td className="success">Buy</td>
                                                    <td><i className="cc BTC-alt" /> 0.58647</td>
                                                    <td><i className="cc BTC-alt" /> 0.58647</td>
                                                    <td>11900.12</td>
                                                    <td>$ 6979.78</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2018-01-31 06:50:50</td>
                                                    <td className="danger">Sell</td>
                                                    <td><i className="cc BTC-alt" /> 1.38647</td>
                                                    <td><i className="cc BTC-alt" /> 0.38647</td>
                                                    <td>11905.09</td>
                                                    <td>$ 4600.97</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2018-01-31 06:49:51</td>
                                                    <td className="success">Buy</td>
                                                    <td><i className="cc BTC-alt" /> 0.45879</td>
                                                    <td><i className="cc BTC-alt" /> 0.45879</td>
                                                    <td>11901.85</td>
                                                    <td>$ 5460.44</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2018-01-31 06:51:51</td>
                                                    <td className="success">Buy</td>
                                                    <td><i className="cc BTC-alt" /> 0.89877</td>
                                                    <td><i className="cc BTC-alt" /> 0.89877</td>
                                                    <td>11899.25</td>
                                                    <td>$ 10694.6</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2018-01-31 06:51:51</td>
                                                    <td className="danger">Sell</td>
                                                    <td><i className="cc BTC-alt" /> 0.45712</td>
                                                    <td><i className="cc BTC-alt" /> 0.45712</td>
                                                    <td>11908.58</td>
                                                    <td>$ 5443.65</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2018-01-31 06:51:51</td>
                                                    <td className="success">Buy</td>
                                                    <td><i className="cc BTC-alt" /> 0.58647</td>
                                                    <td><i className="cc BTC-alt" /> 0.58647</td>
                                                    <td>11900.12</td>
                                                    <td>$ 6979.78</td>
                                                    <td>0.2</td>
                                                    <td>
                                                        <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Active Orders */}

                </div>
            </div>
        </div>
    )
}

export default dashboardcrypto