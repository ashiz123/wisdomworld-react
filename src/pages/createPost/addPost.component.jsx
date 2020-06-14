import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import countryList from 'react-select-country-list';
import { Input, Button,Label, Alert, Row, Col, FormGroup } from 'reactstrap';
import Select from 'react-select';
import {addPostTry} from '../../redux/createPost/addPostTry';
import {connect} from 'react-redux';

const mapDispatchedToProps = (dispatch) =>({
    createPost : (formData, userId, selected ) => dispatch(addPostTry(formData, userId, selected))
})


function AddPost(props) {

    const { register, handleSubmit, isSubmitted, errors, reset } = useForm();
    const history = useHistory();

    const[formValidiity, setFormValidity] = useState(null);

    const[selectedOption, setSelectedOption]  = useState(null)


    function handleImageChange(e){

        let uploadedFile = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function (e) {
            let dataUrl = e.target.result;
            document.getElementById('preview').setAttribute("src", `${dataUrl}`);

        }


        if (e.target.files[0]) {
            fileReader.readAsDataURL(uploadedFile);
        } else {
            document.getElementById('preview').setAttribute("src", "");
        }

    };


    function addTags(selectedOption)
    {
        setSelectedOption(selectedOption);
        console.log(selectedOption)
    }

    const onSubmit = data => {
        if(selectedOption === null)
        {
            alert('No tag is selected.');
        }
        
        props.createPost(data, props.currentUser.id, selectedOption);
        setFormValidity(true);
        reset();
      
    };


    return (
        <div className="container">
            <br/>



            <h3 style={{textAlign:"center"}}>Create Post</h3> <br/>

           
            {
                (formValidiity === true) &&
                <Alert color="success">
                    Form submitted successfully
                 </Alert>
            }




            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                   <Input name="title" type="text" innerRef={register({ required: true })} defaultValue=""  placeholder="Enter title"/>
                   <p className="text-danger">{errors.title && "Title field is required"}</p>
                </div> <br/>


                <div>
                    <Input type="textarea" rows="5" name="description" innerRef={register({
                        required: true, minLength: 20
                    })} defaultValue="" placeholder="Enter description" />

                    <p className="text-danger">
                    {errors.description?.type === "required" &&
                        "Description should be entered"}
                    {errors.description?.type === "minLength" &&
                        "Description should be atleast 20 character"}
                    </p>
                  
                    {/* <p className="text-danger">{errors.description && "Description field is required"}</p> */}
                </div> <br />


                <Row >
                    <Col md="6">
                        <Input name="author" placeholder="Author" type="text"  defaultValue="" />
                    </Col>
                    <Col md="6">
                        <Input name="link" type="text" placeholder ="Link"  defaultValue="" />
                    </Col>
                </Row> <br/>



                <Row>
                    <Col md="6">
                        <FormGroup>
                            <img id="preview" width="100px" />
                            <Input name="image" id="fileUpload" type="file" accept="image/png, image/jpeg" innerRef={register({ required: true })} onChange={handleImageChange} id="image" />
                            <p className="text-danger">{errors.image && "Upload post image"}</p>
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup>
                            <Select
                               value={selectedOption}
                                onChange={addTags}
                                // innerRef={register({ name: 'tags', type: 'custom' }, { required: true})}
                                name= "tags"
                                isMulti
                                options={props.tags.map(function (tag) {
                                    return { value: tag.id, label: tag.title }
                                })}
                            />
                             
                        </FormGroup>
                        {/* <p className="text-danger" style={{marginTop: -10}} id="selectOption"></p> */}
                    </Col>
                </Row>  


                <Row>
                <Col sm={{ size: 10 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" id="checkbox2" innerRef={register({ required: false })} name="publish" />{' '}
                    Publish
                    </Label>
                    </FormGroup>
                </Col>
                </Row>

                <br/>

                <Button type="submit" className="btn btn-primary">Create Post </Button>
            </form>
        </div>
    )
}


export default connect(null, mapDispatchedToProps)(AddPost)