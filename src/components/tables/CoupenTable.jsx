
import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";

import { forwardRef } from 'react';

import Swal from 'sweetalert2';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import { AiFillCloseCircle } from "react-icons/ai";
import Baseurl from '../../Baseurl/Baseurl';
import { Loader } from 'react-overlay-loader';
import { NearMe } from '@material-ui/icons';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment/moment';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const CoupenTable = () => {

    const [CategoryData, SetCategoryData] = useState([])
    const [name, Setname] = useState('')
    const [description, Setdescription] = useState('')

    const [CoupanStartDate, SetCoupanStartDate] = useState(new Date())
    const [CoupanEndDate, SetCoupanEndDate] = useState(new Date())
    const [CoupanCode, SetCoupanCode] = useState('')
    const [CoupanDiscount, SetCoupanDiscount] = useState('')
    const [CoupanStatus, SetCoupanStatus] = useState('')


    // date
    const [value4, onChange2] = useState(new Date());


    console.log("datetime==>", value4)

    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const Token = localStorage.getItem("AdminToken")

    const [loader, setloader] = useState(false)

    // const onChangeDate = ({ target }) => {
    // 	const newDate = moment(target.value).format('YYYY-MM-DD');
    // 	setBirthday(newDate);
    // 	console.log(newDate); //always log "1970-01-01"
    // };


    useEffect(() => {

        GetCategoryData()

    }, [])

    const GetCategoryData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}/CoupanGet`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
                    SetCategoryData(result.data)
                }
                else {
                    // setLoader(true)
                    setloader(false)
                    console.log("result.message", result.message)
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#29BF12",
                    });

                }

            }
                // console.log("result",result)
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: error,
                //     confirmButtonColor: "#03bafe",
                // })

            }

            );
    }

    const addCategory = () => {
        handleClose()

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("description", description);
        // formdata.append("name", "coupan 1");
        formdata.append("coupan_startdatetime", moment(CoupanStartDate).local().format('YYYY-MM-DD HH:mm'));
        formdata.append("coupan_enddatetime", moment(CoupanEndDate).local().format('YYYY-MM-DD HH:mm'));
        formdata.append("discount", CoupanDiscount);
        // formdata.append("description", "qwertyuioplkjhgfdsazxcvbnm");
        // formdata.append("coupan_code", CoupanCode);
        formdata.append("coupan_status", CoupanStatus);



        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        // "https://pyurelyecommerce.pythonanywhere.com/api/categorys"
        fetch(`${Baseurl.baseUrl}/CoupanAdd`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setloader(false)
                if (result.status == true) {


                    console.log("getcustomerapi ===>", result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    // setProfileImage('')
                    // setSelectProfileImage('')
                    Setname('')
                    Setdescription('')
                    SetCoupanStartDate('')
                    SetCoupanEndDate('')
                    SetCoupanCode('')
                    SetCoupanDiscount('')
                    SetCoupanStatus('')
                    setShow(false)
                    GetCategoryData()

                    // Navigate('/addcustomer')


                }
                else {
                    setloader(false)
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#29BF12",
                    });

                }



            }
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: error,
                //     confirmButtonColor: "#03bafe",
                // })

            }

            );
    }

    const handleInputChange = (event, func) => {
        func(event.target.value);
        // setDisable(false);
        console.log('dis')
    }
    const handleInputChange2 = (event, func) => {
        func(event);
        // setDisable(false);
        console.log('dis')
    }

    const Edited = (e) => {
        console.log("i am running")
        console.log("value of rowdata id is ==>", e)
        SetTabelId(e)
        handleShow2()
    }


    const EditCategory = () => {


        var formdata = new FormData();
        formdata.append("uid", TabelId);
        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("coupan_startdatetime", moment(CoupanStartDate).local().format('YYYY-MM-DD HH:mm'));
        formdata.append("coupan_enddatetime", moment(CoupanEndDate).local().format('YYYY-MM-DD HH:mm'));
        formdata.append("discount", CoupanDiscount);
        // formdata.append("description", "qwertyuioplkjhgfdsazxcvbnm");
        // formdata.append("coupan_code", CoupanCode);
        formdata.append("coupan_status", CoupanStatus);

        var requestOptions = {
            method: 'PUT',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl.baseUrl}/EditCoupan`, requestOptions)
            .then(response => response.json())
            .then(result => {

                // setloader(false)
                if (result.status == true) {


                    console.log("getcustomerapi ===>", result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    // setProfileImage('')
                    // setSelectProfileImage('')
                    setShow2(false)
                    GetCategoryData()

                    // Navigate('/addcustomer')


                }
                else {
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#29BF12",
                    });

                }



            }
            )
            .catch(error => {
                console.log('error', error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                    confirmButtonColor: "#03bafe",
                })

            }

            );

    }




    const DeleteService = (e) => {

        console.log("value of delete id ==>", e)
        // setId(e)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#29BF12',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                ConfirmDelete(e)

            }
        })

    }

    const ActiveServices = (e) => {

        console.log("getting order coupon id ==>", e)
        // setId(e)
        Swal.fire({
            title: 'Are you sure  ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#29BF12',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Change Coupon Status!'
        }).then((result) => {
            if (result.isConfirmed) {

                ConfirmCoupon(e)

            }
        })

    }

    const ConfirmCoupon = (a) => {
      
        // let couponid =a.uid
        // let couponstatus =a.coupan_status

        // console.log("id of specific coupon==>", couponid)
        // console.log("status of specific coupon==>", couponstatus)
        var formdata = new FormData();

        formdata.append("uid", a.uid);
        formdata.append("coupan_status", !a.coupan_status);

        var requestOptions = {
            method: 'PUT',
            body: formdata,
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };

        


        fetch(`${Baseurl.baseUrl}/Coupanactive`, requestOptions)
            .then(response => response.json())
            .then(result =>
        
            {

                console.log("result==>",result.status)

                if (result.status == true) {

                    console.log(result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    
                    GetCategoryData()
                }
                else {
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#29BF12",
                    });
                }


            }
            )
            .catch(error => console.log('error', error));



    }


    const ConfirmDelete = (a) => {

        console.log("value of a==>", a)

        var requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };


        fetch(`${Baseurl.baseUrl}/deleteCoupan?uid=${a}`, requestOptions)
            .then(response => response.json())
            .then(result =>
            //     {
            //     console.log(result)
            //     GetCategoryData()


            // }
            {
                if (result.status == true) {
                    console.log(result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    GetCategoryData()
                }
                else {
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#29BF12",
                    });
                }


            }
            )
            .catch(error => console.log('error', error));



    }


    return (
        <>
            {loader == true ?
                <Loader fullPage loading /> : null
            }

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                {/* {Role == "addcustomer" ? "Add Customer" : "Upload File"} */}
                                Add Coupon
                            </h3>
                            {/* <div className="row breadcrumbs-top d-inline-block">
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
                            </div> */}
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                <button
                                    onClick={handleShow}
                                    className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {/* {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} */}Add Coupon
                                </button>


                                {/* <div className="dropdown-menu" aria-labelledby="dropdownBreadcrumbButton"><a className="dropdown-item" href="#"><i className="la la-calendar-check-o" /> Calender</a>
                                    <a className="dropdown-item" href="#"><i className="la la-cart-plus" /> Cart</a>
                                    <a className="dropdown-item" href="#"><i className="la la-life-ring" /> Support</a>
                                    <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="la la-cog" /> Settings</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div style={{ maxWidth: "100%" }}>
                            <MaterialTable
                                icons={tableIcons}
                                columns={[
                                    { title: "Name", field: "name" },
                                    { title: "Description", field: "description" },
                                    { title: "Start Date Time", field: "coupan_startdatetime" },
                                    { title: "End Date Time", field: "coupan_enddatetime" },
                                    { title: "Coupon Code", field: "coupan_code" },
                                    // { title: "Coupen Status", field: "status" },
                                    {
                                        title: "Coupon Status", field: "coupan_status", render: rowData =>
                                            <>

                                                {
                                                    // console.log("rowdata of status",rowData.status)
                                                    rowData.coupan_status == true ? 
                                                    <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Active </Button>
                                                        :
                                                        <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Deactive </Button>

                                                }
                                            </>


                                        // onClick={() => ViewImages(rowData)}

                                    },

                                ]}
                                data={
                                    CategoryData
                                }
                                actions={
                                    [
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit Coupon',
                                            onClick: (event, rowData) => {
                                                // console.log("edit btn ==>", rowData.SId)
                                                console.log("edit rowData ==>", rowData)
                                                console.log("edit btn id ==>", rowData.uid)
                                                console.log("status name ==>", rowData.status)
                                                Setname(rowData.name)
                                                Setdescription(rowData.description)
                                                SetCoupanStartDate(rowData.coupan_startdatetime)
                                                SetCoupanEndDate(rowData.coupan_enddatetime)
                                                SetCoupanCode(rowData.coupan_code)
                                                SetCoupanDiscount(rowData.discount)
                                                SetCoupanStatus(rowData.status)
                                                // setFname2(rowData.Fname)
                                                // setLname2(rowData.Lname)
                                                // setContact2(rowData.ContactNo)
                                                // setId2(rowData.id)
                                                Edited(rowData.uid)
                                                // handleShow2()
                                            }
                                        },
                                        {

                                            icon: DeleteIcon,
                                            tooltip: 'Delete Coupon ',
                                            onClick: (event, rowData) => {
                                                console.log("rowdata", rowData)

                                                DeleteService(rowData.uid)

                                            }
                                        },

                                    ]

                                }
                                options={{
                                    actionsColumnIndex: -1
                                }}
                                title=""
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* add category modal */}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Add Coupon </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setdescription)}
                            />
                            {/* <DateTimePicker className={"form-control"} onChange={(e) => handleInputChange2(e, SetCoupanStartDate)} value={CoupanStartDate} /> */}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Start Date Time</Form.Label>
                            {/* <Form.Control
                                type="date"
                                placeholder="Coupon Start Date Time"
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanStartDate)}
                            /> */}
                            <DateTimePicker className={"form-control"}
                             minDate={moment().toDate()}
                            onChange={(e) => handleInputChange2(e, SetCoupanStartDate)} value={CoupanStartDate} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon End Date Time</Form.Label>
                            {/* <Form.Control
                                type="date"
                                placeholder="Coupan End Date"
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanEndDate)}
                            /> */}
                            <DateTimePicker className={"form-control"}
                            minDate={moment().toDate()}
                            onChange={(e) => handleInputChange2(e, SetCoupanEndDate)} value={CoupanEndDate} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Discount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Coupon Discount"
                                min={0}
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanDiscount)}
                            />

                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Code</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="CoupanCode"
                                min={0}
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanCode)}
                            />

                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Coupon Status</Form.Label>
                            <Form.Control
                                as="select"
                                // value={type}
                                onChange={(e) => handleInputChange(e, SetCoupanStatus)}
                            // value={categoryid}
                            >
                                <option value="selectcatgory">Select Status</option>


                                <option value="True">Active</option>
                                <option value="False">Deactive</option>

                            </Form.Control>



                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory} >
                        Add Coupon
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* edit category modal 2 */}
            <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Edit Coupon </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={name}
                        onChange={(e) => handleInputChange(e, Setname)}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={description}
                        onChange={(e) => handleInputChange(e, Setdescription)}
                    />

                </Form.Group> */}
                        {/* <DateTimePicker onChange={onChange2} value={value4} /> */}

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={name}
                                onChange={(e) => handleInputChange(e, Setname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={description}
                                onChange={(e) => handleInputChange(e, Setdescription)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Start Date Time</Form.Label>
                            {/* <Form.Control
                                type="date"
                                placeholder="Coupon Start Date Time"
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanStartDate)}
                            /> */}
                            <DateTimePicker className={"form-control"} onChange={(e) => handleInputChange2(e, SetCoupanStartDate)} value={CoupanStartDate} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon End Date Time</Form.Label>
                            {/* <Form.Control
                                type="date"
                                placeholder="Coupan End Date"
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanEndDate)}
                            /> */}
                            <DateTimePicker className={"form-control"} onChange={(e) => handleInputChange2(e, SetCoupanEndDate)} value={CoupanEndDate} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Discount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Coupon Discount"
                                min={0}
                                value={CoupanDiscount}
                                autoFocus
                                onChange={(e) => handleInputChange(e, SetCoupanDiscount)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Code</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="CoupanCode"
                                min={0}
                                value={CoupanCode}
                                autoFocus
                                // onChange={(e) => handleInputChange(e, SetCoupanCode)}
                                readOnly
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Coupon Status</Form.Label>
                            <Form.Control
                                as="select"
                                // value={type}
                                onChange={(e) => handleInputChange(e, SetCoupanStatus)}
                            // value={categoryid}
                            // value={CoupanStatus}
                            >
                                <option value="selectcatgory">Select Status</option>


                                <option value="True">Active</option>
                                <option value="False">Deactive</option>

                            </Form.Control>



                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={EditCategory} >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}

export default CoupenTable