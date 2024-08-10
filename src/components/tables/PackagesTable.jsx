import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";
import './Productatble.css'
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
import { DropzoneArea } from 'material-ui-dropzone';
import { AiFillCloseCircle } from "react-icons/ai";
import Baseurl from '../../Baseurl/Baseurl';
import { Loader } from 'react-overlay-loader';
import moment from 'moment';

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

const PackagesTable = () => {

    const [products, setProducts] = useState([
        { id: 1, title: 'Product 1', price: 10, image: 'path/to/image1.jpg' },
        { id: 2, title: 'Product 2', price: 20, image: 'path/to/image2.jpg' },
        { id: 3, title: 'Product 3', price: 30, image: 'path/to/image3.jpg' },
        // Add more products as needed
    ]);

    const [selectedProducts, setSelectedProducts] = useState([]);


    const [ADDselectedProducts, setADDselectedProducts] = useState([]);

    const [Loading2,setLoading2]=useState(false)

    console.log('selectedProducts', selectedProducts)

    // Handle checkbox change
    //   const handleCheckboxChange = (productId) => {
    //     setSelectedProducts(prevSelected => {
    //       if (prevSelected.includes(productId)) {
    //         return prevSelected.filter(id => id !== productId);
    //       } else {
    //         return [...prevSelected, productId];
    //       }
    //     });
    //   };



    const [PackagesData, SetPackagesData] = useState([])
    const [ProductsData, SetProductsData] = useState([])

    console.log('ProductsData', ProductsData)
 
    const [UpdatedProductsData, SetUpdatedProductsData] = useState([])

    const [CheckedProduct, setCheckedProduct] = useState([])

    console.log('CheckedProduct',CheckedProduct)

    console.log('UpdatedProductsData',UpdatedProductsData)

    const [title, Settitle] = useState('')

    const [imagelist, Setimagelist] = useState([])

    console.log('imagelist',imagelist)
    const [description, Setdescription] = useState('')

    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const Token = localStorage.getItem("AdminToken")

    const [loader, setloader] = useState(false)


    useEffect(() => {

        GetPackagesData()
        GetProductData()

    }, [])


    

    const AddhandleCheckboxChange = (product) => {
        setADDselectedProducts(prevSelected => {
            console.log('prevSelected', prevSelected)
            // Check if the product is already selected
            const isSelected = prevSelected.find(p => p._id === product._id);
            console.log('isSelected', isSelected)
            if (isSelected) {
                // Remove the product if it's already selected
                return prevSelected.filter(p => p._id !== product._id);
            } else {
                // Add the product if it's not selected
                return [...prevSelected, product];
            }
        });
    };
    const handleCheckboxChange = (product) => {
        const isAlreadySelected = UpdatedProductsData.find(p => p._id === product._id);
        
        let updatedSelectedProducts;
    
        if (isAlreadySelected) {
            // Uncheck - remove the product
            updatedSelectedProducts = UpdatedProductsData.filter(p => p._id !== product._id);
        } else {
            // Check - add the product
            updatedSelectedProducts = [...UpdatedProductsData, product];
        }
    
        SetUpdatedProductsData(updatedSelectedProducts);
    };

    const GetProductData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}api/products/get`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
                    SetProductsData(result?.data?.result)
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

    const GetPackagesData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}api/packages/get`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
                    SetPackagesData(result?.data?.result)
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

    const addPackage = () => {
        handleClose()

        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }
        for (var i = 0; i < ADDselectedProducts?.length; i++) {
            formdata.append(`products[${i}]`, ADDselectedProducts[i]?._id);

        }

        

        var requestOptions = {
            method: 'POST',

            headers: {
                token: Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.baseUrl}api/packages/create`, requestOptions)
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
                    Settitle('')
                    Setdescription('')
                    setShow(false)
                    GetPackagesData()

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

    const handleInputChange = (event, func) => {
        func(event.target.value);
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

        console.log('selectedProducts',selectedProducts)


        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("packageId", TabelId);
        
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }


        let UniqueProductId=UpdatedProductsData.filter((obj,index,self)=>index === self.findIndex((t)=> t._id === obj._id)
        )

        // UpdatedProductsData
        let newArrayDelete =[]
          

        console.log('ADDselectedProductsUniqueProductId',ADDselectedProducts)
         
        console.log('UniqueProductId',UniqueProductId)

        const isProductInArray = UniqueProductId.some(product => product._id === ADDselectedProducts._id);

        console.log('isProductInArraynewArray',isProductInArray)

        if (!isProductInArray) {
            // If the product is not in the array, add it to newArray
            newArrayDelete.push(...ADDselectedProducts);

        }

        console.log('newArray',newArrayDelete)
        console.log('newArray',newArrayDelete?.length)
          




        for (var i = 0; i < UniqueProductId?.length; i++) {
            formdata.append(`products[${i}]`, UniqueProductId[i]?._id);

        }


        if(newArrayDelete && newArrayDelete?.length > 0){
            for (var i = 0; i < newArrayDelete?.length; i++) {
                formdata.append(`deletedProducts[${i}]`, newArrayDelete[i]?._id);
    
            }
        }

       


        var requestOptions = {
            method: 'Post',
            headers: {
                token: Token,
                // "Content-Type":"application/json"
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl.baseUrl}api/packages/update`, requestOptions)
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
                    GetPackagesData()
                    GetProductData()

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


    const ConfirmDelete = (a) => {

        console.log("value of a==>", a)

        const requestBody = {
            id: a
        }
        const requestBody2 = JSON.stringify(requestBody);

        console.log('requestBody2', requestBody2)

        var formdata = new FormData();
        formdata.append("id", a);

        var requestOptions = {
            method: 'Post',
            headers: {
                token: Token,
                "Content-Type": "application/json"
            },
            body: requestBody2,
            redirect: 'follow'
        };


        fetch(`${Baseurl.baseUrl}api/packages/delete`, requestOptions)
            .then(response => response.json())
            .then(result =>
            //     {
            //     console.log(result)
            //     GetPackagesData()


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
                    GetPackagesData()

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

    function convertTimestamp(isoString, dateFormat = "YYYY-MM-DD HH:mm:ss") {
        return moment(isoString).format(dateFormat);
    }

    const handleDelete = (deletedFile) => {
        console.log('deletedFile',deletedFile)
        // const deletedFileName = deletedFile.name;
        // const deletedImageId = imageMap[deletedFileName]; // Get ID using filename
    
        // setDeletedImageIds((prevIds) => [...prevIds, deletedImageId]); // Store deleted IDs
        // console.log('Deleted Image ID:', deletedImageId);
      };

      


    //   const fetchImages = async (imageUrls) => {
    //     console.log('imageUrls',imageUrls)
    //     const imageFiles = await Promise.all(
    //       imageUrls.map(async (url) => {
    //         const response = await fetch(`${Baseurl.baseUrl}${url.file}`);
    //         console.log('')
    //         const blob = await response.blob();
            
    //         const fileName = url.split('/').pop();
    //         return new File([blob], fileName, { type: blob.type });
    //       })
    //     );
    //     return imageFiles;
    //   };

  
// old working code
    // const handleEdit2 = async (rowData) => {
    //     console.log('rowData',rowData)
    //     setLoading2(true);  // Start loading
    //     Settitle(rowData.title)
    //     Setdescription(rowData.description)
    //     SetTabelId(rowData._id)
    //     SetUpdatedProductsData(rowData.products)

    //      setCheckedProduct(rowData.products)


    //     Edited(rowData._id);
    
        
        
    //     const existingImages = rowData?.media?.map(async (mediaItem) => {
    //       const response = await fetch(`${Baseurl.baseUrl}${mediaItem?.file}`);
    //       if(response){
    //         setLoading2(false);
    //       }
    //       console.log('response',response)
    //       const blob = await response?.blob();
    //       console.log('blob',blob)
    //       return new File([blob], mediaItem?.file.split('/').pop(), { type: blob.type });
    //     });

    //     console.log('existingImages',existingImages)
        
    //     const filesArray = await Promise.all(existingImages);
    //     console.log('filesArray',filesArray)
    //     Setimagelist(filesArray);
    //     // Stop loading when files are set
        
    //   };

      const handleEdit2 = async (rowData) => {
        try {
            setLoading2(true);  // Start loading
            Settitle(rowData.title)
            Setdescription(rowData.description)
            SetTabelId(rowData._id)
            SetUpdatedProductsData(rowData.products)
    
             setCheckedProduct(rowData.products)
    
    
            Edited(rowData._id);
            
            // Fetch all images
            const existingImages = await Promise.all(
                rowData?.media?.map(async (mediaItem) => {
                    const response = await fetch(`${Baseurl?.baseUrl}${mediaItem?.file}`);
                    console.log('response',response)
                    if (response?.ok) {
                        setLoading2(false);
                        // throw new Error('Failed to fetch image');
                    }
                    
                    const blob = await response.blob();
                    return new File([blob], mediaItem?.file.split('/').pop(), { type: blob.type });
                })
            );
            if(existingImages)
            {
                setLoading2(false);
            }
            setLoading2(false);
            Setimagelist(existingImages); // Set the list of images
    
        } catch (error) {
            console.error("Error fetching images:", error);
            // Optionally, set some error state here if needed
        } finally {
            setLoading2(false);  // Stop loading when files are set or error occurs
        }
    };


    //   const handleRemoveProduct = (productId) => {
    //     // Remove product from ProductsData
    //     const updatedProducts = ProductsData.filter(product => product._id !== productId);
    //     setProductsData(updatedProducts);
    
    //     // Also, remove from selectedProducts if it was selected
    //     const updatedSelectedProducts = selectedProducts.filter(product => product._id !== productId);
    //     setSelectedProducts(updatedSelectedProducts);
    // };

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
                                Add Packages
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
                                    Add Package
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div style={{ maxWidth: "100%" }}>
                            <MaterialTable
                                icons={tableIcons}
                                columns={[
                                    {
                                        title: "Image", field: "media", render: item =>
                                            <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="50" width="100" />
                                        //  <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="100" width="100" />
                                    },
                                    { title: "Title", field: "title" },
                                    { title: "Description", field: "description" },
                                    {
                                        title: "Date", field: 'createdAt',
                                        render: (row) => {
                                            return <span>{convertTimestamp(row, "YYYY-MM-DD")}</span>
                                        },
                                    },
                                ]}
                                data={
                                    PackagesData
                                }
                                actions={
                                    [
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit Category',
                                            onClick: (event, rowData) => handleEdit2(rowData)
                                        },
                                        {

                                            icon: DeleteIcon,
                                            tooltip: 'Delete User ',
                                            onClick: (event, rowData) => {
                                                console.log("rowdata", rowData)

                                                DeleteService(rowData._id)

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

            {show && (
                <Modal show={show} onHide={handleClose}>
                    {/* <Modal.Header closeButton>
     <Modal.Title>Change Password </Modal.Title>

 </Modal.Header> */}
                    <Modal.Header >
                        {/* <i className='fa fa-close'>baloch</i>
     <AiFillCloseCircle fontSize={20} /> */}
                        <Modal.Title>Add package </Modal.Title>
                        <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                    </Modal.Header>
                    <Modal.Body>
                        <Form>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    autoFocus
                                    onChange={(e) => handleInputChange(e, Settitle)}
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

                            </Form.Group>

                            {/* product list */}


                            <div className="product-list-container">
                                <h1>Product List</h1>
                                <ul className='product_ul' >
                                    {ProductsData?.map(product => (
                                        <li key={product._id} className="product-item">
                                            <img src={Baseurl.baseUrl + product?.media[0]?.file} alt={product.title} />
                                            <div className="product-details">
                                                <h2>{product?.title}</h2>
                                                <p>Price: ${product.price}</p>
                                            </div>
                                            <div className="product-checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={ADDselectedProducts.some(p => p._id === product._id)}
                                                        onChange={() => AddhandleCheckboxChange(product)}
                                                    />
                                                </label>
                                            </div>
                                            {/* <div className="product-remove">
                        <span onClick={() => handleRemoveProduct(product._id)} className="remove-icon">✖</span>
                    </div> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>




                            {/*  */}




                            <div className="row">

                                <div className='col-md-12 mb-2' >
                                    <DropzoneArea

                                        acceptedFiles={['image/*']}
                                        filesLimit={1}
                                        showAlerts={false}
                                        onChange={
                                            (files) => {
                                                console.log('Files:', files)
                                                Setimagelist(files)
                                            }

                                        }
                                    />

                                </div>


                            </div>


                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addPackage} >
                            Add Package
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}




            {/* edit category modal 2 */}
            <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Edit Category </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Settitle)}
                                value={title}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setdescription)}
                                value={description}
                            />

                        </Form.Group>

                        {/* product list */}


                        <div className="product-list-container">
                            <h1>Product List</h1>
                            <ul className='product_ul' >
                                {ProductsData?.map(product => (
                                    <li key={product._id} className="product-item">
                                        <img src={Baseurl.baseUrl + product?.media[0]?.file} alt={product.title} />
                                        <div className="product-details">
                                            <h2>{product?.title}</h2>
                                            <p>Price: ${product.price}</p>
                                        </div>
                                        <div className="product-checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    // checked={UpdatedProductsData.find(p => p._id === product._id)}
                                                    checked={!!UpdatedProductsData.find(p => p._id === product._id)}
                                                    onChange={() => handleCheckboxChange(product)}
                                                />
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>




                        {/*  */}




                        <div className="row">

                            <div className='col-md-12 mb-2' >
                            {
                            Loading2 == true ? (<Loader fullPage loading />) : (
                                <DropzoneArea
                key={imagelist.length} // Ensures re-render
                acceptedFiles={['image/*']}
                filesLimit={1}
                initialFiles={imagelist &&imagelist}
                showAlerts={false}
                onChange={(uploadedFiles) => {
                  Setimagelist(uploadedFiles);
                  console.log('Files:', uploadedFiles);
                }}
              />

                            )
                        }

                            </div>


                        </div>


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

export default PackagesTable