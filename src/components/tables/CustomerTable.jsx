import React, { useState ,useEffect} from 'react'
import MaterialTable from "material-table";

import { forwardRef } from 'react';
import Swal from "sweetalert2";

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

import Baseurl from '../../Baseurl/Baseurl';
import { Loader } from 'react-overlay-loader';

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

const CustomerTable = () => {
 
    const Token = localStorage.getItem("AdminToken")

    const [CustomerData,SetCustomerData]= useState([])
    const [loader,setloader]=useState(false)


    useEffect(() => {

        GetCustomerData()

    }, [])

    const GetCustomerData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}/GetCustomerData`, requestOptions)

            .then(response => response.json())
            .then(result =>{
                if(result.status == true)
                {
                    setloader(false)
                    SetCustomerData(result.data)
                }
                else {
                    // setLoader(true)
                    setloader(false)
                    console.log("result.message",result.message)
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
            .catch(error => console.log('error', error));
    }
   

    return (
        <>
        {loader == true ?
            <Loader fullPage loading />:null
        }

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                
                                 Customers Details
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
                                    { title: "Email", field: "email" },
                                    { title: "First Name", field: "firstname" },
                                    { title: "Last Name", field: "lastname" },
                                    { title: "Contact No", field: "contactno" },
                                    // { title: "lastname", field: "lastname" },
                                   
                                ]}
                                data={
                                    CustomerData
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
        


                       

                    </>
                    )
}

export default CustomerTable