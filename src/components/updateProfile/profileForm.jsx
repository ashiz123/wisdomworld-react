import React, {useState} from "react";
import { useForm } from "react-hook-form";
import countryList from 'react-select-country-list';
import {Input, Button, Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchUpdateProfile} from '../../redux/updateProfile/fetchUpdateProfile';



const mapDispatchToProps = dispatch => ({
    updateProfile: (values, currentUserId) => dispatch(fetchUpdateProfile(values, currentUserId))
})




 const ProfileForm =props => {

    console.log(props);
   
  const { register, handleSubmit, watch, errors, } = useForm();
  const [submit , setSubmit] = useState(null);

  


 

  let  country_options = countryList().getData();

  const onSubmit = data => {
      props.updateProfile(data, props.currentUser.id);
       setSubmit('success');
      console.log(data);

  }



  const [options, setOptions] = useState(country_options); 



  

   // watch input value by passing the name of it

  return (





    
    <form onSubmit={handleSubmit(onSubmit)}>


     
       

       <br/>
            <h2 style={{textAlign:"center"}}>Update Profile</h2>
        <br/>
    
    
        {submit === 'success' &&
         <Alert color="success">
           Form Updated Successfully
       </Alert>
        }

      <div>
      <label htmlFor="country">Country</label>
        <Input  name="country" type="select" innerRef={register({required:true})} defaultValue = {props.currentUser.other ? props.currentUser.other.country : ''}>
            <option value="" disabled>Select a country...</option>
            { options.map((option, id) => (
              <option value={option.label} key={id}>
                {option.label}
              </option>
            ))}
          </Input>
      </div>

     

      <div>
        <label htmlFor="address" >Address</label>
        <Input  name="address"  type="text"  innerRef={register({required: true})} defaultValue = {props.currentUser.other ? props.currentUser.other.address : ''} />
      </div>
      <div>
        <label htmlFor="Postal Code">Postal code</label>
        <Input  name="postal_code"  type="text" innerRef={register({required: true})} defaultValue = {props.currentUser.other ? props.currentUser.other.postal_code : ''}/>
      </div>
      <div>
        <label htmlFor="mobile_number">Mobile number</label>
        <Input  name="mobile_number"   type="text"  innerRef={register({required: true})} defaultValue = {props.currentUser.other ? props.currentUser.other.mobile_number : ''}/>
        {errors.mobile_number && <span>This field is required</span>}
      
      </div>
      <div>
        <label htmlFor="about_me">About me</label>
        <Input  type="textarea" rows="5"  name="about_me" rows="5" innerRef={register({required: true})}  defaultValue = {props.currentUser.other ? props.currentUser.other.about_me : ''}/>
      </div>
      <div>
        <label htmlFor="designation">Designation</label>
        
        <Input  name="designation" type="select" innerRef={register({required: true})}  defaultValue = {props.currentUser.other ?props.currentUser.other.designation : ''}>
            <option value="" disabled>Select Positions</option>
            <option value="manager">Manager</option>
            <option value="accountant">Accountant</option>
            <option value="reception">Reception</option>
            <option value="cleaner">Cleaner</option>
            <option value="supervisor">Supervisor</option>
            <option value="other">Supervisor</option>
            
            
      </Input >
      </div>
      
      <br/>
      <Button type="submit" color="primary">Submit</Button>{' '}
      {/* <Button type="button" color="success" disabled={pristine || submitting} onClick={reset}>Reset</Button>{' '} */}
      
        
    </form>
  );
}


export default connect(null, mapDispatchToProps)(ProfileForm);