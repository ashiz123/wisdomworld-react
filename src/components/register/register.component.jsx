import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './register.styles.css';

import {registerUser, googleRegister} from '../../redux/register/register.actions'

import {connect}from 'react-redux';
import {loginForm} from '../../redux/loginForm/loginForm.actions';
import {GoogleLogin} from 'react-google-login';

// import {ConfigureStore} from '../../redux/';
import {RegisterRequest} from '../../redux/register/register.actions';
// import {userActions} from '../../redux/register/register.actionCreator';



const url = 'http://localhost:8000/api/v1/register'


const mapDispatchToProps = dispatch =>({
    registerUser : user => dispatch(registerUser(user)),
    toggleLogin : (isLoginFormOpen) => dispatch(loginForm(isLoginFormOpen)),
    socialRegister: user => dispatch(googleRegister(user))
})



const mapStateToProps = (state) =>
{
   return{
        currentUser : state.register.currentUser,
        isLoginFormOpen : state.LoginFormOpen.isLoginFormOpen
        
    }
}



class Register extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            "name" : "",
            "email": "",
            "password": "",
            "c_password" : ""
        }

       
       
    }

    handleChange =(e) =>
    {
        const {name, value} = e.target;
        this.setState ({
            [name] : value
        })
      
    }


    responseGoogle = e => 
    {
        const {history} = this.props;
        const user = {
           
            'token' : e.accessToken,
            'id_token' : e.tokenObj.id_token

        }
        // console.log(user);
        this.props.socialRegister(user)
        history.push('/tags')
    }




    handleSubmit = e =>
    {
        const {history} = this.props;
        if(this.state.password !== this.state.c_password)
        {
            alert('Password should be match');
            return;
            
        }
        e.preventDefault();
        this.props.registerUser(this.state);
        history.push('/tags')
        
    }

    openLoginForm = () =>
    {
        this.props.toggleLogin(this.props.isLoginFormOpen);
    }


                 
 

     render() { 
        const {registering} = this.props
        
        const {name, email, password, c_password} = this.state;

        return ( 
            <div className="container">
                {}
                <Card>
                    <CardTitle>
                        <h2 className="heading-center">Sign Up</h2> 
                    </CardTitle>
                    <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="examplePassword" sm={12} md={2}>Name</Label>
                  <Col sm={12} md={10}>
                  <Input type="text" name="name" value={name}  onChange={this.handleChange} placeholder="Enter name" />
                  </Col>
              </FormGroup>
            <FormGroup row>
                  <Label for="exampleEmail" sm={12} md={2}>Email</Label>
                  <Col sm={12} md={10}>
                  <Input type="email" name="email" id="exampleEmail" value={email}  onChange={this.handleChange} placeholder="Enter Email" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label for="examplePassword"  sm={12} md={2}>Password</Label>
                  <Col sm={12} md={10}>
                  <Input type="password" name="password" id="examplePassword" value={password} onChange={this.handleChange} placeholder="Enter password" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label for="examplePassword"  sm={12} md={2}>Confirm password</Label>
                  <Col sm={12} md={10}>
                  <Input type="password" name="c_password"  value={c_password} onChange={this.handleChange} placeholder="Confirm your password" />
                  </Col>
              </FormGroup>

             <div className="float-right">
             <Button color="primary" type="submit">
             {/* disabled = {(Object.entries(this.props.currentUser).length === 0) ? true : false} */}
                  Sign up
              </Button>
             </div>
             
              </Form>

              <GoogleLogin
                        clientId="617400413430-2516crfut6eg562cvi9rafhneugpm86o.apps.googleusercontent.com"
                        buttonText="Register with google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        
                    />


                <br/><br/>
              <span className="text-muted">Already logged in</span>
              <Button onClick={this.openLoginForm} color="link" style={{marginTop: -10}}>Login here</Button>
                
              
              </CardBody>
              </Card>
            </div>
            
         );
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Register);