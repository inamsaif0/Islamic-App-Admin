import React, { useEffect } from 'react'
import MaterialTable from "material-table";

import { forwardRef } from 'react';
import Swal from "sweetalert2";
import { Loader } from 'react-overlay-loader';

import './Productatble.css'


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
import { useState } from 'react';

import { DropzoneArea } from 'material-ui-dropzone';
import Dropdown from 'react-bootstrap/Dropdown';
import { Room } from '@material-ui/icons';

// text ediot
import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';




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

const ProductTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // modal state forimages

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [name, Setname] = useState('')
    const [description, Setdescription] = useState('')
    const [price, Setprice] = useState('')
    const [discount, Setdiscount] = useState('')
    const [longdescription, Setlongdescription] = useState('')
    const [shortdescription, Setshortdescription] = useState('')
    const [categoryid, Setcategoryid] = useState('')
    const [imagelist, Setimagelist] = useState([])


    const [CategoryName, setCategoryName] = useState('')


    const [CategoryDropdown, SetCategoryDropdown] = useState([])





    // const [ProductData,SetProductData]=useState([])
    const [productData, SetproductData] = useState([])
    const [Productimage, setProductimage] = useState('');

    const Token = localStorage.getItem("AdminToken")

    const [imagelistData, SetimagelistData] = useState([])

    const [loader, setLoader] = useState(false)


    // text ediot
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }

    useEffect(() => {

        GetproductData()
        GetAllImages()

    }, [])

    const GetproductData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };

        setLoader(true)

        fetch(`${Baseurl.baseUrl}/productsGet`, requestOptions)

            .then(response => response.json())
            .then(result => {
                setLoader(false)
                // console.log("result ahmed",result)
                SetproductData(result.data)
            }
            )
            .catch(error => console.log('error', error));
    }

    const AddProduct = () => {

        handleClose()

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("price", price);
        formdata.append("discount", discount);
        // formdata.append("longdescription", longdescription);
        formdata.append("longdescription", convertedContent);

        
        formdata.append("shortdescription", shortdescription);
        formdata.append("categoryid", CategoryName);
        // formdata.append("image", image);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("image", imagelist[i]);

        }

        console.log("value of image list is ", imagelist)

        var requestOptions = {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setLoader(true)

        fetch(`${Baseurl.baseUrl}/productsAdd`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result.status == true) {
                    setLoader(false)



                    console.log("add single file ===>", result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    Setname('')
                    Setdescription('')
                    Setprice('')
                    Setdiscount('')
                    // Setlongdescription('')
                    setConvertedContent('')
                    Setshortdescription('')
                    setCategoryName('')
                    Setimagelist('')

                    setShow(false)
                    GetproductData()

                    // Navigate('/addcustomer')


                }
                else {
                    // setLoader(true)
                    setLoader(false)
                    console.log("result.message", result.message)
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
                setLoader(false)
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

    // useffect of images

    // useEffect(()=>{

    //     GetAllImages()

    //  },)

    const GetAllImages = (id) => {
        console.log("this baloch id of iamges ===>", id)
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };
        setLoader(true)

        fetch(`${Baseurl.baseUrl}/productImages?uid=${id}`, requestOptions)

            .then(response => response.json())
            .then(result => {
                setLoader(false)
                console.log("getting all images result", result.data)
                SetimagelistData(result.data)
            }
            )
            .catch(error => {
                setLoader(false)
                console.log('error', error)
            }
            );
    }

    const ViewImages = (e) => {
        console.log("rowdata of images id", e)
        console.log("rowdata of images id", e.uid)
        handleShow2()

        GetAllImages(e.uid)

    }

    const ConfirmDelete = (a) => {

        console.log("value of rowdata delete id==>", a)

        var requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };

        // http://cnchub.pythonanywhere.com/webapi/login?SId=1"
        // `${BaseUrl.baseUrl}/login`

        fetch(`${Baseurl.baseUrl}/deleteproduct?uid=${a}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    console.log(result)
                    Swal.fire({
                        title: "success",
                        text: result.message,
                        icon: "success",
                        confirmButtonColor: "#29BF12",
                    });
                    GetproductData()
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

    const DeleteService = (e) => {

        console.log("value of e==>", e)
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

    // const handleimage = (e) =>{
    //     Setimagelist(e.target.files)
    // }

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
        // setloader(true)

        fetch(`${Baseurl.baseUrl}/Getcategory`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    // setloader(false)
                    SetCategoryDropdown(result.data)

                }
                else {
                    // setLoader(true)
                    // setloader(false)
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
                // setloader(false)
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
                                Add Products
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
                                    {/* {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} */}Add Product
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
                                    { title: "Image", field: "Productimage", render: item => <img src={Baseurl.imgUrl + item.Productimage} alt="" border="3" height="100" width="100" /> },
                                    { title: "Name", field: "name" },
                                    { title: "Description", field: "description" },
                                    { title: "Price", field: "price" },
                                    { title: "Discount", field: "discount" },
                                    // { title: "Long Description", field: "longdescription" },
                                    { title: "Long Description", field: longdescription ,
                                    render: (row) => {
                                    return <span dangerouslySetInnerHTML={{__html: row.longdescription}} />
                                    },
                                  },         
                                    { title: "Short Description", field: "shortdescription" },
                                    { title: "Category", field: "CategoryName" },
                                    // { title: "categoryid", field: "categoryid" },

                                    {
                                        title: "View Images", field: "images", render: rowData =>

                                            <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ViewImages(rowData)}  >View </Button>

                                    },


                                ]}
                                data={
                                    productData
                                }
                                actions={
                                    [
                                        // {
                                        //     icon: Edit,
                                        //     tooltip: 'Edit User',
                                        //     onClick: (event, rowData) => {
                                        //         // console.log("edit btn ==>", rowData.SId)
                                        //         console.log("edit btn ==>", rowData)
                                        //         // setFname2(rowData.Fname)
                                        //         // setLname2(rowData.Lname)
                                        //         // setContact2(rowData.ContactNo)
                                        //         // setId2(rowData.id)
                                        //         // Edited(rowData.SId)
                                        //         // handleShow3()
                                        //     }
                                        // },
                                        {

                                            icon: DeleteIcon,
                                            tooltip: 'Delete User ',
                                            onClick: (event, rowData) => {
                                                console.log("rowdata of delete", rowData)

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





            {/* add Product modal */}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Add Product </Modal.Title>
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
                                // onChange={(e) => handleEdited(e, setFname2)}
                                onChange={(e) => Setname(e.target.value)}
                                value={name}
                            />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setdescription(e.target.value)}
                                value={description}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Price"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setprice(e.target.value)}
                                value={price}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Discount"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setdiscount(e.target.value)}
                                value={discount}
                            />

                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Long Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Long Description"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setlongdescription(e.target.value)}
                                value={longdescription}
                            />

                        </Form.Group> */}
                        
                        <div className="col-md-12 col-sm-6">
                                <div className="form-group">
                                    {/* <TextField id="standard-basic" label="Description" variant="outlined"
                                        fullWidth
                                        multiline
                                        defaultValue={Description}
                                        value={Description} onChange={(e) => {
                                            Description(e.target.value)
                                        }} /> */}
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={handleEditorChange}
                                        wrapperClassName="wrapper-class"
                                        editorClassName="editor-class"
                                        toolbarClassName="toolbar-class"
                                        editorStyle={{
                                            border: "1px solid #F0F0F0",
                                            padding: 15,
                                            minHeight: 350,
                                        }}
                                    />
                                     {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}

                                </div>
                            </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Short Description"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setshortdescription(e.target.value)}
                                value={shortdescription}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Category ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="categoryid"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setcategoryid(e.target.value)}
                                value={categoryid}
                            /> */}
                            <Form.Label>Category ID</Form.Label>
                            <Form.Control
                                as="select"
                                // value={type}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setCategoryName(e.target.value);
                                }}
                            // value={categoryid}
                            >
                                <option value="selectcatgory">Select Catogary</option>
                                {
                                    CategoryDropdown.map((a) => {
                                        // console.log("safdar",a.name)
                                        return (
                                            <>
                                                <option value={a.name}>{a.name}</option>
                                            </>
                                        )
                                    })
                                }
                                {/*                                 
                                <option value="PLANNERS">PLANNERS</option>
                                <option value="BRIEFCASES">BRIEF CASES</option>
                                <option value="PENS">PENS</option>
                                <option value="ACCESSORIES">ACCESSORIES</option> */}

                            </Form.Control>



                        </Form.Group>


                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Image"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setimage(e.target.value)}
                                value={image}
                            />

                        </Form.Group> */}


                        <div className="row">

                            <div className='col-md-12 mb-2' >
                                <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    filesLimit={12}
                                    // dropzoneText={"Drag and drop an image here or click"}
                                    showAlerts={false}
                                    onChange={
                                        (files) => {


                                            // setImage(e.target.files[0])
                                            console.log('Files:', files)
                                            Setimagelist(files)
                                        }

                                    }
                                // onChange={handleimage}

                                // initialFiles={
                                //     [
                                //     "https://images.pexels.com/photos/1909603/pexels-photo-1909603.jpeg"
                                //   ]
                                // }

                                />

                            </div>


                        </div>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddProduct} >
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* images modal */}
            <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Images </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>

                    <div className="row">


                        {

                            imagelistData.map((result, key) => {
                                return (
                                    <>
                                        < div className='col-md-6' >

                                            {/* <h1 key={key} >{result.image}</h1> */}
                                            <img style={{ marginBottom: 20 }} width={200} height={200} key={key} src={Baseurl.imgUrl + result.image} />
                                        </div>
                                    </>
                                )
                            })



                        }




                        {/* <div className="col-md-12 image-holder">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <a
                                        href="#"
                                        className="zoom"
                                        data-toggle="modal"
                                        data-target="#lightbox"
                                    >
                                        <img
                                            src="https://raw.githubusercontent.com/yuliya5/image-modal-responsive/master/images/mountains1.jpg"
                                            alt="..."
                                        />
                                        <span className="overlay">
                                            <i className="glyphicon glyphicon-fullscreen" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <section></section> */}
                    </div>


                    {/* <Form>



                        <div className="row">

                            <div className='col-md-12 mb-2' >
                                <DropzoneArea
                                    // acceptedFiles={['image/*']}
                                    // filesLimit={12}
                                    // dropzoneText={"Drag and drop an image here or click"}
                                    onChange={() => {}}
                                    // onChange={(files) => {


                                    //     // setImage(e.target.files[0])
                                    //     console.log('Files:', files)
                                    //     // Setimage(files[0])
                                    // }
                                    // value={imagelistData}

                                    // }
                                    // onChange={() => {}}

                                    //  initialFiles={
                                    //     [
                                        
                                    //      imagelistData.map((a,i)=>
                                    //     //  {
                                         

                                    //          console.log("initialFiles Data ===>",Baseurl.imgUrl  + a.image)
                                    //         //  Baseurl.imgUrl  + a.image[i]
                                    //         // src={  Baseurl.imgUrl + a.image}    
                                    //     //  }               
                                    //         )
                                    //     ]
                                    //      }


                                         
                                      
                            
                                    initialFiles={["https://api.clearpricing.health/upload/SuperAdmin/dummy.jpg"]}
                                    

                                />

                            </div> 


                        </div>


                    </Form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    {/* <Button variant="primary"  >
                        Add Product
                    </Button> */}
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default ProductTable