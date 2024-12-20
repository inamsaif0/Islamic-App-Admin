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
import { Form, InputGroup } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { DropzoneArea } from 'material-ui-dropzone';
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Baseurl from '../../Baseurl/Baseurl';
import { Loader } from 'react-overlay-loader';
import moment from 'moment';
// import { InputGroup } from 'react-bootstrap';

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

    const [errorFlag,SeterrorFlag]=useState(false)

    console.log('errorFlag==>',errorFlag)

    const [selectedProducts, setSelectedProducts] = useState([]);


    const [ADDselectedProducts, setADDselectedProducts] = useState([]);
    console.log('ADDselectedProducts',ADDselectedProducts)
    const [imageMap, setImageMap] = useState({});
    const [deletedImageIds, setDeletedImageIds] = useState([]);

    console.log('deletedImageIds',deletedImageIds)

    const [Loading2, setLoading2] = useState(false)

    console.log('selectedProducts', selectedProducts)
    const [ViewimagelistData, SetViewimagelistData] = useState([])
    const [ImageLoader, setImageLoader] = useState(false)


    console.log('ViewimagelistData',ViewimagelistData)
   

    const [searchText, setSearchText] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const clearSearch = () => {
        setSearchText('');
    };

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

    console.log('CheckedProduct', CheckedProduct)

    console.log('UpdatedProductsData', UpdatedProductsData)

    const [title, Settitle] = useState('')

    const [imagelist, Setimagelist] = useState([])

    console.log('imagelist', imagelist)
    const [description, Setdescription] = useState('')

    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => {  setShow(false); SeterrorFlag(false); setADDselectedProducts([]); }
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [ViewimageModal, setViewimageModal] = useState(false);

    const ViewimageModalclosed = () => setViewimageModal(false);
    const ViewimageModalopen = () => setViewimageModal(true);


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

    useEffect(() => {
        // Debounce the search function
        const timer = setTimeout(() => {
            if (searchText) {
                const searchValue = searchText.toLowerCase();
                let results = ProductsData?.filter((product) => 
                    product?.title?.toLowerCase().includes(searchValue)
                );
                setFilteredResults(results);
            } else {
                setFilteredResults(ProductsData); // Show all results if searchText is empty
            }
        }, 300); // 300ms delay

        return () => clearTimeout(timer);
    }, [searchText,ProductsData]);

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

        if(!ADDselectedProducts.length > 0 ||!imagelist.length > 0 || !title || !description){
            SeterrorFlag(true)
            return
        }
     

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
                    setADDselectedProducts([])
                    handleClose()
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
    }

    const Edited = (e) => {
        SetTabelId(e)
        handleShow2()
    }


    const EditCategory = () => {

        console.log('selectedProducts', selectedProducts)

        if(!UpdatedProductsData.length > 0 ||!imagelist.length > 0 || !title || !description){
            SeterrorFlag(true)
            return
        }

        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("packageId", TabelId);

        for (var i = 0; i < imagelist.length; i++) {
            formdata.append("media", imagelist[i]);

        }

        for (var i = 0; i < deletedImageIds.length; i++) {
            formdata.append(`deleteImages[${i}]`, deletedImageIds[i]);
        }


        let UniqueProductId = UpdatedProductsData.filter((obj, index, self) => index === self.findIndex((t) => t._id === obj._id)
        )

        // UpdatedProductsData
        let newArrayDelete = []


        console.log('ADDselectedProductsUniqueProductId', ADDselectedProducts)

        console.log('UniqueProductId', UniqueProductId)

        const isProductInArray = UniqueProductId.some(product => product._id === ADDselectedProducts._id);

        console.log('isProductInArraynewArray', isProductInArray)

        if (!isProductInArray) {
            // If the product is not in the array, add it to newArray
            newArrayDelete.push(...ADDselectedProducts);

        }

        console.log('newArray', newArrayDelete)
        console.log('newArray', newArrayDelete?.length)





        for (var i = 0; i < UniqueProductId?.length; i++) {
            formdata.append(`products[${i}]`, UniqueProductId[i]?._id);

        }


        if (newArrayDelete && newArrayDelete?.length > 0) {
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
        console.log('ahmedisoString',isoString)
        console.log('ahmeddateFormat',dateFormat)
        return moment(isoString).format(dateFormat);
    }

    

    // const handleDelete = (deletedFile) => {
    //     console.log('deletedFile', deletedFile)
    //     // const deletedFileName = deletedFile.name;
    //     // const deletedImageId = imageMap[deletedFileName]; // Get ID using filename

    //     // setDeletedImageIds((prevIds) => [...prevIds, deletedImageId]); // Store deleted IDs
    //     // console.log('Deleted Image ID:', deletedImageId);
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

            // // Fetch all images
            // const existingImages = await Promise.all(
            //     rowData?.media?.map(async (mediaItem) => {
            //         const response = await fetch(`${Baseurl?.baseUrl}${mediaItem?.file}`);
            //         console.log('response', response)
            //         if (response?.ok) {
            //             setLoading2(false);
            //             // throw new Error('Failed to fetch image');
            //         }

            //         const blob = await response.blob();
            //         return new File([blob], mediaItem?.file.split('/').pop(), { type: blob.type });
            //     })
            // );
            // if (existingImages) {
            //     setLoading2(false);
            // }
            // setLoading2(false);
            // Setimagelist(existingImages); // Set the list of images

             // Fetch media and handle uniqueness
        const existingImages = await Promise.all(rowData?.media?.map(async (mediaItem) => {
            const response = await fetch(`${Baseurl.baseUrl}${mediaItem.file}`);
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

        } catch (error) {
            console.error("Error fetching images:", error);
            // Optionally, set some error state here if needed
        } finally {
            setLoading2(false);  // Stop loading when files are set or error occurs
        }
    };

    // useEffect(()=>{

    //     setTimeout(()=>{

    //         setImageLoader(true)

    //     },4000)

    //     return (()=>{
    //         setImageLoader(false)
    //     })

    // },[ViewimagelistData])


    //   const handleRemoveProduct = (productId) => {
    //     // Remove product from ProductsData
    //     const updatedProducts = ProductsData.filter(product => product._id !== productId);
    //     setProductsData(updatedProducts);

    //     // Also, remove from selectedProducts if it was selected
    //     const updatedSelectedProducts = selectedProducts.filter(product => product._id !== productId);
    //     setSelectedProducts(updatedSelectedProducts);
    // };

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

    // const GetAllImages = (id) => {
    //     console.log("this baloch id of iamges ===>", id)

        


    //     // let filterImages = productData?.filter((a) => a._id == id)

    //     // console.log('filterImages==>', filterImages)


    //     // SetViewimagelistData(filterImages)


    //     const requestBodydata = {
    //         productId: id
    //     }
    //     const requestBody = JSON.stringify(requestBodydata);
    //     console.log(requestBody, 'requestBody')

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             token: Token,
    //             "Content-Type": "application/json"
    //         },
    //         body: requestBody,

    //         redirect: 'follow'
    //     };

    //     console.log('requestOptions', requestOptions)
    //     setImageLoader(true)

    //     fetch(`${Baseurl.baseUrl}api/products/get-product-images`, requestOptions)

    //         .then(response => response.json())
    //         .then(result => {

    //             if (result.status == true) {
    //                 console.log('resultget==>of==>images',result?.data)
    //                 setImageLoader(false)
    //                 SetViewimagelistData(result?.data)
    //             }
    //             else {
    //                 // setLoader(true)
    //                 // setLoader(false)
    //                 console.log("result.message", result.message)
                   

    //             }
    //             // console.log('getProduct',result?.data)
    //             // setLoader(false)
    //             // // console.log("result ahmed",result)
    //             // SetproductData(result?.data?.result)
    //         }
    //         )
    //         .catch(error => {
    //             setImageLoader(false)
    //             console.log('error', error)
    //         }
    //         );






    //     // var requestOptions = {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         Authorization: "Bearer " + Token
    //     //     },
    //     //     redirect: 'follow'
    //     // };
    //     // setLoader(true)

    //     // fetch(`${Baseurl.baseUrl}/productImages?uid=${id}`, requestOptions)

    //     //     .then(response => response.json())
    //     //     .then(result => {
    //     //         setLoader(false)
    //     //         console.log("getting all images result", result.data)
    //     //         SetimagelistData(result.data)
    //     //     }
    //     //     )
    //     //     .catch(error => {
    //     //         setLoader(false)
    //     //         console.log('error', error)
    //     //     }
    //     //     );
    // }

    const ViewImages = (e) => {
        console.log("rowdata of images id", e)
        console.log("rowdata of images view product", e?._id)

        setImageLoader(true);
        let filterImages = PackagesData?.filter((a) => a._id == e?._id)

        // console.log('filterDataProduct==>', filterImages.map((a)=>a.products).map)

        //  SetViewimagelistData(filterImages)

         setTimeout(() => {
            // Update the image list data
            SetViewimagelistData(filterImages);
    
            // Stop the loading indicator once the data is set
            setImageLoader(false);
        }, 1500); // 500ms delay

        ViewimageModalopen()
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
                                        // src="http://5.104.83.184:9000/uploads/users/Application-Software-1--12-1723751136495.jpg
                                        title: "Image", field: "media", render: item =>
                                            <img src={item?.media[0]?.file ? Baseurl.baseUrl + item?.media[0]?.file : '../../../app-assets/images/portrait/medium/avatar-m-25.jpg' } alt="" border="3" height="50" width="100" />
                                        //  <img src={Baseurl.baseUrl + item?.media[0]?.file} alt="" border="3" height="100" width="100" />
                                    },
                                    { title: "Title", field: "title" },
                                    // { title: "Description", field: "description" },
                                    {
                                        title: "Description",
                                        field: "description",
                                        render: item => <ReadMore text={item?.description} />,
                                      },
                                    {
                                        title: "Date", field: 'createdAt',
                                        render: (row) => {
                                            return <span>{convertTimestamp(row?.createdAt, "YYYY-MM-DD")}</span>
                                        },
                                    },
                                    {
                                        title: "View Images", field: "images", render: rowData =>

                                            <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ViewImages(rowData)}  >View </Button>

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
                    <Modal.Header >
                        <Modal.Title>Add package </Modal.Title>
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

{errorFlag && !title  && (<p style={{color:'red',marginTop:'10px'}} >{'Title is Required'}</p>) }

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Description"
                                    rows="6" cols="50"
                                    autoFocus
                                    onChange={(e) => handleInputChange(e, Setdescription)}
                                />

{errorFlag && !description  && (<p style={{color:'red',marginTop:'10px'}} >{'Description is Required'}</p>) }
                            </Form.Group>


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
                                    {errorFlag && !imagelist.length > 0  && (<p style={{color:'red',marginTop:'10px'}} >{'Image are Required'}</p>) }
                                </div>
                            </div>

                            {/* product list */}


                            <h1>Product List</h1>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Product here"
                                        autoFocus
                                        value={searchText}
                                        onChange={handleSearchInputChange}
                                    />
                                    {searchText && (
                                        <InputGroup.Text onClick={clearSearch} style={{ cursor: 'pointer' }}>
                                            <AiOutlineCloseCircle />
                                        </InputGroup.Text>
                                    )}
                                </InputGroup>
                            </Form.Group>

                            <div className="product-list-container">
                                <ul className='product_ul' >
                                    {filteredResults?.map(product => (
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
                                        </li>
                                    ))}
                                </ul>

                                {errorFlag && !ADDselectedProducts.length > 0  && (<p style={{color:'red',marginTop:'10px'}} >{'Select Products are Required'}</p>) }
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
           {show2 && ( <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Edit Package </Modal.Title>
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
                                onChange={(e) => handleInputChange(e, Settitle)}
                                value={title}
                            />
{errorFlag && !title  && (<p style={{color:'red',marginTop:'10px'}} >{'Title is Required'}</p>) }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Description"
                                    rows="6" cols="50"
                                    autoFocus
                                    onChange={(e) => handleInputChange(e, Setdescription)}
                                    value={description}
                                />
                            </Form.Group>
                            {errorFlag && !description  && (<p style={{color:'red',marginTop:'10px'}} >{'Description is Required'}</p>) }



                        <div className="row">

<div className='col-md-12 mb-2' >
    {
        Loading2 == true ? (<Loader fullPage loading />) : (
            <DropzoneArea
                key={imagelist.length} // Ensures re-render
                acceptedFiles={['image/*']}
                filesLimit={1}
                initialFiles={imagelist && imagelist}
                onDelete={handleDelete}
                showAlerts={false}
                onChange={(uploadedFiles) => {
                    Setimagelist(uploadedFiles);
                    console.log('Files:', uploadedFiles);
                }}
            />

        )
    }
 {errorFlag && !imagelist.length > 0  && (<p style={{color:'red',marginTop:'10px'}} >{'Image are Required'}</p>) }
</div>


</div>

                        {/* product list */}
                        <h1>Product List</h1>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Product here"
                                        autoFocus
                                        value={searchText}
                                        onChange={handleSearchInputChange}
                                    />
                                    {searchText && (
                                        <InputGroup.Text onClick={clearSearch} style={{ cursor: 'pointer' }}>
                                            <AiOutlineCloseCircle />
                                        </InputGroup.Text>
                                    )}
                                </InputGroup>
                            </Form.Group>

                            <div className="product-list-container">
                                <ul className='product_ul' >
                                    {filteredResults?.map(product => (
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
                                                        // checked={ADDselectedProducts.some(p => p._id === product._id)}
                                                        // onChange={() => AddhandleCheckboxChange(product)}
                                                        checked={!!UpdatedProductsData.find(p => p._id === product._id)}
                                                        onChange={() => handleCheckboxChange(product)}
                                                    />
                                                </label>
                                            </div>
                                            {/* <div className="product-remove">
                        <span onClick={() => handleRemoveProduct(product._id)} className="remove-icon">✖</span>
                    </div> */}
                                        </li>
                                    ))}
                                </ul>
                                {errorFlag && !UpdatedProductsData.length > 0  && (<p style={{color:'red',marginTop:'10px'}} >{'Select Products are Required'}</p>) }
                            </div>




                        {/*  */}




                    


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
            </Modal>) }

           


                        {/* images modal */}
                        <Modal show={ViewimageModal} onHide={ViewimageModalclosed}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Images </Modal.Title>
                    <AiFillCloseCircle onClick={ViewimageModalclosed} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>    
                            {
                            ImageLoader ? (
                                (<Loader fullPage loading />)

                            ): (
                                ViewimagelistData?.map((result, resultIndex) => {
                                    return result?.products.length > 0 ? (
                                        result?.products?.map((item, itemIndex) => (
                                            <div className='col-md-12' key={`${resultIndex}-${itemIndex}`}>
                                                <p>Price {item?.price}</p>
    
                                                <div className='flexlist' >
                                                {item?.media?.map((a)=>{
                                                    {console.log('a==>',a)}
                                                return(
                                                    <img
                                                    style={{ marginBottom: 20 }}
                                                    width={200}
                                                    height={200}
                                                    src={ a?.file  ? Baseurl.baseUrl + a?.file : '../../../app-assets/images/portrait/medium/avatar-m-25.jpg' }
                                                    alt="Image not found"  
                                                    // onError={(e) => { e.target.src = '/path-to-placeholder.png'; }} 
                                                />
                                                )
                                                
                                               })} 
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div key={resultIndex} className="col-12">
                                            <p>No Products found for this entry.</p>
                                        </div>
                                    );
                                })
                            )
                            
                           
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
                            {/* abhi comment */}
                        {/* </div>
                     )
                    
                     } */}
                    

                   


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
                    <Button variant="secondary" onClick={ViewimageModalclosed}>
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

export default PackagesTable