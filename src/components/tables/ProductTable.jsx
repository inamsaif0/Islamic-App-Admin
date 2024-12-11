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
// import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// "react-draft-wysiwyg": "^1.15.0",
// import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { Tab, Tabs } from "react-bootstrap"

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

    const [errorFlag, SeterrorFlag] = useState(false)

    console.log('errorFlag', errorFlag)
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); SeterrorFlag(false); }
    const handleShow = () => setShow(true);
    // modal state forimages
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [name, Setname] = useState('')
    const [brandname, Setbrandname] = useState('')
    const [description, Setdescription] = useState('')
    const [price, Setprice] = useState('')
    const [Quantity, SetQuantity] = useState('')
    const [sku, Setsku] = useState('')
    const [noofpage, Setnoofpage] = useState('')
    const [longdescription, Setlongdescription] = useState('')
    const [dimension, Setdimension] = useState('')
    const [ProductType, SetProductType] = useState('')
    const [categoryid, Setcategoryid] = useState('')

    const [authorName, SetAuthorName] = useState('')


    const [imagelist, Setimagelist] = useState([])

    console.log('imagelist', imagelist)
  // States for Others Tab
  const [otherField1, setOtherField1] = useState(""); // Field 1 in Others tab
  const [otherField2, setOtherField2] = useState(""); // Field 2 in Others tab
  const [otherField3, setOtherField3] = useState(""); // Field 3 in Others tab


    const [CategoryName, setCategoryName] = useState('')
    // for sub-category
    const [CategoryName2, setCategoryName2] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')

    console.log('selectedLanguage==>', selectedLanguage)

    const [CategoryDropdown, SetCategoryDropdown] = useState([])
    const [SubCategoryDropdown, SetSubCategoryDropdown] = useState([])
    // const [ProductData,SetProductData]=useState([])
    const [productData, SetproductData] = useState([])
    const [Productimage, setProductimage] = useState('');
    const [TabelId, SetTabelId] = useState('')
    const Token = localStorage.getItem("AdminToken")
    const [imagelistData, SetimagelistData] = useState([])
    const [ViewimagelistData, SetViewimagelistData] = useState([])
    console.log('ViewimagelistData', ViewimagelistData)
    const [loader, setLoader] = useState(false)
    const [imageMap, setImageMap] = useState({});
    const [deletedImageIds, setDeletedImageIds] = useState([]);
    console.log('deletedImageIds', deletedImageIds)


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
        return {
            __html: DOMPurify.sanitize(html)
        }
    }


    useEffect(() => {
        GetproductData()
        // GetAllImages()
        // GetSubCategoryData()

    }, [])

    const languagedropdwon = [
        { value: "arabic", label: "Arabic" },
        { value: "english", label: "English" },
        { value: "korean", label: "Korean" }
    ]

    // const GetSubCategoryData = () => {
    //     var requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             token: Token
    //         },
    //         redirect: 'follow'
    //     };
    //     // setloader(true)

    //     fetch(`${Baseurl.baseUrl}api/subcategories/get`, requestOptions)

    //         .then(response => response.json())
    //         .then(result => {

    //             console.log('resultGetCategories', result)
    //             if (result.status == true) {
    //                 // setloader(false)
    //                 SetSubCategoryDropdown(result?.data?.result)

    //             }
    //             else {
    //                 // setLoader(true)
    //                 // setloader(false)
    //                 console.log("result.message", result?.message)
    //                 Swal.fire({
    //                     title: "Oops",
    //                     text: result.message,
    //                     icon: "error",
    //                     confirmButtonColor: "#29BF12",
    //                 });

    //             }

    //         }
    //             // console.log("result",result)
    //         )
    //         .catch(error => {
    //             // setloader(false)
    //             console.log('error', error)


    //         }

    //         );
    // }

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

                if (result.status == true) {
                    setLoader(false)
                    SetproductData(result?.data?.result)
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
                // console.log('getProduct',result?.data)
                // setLoader(false)
                // // console.log("result ahmed",result)
                // SetproductData(result?.data?.result)
            }
            )
            .catch(error => {
                setLoader(false)
                console.log('error', error)
            }
            );
    }

    const AddProduct = () => {

        if (!name || !brandname || !price || !sku || !longdescription || !ProductType || !imagelist.length > 0 || !CategoryName || !CategoryName2 || !selectedLanguage || !dimension || !noofpage || !authorName || !Quantity) {
            SeterrorFlag(true)
            return
        }

        //



        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("brandName", brandname);

        formdata.append("price", price);
        formdata.append("quantity", Quantity);
        formdata.append("sku", sku);
        formdata.append("description", longdescription);
        // formdata.append("description", convertedContent);


        formdata.append("productType", ProductType);
        formdata.append("category", CategoryName);
        formdata.append("subCategory", CategoryName2);
        formdata.append("language", selectedLanguage);

        formdata.append("dimension", dimension);
        formdata.append("author", authorName);
        formdata.append("noofpages", noofpage);


        // formdata.append("image", image);
        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }

        console.log("value of image list is ", imagelist)

        var requestOptions = {
            method: 'POST',
            headers: {
                token: Token
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
                    SetQuantity('')
                    Setsku('')
                    Setnoofpage('')
                    Setdimension('')
                    SetAuthorName('')
                    setConvertedContent('')
                    SetProductType('')
                    setCategoryName('')
                    setCategoryName2('')
                    Setimagelist('')
                    setSelectedLanguage('')
                    handleClose()
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

    const UpdateProduct = () => {

        if (!name || !brandname || !price || !sku || !longdescription || !ProductType || !imagelist.length > 0 || !CategoryName || !CategoryName2 || !dimension || !noofpage || !authorName || !Quantity) {
            SeterrorFlag(true)
            return
        }

        console.log('imagelist==>Update', imagelist)

        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("brandName", brandname);

        formdata.append("price", price);
        formdata.append("quantity", Quantity);
        formdata.append("sku", sku);
        formdata.append("description", longdescription);

        formdata.append("productType", ProductType);
        formdata.append("subCategory", CategoryName2);
        formdata.append("category", CategoryName);
        formdata.append("productId", TabelId);
        formdata.append("dimension", dimension);
        formdata.append("author", authorName);
        formdata.append("noofpages", noofpage);

        for (var i = 0; i < deletedImageIds.length; i++) {
            formdata.append(`deleteImages[${i}]`, deletedImageIds[i]);
        }

        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);
        }

        console.log("value of image list is ", imagelist)

        var requestOptions = {
            method: 'POST',
            headers: {
                token: Token
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
                    SetAuthorName('')
                    Setdescription('')
                    Setprice('')
                    SetQuantity('')
                    Setsku('')
                    Setnoofpage('')
                    Setdimension('')
                    setConvertedContent('')
                    SetProductType('')
                    setCategoryName('')
                    setCategoryName2('')
                    Setimagelist([]); // Clear the imagelist
                    setDeletedImageIds([]); // Clear the deleted image IDs
                    // setFilterSubcategoryData([]); // Clear the deleted image IDs
                    handleClose()
                    setShow3(false)
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

    const [Loading2, setLoading2] = useState(false)

    const [ImageLoader, setImageLoader] = useState(false)


    const Edited = (e) => {
        SetTabelId(e)
        handleShow3()
    }

    //     const handleEdit2 = async (rowData) => {
    //         setLoading2(true);  // Start loading
    //         Edited(rowData._id);
    //         Setname(rowData?.title)
    //         Setbrandname(rowData?.brandName)
    //         Setlongdescription(rowData?.description)
    // Setprice(rowData?.price)
    // Setsku(rowData?.sku)
    // SetProductType(rowData?.productType)
    // setCategoryName(rowData?.category)

    // // 
    // const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
    //     const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);
    //     const blob = await response.blob();
    //     const file = new File([blob], mediaItem.file.split('/').pop(), { type: blob.type });

    //     return { file, id: mediaItem._id }; // Return file with its ID
    //   }));

    //   const filesArray = existingImages.map(item => item.file);
    //   Setimagelist(filesArray);

    //   const newImageMap = {};
    //   existingImages.forEach(item => {
    //     newImageMap[item.file.name] = item.id; // Map filename to ID
    //   });

    //   setImageMap(newImageMap);

    //   setLoading2(false); // Stop loading when files are set




    // // 


    //         // const existingImages = rowData?.media?.map(async (mediaItem) => {
    //         //   const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);
    //         //   const blob = await response.blob();
    //         //   return new File([blob], mediaItem.file.split('/').pop(), { type: blob.type });
    //         // });

    //         // const filesArray = await Promise.all(existingImages);

    //       };

    // const handleEdit2 = async (rowData) => {
    //     console.log('rowData==>',rowData)
    //     setLoading2(true);  // Start loading
    //     Edited(rowData._id);
    //     Setname(rowData?.title);
    //     Setbrandname(rowData?.brandName);
    //     Setlongdescription(rowData?.description);
    //     Setprice(rowData?.price);
    //     Setsku(rowData?.sku);
    //     SetProductType(rowData?.productType);
    //     setCategoryName(rowData?.category);

    //     // Fetch media and handle duplicates
    //     const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
    //         const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);
    //         const blob = await response.blob();
    //         const file = new File([blob], mediaItem.file.split('/').pop(), { type: blob.type });

    //         return { file, id: mediaItem._id }; // Return file with its ID
    //     }));

    //     console.log('existingImages',existingImages)

    //     // Create a map to keep track of unique files by name
    //     const fileMap = new Map();
    //     existingImages.forEach(item => {
    //         if (!fileMap.has(item.file.name)) {
    //             fileMap.set(item.file.name, item); // Add unique file to map
    //         }
    //     });

    //     // Extract unique files and their IDs
    //     const uniqueImages = Array.from(fileMap.values());
    //     const filesArray = uniqueImages.map(item => item.file);
    //     Setimagelist(filesArray);

    //     const newImageMap = {};
    //     uniqueImages.forEach(item => {
    //         newImageMap[item.file.name] = item.id; // Map filename to ID
    //     });

    //     setImageMap(newImageMap);

    //     setLoading2(false); // Stop loading when files are set
    // };

    // useffect of images

    // useEffect(()=>{

    //     GetAllImages()

    //  },)

    const GetAllImages = (id) => {
        console.log("this baloch id of iamges ===>", id)

        console.log('this baloch id of iamges ===> productData', productData)


        // let filterImages = productData?.filter((a) => a._id == id)

        // console.log('filterImages==>', filterImages)


        // SetViewimagelistData(filterImages)


        const requestBodydata = {
            productId: id
        }
        const requestBody = JSON.stringify(requestBodydata);
        console.log(requestBody, 'requestBody')

        var requestOptions = {
            method: 'POST',
            headers: {
                token: Token,
                "Content-Type": "application/json"
            },
            body: requestBody,

            redirect: 'follow'
        };

        console.log('requestOptions', requestOptions)
        setImageLoader(true)

        fetch(`${Baseurl.baseUrl}api/products/get-product-images`, requestOptions)

            .then(response => response.json())
            .then(result => {

                if (result.status == true) {
                    console.log('resultget==>of==>images', result?.data)
                    setImageLoader(false)
                    SetViewimagelistData(result?.data)
                }
                else {
                    // setLoader(true)
                    // setLoader(false)
                    console.log("result.message", result.message)


                }
                // console.log('getProduct',result?.data)
                // setLoader(false)
                // // console.log("result ahmed",result)
                // SetproductData(result?.data?.result)
            }
            )
            .catch(error => {
                setImageLoader(false)
                console.log('error', error)
            }
            );






        // var requestOptions = {
        //     method: 'GET',
        //     headers: {
        //         Authorization: "Bearer " + Token
        //     },
        //     redirect: 'follow'
        // };
        // setLoader(true)

        // fetch(`${Baseurl.baseUrl}/productImages?uid=${id}`, requestOptions)

        //     .then(response => response.json())
        //     .then(result => {
        //         setLoader(false)
        //         console.log("getting all images result", result.data)
        //         SetimagelistData(result.data)
        //     }
        //     )
        //     .catch(error => {
        //         setLoader(false)
        //         console.log('error', error)
        //     }
        //     );
    }

    const ViewImages = (e) => {
        console.log("rowdata of images id", e)
        console.log("rowdata of images id", e?._id)
        handleShow2()

        GetAllImages(e?._id)

    }

    const ConfirmDelete = (a) => {

        const requestBodydata = {
            id: a
        }
        const requestBody = JSON.stringify(requestBodydata);
        console.log(requestBody, 'requestBody')

        var requestOptions = {
            method: 'POST',
            headers: {
                token: Token,
                "Content-Type": "application/json"
            },
            body: requestBody,

            redirect: 'follow'
        };



        console.log('requestOptions', requestOptions)

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

    // const handleDelete = (deletedFile) => {

    //     console.log('deletedFile',deletedFile)

    //     const deletedFileName = deletedFile.name;
    //     const deletedImageId = imageMap[deletedFileName]; // Get ID using filename

    //     console.log('deletedImageId',deletedImageId)

    //     setDeletedImageIds((prevIds) => [...prevIds, deletedImageId]); // Store deleted IDs
    //     console.log('Deleted Image ID:', deletedImageId);
    //   };

    // working code
    const handleEdit2 = async (rowData) => {
        try {
            console.log('rowData==>', rowData);
            setLoading2(true);  // Start loading

            // Set product details
            Edited(rowData._id);
            Setname(rowData?.title);
            Setbrandname(rowData?.brandName);
            SetAuthorName(rowData?.author);
            Setlongdescription(rowData?.description);
            Setnoofpage(rowData?.noofpages)
            Setdimension(rowData?.dimension)
            Setprice(rowData?.price);
            SetQuantity(rowData?.quantity);
            Setsku(rowData?.sku);
            SetProductType(rowData?.productType);
            setCategoryName(rowData?.category);
            setCategoryName2(rowData?.subCategory);
            setSelectedLanguage(rowData?.language);

            // Fetch media and handle uniqueness
            const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
                let ahmed = `${Baseurl.baseUrl}${mediaItem?.file}`
                console.log('mediaItem==>1', mediaItem)
                console.log('mediaItem==>2', ahmed)

                // const response2 = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);

                // console.log('mediaItem==>2',response2)

                const response = await fetch(`${Baseurl.baseUrl}${mediaItem?.file}`, { mode: 'no-cors' });
                console.log('mediaItem==>response==>', response)
                const blob = await response.blob();
                const fileName = mediaItem.file.split('/').pop(); // Use original file name
                const file = new File([blob], fileName, { type: blob.type });

                return { file, id: mediaItem?._id }; // Return file with its ID
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

        } catch (error) {
            console.error("Error fetching images:", error);
            // Optionally, set some error state here if needed
        } finally {
            setLoading2(false);
        }



    };


    // not working but try
    // const handleEdit2 = async (rowData) => {
    //     try {
    //         console.log('rowData==>', rowData);
    //         setLoading2(true);  // Start loading

    //         // Set product details
    //         Edited(rowData._id);
    //         Setname(rowData?.title);
    //         Setbrandname(rowData?.brandName);
    //         Setlongdescription(rowData?.description);
    //         Setprice(rowData?.price);
    //         Setsku(rowData?.sku);
    //         SetProductType(rowData?.productType);
    //         setCategoryName(rowData?.category);

    //         // Fetch media and handle uniqueness
    //         const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
    //             const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`, { mode: 'cors' });  // Ensure 'cors' mode is set
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch image');
    //             }
    //             const blob = await response.blob();
    //             const fileName = mediaItem.file.split('/').pop(); // Use original file name
    //             const file = new File([blob], fileName, { type: blob.type });
    //             return { file, id: mediaItem._id }; // Return file with its ID
    //         }));

    //         console.log('existingImages', existingImages);

    //         // Handle file uniqueness
    //         const fileMap = new Map();
    //         existingImages.forEach(item => {
    //             if (!fileMap.has(item.id)) {
    //                 fileMap.set(item.id, item);
    //             }
    //         });

    //         const uniqueImages = Array.from(fileMap.values());
    //         const filesArray = uniqueImages.map(item => item.file);
    //         Setimagelist(filesArray);

    //         const newImageMap = {};
    //         uniqueImages.forEach(item => {
    //             newImageMap[item.file.name] = item.id; // Map filename to ID
    //         });

    //         setImageMap(newImageMap);
    //         setLoading2(false);

    //     } catch (error) {
    //         console.error("Error fetching images:", error);
    //         // Handle error state
    //     } finally {
    //         setLoading2(false);
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

    const TRUNCATE_LENGTH = 20; // Maximum length of the truncated description


    const ReadMore = ({ text }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        // Toggle the expansion state
        const toggleReadMore = () => {
            setIsExpanded(!isExpanded);
        };

        // Check if the text length exceeds the truncate length
        const isLongText = text.length > TRUNCATE_LENGTH;

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



    const [filterSubcategoryData, setFilterSubcategoryData] = useState([]);

    useEffect(() => {
        if (CategoryName) {
            // Filter the subcategories based on the selected category
            const filterSubCategory = CategoryDropdown?.filter(
                (a) => a?._id === CategoryName
            );
            // Update the state with the filtered subcategories
            setFilterSubcategoryData(filterSubCategory);
        }
    }, [CategoryName, CategoryDropdown]);

    console.log('dropdownSubcategory==>State', filterSubcategoryData);


    // const dropdownSubcategory=CategoryDropdown.filter((a)=>a._id == CategoryName)

    // console.log('dropdownSubcategory==>',dropdownSubcategory)

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
                                    {
                                        title: "Image", field: "media", render: item =>
                                            <img src={item?.media[0]?.file ? Baseurl.baseUrl + item?.media[0]?.file : '../../../app-assets/images/portrait/medium/avatar-m-25.jpg'} alt="" border="3" height="50" width="100" />
                                        //  <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="100" width="100" />
                                    },
                                    { title: "Title", field: "title" },
                                    { title: "Brand Name", field: "brandName" },
                                    {
                                        title: "Description",
                                        field: "description",
                                        render: item => <ReadMore text={item?.description} />,
                                    },
                                    { title: "Price", field: "price" },
                                    { title: "Quantity", field: "quantity" },
                                    { title: "Product Type", field: "productType" },
                                    { title: "SKU", field: "sku" },
                                    // { title: "Date", field: convertTimestamp(updatedAt) },
                                    //     { title: "Long Description", field: longdescription ,
                                    //     render: (row) => {
                                    //     return <span dangerouslySetInnerHTML={{__html: row.longdescription}} />
                                    //     },
                                    //   }, 
                                    {
                                        title: "Date", field: 'createdAt',
                                        render: (row) => {
                                            return <span>{convertTimestamp(row?.createdAt, "YYYY-MM-DD")}</span>
                                            // convertTimestamp(isoTimestamp, "YYYY-MM-DD")
                                        },
                                    },

                                    // convertTimestamp(isoTimestamp, "YYYY-MM-DD")
                                    //     { title: "Short Description", field: "ProductType" },
                                    // { title: "Category", field: "CategoryName" },
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
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit User',
                                            onClick: (event, rowData) => handleEdit2(rowData)
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
                <Modal.Header >
                    <Modal.Title>{'Add Product'}</Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="productDetails" id="product-modal-tabs" className="mb-3">
                        {/* First Tab: Product Details */}
                        <Tab eventKey="productDetails" title="Product Details">
                            <Form onSubmit={(e) => e.preventDefault()}>



                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        autoFocus
                                        // onChange={(e) => handleEdited(e, setFname2)}
                                        onChange={(e) => Setname(e.target.value)}

                                    />

                                    {errorFlag && !name && (<p style={{ color: 'red', marginTop: '10px' }} >{'Name is Required'}</p>)}
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Brand Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Brand Name"
                                        autoFocus
                                        // onChange={(e) => handleEdited(e, setLname2)}
                                        onChange={(e) => Setbrandname(e.target.value)}

                                    />

                                    {errorFlag && !brandname && (<p style={{ color: 'red', marginTop: '10px' }} >{'Brand Name is Required'}</p>)}

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Author Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Author Name"
                                        autoFocus
                                        // onChange={(e) => handleEdited(e, setLname2)}
                                        onChange={(e) => SetAuthorName(e.target.value)}
                                    />
                                    {errorFlag && !authorName && (<p style={{ color: 'red', marginTop: '10px' }} >{'Author Name is Required'}</p>)}
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


                                    />
                                    {errorFlag && !price && (<p style={{ color: 'red', marginTop: '10px' }} >{'Price is Required'}</p>)}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        placeholder="Quantity"
                                        autoFocus
                                        // onChange={(e) => handleEdited(e, setLname2)}
                                        onChange={(e) => SetQuantity(e.target.value)}

                                    />

                                    {errorFlag && !Quantity && (<p style={{ color: 'red', marginTop: '10px' }} >{'Quantity is Required'}</p>)}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>No of pages</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        placeholder="No of Pages"
                                        autoFocus
                                        // onChange={(e) => handleEdited(e, setLname2)}
                                        onChange={(e) => Setnoofpage(e.target.value)}

                                    />

                                    {errorFlag && !noofpage && (<p style={{ color: 'red', marginTop: '10px' }} >{'No of Pages is Required'}</p>)}

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

                                    />

                                    {errorFlag && !sku && (<p style={{ color: 'red', marginTop: '10px' }} >{'Sku is Required'}</p>)}

                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Description</Form.Label>
    <Form.Control
        type="text"
        placeholder="Description"
        autoFocus
        // onChange={(e) => handleEdited(e, setLname2)}
        onChange={(e) => Setlongdescription(e.target.value)}
        
    />

</Form.Group> */}

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Dimension</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Dimension"
                                        rows="6" cols="50"
                                        autoFocus
                                        onChange={(e) => Setdimension(e.target.value)}
                                    />

                                    {errorFlag && !dimension && (<p style={{ color: 'red', marginTop: '10px' }} >{'Dimension is Required'}</p>)}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Description"
                                        rows="6" cols="50"
                                        autoFocus
                                        onChange={(e) => Setlongdescription(e.target.value)}
                                    />

                                    {errorFlag && !longdescription && (<p style={{ color: 'red', marginTop: '10px' }} >{'Description is Required'}</p>)}
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

                                    />

                                    {errorFlag && !ProductType && (<p style={{ color: 'red', marginTop: '10px' }} >{'Product Type is Required'}</p>)}

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

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Sub Category ID</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={CategoryName2}
                                        onChange={e => {
                                            console.log("e.target.value", e.target.value);
                                            setCategoryName2(e.target.value);
                                        }}
                                    // value={categoryid}
                                    >
                                        <option value="selectcatgory">Select Sub Catogary</option>
                                        {
                                            filterSubcategoryData[0]?.subcategories?.map((a) => {
                                                // console.log("safdar",a.name)
                                                return (
                                                    <>
                                                        <option value={a._id}>{a.title}</option>
                                                    </>
                                                )
                                            })
                                        }


                                    </Form.Control>
                                    {errorFlag && !CategoryName2 && (<p style={{ color: 'red', marginTop: '10px' }} >{'Product Type is Required'}</p>)}

                                </Form.Group>

                                {/* Language Dropdown */}
                                <Form.Group className="mb-3" controlId="languageDropdown">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={selectedLanguage} // replace with your state variable for language
                                        onChange={e => setSelectedLanguage(e.target.value)} // replace with your handler for language selection
                                    >
                                        <option value="">Select Language --</option>
                                        {
                                            languagedropdwon.map((language, index) => (
                                                <option key={index} value={language.value}>
                                                    {language.label}
                                                </option>
                                            ))
                                        }
                                    </Form.Control>
                                    {errorFlag && !selectedLanguage && (
                                        <p style={{ color: 'red', marginTop: '10px' }}>
                                            {'Language is Required'}
                                        </p>
                                    )}
                                </Form.Group>

                                {/* Existing form fields */}


                                <div className="row">

                                    <div className='col-md-12 mb-2' >
                                        <DropzoneArea
                                            acceptedFiles={['image/*']}
                                            filesLimit={5}
                                            showAlerts={false}
                                            // initialFiles={imagelist &&imagelist}
                                            onDelete={handleDelete}
                                            onChange={
                                                (files) => {
                                                    console.log('Files:', files)
                                                    Setimagelist(files)
                                                }
                                            }
                                        />

                                        {errorFlag && !imagelist.length > 0 && (<p style={{ color: 'red', marginTop: '10px' }} >{'Image are Required'}</p>)}

                                    </div>
                                </div>


                            </Form>
                        </Tab>

                        {/* Second Tab: Others */}
                        <Tab eventKey="others" title="Others">
                            <Form onSubmit={(e) => e.preventDefault()}>
                                <Form.Group className="mb-3" controlId="otherField1">
                                    <Form.Label>Field 1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Field 1 Value"
                                        onChange={(e) => setOtherField1(e.target.value)}
                                    />
                                    {errorFlag && !otherField1 && (
                                        <p style={{ color: 'red', marginTop: '10px' }}>{'Field 1 is Required'}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="otherField2">
                                    <Form.Label>Field 2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Field 2 Value"
                                        onChange={(e) => setOtherField2(e.target.value)}
                                    />
                                    {errorFlag && !otherField2 && (
                                        <p style={{ color: 'red', marginTop: '10px' }}>{'Field 2 is Required'}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="otherField3">
                                    <Form.Label>Field 3</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Field 3 Value"
                                        onChange={(e) => setOtherField3(e.target.value)}
                                    />
                                    {errorFlag && !otherField3 && (
                                        <p style={{ color: 'red', marginTop: '10px' }}>{'Field 3 is Required'}</p>
                                    )}
                                </Form.Group>
                            </Form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddProduct} >
                        {'Add Product'}
                    </Button>
                </Modal.Footer>
            </Modal>)}


            {/* update Product Modal */}
            {show3 && (<Modal show={show3} onHide={handleClose3}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>{'Update Product'}</Modal.Title>
                    <AiFillCloseCircle onClick={handleClose3} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => e.preventDefault()}>



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
                            {errorFlag && !name && (<p style={{ color: 'red', marginTop: '10px' }} >{'Name is Required'}</p>)}

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
                            {errorFlag && !brandname && (<p style={{ color: 'red', marginTop: '10px' }} >{'Brand Name is Required'}</p>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Author Name"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => SetAuthorName(e.target.value)}
                                value={authorName}
                            />
                            {errorFlag && !authorName && (<p style={{ color: 'red', marginTop: '10px' }} >{'Author Name is Required'}</p>)}
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
                            {errorFlag && !price && (<p style={{ color: 'red', marginTop: '10px' }} >{'Price is Required'}</p>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Quantity"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => SetQuantity(e.target.value)}
                                value={Quantity}

                            />
                            {errorFlag && !Quantity && (<p style={{ color: 'red', marginTop: '10px' }} >{'Quantity is Required'}</p>)}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>No of Page</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="No of Pages"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setnoofpage(e.target.value)}
                                value={noofpage}
                            />
                            {errorFlag && !noofpage && (<p style={{ color: 'red', marginTop: '10px' }} >{'No of Pages is Required'}</p>)}
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
                            {errorFlag && !sku && (<p style={{ color: 'red', marginTop: '10px' }} >{'Sku is Required'}</p>)}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setlongdescription(e.target.value)}
                                value={longdescription}
                            />

                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dimension</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dimension"
                                autoFocus
                                onChange={(e) => Setdimension(e.target.value)}
                                value={dimension}
                            />

                            {errorFlag && !dimension && (<p style={{ color: 'red', marginTop: '10px' }} >{'Dimension is Required'}</p>)}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                rows="6" cols="50"
                                autoFocus
                                onChange={(e) => Setlongdescription(e.target.value)}
                                value={longdescription}
                            />
                            {errorFlag && !longdescription && (<p style={{ color: 'red', marginTop: '10px' }} >{'Description is Required'}</p>)}
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
                            {errorFlag && !ProductType && (<p style={{ color: 'red', marginTop: '10px' }} >{'Product Type is Required'}</p>)}
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


                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Sub Category ID</Form.Label>
                            <Form.Control
                                as="select"
                                value={CategoryName2}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setCategoryName2(e.target.value);
                                }}
                            >
                                <option value="selectcatgory">Select Sub Category</option>
                                {
                                    filterSubcategoryData[0]?.subcategories?.map((a) => {
                                        return (
                                            <>
                                                <option value={a._id}>{a.title}</option>
                                            </>
                                        )
                                    })
                                }

                            </Form.Control>
                            {errorFlag && !CategoryName2 && (<p style={{ color: 'red', marginTop: '10px' }} >{'Category is Required'}</p>)}


                        </Form.Group>

                        {/* Language Dropdown */}
                        <Form.Group className="mb-3" controlId="languageDropdown">
                            <Form.Label>Language</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedLanguage} // replace with your state variable for language
                                onChange={e => setSelectedLanguage(e.target.value)} // replace with your handler for language selection
                            >
                                <option value="">Select Language --</option>
                                {
                                    languagedropdwon?.map((language, index) => (
                                        <option key={index} value={language.value}>
                                            {language.label}
                                        </option>
                                    ))
                                }
                            </Form.Control>
                            {errorFlag && !selectedLanguage && (
                                <p style={{ color: 'red', marginTop: '10px' }}>
                                    {'Language is Required'}
                                </p>
                            )}
                        </Form.Group>

                        {/* Existing form fields */}

                        <div className="row">
                            {
                                Loading2 == true ? (<Loader fullPage loading />)
                                    : (<div className='col-md-12 mb-2' >
                                        <DropzoneArea
                                            acceptedFiles={['image/*']}
                                            filesLimit={5}
                                            showAlerts={false}
                                            initialFiles={imagelist && imagelist}
                                            onDelete={handleDelete}
                                            onChange={
                                                (files) => {
                                                    console.log('Files:', files)
                                                    Setimagelist(files)
                                                }
                                            }
                                        />

                                    </div>)}


                            {errorFlag && !imagelist.length > 0 && (<p style={{ color: 'red', marginTop: '10px' }} >{'Image are Required'}</p>)}

                        </div>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={UpdateProduct} >
                        {'Update Product'}
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

                    {/* {ImageLoader == 'true' ? <Loader fullPage loading /> : null  } */}
                    {ImageLoader ?
                        (<Loader fullPage loading />) : (
                            <div className="row">
                                {
                                    ViewimagelistData?.media?.length > 0 ? (
                                        ViewimagelistData.media.map((item, itemIndex) => (
                                            <div className='col-md-6' key={itemIndex}>
                                                <img
                                                    style={{ marginBottom: 20 }}
                                                    width={200}
                                                    height={200}
                                                    src={Baseurl.baseUrl + item?.file}
                                                    alt="Image not found" // Optional: Add an alt attribute for accessibility
                                                    onError={(e) => { e.target.src = '/path-to-placeholder.png'; }} // Fallback image on error
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12">
                                            <p>No images found for this entry.</p>
                                        </div>
                                    )
                                }





                                {/* {
    
                                ViewimagelistData?.map((result, key) => {
    
                                    result?.media.map((item)=>{
                                        return (
                                            <>
                                                < div className='col-md-6' >
                                                    <img style={{ marginBottom: 20 }} width={200} height={200} key={key} src={Baseurl.imgUrl + item?.file} />
                                                </div>
                                            </>
                                        )
                                    })
                                    
                                })
                            }
    
    } */}


                                {/* 
                            // {
    
                            //     ViewimagelistData?.map((result, key) => {
    
                            //         result?.media.map((item)=>{
                            //             return (
                            //                 <>
                            //                     < div className='col-md-6' >
                            //                         <img style={{ marginBottom: 20 }} width={200} height={200} key={key} src={Baseurl.imgUrl + item?.file} />
                            //                     </div>
                            //                 </>
                            //             )
                            //         })
                                    
                            //     })
                            // }
                             */}

                                {/* {ViewimagelistData?.map((result, resultIndex) => {
                                return result?.media.length > 0 ? (
                                    result?.media.map((item, itemIndex) => (
                                        <div className='col-md-6' key={`${resultIndex}-${itemIndex}`}>
                                            <img
                                                style={{ marginBottom: 20 }}
                                                width={200}
                                                height={200}
                                                src={Baseurl.baseUrl + item?.file}
                                                alt="Image not found" // Optional: Add an alt attribute for accessibility 
                                                onError={(e) => { e.target.src = '/path-to-placeholder.png'; }} // Fallback image on error
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div key={resultIndex} className="col-12">
                                        <p>No images found for this entry.</p>
                                    </div>
                                );
                            })} */}




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
                        )

                    }





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