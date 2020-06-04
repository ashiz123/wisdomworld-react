import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UploadProfilePictureForm from './uploadProfilePictureForm.component';
// import { Field, reduxForm } from 'redux-form';

import {fetchUpdateProfile} from '../../redux/updateProfile/fetchUpdateProfile';
import {connect} from 'react-redux';



 function UploadProfilePictureModal(props) {

    const {modal, toggle, currentUserId, uploadImage} = props
   
  


      const {
        buttonLabel,
        className
      } = props;

      


    return (
        
            <div>
      
            <Modal isOpen={modal}  className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                   
                <UploadProfilePictureForm  currentUserId = {currentUserId} uploadImage={uploadImage}/>
                
                </ModalBody>
              
            </Modal>
    </div>
                
        
    )


    
}


export default (UploadProfilePictureModal)
