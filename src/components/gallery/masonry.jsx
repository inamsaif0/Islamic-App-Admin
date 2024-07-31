import React from 'react'

const masonry = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Gallery Masonry Grid</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Gallery</a>
                                    </li>
                                    <li className="breadcrumb-item active">Gallery Masonry Grid
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
                                    <p>Masonry is a JavaScript grid layout library. It works by placing
                                        elements in optimal position based on available vertical space,
                                        sort of like a mason fitting stones in a wall. You’ve probably
                                        seen it in use all over the Internet.</p>
                                    <p>Please read the Masonry Cascading grid layout library <a href="http://masonry.desandro.com/" target="_blank">documentation</a> for usage information.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*/ Description */}
                    {/* Image grid */}
                    <section id="image-grid" className="card">
                        <div className="card-header">
                            <h4 className="card-title">Masonry image gallery</h4>
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
                            <div className="card-body">
                                <div className="card-text">
                                    <p>Masonry Image gallery grid with photo-swipe integration. Auto arrange
                                        images based on device screen size.</p>
                                </div>
                            </div>
                            <div className="masonry-grid my-gallery mx-1" itemScope itemType="http://schema.org/ImageGallery">
                                {/* width of .grid-sizer used for columnWidth */}
                                <div className="grid-sizer" />
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-10.jpg" itemProp="contentUrl" data-size="600x441">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-10.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-8.jpg" itemProp="contentUrl" data-size="600x446">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-8.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-21.jpg" itemProp="contentUrl" data-size="600x798">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-21.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-14.jpg" itemProp="contentUrl" data-size="600x401">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-14.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-1.jpg" itemProp="contentUrl" data-size="600x404">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-1.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-2.jpg" itemProp="contentUrl" data-size="600x400">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-2.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-3.jpg" itemProp="contentUrl" data-size="600x452">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-3.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-4.jpg" itemProp="contentUrl" data-size="600x453">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-4.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-5.jpg" itemProp="contentUrl" data-size="600x450">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-5.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-6.jpg" itemProp="contentUrl" data-size="600x447">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-6.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-18.jpg" itemProp="contentUrl" data-size="600x868">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-18.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-7.jpg" itemProp="contentUrl" data-size="600x453">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-7.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-9.jpg" itemProp="contentUrl" data-size="600x450">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-9.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-11.jpg" itemProp="contentUrl" data-size="600x446">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-11.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="grid-item">
                                    <figure className="card" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                        <a href="../../../app-assets/images/portfolio/width-600/portfolio-17.jpg" itemProp="contentUrl" data-size="600x856">
                                            <img className="img-thumbnail" src="../../../app-assets/images/portfolio/width-600/portfolio-17.jpg" itemProp="thumbnail" alt="Image description" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
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
                    {/*/ Image grid */}
                    {/* Video grid */}
                    <section id="video-grid" className="card">
                        <div className="card-header">
                            <h4 className="card-title">Masonry video gallery</h4>
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
                            <div className="card-body">
                                <div className="card-text">
                                    <p>This section contain responsive embedded Masonry video gallery with
                                        grid 3-2-1 columns with title &amp; description. This demo contain
                                        vimeo and youtube embedded videos.</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="masonry-grid">
                                    {/* width of .grid-sizer used for columnWidth */}
                                    <div className="grid-sizer" />
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://player.vimeo.com/video/118589137?title=0&byline=0" width={640} height={360} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://player.vimeo.com/video/173541384?color=ff9933&title=0&byline=0" width={640} height={360} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://player.vimeo.com/video/161753790?color=ff9933&title=0&byline=0" width={640} height={360} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://www.youtube.com/embed/zqDxfHvZ3DU?rel=0&controls=0&showinfo=0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="card-img-top embed-responsive embed-responsive-item embed-responsive-16by9">
                                                <iframe className="img-thumbnail" src="https://www.youtube.com/embed/hunYLg8I1Os?rel=0&controls=0&showinfo=0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Video grid */}
                </div>
            </div>
        </div>


    )
}

export default masonry