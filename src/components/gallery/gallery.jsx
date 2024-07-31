import React from 'react'

const gallery = () => {
  return (
    <div className="app-content content">
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
        <h3 className="content-header-title mb-0 d-inline-block">Gallery Media Grid</h3>
        <div className="row breadcrumbs-top d-inline-block">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item"><a href="#">Gallery</a>
              </li>
              <li className="breadcrumb-item active">Gallery Media Grid
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
              <p>Image gallery grid with photo-swipe integration. Display images in
                4-2-1 columns and photo-swipe provides gallery features.</p>
              <p>Please read the photo-swipe gallery <a href="http://photoswipe.com/documentation/getting-started.html" target="_blank">documentation</a> for usage information.</p>
            </div>
          </div>
        </div>
      </section>
      {/*/ Description */}
      {/* Image grid */}
      <section id="image-gallery" className="card">
        <div className="card-header">
          <h4 className="card-title">Image gallery</h4>
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
              <p>Image gallery grid with photo-swipe integration. Display images gallery
                in 4-2-1 columns and photo-swipe provides gallery features.</p>
            </div>
          </div>
          <div className="card-body  my-gallery" itemScope itemType="http://schema.org/ImageGallery">
            <div className="row">
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/1.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/1.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/2.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/2.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/3.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/3.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/4.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/4.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
            </div>
            <div className="row">
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/5.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/5.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/6.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/6.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/7.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/7.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/8.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/8.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
            </div>
            <div className="row">
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/9.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/9.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/10.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/10.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/11.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/11.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/12.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/12.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
            </div>
            <div className="row">
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/13.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/13.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/14.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/14.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/15.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/15.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
              <figure className="col-lg-3 col-md-6 col-12" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                <a href="../../../app-assets/images/gallery/16.jpg" itemProp="contentUrl" data-size="480x360">
                  <img className="img-thumbnail img-fluid" src="../../../app-assets/images/gallery/16.jpg" itemProp="thumbnail" alt="Image description" />
                </a>
              </figure>
            </div>
          </div>
          {/*/ Image grid */}
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
        </div>
        {/*/ PhotoSwipe */}
      </section>
      {/*/ Image grid */}
      {/* Video grid */}
      <section id="video-gallery" className="card">
        <div className="card-header">
          <h4 className="card-title">Video gallery</h4>
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
              <p>This section contain responsive embedded video gallery with grid
                4-2-1 columns This demo contain vimeo and youtube embedded videos.</p>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-header">Vimeo</h5>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/97980578?title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/173140629?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/174099316?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/173139879?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/118589137?title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/173541384?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/161753790?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://player.vimeo.com/video/174960004?color=ff9933&title=0&byline=0" width={640} height={360} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-header">You Tube</h5>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/zqDxfHvZ3DU?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/hunYLg8I1Os?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/yXootGU_8Ns?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/_-zawfC3s9M?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/RcrLLooXgSY?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/_V4if9Weopk?rel=0&controls=0&showinfo=0" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                  <iframe className="img-thumbnail" src="https://www.youtube.com/embed/icMTTP7-q9A?rel=0&controls=0&showinfo=0" />
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

export default gallery