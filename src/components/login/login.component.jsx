import React, { Component } from 'react';
import './login.styles.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {userLogin} from '../../redux/user/user.actions';

import {Modal, ModalBody, ModalHeader, ModalFooter, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';



const mapDispatchToProps = dispatch => 
{
    return{
        UserLogin : user => dispatch(userLogin(user))
    }
   
}

class Login extends Component {
    constructor( props )
    {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    

    handleChange = event =>
    {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
        
    }

    handleRegister = (e) => {
      
        this.props.toggleLogin();
        this.props.history.push('/register')  
      }

    submitLogin = (e) =>
    {
        e.preventDefault();
        this.props.UserLogin(this.state);
    }

  


   render() { 
       const{isLoginOpen, toggleLogin} = this.props
           
        
        return ( 
           
            <Modal isOpen={isLoginOpen} toggle={toggleLogin} >
            <ModalHeader toggle={toggleLogin}>Modal title</ModalHeader>
            <ModalBody>
                  <Form onSubmit= {this.submitLogin}>
            <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                  <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                  <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                  </Col>
              </FormGroup>
                <br/><br/>
              <ModalFooter>
                  <Button type="submit" color="primary" onClick={toggleLogin}>Submit</Button>{' '}
               </ModalFooter>
               </Form>

                <button onClick={this.handleRegister} className="btn btn-link">Sign up here</button>
            </ModalBody>

           
        </Modal>
               
              
             
            
         );
    }
}
 
export default withRouter(connect(null, mapDispatchToProps)(Login));