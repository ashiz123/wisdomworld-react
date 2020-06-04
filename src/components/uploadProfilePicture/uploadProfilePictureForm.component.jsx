import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {uploadImage} from '../../redux/updateProfile/fetchUpdateProfile';


const mapDispatchedToProps = dispatch => ({
    
postProfilePicture : (image, userId) => dispatch(uploadImage(image, userId))
    
})



function UploadProfilePictureForm(props) {
    const {currentUserId} = props;

    const[image, setImage] = useState(null);

    function changeImage(e)
    {
        
        setImage(e.target.files[0])
        let uploadedFile = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function(e){
          let dataUrl = e.target.result;
          document.getElementById('preview').setAttribute("src", `${dataUrl}`);
        }
        fileReader.readAsDataURL(uploadedFile);

        //   if(e.target.files[0])
        //   {
        //     fileReader.readAsDataURL(uploadedFile);
        //   }else{
        //     document.getElementById('preview').setAttribute("src",  "process.env.PUBLIC_URL + '/profile_placeholder.png'");
        //   }
    }


    function handleSubmit(e){
        
        e.preventDefault();
        props.postProfilePicture(image, currentUserId);
        
        //  toggle();
       }


      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Upload Profile Picture</label>
            <div>
            <img id="preview" className="img-thumbnail" src={process.env.PUBLIC_URL + '/profile_placeholder.png'} alt="profile_placeholder.png" style={{height:250, overFlow:'hidden'}}/>   
            <Input id="profileUpload" type="file" accept="image/png, image/jpeg"   onChange={changeImage} id="image" style={{marginLeft:18}}/>
            </div>
          </div>


          <Button color="primary" type="submit" style={{margin:15}} >Upload</Button>
          </form>
      )
}

export default connect(null, mapDispatchedToProps)(UploadProfilePictureForm);


