import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {

    Link,useNavigate
} from "react-router-dom";
import { navbartoggle } from "../Redux/Action/ActionFunction";

import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import { AiFillCloseCircle } from "react-icons/ai";

import Baseurl from '../Baseurl/Baseurl';

// import Avartarimg from "../../../app-assets/images/portrait/small/avatar-s-19.png"






const Header = () => {
    const dispatch = useDispatch();

    const mystate = useSelector((state) => state.Counter)

    console.log("value of counter", mystate)

    const [open, setopen] = useState(false)

    const [Togglebtn, setTogglebtn] = useState(false)

    // const [Togglemobile, setTogglemobile] = useState(false)
    const [Toglemobile,setToglemobile] = useState(false)


    const [Profilebtn, setProfilebtn] = useState(false)

    const[ProfileImage,SetProfileImage]=useState(null)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Navigate=useNavigate()

    const [Name,SetName] =useState('')

    const Token = localStorage.getItem("AdminToken")


    // useEffect get api of admin

    useEffect(()=>{
       
        // AdminDatafunction()
         
    },[])

    
    useEffect(()=>{

        if(Token === null)
        {
          Navigate('/')
        }
    
      },[])

    // const AdminDatafunction = () => {
      
    //     var requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             Authorization: "Bearer " + Token
    //         },
    //         redirect: 'follow'
    //     };

    //     fetch(`${Baseurl.baseUrl}/GetAdminData`, requestOptions)

    //         .then(response => response.json())
    //         .then(result =>
    //             {
    //                 console.log("admin get detail",result.data[0].firstname)
    //                 console.log("admin get detail",result.data.firstname)
    //                 console.log("admin get detail of image",result.data[0].Profile)
    //                 SetName(result.data[0].firstname)
    //                 SetProfileImage(result.data[0].Profile)
    //             }
    //         )
    //         .catch(error => console.log('error', error));
    // }

    

    const myopenfunction = () => {

        dispatch(navbartoggle(!mystate))

        // console.log("value of state is ===>",open)
    }

    const togglefunction = () => {
        setTogglebtn(!Togglebtn)
        // setIsHovering(isHovering);
        console.log("value of toggle", Togglebtn)

        if (Togglebtn == false) {
            document.body.classList.add(

                "menu-collapsed"

            );


            document.body.classList.remove(

                "menu-expanded"
            );



        }
        else {
            document.body.classList.add(


                "menu-expanded"
            );


            document.body.classList.remove(
                "menu-collapsed"

            );

        }


    }
    const [isHovering, setIsHovering] = useState(false);

    const [isHovering2, setIsHovering2] = useState(false);

    
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    // const ahmed = () => {
    //     // alert("hello balohc")

    //     // open
    //     // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-open

    //     // close
    //     // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-hide
    //     // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-hide
    //     setTogglemobile(!Togglemobile)
    //     if (Togglemobile == false) {
    //         document.body.classList.add(


    //             "vertical-layout", "2-columns", "fixed-navbar", "vertical-overlay-menu", "pace-done", "menu-hide"



    //         );


    //         document.body.classList.remove(


    //             // vertical-layout vertical-menu-modern 2-columns fixed-navbar pace-done menu-expanded
    //             "vertical-menu-modern", "menu-expanded", "menu-open"
    //         );



    //     }
    //     else {
    //         document.body.classList.add(


    //             "menu-open"
    //             // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-open
    //         );


    //         document.body.classList.remove(
    //             "menu-hide"

    //         );

    //     }


    // }

    // this is use when we add background image in login bg
    // window.addEventListener("resize", function () {
    //     if (window.matchMedia("(max-width: 700px)").matches) {
    //     // if (window.matchMedia("(max-width: 768px)").matches) {
    //         // let bdy = document.getElementsByTagName("BODY")[0];
    //         // console.log("Screen width is at least 761px",bdy.classList)
    //         document.body.classList.add(
    //             'menu-hide',
    //             // 'second-class',
    //             'vertical-overlay-menu'
    //         );


    //         // ✅ Remove classes
    //         document.body.classList.remove(
    //             'vertical-menu-modern',
    //             'menu-collapsed'
    //         );
    //         // bdy.classList

    //         // let liahmed = document.

    //     } else {
    //         console.log("greather than 761")
    //         //   alert("less 500")
    //         document.body.classList.remove(
    //             'menu-hide',
    //             // 'second-class',
    //             'vertical-overlay-menu'
    //         );

    //         // ✅ Remove classes
    //         document.body.classList.add(
    //             'vertical-menu-modern',
    //             // 'menu-collapsed'
    //         );
    //         // bdy.classList
    //     }
    // })


    window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 700px)").matches) {
        // if (window.matchMedia("(max-width: 768px)").matches) {
            // let bdy = document.getElementsByTagName("BODY")[0];
            // console.log("Screen width is at least 761px",bdy.classList)
            document.body.classList.add(
                'menu-hide',
                // 'second-class',
                'vertical-overlay-menu'
            );


            // ✅ Remove classes
            document.body.classList.remove(
                'vertical-menu-modern',
                'menu-collapsed'
            );
            // bdy.classList

            // let liahmed = document.

        } else {
            console.log("greather than 761")
            //   alert("less 500")
            document.body.classList.remove(
                'menu-hide',
                // 'second-class',
                'vertical-overlay-menu'
            );

            // ✅ Remove classes
            document.body.classList.add(
                'vertical-menu-modern',
                // 'menu-collapsed'
            );
            // bdy.classList
        }
    })


    const profilebtnfun = () => {
        setProfilebtn(!Profilebtn)
    }


    const logout = () => {
        localStorage.removeItem("AdminToken");
        Navigate("/");
    }

    const togglebtnfun = () =>{
        // setToglesmall(!Toglesmall)
        setToglemobile(!Toglemobile)

        if(Toglemobile == false)
        {
            // document.body.classList.add(
            //     "menu-hide"

            // )

            // document.body.classList.remove(
            //     "menu-open"

            //     )
            
            document.body.classList.add(

                
                // "vertical-layout", "2-columns", "fixed-navbar", "vertical-overlay-menu", "pace-done", "menu-hide"
                "vertical-layout", "2-columns", "fixed-navbar", "vertical-overlay-menu", "pace-done", "menu-hide"

                // vertical-layout 2-columns fixed-navbar  menu-hide vertical-overlay-menu pace-done

                

            );


            document.body.classList.remove(

                
                // vertical-layout vertical-menu-modern 2-columns fixed-navbar pace-done menu-expanded
                //  "vertical-menu-modern"  , "menu-expanded" ,"menu-open",
                 "vertical-menu-modern" 
                   ,"menu-open",
            );


        }
        else{

            document.body.classList.add(
                "menu-open",
                // "vertical-overlay-menu"
                

            )

            document.body.classList.remove(
                "menu-hide",
                // "menu-expanded"
                

                )

        }
    //    open
        // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-open

        // close
        // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-hide


    }


    return (
        <>

            <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-dark navbar-shadow">
                <div className="navbar-wrapper">
                    {/* working */}
                    <div className="navbar-header " >
                    {/* <div className={isHovering ? 'navbar-header expanded  ' : 'navbar-header '}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    > */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item mobile-menu d-md-none mr-auto">
                                <a onClick={togglebtnfun} className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                                    <i className="ft-menu font-large-1" />
                                </a>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to={"/dashboard"} >
                                <a className="navbar-brand" >
                                    {/* <img className="brand-logo" alt="modern admin logo" src="../../../app-assets/images/logo/logo.png" /> */}
                                    {/* yeh  */}
                                    <img className="brand-logo" alt="modern admin logo" src="../../../app-assets/images/potrait/small/adminprofile.jpeg" />
                                    {/* <img className="brand-logo" alt="modern admin logo" src="../../../app-assets/images/logo/Pyurelywhite-01.png" /> */}


                                    {/* public\app-assets\images\logo\Pyurely-01.jpg */}
                                    
                                    {/* <h3 className="brand-text">Pyurely</h3> */}
                                </a>
                                </Link>
                            </li>
                            {/*  */}
                            {/* <li className="nav-item d-none d-md-block float-right">
                                <a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
                                    <i className={Togglebtn ? "toggle-icon font-medium-3 white ft-toggle-left" : "toggle-icon ft-toggle-right font-medium-3 white"} onClick={togglefunction} data-ticon="ft-toggle-right" />
                                </a>
                            </li> */}
                            {/* <li className="nav-item d-md-none">
                                <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="la la-ellipsis-v" /></a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="navbar-container content">
                        <div className="collapse navbar-collapse" id="navbar-mobile">
                            <ul className="nav navbar-nav mr-auto float-left">
                                {/* <li className="nav-item d-none d-md-block"><a className="nav-link nav-link-expand" href="#"><i className="ficon ft-maximize" /></a></li>
                                <li className="dropdown nav-item mega-dropdown"><a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Mega</a>
                                    <ul className="mega-dropdown-menu dropdown-menu row">
                                        <li className="col-md-2">
                                            <h6 className="dropdown-menu-header text-uppercase mb-1"><i className="la la-newspaper-o" /> News</h6>
                                            <div id="mega-menu-carousel-example">
                                                <div>
                                                    <img className="rounded img-fluid mb-1" src="../../../app-assets/images/slider/slider-2.png" alt="First slide" /><a className="news-title mb-0" href="#">Poster Frame PSD</a>
                                                    <p className="news-content">
                                                        <span className="font-small-2">January 26, 2018</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <h6 className="dropdown-menu-header text-uppercase"><i className="la la-random" /> Drill down menu</h6>
                                            <ul className="drilldown-menu">
                                                <li className="menu-list">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item" href="layout-2-columns.html"><i className="ft-file" /> Page layouts &amp; Templates</a>
                                                        </li>
                                                        <li><a href="#"><i className="ft-align-left" /> Multi level menu</a>
                                                            <ul>
                                                                <li><a className="dropdown-item" href="#"><i className="la la-bookmark-o" />  Second level</a></li>
                                                                <li><a href="#"><i className="la la-lemon-o" /> Second level menu</a>
                                                                    <ul>
                                                                        <li><a className="dropdown-item" href="#"><i className="la la-heart-o" />  Third level</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="la la-file-o" /> Third level</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="la la-trash-o" /> Third level</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="la la-clock-o" /> Third level</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#"><i className="la la-hdd-o" /> Second level, third link</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="la la-floppy-o" /> Second level, fourth link</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="color-palette-primary.html"><i className="ft-camera" /> Color palette system</a>
                                                        </li>
                                                        <li><a className="dropdown-item" href="sk-2-columns.html"><i className="ft-edit" /> Page starter kit</a></li>
                                                        <li><a className="dropdown-item" href="changelog.html"><i className="ft-minimize-2" /> Change log</a></li>
                                                        <li>
                                                            <a className="dropdown-item" href="https://pixinvent.ticksy.com/"><i className="la la-life-ring" /> Customer support center</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="col-md-3">
                                            <h6 className="dropdown-menu-header text-uppercase"><i className="la la-list-ul" /> Accordion</h6>
                                            <div id="accordionWrap" role="tablist" aria-multiselectable="true">
                                                <div className="card border-0 box-shadow-0 collapse-icon accordion-icon-rotate">
                                                    <div className="card-header p-0 pb-2 border-0" id="headingOne" role="tab"><a data-toggle="collapse" data-parent="#accordionWrap" href="#accordionOne" aria-expanded="true" aria-controls="accordionOne">Accordion Item #1</a></div>
                                                    <div className="card-collapse collapse show" id="accordionOne" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
                                                        <div className="card-content">
                                                            <p className="accordion-text text-small-3">Caramels dessert chocolate cake pastry jujubes bonbon.
                                                                Jelly wafer jelly beans. Caramels chocolate cake liquorice
                                                                cake wafer jelly beans croissant apple pie.</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-header p-0 pb-2 border-0" id="headingTwo" role="tab"><a className="collapsed" data-toggle="collapse" data-parent="#accordionWrap" href="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">Accordion Item #2</a></div>
                                                    <div className="card-collapse collapse" id="accordionTwo" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                        <div className="card-content">
                                                            <p className="accordion-text">Sugar plum bear claw oat cake chocolate jelly tiramisu
                                                                dessert pie. Tiramisu macaroon muffin jelly marshmallow
                                                                cake. Pastry oat cake chupa chups.</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-header p-0 pb-2 border-0" id="headingThree" role="tab"><a className="collapsed" data-toggle="collapse" data-parent="#accordionWrap" href="#accordionThree" aria-expanded="false" aria-controls="accordionThree">Accordion Item #3</a></div>
                                                    <div className="card-collapse collapse" id="accordionThree" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                                        <div className="card-content">
                                                            <p className="accordion-text">Candy cupcake sugar plum oat cake wafer marzipan jujubes
                                                                lollipop macaroon. Cake dragée jujubes donut chocolate
                                                                bar chocolate cake cupcake chocolate topping.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4">
                                            <h6 className="dropdown-menu-header text-uppercase mb-1"><i className="la la-envelope-o" /> Contact Us</h6>
                                            <form className="form form-horizontal">
                                                <div className="form-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 form-control-label" htmlFor="inputName1">Name</label>
                                                        <div className="col-sm-9">
                                                            <div className="position-relative has-icon-left">
                                                                <input className="form-control" type="text" id="inputName1" placeholder="John Doe" />
                                                                <div className="form-control-position pl-1"><i className="la la-user" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 form-control-label" htmlFor="inputEmail1">Email</label>
                                                        <div className="col-sm-9">
                                                            <div className="position-relative has-icon-left">
                                                                <input className="form-control" type="email" id="inputEmail1" placeholder="john@example.com" />
                                                                <div className="form-control-position pl-1"><i className="la la-envelope-o" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 form-control-label" htmlFor="inputMessage1">Message</label>
                                                        <div className="col-sm-9">
                                                            <div className="position-relative has-icon-left">
                                                                <textarea className="form-control" id="inputMessage1" rows={2} placeholder="Simple Textarea" defaultValue={""} />
                                                                <div className="form-control-position pl-1"><i className="la la-commenting-o" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 mb-1">
                                                            <button className="btn btn-info float-right" type="button"><i className="la la-paper-plane-o" /> Send </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-search"><a className="nav-link nav-link-search" href="#"><i className="ficon ft-search" /></a>
                                    <div className="search-input">
                                        <input className="input" type="text" placeholder="Explore Modern..." />
                                    </div>
                                </li> */}
                            </ul>
                            <ul className="nav navbar-nav float-right">
                                <li className={Profilebtn ? "dropdown dropdown-user nav-item show " : "dropdown dropdown-user nav-item"} onClick={profilebtnfun}>
                                    <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                        <span className="mr-1">Admin
                                            <span className="user-name text-bold-700">{Name}</span>
                                        </span>
                                        <span className="avatar avatar-online">
                                            {/* <img src="../../../app-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i /></span> */}
                                            <img src={ProfileImage == null ? "../../../app-assets/images/portrait/small/avatar-s-19.png" : Baseurl.imgUrl + ProfileImage } alt="avatar" /><i /></span>

                                            
                                    </a>
                                    <div className={Profilebtn ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}>
                                     
                                        {/* <a className="dropdown-item " onClick={handleShow} ><i className="ft-user" /> Change Password</a> */}
                                     
                                        {/* <a className="dropdown-item" href="#"><i className="ft-check-square" /> Task</a>
                                        <a className="dropdown-item" href="#"><i className="ft-message-square" /> Chats</a> */}
                                        <div className="dropdown-divider" /><a className="dropdown-item" onClick={logout}><i className="ft-power" /> Logout</a>
                                    </div>
                                </li>
                                {/* <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-gb" /><span className="selected-language" /></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#"><i className="flag-icon flag-icon-gb" /> English</a>
                                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr" /> French</a>
                                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn" /> Chinese</a>
                                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de" /> German</a>
                                    </div>
                                </li> */}
                                {/* <li className="dropdown dropdown-notification nav-item">
                                    <a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon ft-bell" />
                                        <span className="badge badge-pill badge-default badge-danger badge-default badge-up badge-glow">5</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                        <li className="dropdown-menu-header">
                                            <h6 className="dropdown-header m-0">
                                                <span className="grey darken-2">Notifications</span>
                                            </h6>
                                            <span className="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                                        </li>
                                        <li className="scrollable-container media-list w-100">
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left align-self-center"><i className="ft-plus-square icon-bg-circle bg-cyan" /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">You have new order!</h6>
                                                        <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left align-self-center"><i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1" /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading red darken-1">99% Server load</h6>
                                                        <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Five hour ago</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left align-self-center"><i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3" /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
                                                        <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left align-self-center"><i className="ft-check-circle icon-bg-circle bg-cyan" /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Complete the task</h6>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last week</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left align-self-center"><i className="ft-file icon-bg-circle bg-teal" /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Generate monthly report</h6>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last month</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
                                    </ul>
                                </li> */}
                                {/* <li className="dropdown dropdown-notification nav-item">
                                    <a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon ft-mail">           </i></a>
                                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                        <li className="dropdown-menu-header">
                                            <h6 className="dropdown-header m-0">
                                                <span className="grey darken-2">Messages</span>
                                            </h6>
                                            <span className="notification-tag badge badge-default badge-warning float-right m-0">4 New</span>
                                        </li>
                                        <li className="scrollable-container media-list w-100">
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i /></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Margaret Govan</h6>
                                                        <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="avatar avatar-sm avatar-busy rounded-circle">
                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Bret Lezama</h6>
                                                        <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Tuesday</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="avatar avatar-sm avatar-online rounded-circle">
                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Carie Berra</h6>
                                                        <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Friday</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="avatar avatar-sm avatar-away rounded-circle">
                                                            <img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading">Eric Alsobrook</h6>
                                                        <p className="notification-text font-small-3 text-muted">We have project party this saturday.</p>
                                                        <small>
                                                            <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">last month</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="javascript:void(0)">Read all messages</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* working */}
            {/* <div className={ "main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded" } data-scroll-to-active="true"> */}
            {/* <div className={Togglebtn ? "main-menu menu-fixed menu-dark menu-accordion menu-shadow" : "main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded" } data-scroll-to-active="true"> */}
            <div className={isHovering ? 'main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded ' : 'main-menu menu-fixed menu-dark menu-accordion menu-shadow  '}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}


                data-scroll-to-active="true">
                <div className="main-menu-content">
                    <Scrollbars style={{ maxWidth: 260, height: "90vh" }}>
                        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                            {/* <li className={mystate ? " nav-item has-sub open " : " nav-item has-sub "}  >
                                <a onClick={() => dispatch(navbartoggle(!mystate))} >

                                    <i className="la la-home" />

                                    <span className="menu-title" data-i18n="nav.dash.main">Dashboard</span>
                                    <span className="badge badge badge-info badge-pill float-right mr-2">3 </span>
                                </a>
                                <ul className="menu-content">
                                    <li className={mystate ? " is-shown " : " "} ><Link className="menu-item" to="/dashboardecommerce" >eCommerce</Link>
                                    </li>
                                    <li className={mystate ? " is-shown " : " "} ><Link className="menu-item" to="/dashboardcrypto" >Crypto</Link>
                                    </li>
                                    <li className={mystate ? " is-shown " : " "} ><Link className="menu-item" to="/dashboardsales" >Sales</Link>
                                    </li>
                                </ul>

                            </li> */}
                            <li className=" nav-item">
                                <Link to={"/dashboard"} >
                                <a >
                                    <i className="la la-home" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Dashboard</span>
                                </a>
                                
                                </Link>
                                
                            </li>
                            <li className=" nav-item">
                                <Link to={"/addcategory"} >
                                <a >
                                    <i className="la la-tablet" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Category</span>
                                </a>
                                
                                </Link>
                                
                            </li>
                            <li className=" nav-item">
                                <Link to={"/addproduct"} >
                                <a >
                                    <i className="la la-upload" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Product</span>
                                </a>
                                
                                </Link>
                                
                            </li>
                            <li className=" nav-item">
                                <Link to={"/addpackage"} >
                                <a >
                                    <i className="la la-cart-arrow-down" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Packages</span>
                                </a>
                                
                                </Link>
                                
                            </li>
                            <li className=" nav-item">
                                <Link to={"/orders"} >
                                <a >
                                    <i className="la la-support" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Order</span>
                                </a>
                                
                                </Link>
                                
                            </li>
                            {/* <li className=" nav-item">
                                <Link to={"/addcustomer"} >
                                <a >
                                    <i className="la la-users" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Customer</span>
                                </a>
                                
                                </Link>
                                
                            </li> */}
                            {/* <li className=" nav-item">
                                <Link to={"/profile"} >
                                <a >
                                    <i className="la la-user" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Profile</span>
                                </a>
                                
                                </Link>
                                
                            </li> */}
                            <li className=" nav-item">
                                
                                <a  onClick={logout} >
                                    <i className="ft-power" />
                                
                                <span className="menu-title" data-i18n="nav.support_raise_support.main">Logout</span>
                                </a>
                                
                                
                                
                            </li>
                       
                        </ul>
                    </Scrollbars>
                </div>
            </div>

            {/* change password modal */}
            
            {/* modal*/}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Change Password </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{marginLeft:"160",cursor:"pointer"}} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Old Password"
                                autoFocus
                                // onChange={(e) => handleInputChange(e, setOldPassword)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="New Password"
                                autoFocus
                                // onChange={(e) => handleInputChange(e, setNewPassword)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                autoFocus
                                // onChange={(e) => handleInputChange(e, setConfirmNewPassword)}
                            />

                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Header
