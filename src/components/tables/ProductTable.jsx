import React, { useEffect } from 'react'
import MaterialTable from "material-table";

import { forwardRef } from 'react';
import Swal from "sweetalert2";
import { Loader } from 'react-overlay-loader';
import moment from 'moment';

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
    const [brandname, Setbrandname] = useState('')
    const [description, Setdescription] = useState('')
    const [price, Setprice] = useState('')
    const [sku, Setsku] = useState('')
    const [longdescription, Setlongdescription] = useState('')
    const [ProductType, SetProductType] = useState('')
    const [categoryid, Setcategoryid] = useState('')
    const [imagelist, Setimagelist] = useState([])

    console.log('imagelist',imagelist)


    const [CategoryName, setCategoryName] = useState('')


    const [CategoryDropdown, SetCategoryDropdown] = useState([])


    console.log('CategoryDropdown',CategoryDropdown)



    // const [ProductData,SetProductData]=useState([])
    const [productData, SetproductData] = useState([])
    const [Productimage, setProductimage] = useState('');

    const [TabelId, SetTabelId] = useState('')

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
        // GetAllImages()

    }, [])

    const GetproductData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };

        setLoader(true)

        fetch(`${Baseurl.baseUrl}api/products/get`, requestOptions)

            .then(response => response.json())
            .then(result => {
                console.log('getProduct',result?.data)
                setLoader(false)
                // console.log("result ahmed",result)
                SetproductData(result?.data?.result)
            }
            )
            .catch(error =>{
                setLoader(false)
                console.log('error', error)
            }
                );
    }

    const AddProduct = () => {

        handleClose()

       if(TabelId){

        
        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("brandName", brandname);

        formdata.append("price", price);
        formdata.append("sku", sku);
        formdata.append("description", longdescription);
        // formdata.append("description", convertedContent);

        
        formdata.append("productType", ProductType);
        formdata.append("category", CategoryName);
        formdata.append("productId", TabelId);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }

        console.log("value of image list is ", imagelist)

        var requestOptions = {
            method: 'POST',
            headers: {
                token:Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setLoader(true)

        fetch(`${Baseurl.baseUrl}api/products/update`, requestOptions)
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
                    Setsku('')
                    setConvertedContent('')
                    SetProductType('')
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

       } else{

        
        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("brandName", brandname);

        formdata.append("price", price);
        formdata.append("sku", sku);
        formdata.append("description", longdescription);
        // formdata.append("description", convertedContent);

        
        formdata.append("productType", ProductType);
        formdata.append("category", CategoryName);
        // formdata.append("image", image);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }

        console.log("value of image list is ", imagelist)

        var requestOptions = {
            method: 'POST',
            headers: {
                token:Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setLoader(true)

        fetch(`${Baseurl.baseUrl}api/products/create`, requestOptions)
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
                    Setsku('')
                    setConvertedContent('')
                    SetProductType('')
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

        


    }

    const Edited = (e) => {
        console.log("i am running")
        console.log("value of rowdata id is ==>", e)
        SetTabelId(e)
        handleShow()
    }

    // useffect of images

    // useEffect(()=>{

    //     GetAllImages()

    //  },)

    // const GetAllImages = (id) => {
    //     console.log("this baloch id of iamges ===>", id)
    //     var requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             Authorization: "Bearer " + Token
    //         },
    //         redirect: 'follow'
    //     };
    //     setLoader(true)

    //     fetch(`${Baseurl.baseUrl}/productImages?uid=${id}`, requestOptions)

    //         .then(response => response.json())
    //         .then(result => {
    //             setLoader(false)
    //             console.log("getting all images result", result.data)
    //             SetimagelistData(result.data)
    //         }
    //         )
    //         .catch(error => {
    //             setLoader(false)
    //             console.log('error', error)
    //         }
    //         );
    // }

    // const ViewImages = (e) => {
    //     console.log("rowdata of images id", e)
    //     console.log("rowdata of images id", e.uid)
    //     handleShow2()

    //     GetAllImages(e.uid)

    // }

    const ConfirmDelete = (a) => {

        console.log("value of rowdata delete id==>", a)

        // var formdata = new FormData();
        // formdata.append("id", a);

        const requestBodydata={
            id:a
        }

        const requestBody = JSON.stringify(requestBodydata);



        console.log(requestBody,'requestBody')

        var requestOptions = {
            method: 'POST',
            headers: {
                token:Token
            },
            body:requestBody,
            
            redirect: 'follow'
        };
       
        

        console.log('requestOptions',requestOptions)

        // http://cnchub.pythonanywhere.com/webapi/login?SId=1"
        // `${BaseUrl.baseUrl}/login`

        fetch(`${Baseurl?.baseUrl}api/products/delete`, requestOptions)
        // fetch(`${Baseurl?.baseUrl}api/products/delete/${a}`, requestOptions)
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
                token:  Token
            },
            redirect: 'follow'
        };
        // setloader(true)

        fetch(`${Baseurl.baseUrl}api/categories/get`, requestOptions)

            .then(response => response.json())
            .then(result => {

                console.log('resultGetCategories',result)
                if (result.status == true) {
                    // setloader(false)
                    SetCategoryDropdown(result?.data?.result)

                }
                else {
                    // setLoader(true)
                    // setloader(false)
                    console.log("result.message", result?.message)
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
                

            }

            );
    }


    function convertTimestamp(isoString, dateFormat = "YYYY-MM-DD HH:mm:ss") {
        return moment(isoString).format(dateFormat);
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
                                    { title: "Image", field: "media", render: item =>
                                         <img src={Baseurl.baseUrl + item?.media[0]?.file} alt=""  border="3" height="50" width="100" />
                                        //  <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="100" width="100" />
                                        },
                                    { title: "Title", field: "title" },
                                    { title: "Brand Name", field: "brandName" },
                                    { title: "Description", field: "description" },
                                    { title: "Price", field: "price" },


                                    { title: "Product Type", field: "productType" },
                                    { title: "SKU", field: "sku" },
                                    // { title: "Date", field: convertTimestamp(updatedAt) },
                                //     { title: "Long Description", field: longdescription ,
                                //     render: (row) => {
                                //     return <span dangerouslySetInnerHTML={{__html: row.longdescription}} />
                                //     },
                                //   }, 
                                     { title: "Date", field: 'createdAt' ,
                                    render: (row) => {
                                    return <span>{convertTimestamp(row,"YYYY-MM-DD")}</span>
                                    // convertTimestamp(isoTimestamp, "YYYY-MM-DD")
                                    },
                                  },         

                                // convertTimestamp(isoTimestamp, "YYYY-MM-DD")
                                //     { title: "Short Description", field: "ProductType" },
                                    // { title: "Category", field: "CategoryName" },
                                    // { title: "categoryid", field: "categoryid" },

                                    // {
                                    //     title: "View Images", field: "images", render: rowData =>

                                    //         <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ViewImages(rowData)}  >View </Button>

                                    // },


                                ]}
                                data={
                                    productData
                                }
                                actions={
                                    [
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit User',
                                            onClick: (event, rowData) => {
                                                // console.log("edit btn ==>", rowData.SId)
                                                console.log("edit btn ==>", rowData)
                                                Setname(rowData?.title)
                                                Setbrandname(rowData?.brandName)
                                                Setlongdescription(rowData?.description)
                    Setprice(rowData?.price)
                    Setsku(rowData?.sku)
                    SetProductType(rowData?.productType)
                    // setConvertedContent('')
                    setCategoryName(rowData?.category)
                    const existingImages = rowData?.media?.map((mediaItem) => `${Baseurl.baseUrl}${mediaItem.file}`);
                    // Setimagelist(existingImages)
                    // Setimagelist( `${rowData?.media[0].file} ` )
                                                // setId2(rowData.id)
                                                Edited(rowData._id)
                                                // handleShow3()
                                            }
                                        },
                                        {

                                            icon: DeleteIcon,
                                            tooltip: 'Delete User ',
                                            onClick: (event, rowData) => {
                                                console.log("rowdata of delete", rowData)

                                                DeleteService(rowData?._id)

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
            {show && (<Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>{ TabelId ? 'Update Product' :'Add Product' }</Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
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
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Brand Name"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setbrandname(e.target.value)}
                                value={brandname}
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
                            <Form.Label>sku</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Sku"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setsku(e.target.value)}
                                value={sku}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setlongdescription(e.target.value)}
                                value={longdescription}
                            />

                        </Form.Group>
                        
                        {/* <div className="col-md-12 col-sm-6">
                                <div className="form-group"> */}
                                    {/* <TextField id="standard-basic" label="Description" variant="outlined"
                                        fullWidth
                                        multiline
                                        defaultValue={Description}
                                        value={Description} onChange={(e) => {
                                            Description(e.target.value)
                                        }} /> */}
                                    {/* <Editor
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
                                    /> */}
                                     {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}

                                {/* </div>
                            </div> */}
                            
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Type"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => SetProductType(e.target.value)}
                                value={ProductType}
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
                                value={CategoryName}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setCategoryName(e.target.value);
                                }}
                            // value={categoryid}
                            >
                                <option value="selectcatgory">Select Catogary</option>
                                {
                                    CategoryDropdown?.map((a) => {
                                        // console.log("safdar",a.name)
                                        return (
                                            <>
                                                <option value={a._id}>{a.title}</option>
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

                                // initialFiles={imagelist || [] }

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
                    { TabelId ? 'Update Product' :'Add Product' }
                    </Button>
                </Modal.Footer>
            </Modal>)}

            


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