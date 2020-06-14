import React, {Component} from 'react';
import './createPost.styles.css';
import {addPost} from '../../redux/createPost/addPost';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {formValid} from '../../components/validation/validateForm.component';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row,Alert
  } from 'reactstrap';


const mapDispatchedToProps = (dispatch) =>({
    createPost : (formData, userId) => dispatch(addPost(formData, userId))
})
  



class CreatePost extends Component
{

    constructor(props)
    {
       super(props);
       
    }

    state = {
      title : '',
      description :'',
      author : '',
      link :'',
      checked : false,
      image: null,
      validity : null,
      formErrors: {
        title: '',
        description: '',
        link: '',
        image: '',
        author: ''

      }
      
     }


     


    handleChange = (event) =>
    {
        const {name, value} = event.target;
       this.setState({
            [name] : value
        })
        this.checkInputValidation(name, value);
      }

      addTags = (selectedOption) =>
      {
        this.setState(
          { selectedOption }
          // ,() => console.log(`Option selected:`, this.state.selectedOption)
        );

        console.log(selectedOption);

        

      }


    checkInputValidation(name, value)
    {
      let formErrors = this.state.formErrors;
      switch(name)
      {
        case 'title':
        formErrors.title = value.length < 3? 'minimum 3 characters required' : "";
        break;

        case 'description':
          formErrors.description = value.length < 10  ?'minimum 10 characters required': "";
         break;

         case 'author':
          formErrors.author = value.length < 3 ? 'minimum 3 characters required': "";
          break;

      }


     

      this.setState({
        formErrors , [name]: value}
        // , ()=> console.log(this.state.formErrors)
        
        
        )}




    handleCheck = (event) =>
    {
        this.setState({ checked: event.target.checked })
    }



    handleImageChange = (e) => {


        this.setState({
          image: e.target.files[0]
        })
        console.log(this.state.image);
        // to read the file
        let uploadedFile = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function(e){
          let dataUrl = e.target.result;
          document.getElementById('preview').setAttribute("src", `${dataUrl}`);
         
        }

        
        if(e.target.files[0])
        {
          fileReader.readAsDataURL(uploadedFile);
        }else{
          document.getElementById('preview').setAttribute("src",  "");
        }
        

       
      };


    handleSubmit =(e) =>
    {
        e.preventDefault();
        console.log(this.state.image);

        if(formValid(this.state)){
          // console.log(this.state);
          this.props.createPost(this.state, this.props.currentUser.id);
          
          this.setState({
            validity: true,
            title : '',
            selectedOption: null,
            description :'',
            author : '',
            link :'',
            checked : false,
            image: null,
          })
        }else{
         this.setState({
           validity: false
         })
         console.log(this.props);
        }
    }









    render(){
      const {formErrors, selectedOption} = this.state;

        return(
        <Container className="App">
                    <br/>
            <h2 style={{textAlign:"center"}}>Create Post</h2>
            <br/>
              {
                (this.state.validity === false && (
                  <Alert color="danger">
                      Form Invalid !!!
                 </Alert>
                ))
              }

{
                (this.state.validity === true && (
                  <Alert color="success">
                  Post created Successfully
              </Alert>
                ))
              }
            
            <Form className="form" onSubmit={this.handleSubmit}>
    
                {/* Row */}
              <Col>
                <FormGroup>
                  
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    className = {formErrors.title.length > 0 ? "error" : null}
                    value = {this.state.title}
                    onChange= {this.handleChange}
                    placeholder="Enter title for post"
                  />
                   {formErrors.title.length > 0 && (
                    <span className="errorMessage">{formErrors.title}</span>
                  )}
                 
                </FormGroup>
                
              </Col>
    
    
              {/* Row */}
              <Col>
                <FormGroup>
                 
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    rows="5"
                    className = {formErrors.description.length > 0 ? "error" : null}
                    value = {this.state.description}
                    onChange= {this.handleChange}
                    placeholder="Enter Description"
                  />
                  {formErrors.description.length > 0 &&
                    <span className="errorMessage"> {formErrors.description}</span>
                  }
                </FormGroup>
              </Col>
    
    
              {/* Row */}
              <Row >
                <Col md="6">
                <Col>
                <FormGroup>
                  
                  <Input
                    type="text"
                    name="author"
                    id="author"
                    value = {this.state.author}
                    className = {formErrors.author.length > 0 ? "error" : null}
                    onChange= {this.handleChange}
                    placeholder="Enter Author"
                  />
                  {formErrors.author.length > 0 &&
                    <span className="errorMessage"> {formErrors.author}</span>
                  }
                </FormGroup>
              </Col>
                </Col>
                <Col md="6">
                <Col>
                <FormGroup>
                  
                  <Input
                    type="text"
                    name="link"
                    id="link"
                    value = {this.state.link}
                    onChange= {this.handleChange}
                    placeholder="Enter Link"
                  />
                </FormGroup>
              </Col>
              </Col>
                
    
                {/* Row */}
              </Row>
                <Row>
              <Col md="6">
                <FormGroup>
                 <img id="preview" width="100px" style={{marginLeft:16, marginBottom:10}}/>
                 <Input id="fileUpload" type="file" accept="image/png, image/jpeg"   onChange={this.handleImageChange} id="image" style={{marginLeft:18}}/>
                </FormGroup>
                </Col>

                <Col md="6">
                <Col>
               


                  <FormGroup>
                 

                  <Select 
                  
                  value = {selectedOption}
                  onChange = {this.addTags}
                  isMulti
                  options= {this.props.tags.map(function (tag) {
                    return { value: tag.id, label: tag.title }})}
                  
                  />
                 
                </FormGroup>

                
                
                </Col>
                  </Col>
                
                </Row>
    
                <Col sm={{ size: 10 }}>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" id="checkbox2" checked={this.state.checked} onChange= {this.handleCheck} name="publish"/>{' '}
                    Publish
                    </Label>
                </FormGroup>
                </Col>
    
    
    
    
          
              
              <Button color="primary" type="submit" style={{margin:15}} >Create</Button>
            
            </Form>
          </Container>
        )
    }
    
} 

export default withRouter(connect(null, mapDispatchedToProps)(CreatePost))