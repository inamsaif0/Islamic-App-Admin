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

const CategoryTable = () => {

    const [errorFlag, SeterrorFlag] = useState(false)

    console.log('errorFlag==>', errorFlag)

    const [CategoryData, SetCategoryData] = useState([])
    const [title, Settitle] = useState('')

    const [imagelist, Setimagelist] = useState([])
    const [description, Setdescription] = useState('')
    const [imagePreview, setImagePreview] = useState(null);

    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false); SeterrorFlag(false); Settitle('');
    }
    const handleShow = () => setShow(true);

    const [imageMap, setImageMap] = useState({});
    const [deletedImageIds, setDeletedImageIds] = useState([]);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => {
        setShow2(false); SeterrorFlag(false);
    }
    const handleShow2 = () => setShow2(true);

    const Token = localStorage.getItem("AdminToken")

    const [loader, setloader] = useState(false)


    useEffect(() => {

        GetCategoryData()

    }, [])

    const GetCategoryData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}api/categories/get`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
                    console.log(result?.data?.result)
                    SetCategoryData(result?.data?.result)
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

    const addCategory = (e) => {
        e.preventDefault()

        if (!imagelist.length > 0 || !title) {
            console.log(title)
            console.log(imagelist)
            SeterrorFlag(true)
            return
        }



        var formdata = new FormData();
        formdata.append("title", title);
        console.log(title)
        console.log(imagelist)
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

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
        fetch(`${Baseurl.baseUrl}api/categories/create`, requestOptions)
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
                    // Setdescription('')
                    setShow(false)
                    GetCategoryData()
                    handleClose()
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
    }

    const Edited = (e) => {
        console.log("i am running")
        console.log("value of rowdata id is ==>", e)
        SetTabelId(e)
        handleShow2()
    }


    const EditCategory = () => {
        if (!imagelist.length > 0 || !title) {
            SeterrorFlag(true)
            return
        }

        var formdata = new FormData();
        formdata.append("categoryId", TabelId);
        formdata.append("title", title);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }

        var requestOptions = {
            method: 'Post',
            headers: {
                token: Token
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl.baseUrl}api/categories/update`, requestOptions)
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


        fetch(`${Baseurl.baseUrl}api/categories/delete`, requestOptions)
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

    function convertTimestamp(isoString, dateFormat = "YYYY-MM-DD HH:mm:ss") {
        return moment(isoString).format(dateFormat);
    }

    const handleEdit = (rowData) => {
        Settitle(rowData.title)
        Edited(rowData._id);


        // Convert the media files to Blob/File objects for the DropzoneArea
        const existingImages = rowData?.media?.map(async (mediaItem) => {
            const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);
            const blob = await response.blob();
            return new File([blob], mediaItem.file.split('/').pop(), { type: blob.type });
        });

        console.log('existingImages', existingImages)

        // Resolve all promises and set the files
        Promise.all(existingImages).then((filesArray) => {
            Setimagelist(filesArray);
        });


    };

    const [Loading2, setLoading2] = useState(false)

    //   const handleEdit2 = async (rowData) => {
    //     setLoading2(true);  // Start loading
    //     Settitle(rowData.title)
    //     Edited(rowData._id);



    //     const existingImages = rowData?.media?.map(async (mediaItem) => {
    //       const response = await fetch(`${Baseurl.baseUrl}${mediaItem?.file}`);


    //       const blob = await response?.blob();
    //       return new File([blob], mediaItem?.file.split('/').pop(), { type: blob.type });
    //     });

    //     const filesArray = await Promise.all(existingImages);
    //     Setimagelist(filesArray);
    //     setLoading2(false); 

    //   };

    const handleEdit2 = async (rowData) => {
        setLoading2(true);  // Start loading

        try {
            console.log(rowData)
            console.log(rowData.media)
            console.log(rowData.media)
            // Set initial state
            Settitle(rowData.title);
            setImagePreview(Baseurl.baseUrl + rowData.media.file);
            Edited(rowData._id);

            // Fetch media and handle uniqueness
            const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
                const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`, { mode: 'no-cors' });
                const blob = await response.blob();
                const fileName = mediaItem.file.split('/').pop(); // Use original file name
                const file = new File([blob], fileName, { type: blob.type });

                return { file, id: mediaItem._id }; // Return file with its ID
            }));

            console.log('existingImages', existingImages);

            // Ensure no duplicate files are added
            const fileMap = new Map();
            existingImages.forEach(item => {
                if (!fileMap.has(item.id)) {
                    fileMap.set(item.id, item);
                }
            });

            // Extract unique files and their IDs
            const uniqueImages = Array.from(fileMap.values());
            const filesArray = uniqueImages.map(item => item.file);
            Setimagelist(filesArray);

            const newImageMap = {};
            uniqueImages.forEach(item => {
                newImageMap[item.file.name] = item.id; // Map filename to ID
            });

            setImageMap(newImageMap);
            setLoading2(false); // Stop loading when files are set

            // // Fetch all images
            // const existingImagesPromises = rowData?.media?.map(async (mediaItem) => {
            //     const response = await fetch(`${Baseurl?.baseUrl}${mediaItem?.file}`);

            //     if (!response?.ok) {
            //         throw new Error('Failed to fetch image');
            //     }

            //     const blob = await response.blob();
            //     return new File([blob], mediaItem?.file.split('/').pop(), { type: blob.type });
            // });

            // const existingImages = await Promise.all(existingImagesPromises);

            // Setimagelist(existingImages); // Set the list of images

        } catch (error) {
            console.error("Error fetching images:", error);
            // Optionally, set some error state here if needed

        } finally {
            setLoading2(false);  // Stop loading when files are set or error occurs
        }
    };

    const handleDelete = (deletedFile) => {
        console.log('deletedFile', deletedFile);

        const deletedFileName = deletedFile.name;
        const deletedImageId = imageMap[deletedFileName]; // Get ID using filename

        if (deletedImageId) {
            console.log('deletedImageId', deletedImageId);

            // Store deleted IDs
            setDeletedImageIds(prevIds => [...prevIds, deletedImageId]);
            console.log('Deleted Image ID:', deletedImageId);

            // Remove the file from imagelist to prevent re-adding it
            Setimagelist(prevFiles => prevFiles.filter(file => file.name !== deletedFileName));

            // Optionally remove from imageMap if you want to prevent further operations on it
            setImageMap(prevMap => {
                const newMap = { ...prevMap };
                delete newMap[deletedFileName];
                return newMap;
            });
        }
    };



    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file); // Read the file as a data URL


            console.log('Files:', event.target.files);
            Setimagelist(event.target.files);

        }
    };

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
                                Add Categories
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
                                    {/* {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} */}Add Category
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
                                    {
                                        title: "Image", field: "media", render: item =>
                                            <img src={item?.media?.file ? Baseurl.baseUrl + item?.media?.file : '../../../app-assets/images/portrait/medium/avatar-m-25.jpg'} alt="" border="3" height="50" width="100" />
                                        //  <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="100" width="100" />
                                    },
                                    { title: "Title", field: "title" },
                                    {
                                        title: "Date", field: 'createdAt',
                                        render: (row) => {
                                            return <span>{convertTimestamp(row?.createdAt, "YYYY-MM-DD")}</span>
                                            // convertTimestamp(isoTimestamp, "YYYY-MM-DD")
                                        },
                                    },
                                ]}
                                data={
                                    CategoryData
                                }
                                actions={
                                    [
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit Category',
                                            // onClick: (event, rowData) => handleEdit(rowData)
                                            onClick: (event, rowData) => handleEdit2(rowData)
                                            // onClick: (event, rowData) => {
                                            //     // console.log("edit btn ==>", rowData.SId)
                                            //     console.log("edit rowData ==>", rowData)
                                            //     console.log("edit btn id ==>", rowData.uid)
                                            //     console.log("edit btn name ==>", rowData.name)
                                            //     Settitle(rowData.title)
                                            //     Setdescription(rowData.description)
                                            //     // setFname2(rowData.Fname)
                                            //     // setLname2(rowData.Lname)
                                            //     // setContact2(rowData.ContactNo)
                                            //     // setId2(rowData.id)
                                            //     Edited(rowData._id)
                                            //     // handleShow2()
                                            // }
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
            {show && (<Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Add Category </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => e.preventDefault()}>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Settitle)}
                            />

                            {errorFlag && !title && (<p style={{ color: 'red', marginTop: '10px' }} >{'Title is Required'}</p>)}
                        </Form.Group>


                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div
                                    className="col-md-12 mb-2"
                                    style={{
                                        minHeight: "50vh",
                                        height: "auto",
                                        // border: "1px solid red",
                                        display: "flex",
                                        flexDirection: "column", // Stack content vertically
                                        alignItems: "center", // Center content horizontally
                                        gap: "20px", // Space between previews and input
                                    }}
                                >
                                    {/* File Input and Label */}
                                    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
                                        <input
                                            type="file"
                                            id="cateogryImg"
                                            style={{
                                                display: "none",
                                            }}
                                            multiple // Allow multiple file selection
                                            onChange={handleImageChange}
                                        />
                                        <label
                                            htmlFor="cateogryImg"
                                            style={{
                                                cursor: "pointer",
                                                display: "inline-block",
                                                padding: "10px 20px",
                                                backgroundColor: "#f0f0f0",
                                                borderRadius: "5px",
                                                border: "1px solid #ccc",
                                                transition: "background-color 0.3s",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
                                        >
                                            Drag and drop files here or click
                                        </label>
                                    </div>
                                    {/* Image Previews */}
                                    {imagePreview?.length > 0 && (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap", // Allow wrapping for multiple images
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: "10px", // Space between images
                                            }}
                                        >
                                            <img
                                                src={imagePreview}
                                                style={{
                                                    maxWidth: "150px",
                                                    maxHeight: "100px",
                                                    border: "2px solid #ccc",
                                                    padding: "10px",
                                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                                    borderRadius: "10px",
                                                }}
                                            />
                                        </div>
                                    )}

                                    {errorFlag && !imagelist.length > 0 && (
                                        <p style={{ color: "red", marginTop: "10px" }}>
                                            {"Image is Required"}
                                        </p>
                                    )}
                                </div>
                            </div>


                            {/* <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    filesLimit={1}
                                    showAlerts={false}
                                    onChange={(files) => {
                                        console.log('Files:', files);
                                        Setimagelist(files);
                                    }}
                                /> */}

                            {/* <div className="col-md-12 mb-2" style={{ position: 'relative', height: "45vh" }}>

                                {imagePreview && (
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 1, // Lower z-index to place image behind input
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            style={{
                                                maxWidth: "400px",
                                                maxHeight: "200px",
                                                margin: "10px auto",
                                                border: "2px solid #ccc",
                                                padding: "10px",
                                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                                borderRadius: "10px"
                                            }}
                                        />
                                    </div>
                                )}

                                <div style={{
                                    position: "relative",
                                    zIndex: 2, // Ensure file input and label are above the image preview
                                }}>
                                    <input
                                        type="file"
                                        id="cateogryImg"
                                        style={{
                                            display: "none",
                                            zIndex: 3, // Ensure the input stays above the image preview
                                            position: "absolute", // Position the input field on top
                                            width: "100%",
                                            height: "100%",
                                            top: 0,
                                            left: 0,
                                            cursor: "pointer",
                                        }}
                                        onChange={handleImageChange}
                                    />
                                    <label
                                        htmlFor="cateogryImg"
                                        style={{
                                            border: "2px solid gray",
                                            height: "40vh",
                                            cursor: "pointer",
                                            position: "relative",
                                            zIndex: 3,
                                            display: "flex", // Flexbox for centering
                                            alignItems: "center", // Vertically center text
                                            justifyContent: "center", // Horizontally center text
                                            marginTop: imagePreview ? "10px" : "0px",
                                        }}
                                    >
                                        Drag and drop a file here or click
                                    </label>

                                </div>

                                {errorFlag && !imagelist.length > 0 && (
                                    <p style={{ color: 'red', marginTop: '10px' }}>
                                        {'Image is Required'}
                                    </p>
                                )}
                            </div> */}




                        </div>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='button' onClick={(e) => { addCategory(e) }} >
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal >)
            }



            {/* edit category modal 2 */}
            {
                show2 && (<Modal show={show2} onHide={handleClose2}>
                    <Modal.Header >
                        <Modal.Title>Edit Category </Modal.Title>
                        <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => e.preventDefault()}>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    autoFocus
                                    value={title}
                                    onChange={(e) => handleInputChange(e, Settitle)}
                                />

                                {errorFlag && !title && (<p style={{ color: 'red', marginTop: '10px' }} >{'Title is Required'}</p>)}
                            </Form.Group>

                            <div className="row">
                                <div className="col-md-12 mb-2">
                                    <div
                                        className="col-md-12 mb-2"
                                        style={{
                                            minHeight: "50vh",
                                            height: "auto",
                                            // border: "1px solid red",
                                            display: "flex",
                                            flexDirection: "column", // Stack content vertically
                                            alignItems: "center", // Center content horizontally
                                            gap: "20px", // Space between previews and input
                                        }}
                                    >
                                        {/* File Input and Label */}
                                        <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
                                            <input
                                                type="file"
                                                id="cateogryImg"
                                                style={{
                                                    display: "none",
                                                }}
                                                multiple // Allow multiple file selection
                                                onChange={handleImageChange}
                                            />
                                            <label
                                                htmlFor="cateogryImg"
                                                style={{
                                                    cursor: "pointer",
                                                    display: "inline-block",
                                                    padding: "10px 20px",
                                                    backgroundColor: "#f0f0f0",
                                                    borderRadius: "5px",
                                                    border: "1px solid #ccc",
                                                    transition: "background-color 0.3s",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
                                            >
                                                Drag and drop files here or click
                                            </label>
                                        </div>
                                        {/* Image Previews */}
                                        {imagePreview?.length > 0 && (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap", // Allow wrapping for multiple images
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    gap: "10px", // Space between images
                                                }}
                                            >
                                                <img
                                                    src={imagePreview}
                                                    style={{
                                                        maxWidth: "150px",
                                                        maxHeight: "100px",
                                                        border: "2px solid #ccc",
                                                        padding: "10px",
                                                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                                                        borderRadius: "10px",
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {errorFlag && !imagelist.length > 0 && (
                                            <p style={{ color: "red", marginTop: "10px" }}>
                                                {"Image is Required"}
                                            </p>
                                        )}
                                    </div>
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
                </Modal>)
            }
        </>
    )
}

export default CategoryTable