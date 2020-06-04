import React, {useState, useEffect} from 'react';
import {ListGroupItem, ListGroup, Alert} from 'reactstrap';
import {useRouteMatch, Link} from 'react-router-dom';
import UploadProfilePictureModal from '../uploadProfilePicture/uploadProfilePictureModal.component';

import './profileNav.styles.css';


export default function ProfileNav(props) {



    
    const {url} = useRouteMatch();
    const {name,email, other, id, image} = props.currentUser;

   




    const [uploadmodal, setUploadmodal] = useState(false);
    

   

    function toggleUploadImageModal()
    {
        setUploadmodal(!uploadmodal);
        console.log(uploadmodal);
    }


  


    return (
        <div>
            <div className="text-center">
           
        
                {
                    image &&
                    image.profile_image !== null ?
                    <img className="img-rounded"  src={image.profile_image} alt="profile_placeholder.png"/>:
                    <>
                     <img className="img-rounded" src={process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="profile_placeholder.png"/>
                   
                 </>

                }
           
            <h5 className="text-primary">{name}</h5>
            <p className="text-primary" style={{margin:-10}}>{email}</p>
            <button className="btn btn-primary" style={{marginTop:20}} onClick={toggleUploadImageModal}> Upload profile picture</button>
            </div>

            <div className="" style={{margin:20}}>
            <ListGroup>
            <ListGroupItem style={{color:"gray"}}>Basic Info</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            
           {
             other && 
             <>
             <div className="basic-info">

                 {
                     other &&
                     <div>
                 <p>Country: {other.country}</p>
                 <p>Mobile Number: {other.mobile_number}</p>
                 <p>Postal Code: {other.postal_code}</p>
                 <p>Designation: {other.designation}</p>
                 </div>

                 }
             
             {/* {
                 other.country !==null &&
                 <p>Country: {other.country}</p>
             }
              {
                 other.mobile_number !==null &&
                 <p>Mobile no: {other.mobile_number}</p>
             }
              {
                 other.postal_code !==null &&
                 <p>Postal Address: {other.postal_code}</p>
             }
             {
                 other.postal_code !==null &&
                 <p>Working as: {(other.designation).toUpperCase()}</p>
             } */}
           
             </div>
               
             
             <ListGroupItem style={{color:"gray"}}>About me</ListGroupItem>
             
             {
                 other.about_me !==null &&
                 <p className="truncateLongTexts">{other.about_me}</p>
             }
            
              
             </>
            
             
           }
           {/* {
               other.country !==null && other.mobile_number !==null &&  other.mobile_number !==null &&  other.postal_code !==null &&
                <p> Update the basic info</p>
           } */}
          
            <ListGroupItem>
            <Link to = {`${url}/posts` } > Posts </Link>
            </ListGroupItem>
            <ListGroupItem>
            <Link to = {`${url}/update-info` } > Update Info </Link>
            </ListGroupItem>
            <ListGroupItem>Following</ListGroupItem>
           </ListGroup>
            </div>
            

               

            {/* <ListGroup>
                <br/>
            <ListGroupItem style={{color:"gray"}}>Profile</ListGroupItem>
            <ListGroupItem className="list-divider"></ListGroupItem>
            <ListGroupItem>
            <Link to = {`${url}/posts` } > Posts </Link>
            </ListGroupItem>
           
            <ListGroupItem>Setting</ListGroupItem>
            <ListGroupItem>Update Info</ListGroupItem>
            <ListGroupItem>Following</ListGroupItem>
           </ListGroup> */}
          
           <UploadProfilePictureModal modal ={uploadmodal} toggle = {toggleUploadImageModal} currentUserId = {id} />
        </div>
    )
}
