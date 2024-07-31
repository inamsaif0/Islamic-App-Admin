import React ,{useEffect,useState} from 'react'

import Baseurl from '../../Baseurl/Baseurl';
import IconButton from "@material-ui/core/IconButton";
import Swal from "sweetalert2";
import { Loader } from 'react-overlay-loader';

const Profile = () => {

    const [id,setid]= useState('')
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [contactno, setcontactno] = useState("");
    // const [role, setRole] = useState("");

    const [loader,setloader]=useState(false)

    // link aae jo phle profile higi
    const [ProfileImage, setProfileImage] = useState(null);
    // yeh selected image show krne k lye
    const [SelectProfileImage, setSelectProfileImage] = useState(null);
    // yeh wali binary object ,imge obj me convert hoge
    const [UpdateProfileImage, setUpdateProfileImage] = useState(null);

    console.log("UpdateProfileImage profile imge", UpdateProfileImage)

    const Token = localStorage.getItem("AdminToken")

    useEffect(() => {
        GetProfile()
    }, [])

    const handleInputChange = (event, func) => {
        func(event.target.value);
        // setDisable(false);
        console.log('dis')


    }

    const handleInputFileChange = (event, func) => {

        var file = event.target.files[0];
        var reader = new FileReader();
        // console.log(file);
        const filesize = file.size
        const filesizeround = Math.round((filesize / 1024))
        if (filesizeround > 1024) {
            // setupdateProfileImage(null)
            // setselectProfileImage(null)
            // setError2(true)
            // setMessage3("plz select your image less then and equals to 1mb ")

        } else {
            // setDisable(false);
            var url = reader.readAsDataURL(file);
            // console.log(url)
            reader.onloadend = function (e) {
                setSelectProfileImage(reader.result);
                setUpdateProfileImage(file);

                // console.log("data-======>",reader.result)
            };
            // console.log(selectProfileImage)
            func(event.target.files[0])
            // setdisable(false)
        }
    }


    const GetProfile = () => {


        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            }
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}/GetAdminData`, requestOptions)
            .then(response =>

                response.json())
            .then(result => {
                setloader(false)
                console.log("getadmin data of firstname is ===>", result.data[0].email)
                setfirstname(result.data[0].firstname)
                setlastname(result.data[0].lastname)
                // setUsername(result.data.username)
                setemail(result.data[0].email)
                // setAddress(result.data.address)
                setcontactno(result.data[0].contactno)
                // setemail(result.data[0].email)
                // setRole(result.data.Role)
                setProfileImage(result.data[0].Profile);
                  setid(result.data[0].uid)
                //   setProfileImage(result.data.profile);
                // console.log("getting  img is ===>",result.data.Profile)

            }
            )
            .catch(error => console.log('error', error));
    }
   
    const updateprofile = () => {

        var formdata = new FormData();
        formdata.append("uid", id);
        formdata.append("firstname", firstname);
        formdata.append("lastname", lastname);
        formdata.append("contactno", contactno);
        // formdata.append("email", email);
        // formdata.append("Profile", UpdateProfileImage );
        formdata.append("Profile", UpdateProfileImage==null?ProfileImage:UpdateProfileImage );
        // formdata.append("Profile", ProfileImage );
      

        var requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };

        setloader(true)

        fetch(`${Baseurl.baseUrl}/EditProfile`, requestOptions)
            .then(response => response.json())
            .then(result =>
                {
                    // setloader(false)
                    if(result.status == true)
                    {
                        setloader(false)
                        GetProfile()
                        Swal.fire({
                            title: "success",
                            text: result.message,
                            icon: "success",
                            confirmButtonColor: "#29BF12",
                        });

                        
                        console.log(result)
                    }
                    else{
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
            .catch(error => console.log('error', error));
    }


  return (
    <>
    {
        loader == true ?
        <Loader loading />:null
    }
    <div className="app-content content">
            <div className="content-wrapper">
                {/* <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 className="content-header-title mb-0 d-inline-block">Horizontal Forms</h3>
                        <div className="row breadcrumbs-top d-inline-block">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Form Layouts</a>
                                    </li>
                                    <li className="breadcrumb-item active"><a href="#">Horizontal Forms</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    
                </div> */}
                <div className="content-body">
                    {/* Basic form layout section start */}
                    <section id="horizontal-form-layouts">
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title" id="horz-layout-colored-controls">Edit Profile</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                        {/* <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="collapse"><i className="ft-minus" /></a></li>
                                                <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize" /></a></li>
                                                <li><a data-action="close"><i className="ft-x" /></a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="card-content collpase show">
                                        <div className="card-body">
                                            {/* <div className="card-text">
                                                <p>This is 2-columns horizontal form with labels on left and form
                                                    controls on right in one line. Add <code>.form-horizontal</code>                        class to the form tag to have horizontal form styling. User
                                                    can also change the border color and background color of
                                                    the form control. Add <code>border-*</code> class to change
                                                    border color and <code>bg-*</code> class to change background
                                                    color of the form control.</p>
                                            </div> */}
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <input
                                                        accept="image/*"
                                                        style={{ display: "none" }}
                                                        id="icon-button-file"
                                                        type="file"
                                                    onChange={(e) => handleInputFileChange(e, setProfileImage)}
                                                    />
                                                    <label htmlFor="icon-button-file">
                                                        <IconButton
                                                            color="#414141"
                                                            aria-label="upload picture"
                                                            component="span"
                                                            className="upload_photo_main"
                                                        >
                                                            <img style={{ minWidth: "100px", maxWidth: "100px", borderRadius: "20px" }}  
                                                            src={SelectProfileImage ? SelectProfileImage : Baseurl.imgUrl +  ProfileImage} 
                                                            
                                                             className="upload_photo_main" alt="" /> 
                                                         </IconButton>
                                                    </label>
                                                </div>
                                            </div>
                                            <form className="form form-horizontal">
                                                <div className="form-body">
                                                    <h4 className="form-section"><i className="la la-eye" /> Admin Information</h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 label-control" htmlFor="userinput1">First Name</label>
                                                                <div className="col-md-9">
                                                                    <input type="text"
                                                                     onChange={(e) => handleInputChange(e, setfirstname)} 
                                                                     value={firstname}
                                                                      id="userinput1" className="form-control border-primary" placeholder="First Name" name="firstname" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 label-control" htmlFor="userinput2">Last Name</label>
                                                                <div className="col-md-9">
                                                                    <input type="text"
                                                                     onChange={(e) => handleInputChange(e, setlastname)} 
                                                                     value={lastname}
                                                                      id="userinput2" className="form-control border-primary" placeholder="Last Name" name="lastname" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 label-control" htmlFor="userinput5">Email</label>
                                                                <div className="col-md-9">
                                                                    <input 
                                                                    
                                                                      onChange={(e) => handleInputChange(e, setemail)}
                                                                      value={email}
                                                                     className="form-control border-primary" type="email" placeholder="email" id="userinput5" disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 label-control">Contact Number</label>
                                                                <div className="col-md-9">
                                                                    
                                                                     <input 
                                                                     value={contactno}   
                                                                     onChange={(e) => handleInputChange(e, setcontactno)}   
                                                                     className="form-control border-primary" type="tel" placeholder="Contact Number" id="userinput7" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 label-control">Role</label>
                                                                <div className="col-md-9">
                                                                    <input
                                                                    //  value={role} 
                                                                     className="form-control border-primary" type="tel" placeholder="Contact Number" id="userinput7" disabled />
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-actions right">
                                                    {/* <button type="button" className="btn btn-warning mr-1">
                                                        <i className="ft-x" /> Cancel
                                                    </button> */}
                                                    <button type="button" 
                                                    onClick={updateprofile} 
                                                    className="btn btn-primary">
                                                        <i className="la la-check-square-o" /> Update
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                    {/* // Basic form layout section end */}
                </div>
            </div>
        </div>

        </>
  )
}

export default Profile