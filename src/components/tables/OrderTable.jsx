import React ,{useEffect ,useState} from 'react'
import MaterialTable from "material-table";

import { forwardRef } from 'react';

import Baseurl from '../../Baseurl/Baseurl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';



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
import { Loader } from 'react-overlay-loader';
// import Button from 'react-bootstrap/Button';
import { AiFillCloseCircle } from "react-icons/ai";
import { Phone } from '@material-ui/icons';
import Swal from 'sweetalert2';

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

const OrderTable = () => {


    const Token = localStorage.getItem("AdminToken")
    const [OrderData,SetOrderData]= useState([])

    console.log('OrderData==>',OrderData)

    const[name ,Setname]=useState('')

    const [loader,setloader]=useState(null)

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // state for modal 3
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    // 

    // orderDetail States
    const[FirstName,SetFirstName]=useState('')
    const[LastName,SetLastName]=useState('')
    const[Email,SetEmail]=useState('')
    const[Address,SetAddress]=useState('')
    const[Phone,SetPhone]=useState('')
    const[City,SetCity]=useState('')
    const[ZipCode,SetZipCode]=useState('')
    const[Country,SetCountry]=useState('')

    // order Information States

    const[OrderName,SetOrderName]=useState('')
    const[Ordertotal,SetOrdertotal]=useState('')
    const[Orderquantity,SetOrderquantity]=useState('')
    const[Orders,setOrders]=useState([])
    const[Orderpaymentmethod,Setpaymentmethod]=useState('')
    
    // const[OrderName,SetOrderName]=useState('')
    // const[OrderName,SetOrderName]=useState('')
    // const[OrderName,SetOrderName]=useState('')

    useEffect(() => {

        GetOrderData()

    }, [])

    const GetOrderData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}api/order/get-all-orders`, requestOptions)

            .then(response => response.json())
            .then(result =>
                {
                    setloader(false)
                console.log("result",result)
                console.log("result",result?.data)
                SetOrderData(result.data)
                }
            )
            .catch(error => console.log('error', error));
    }
 
    const ViewImages = (e) =>{

        console.log("rowdata==>",e.orderdetails)
        console.log("rowdata==>",e.orderdetails[0]['firstname'])
        console.log("rowdata==>",e.orderdetails[0]['lastname'])
        console.log("rowdata==>",e.orderdetails[0]['emailAddress'])
        console.log("rowdata==>",e.orderdetails[0]['phone'])
        console.log("rowdata==>",e.orderdetails[0]['address'])
        console.log("rowdata==>",e.orderdetails[0]['city'])
        console.log("rowdata==>",e.orderdetails[0]['zipcode'])
        console.log("rowdata==>",e.orderdetails[0]['state'])
        SetFirstName(e.orderdetails[0]['firstname'])
        SetLastName(e.orderdetails[0]['lastname'])
        SetEmail(e.orderdetails[0]['emailAddress'])
        SetPhone(e.orderdetails[0]['phone'])
        SetAddress(e.orderdetails[0]['address'])
        SetCity(e.orderdetails[0]['city'])
        SetZipCode(e.orderdetails[0]['zipcode'])
        SetCountry(e.orderdetails[0]['state'])
        


        handleShow2(true)

    }

    const ViewImages2 = (e) =>{
        console.log("rowdata order==>",e)
        console.log("rowdata==>",e.order)
        console.log("rowdata==>",e.order[0]['name'])
        
        setOrders(e.order)

        // SetOrderName(e.order[0]['name'])
        // SetOrdertotal(e.order[0]['total'])
        // SetOrderquantity(e.order[0]['quantity'])
        // Setpaymentmethod(e.order[0]['paymentmethod'])
        
        


        handleShow3(true)

    }

    const TRUNCATE_LENGTH = 20;

    const ReadMore = ({ text }) => {
        const [isExpanded, setIsExpanded] = useState(false);
    
        // Toggle the expansion state
        const toggleReadMore = () => {
            setIsExpanded(!isExpanded);
        };
    
        // Check if the text length exceeds the truncate length
        const isLongText = text?.length > TRUNCATE_LENGTH;
    
        return (
            <div>
                {isLongText ? (
                    // If the text is long, render a truncated version with a toggle option
                    <>
                        {isExpanded ? text : `${text.substring(0, TRUNCATE_LENGTH)}...`}
                        <span
                            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                            onClick={toggleReadMore}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </span>
                    </>
                ) : (
                    // If the text is short, render it as is without the toggle option
                    text
                )}
            </div>
        );
    };

//   const subTotal =OrderData?.products.reduce((acc, product) => acc + product?.totalPrice, 0); 

//   console.log('subTotal==>',subTotal)


const ChangeOrderStatus = (row) => {

    // console.log('row==>',row?._id)

    // if(row?._id){
    //     alert('hello baloch')
    // }

    // var formdata = new FormData();
    // formdata.append("orderId", row?._id);
    // const data = {
    //     orderId: row._id
    // };
    // var requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         token: Token,
    //          Accept: 'application/json'
    //     },
    //     body: formdata,
    //     // body: JSON.stringify(data),
    //     redirect: 'follow'
    // };

    var myHeaders = new Headers();
    myHeaders.append("token", Token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
  orderId: row?._id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


    setloader(true)
    fetch(`${Baseurl.baseUrl}api/order/change-order-delivery-status`, requestOptions)
        .then(response => response.json())
        .then(result => {

            setloader(false)
            if (result.status == true) {
        
                GetOrderData()

                console.log("getcustomerapi ===>", result)
                Swal.fire({
                    title: "success",
                    text: result.message,
                    icon: "success",
                    confirmButtonColor: "#29BF12",
                });
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
            console.log('error', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
                confirmButtonColor: "#03bafe",
            })

        }

        );
//     var myHeaders = new Headers();
// myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWJlOWYzYmE2NjI2NzQ4OWNiNGE4ZSIsImVtYWlsIjoiYWRtaW5AeW9wbWFpbC5jb20iLCJmdWxsTmFtZSI6bnVsbCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI2MTc1MjcxLCJleHAiOjE3Mjg3NjcyNzF9.xsuM7EL50uhBlUDkJtJ5UmmLInWP-oCPsYfrd1Ui7vI");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "orderId": "66deb6b260e507ad4693990f"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://51.20.55.91:8098/api/order/change-order-delivery-status", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
}


    return (
        <>
           {
        loader == true ? 
            <Loader FullPage loading />: null
           }
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                
                                 Order Details
                            </h3>
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                {/* <button 
                                onClick={Role == "addcustomer" ? handleShow : handleShow2}
                                 className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} 
                                     addcustomer
                                </button>  */}

                                
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
                                    { title: "Full Name", field: "name",
                                        render:(row)=>{
                                      return   <span>{row?.userId?.fullName || '-' }</span>
                                        }
                                     },
                                    { title: "Email", field: "userId.email",
                                        render:(row)=>{
                                            {console.log('row==>',row)}
                                          return  <span>{row?.userId?.email || '-' }</span>
                                        }
                                     },
                                    { title: "Payment Status", field: "paymentStatus" },
                                    { title: "Delivery Status", field: "deliveryStatus" },
                                    { title: "Shipping Address", field: "shippingAddress",
                                        render: item => <ReadMore text={item?.shippingAddress} />,
                                        
                                     },
                                    { title: "ZipCode", field: "ZipCode" },
                                    { title: "Sub Total", field: "totalPrice", 
                                       render:(row)=>{
                                        return <span>{row?.products?.reduce((acc, product) => acc + product.totalPrice, 0) || '-' }</span>
                                       } 
                                     },
                                     {
                                        title: "Change Order Delivery Status", field: "deliveryStatus", render: rowData =>
                                            <Button 
                                        className='btn btn-danger  round btn-glow px-2'
                                        style={{cursor:'pointer'}}
                                        onClick={() => ChangeOrderStatus(rowData)}
                                        disabled={rowData?.deliveryStatus === 'delivered'}
                                      >
                                        {rowData.deliveryStatus === 'delivered' ? 'Delivered' : 'Change Delivery Status'}
                                      </Button>
                                            // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ChangeOrderStatus(rowData)}  >{rowData.deliveryStatus === 'delivered' ? 'Delivered' : 'Change Delivery Status'}</Button>

                                    },

                                    
                            //         { title: "Coupon Name", field: "CoupanName" },
                            //         { title: "Coupon Status", field: "coupan_status",render:rowData=>
                                
                            //         <>
                            //         {
                            //             rowData.coupan_status == true ?  "Active " : "Deactive"
                            //         }
                                    
                            //         </>

                                
                            // },
                                    // { title: "Quantity", field: "quantity" },
                                    // { title: "Payment Method", field: "paymentmethod" },
                                    // {
                                    //     title: "Order Details", field: "orderdetails", render: rowData =>

                                    //         <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ViewImages(rowData)}  >View </Button>
                                    // },
                                    // {
                                    //     title: "Order Information", field: "order", render: rowData =>
                                    //         <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ViewImages2(rowData)}  >View </Button>
                                    // }
                                    // { title: "Payment Token", field: "paymenttoken" },
                                    // { title: "lastname", field: "lastname" },
                                   
                                ]}
                                data={
                                    OrderData
                            }
                                // actions={
                                //     [
                                //         {
                                //             icon: Edit,
                                //             tooltip: 'Edit User',
                                //             onClick: (event, rowData) => {
                                //                 // console.log("edit btn ==>", rowData.SId)
                                //                 console.log("edit btn ==>", rowData)
                                //                 // setFname2(rowData.Fname)
                                //                 // setLname2(rowData.Lname)
                                //                 // setContact2(rowData.ContactNo)
                                //                 // setId2(rowData.id)
                                //                 // Edited(rowData.SId)
                                //                 // handleShow3()
                                //             }
                                //         },
                                //         {

                                //             icon: DeleteIcon,
                                //             tooltip: 'Delete User ',
                                //             onClick: (event, rowData) => {
                                //                 console.log("rowdata", rowData)

                                //                 // DeleteService(rowData.SId)

                                //             }
                                //         },

                                //     ]
                                    
                                // }
                                options={{
                                    actionsColumnIndex: -1
                                }}
                                title=""
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* edit category modal 2 */}
            <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Order Details </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                autoFocus
                                value={FirstName}
                                readOnly
                                // onChange={(e) => handleInputChange(e, Setname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="Last Name"
                                autoFocus
                                value={LastName}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="Email"
                                autoFocus
                                value={Email}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={Address}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={Phone}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={City}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ZipCode</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={ZipCode}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={Country}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={EditCategory} >
                        Update
                    </Button> */}
                </Modal.Footer>
            </Modal>


            {/* order modal 3 */}
            <Modal show={show3} onHide={handleClose3}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Order Information </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose3} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                {Orders.map((e)=>(

                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={e.name}
                                readOnly
                                // onChange={(e) => handleInputChange(e, Setname)}
                            />


                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="Last Name"
                                autoFocus
                                value={e.total}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="Email"
                                autoFocus
                                value={e.quantity}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={e.paymentmethod}
                                // onChange={(e) => handleInputChange(e, Setdescription)}
                                readOnly
                            />

                        </Form.Group>
                        <hr/>
                    </Form>
                ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={EditCategory} >
                        Update
                    </Button> */}
                </Modal.Footer>
            </Modal>
        


                       

                    </>
                    )
}

export default OrderTable