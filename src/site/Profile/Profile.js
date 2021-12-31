import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, {  useState } from "react";
import QRCode from "qrcode.react";
import axios from "axios";

// import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
// import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Profile = () => {
    
    const [files, setFiles] = useState([])
    const [qrValue, setQrValue] = useState("");
    // setQrValue()
    

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const user = JSON.parse(localStorage.getItem('auth_user'));
  const [nameen, setNameen] = useState(user.name_en);
  const [descriptionen, setDescriptioneen] = useState(user.description_en);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [addressen, setAddressen] = useState(user.address_en);
  const [facebook, setfacebook] = useState(user.facebook);
  const [insta, setinsta] = useState(user.insta);
  const [youtube, setyoutube] = useState(user.youtube);
  const [twitter, settwitter] = useState(user.twitter);
  const [logo, setLogo] = useState();
  const [cover, setCover] = useState();
  const [errorlogo, setErrorlogo] = useState();
  const [errorcover, setErrorcover] = useState();
  const [errormail, setErrormail] = useState();
  

  const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoadingsubmit(true);
    const fd = new FormData();
     
    fd.append('name_en',nameen)
    fd.append('email',email)
    fd.append('phone',phone)
    fd.append('facebook',facebook)
    fd.append('insta',insta)
    fd.append('youtube',youtube)
    fd.append('twitter',twitter)
    if(logo){
        fd.append('logo',logo)
    }
    if(cover){
        fd.append('cover',cover)
    }
    fd.append('_method','PUT')
    fd.append('address_en',addressen)
    fd.append('description_en',descriptionen)
    fd.append('user_id',JSON.parse(localStorage.getItem('auth_user')).id)
  

    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8000/sanctum/csrf-cookie')
    .then(response => {
        
        axios.post('http://localhost:8000/api/user/update',fd
        ).then(response => {
                    localStorage.removeItem('auth_user')
                    localStorage.setItem('auth_user', JSON.stringify(response.data))
                    setIsLoadingsubmit(false);
                    window.location.reload()
                   
        }).catch(error =>{
            
            console.log('bad');
            setIsLoadingsubmit(false);
            console.log(error.response);
            if(error.response.data.errors){
                setErrorlogo(error.response.data.errors.logo)
                setErrorcover(error.response.data.errors.cover)
                
            }else{
                setErrormail(error.response.data.message)

            }
        }
        )
    });
}


   
    return (
        <div className="profile">
            <Navbar/>
          
            
            <div className="container p-3 shadow rounded">
                <h2 className="text-center text-capitalize m-3">Profile</h2>
                <div className="row">
                            <div className="col-lg-8">

                            <form onSubmit={handleSubmit}   encType="multipart/form-data">
                                <div className="row">

                                    

                                    <div className="col-md-12 p-3">
                                        <div class="accordion" id="accordionExample">
                                            <div class="">
                                                <div class="" id="headingTwo">
                                                    <h2 class="mb-0" id="headingTwo">
                                                        <button class="accordion-button " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Change Your Info
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        
                                                        <div className="row">
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="name">Business Name</label>
                                                                    <input type="text"  className="form-control" name="name"  onChange={e => setNameen(e.target.value)} value={nameen} placeholder="Enter Name" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="address">Address</label>
                                                                    <input type="text"  className="form-control"  onChange={e => setAddressen(e.target.value)}  value={addressen} name="address" placeholder="Enter address" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="phone">Phone</label>
                                                                    <input type="text"  className="form-control"  onChange={e => setPhone(e.target.value)}  value={phone} name="phone" placeholder="Enter phone" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="email">Email</label>
                                                                    <input type="email"  className="form-control"  onChange={e => setEmail(e.target.value)}  value={email} name="email" placeholder="Enter email" />
                                                                    <span className="text-danger">{errormail}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="logo">Logo</label>
                                                                    <img src={'http://localhost:8000/'+user.logo} width="100px" alt="" />
                                                                    
                                                                    <input type="file" onChange={e => setLogo(e.target.files[0])}  className="form-control dropify" name="logo"  />
                                                                    <span className="text-danger">{errorlogo}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="cover">Cover</label>
                                                                    <img src={'http://localhost:8000/'+user.cover} width="100px" alt="" />
                                                                    <input type="file" onChange={e => setCover(e.target.files[0])} className="form-control" name="cover"  />
                                                                    <span className="text-danger">{errorcover}</span>
                                                                </div>
                                                                {/* <FilePond
                                                                    files={files}
                                                                    onupdatefiles={setFiles}
                                                                    allowMultiple={true}
                                                                    maxFiles={3}
                                                                    server="http://localhost:3000/api"
                                                                    name="cover" 
                                                                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                                                    onChange={e => setCover(e.target.files[0])}
                                                                /> */}
                                                            </div>
                                                            <div className="col-md-12 p-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="description">Description</label>
                                                                    <textarea name="description" id="description" cols="30" rows="4"  onChange={e => setDescriptioneen(e.target.value)}  value={descriptionen} className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="" id="headingTwo">
                                                    <h2 class="mb-0" id="headingTwo">
                                                        <button class="accordion-button " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Social Links
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Facebook</label>
                                                            <input type="text"  className="form-control" name="facebook"  onChange={e => setfacebook(e.target.value)} value={facebook} placeholder="https://www.facebook.com/qrresto" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Instagram</label>
                                                            <input type="text"  className="form-control" name="insta"  onChange={e => setinsta(e.target.value)} value={insta} placeholder="https://www.instagram.com/qrresto" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Youtube</label>
                                                            <input type="text"  className="form-control" name="youtube"  onChange={e => setyoutube(e.target.value)} value={youtube} placeholder="https://www.youtube.com/qrresto" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Twitter</label>
                                                            <input type="text"  className="form-control" name="twitter"  onChange={e => settwitter(e.target.value)} value={twitter} placeholder="https://www.twitter.com/qrresto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                    



                                    <div className="col-md-6  p-3">
                                        <div className="form-group">
                                            <input type="submit" value={isloadingsubmit ? 'loading...' : 'Submit'} disabled={isloadingsubmit}   className="main-btn w-100 text-white " name="submit"  />
                                        </div>
                                    </div>
                                


                                    
                                </div>
                            </form>
                            </div>
                        

                            <div className="col-lg-4 text-center ">
                                <div className="">
                                <br /> 
                                <QRCode
                                    id="qr-gen"
                                    value={"http://restqr.com/" + nameen}
                                    size={250}
                                    level={"H"}
                                    includeMargin={true}
                                    /> 
                                <p>
                                    
                                <button type="button" className=" btn btn-dark" onClick={downloadQRCode}>
                                        Download QR Code
                                    </button>
                                </p>
                                    </div>
                            </div>  
                
                </div>
            
            </div>
            <Footer/>
        </div>

    );
}
 
export default Profile;