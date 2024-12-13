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
import CustomDropzone from '../customDropzone/CustomDropzone';

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

const SubCategoryTable = () => {

    const [errorFlag, SeterrorFlag] = useState(false)

    console.log('errorFlag==>', errorFlag)

    const [CategoryData, SetCategoryData] = useState([])
    const [title, Settitle] = useState('')

    const [imagelist, Setimagelist] = useState([])
    console.log('imagelist==>', imagelist)
    const [imageURLs, setImageURLs] = useState([]); // State to store image URLs
    const [description, Setdescription] = useState('')

    const [TabelId, SetTabelId] = useState('')

    const [CategoryName, setCategoryName] = useState('')
    console.log('CategoryName==>', CategoryName)
    const [CategoryDropdown, SetCategoryDropdown] = useState([])

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

        GetSubCategoryData()
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
        // setloader(true)

        fetch(`${Baseurl.baseUrl}api/categories/get`, requestOptions)

            .then(response => response.json())
            .then(result => {

                console.log('resultGetCategories', result)
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

    const GetSubCategoryData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                token: Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}api/subcategories/get`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
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

    const [imagePreview, setImagePreview] = useState(null);
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


    const addCategory = (e) => {
        e.preventDefault()

        if (!imagelist.length > 0 || !title) {
            SeterrorFlag(true)
            return
        }





        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("category", CategoryName);
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
        fetch(`${Baseurl.baseUrl}api/subcategories/create`, requestOptions)
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
                    Settitle('')
                    setCategoryName('')
                    setShow(false)
                    GetSubCategoryData()
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
        if (!imagelist.length > 0 || !title || !CategoryName) {
            SeterrorFlag(true)
            return
        }
        //

        var formdata = new FormData();
        formdata.append("category", CategoryName);
        formdata.append("title", title);
        formdata.append("subcategoryId", TabelId);


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

        fetch(`${Baseurl.baseUrl}api/subcategories/update`, requestOptions)
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
                    GetSubCategoryData()

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


        fetch(`${Baseurl.baseUrl}api/subcategories/delete`, requestOptions)
            .then(response => response.json())
            .then(result =>
            //     {
            //     console.log(result)
            //     GetSubCategoryData()


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
                    GetSubCategoryData()
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
            const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`, { mode: 'no-cors' });
            // const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`, { mode: 'no-cors' });
            const blob = await response.blob();
            return new File([blob], mediaItem.file.split('/').pop(), { type: blob.type });
        });

        console.log('existingImages', existingImages)

        // Resolve all promises and set the files
        Promise.all(existingImages).then((filesArray) => {
            Setimagelist(filesArray);
        });


    };
    // useEffect(() => {
    //     return () => {
    //         imageURLs.forEach(url => URL.revokeObjectURL(url));
    //     };
    // }, [imageURLs]);

    const [Loading2, setLoading2] = useState(false)

    // old
    const handleEdit2 = async (rowData) => {
        setLoading2(true);  // Start loading

        try {
            // Set initial state
            Settitle(rowData.title);
            setCategoryName(rowData?.category);

            console.log(rowData)
            console.log(Baseurl.baseUrl + rowData.media.file)
            setImagePreview(Baseurl?.baseUrl + rowData?.media[0]?.file);
            Edited(rowData._id);

            // Fetch media and handle uniqueness
            const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
                const response = await fetch(`${Baseurl.baseUrl}${mediaItem?.file}`, { mode: 'no-cors' });
                // const response = await fetch(`${Baseurl.baseUrl}${mediaItem?.file}`, { mode: 'no-cors' });
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
            console.log('uniqueImages==>', uniqueImages)
            const filesArray = uniqueImages.map(item => item.file);
            console.log('filesArray', filesArray)
            Setimagelist(filesArray);

            // const newImageMap = {};
            // uniqueImages.forEach(item => {
            //     newImageMap[item.file.name] = item.id; // Map filename to ID
            // });

            // setImageMap(newImageMap);
            setLoading2(false); // Stop loading when files are set
        } catch (error) {
            console.error("Error fetching images:", error);
            // Optionally, set some error state here if needed

        } finally {
            setLoading2(false);  // Stop loading when files are set or error occurs
        }
    };

    // const handleEdit2 = async (rowData) => {
    //     setLoading2(true); // Start loading

    //     try {
    //         // Set initial state
    //         Settitle(rowData.title);
    //         setCategoryName(rowData?.category);
    //         Edited(rowData._id);

    //         // Fetch media and handle uniqueness
    //         const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
    //             try {
    //                 const imageUrl = `${Baseurl.baseUrl}${mediaItem?.file}`;
    //                 console.log('Fetching image from URL:', imageUrl);

    //                 const response = await fetch(imageUrl);

    //                 if (!response.ok) {
    //                     throw new Error(`HTTP error! Status: ${response.status}`);
    //                 }

    //                 const blob = await response.blob();
    //                 if (blob.size === 0) {
    //                     throw new Error('Received empty blob');
    //                 }

    //                 console.log('Blob:', blob);
    //                 console.log('Blob MIME Type:', blob.type);

    //                 const fileName = mediaItem.file.split('/').pop(); // Extract file name
    //                 const file = new File([blob], fileName, { type: blob.type });

    //                 console.log('Created File:', file);

    //                 return { file, id: mediaItem._id }; // Return file with its ID
    //             } catch (error) {
    //                 console.error('Error fetching file:', error);
    //                 return null; // Ensure null values are handled
    //             }
    //         }));

    //         // Ensure no duplicate files are added
    //         const fileMap = new Map();
    //         existingImages.forEach(item => {
    //             if (item) { // Ensure item is not null
    //                 if (!fileMap.has(item.id)) {
    //                     fileMap.set(item.id, item);
    //                 }
    //             }
    //         });

    //         // Extract unique files
    //         const uniqueImages = Array.from(fileMap.values());
    //         const filesArray = uniqueImages.map(item => item.file);

    //         console.log('Unique images:', uniqueImages);
    //         console.log('Files array:', filesArray);

    //         // Set files to state
    //         Setimagelist(filesArray);

    //     } catch (error) {
    //         console.error("Error fetching images:", error);
    //     } finally {
    //         setLoading2(false); // Stop loading
    //     }
    // };









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

    // useEffect(() => {
    //     // Clean up object URLs to avoid memory leaks
    //     return () => {
    //         imageURLs.forEach(url => URL.revokeObjectURL(url));
    //     };
    // }, [imageURLs]);

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
                                Add Sub Categories
                            </h3>
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                <button
                                    onClick={handleShow}
                                    className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {/* {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} */}Add Sub Category
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
                                            <img src={item?.media[0]?.file ? Baseurl.baseUrl + item?.media[0]?.file : '../../../app-assets/images/portrait/medium/avatar-m-25.jpg'} alt="" border="3" height="50" width="100" />
                                    },
                                    { title: "Title", field: "title" },
                                    {
                                        title: "Date", field: 'createdAt',
                                        render: (row) => {
                                            return <span>{convertTimestamp(row?.createdAt, "YYYY-MM-DD")}</span>
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
            {show && (<Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Add Sub Category</Modal.Title>
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

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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


                            </Form.Control>
                            {errorFlag && !CategoryName && (<p style={{ color: 'red', marginTop: '10px' }} >{'Product Type is Required'}</p>)}

                        </Form.Group>

                        <div className="row">
                            {Loading2 ? (
                                <Loader fullPage loading />
                            ) : (
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
                            )}
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='button' onClick={(e) => { addCategory(e) }} >
                        Add Sub Category
                    </Button>
                </Modal.Footer>
            </Modal>)}



            {/* edit category modal 2 */}
            {show2 && (<Modal show={show2} onHide={handleClose2}>
                <Modal.Header >
                    <Modal.Title>Edit Sub Category </Modal.Title>
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

                        <Form.Label>Category ID</Form.Label>
                        <Form.Control
                            as="select"
                            value={CategoryName}
                            onChange={e => {
                                console.log("e.target.value", e.target.value);
                                setCategoryName(e.target.value);
                            }}
                        >
                            <option value="selectcatgory">Select Category</option>
                            {
                                CategoryDropdown?.map((a) => {
                                    return (
                                        <>
                                            <option value={a._id}>{a.title}</option>
                                        </>
                                    )
                                })
                            }

                        </Form.Control>
                        {errorFlag && !CategoryName && (<p style={{ color: 'red', marginTop: '10px' }} >{'Category is Required'}</p>)}

                        <div className="row mt-2">
                            {Loading2 ? (
                                <Loader fullPage loading />
                            ) : (
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
                            )}
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
            </Modal>)}
        </>
    )
}

export default SubCategoryTable