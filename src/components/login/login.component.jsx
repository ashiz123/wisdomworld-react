import React, { Component } from 'react';
import './login.styles.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {userLogin} from '../../redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import { selectLoginErrorStatus} from '../../redux/user/user.selector';

import {Modal, ModalBody,Alert, ModalHeader, ModalFooter,InputGroup, InputGroupAddon, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';



const mapDispatchToProps = dispatch => 
{
    return{
        UserLogin : user => dispatch(userLogin(user))
    }
   
}

const mapStateToProps = createStructuredSelector({
     loginErrorStatus : selectLoginErrorStatus,
   

})

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
        if(this.props.isLoggedIn == false)
        {
            this.props.history.push('/tags');
        }
       
    
      

       
        
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.loginErrorStatus !== this.props.loginErrorStatus) {
            if(this.props.loginErrorStatus === 403 || this.props.currentUser===null)
            {
                this.props.toggleLogin()
            }
            }
           
    }

  


   render() { 
       const{isLoginOpen, toggleLogin} = this.props

      
           
        
        return ( 
           
            <Modal isOpen={isLoginOpen} toggle={toggleLogin} className="modal-width" >
            <ModalHeader toggle={toggleLogin}>Login </ModalHeader>
            <ModalBody className="modal-body-width">

                {
                    (this.props.loginErrorStatus === 403) && 
                    <Alert color="danger">
                        Username and password doesnt match.Try again.
                    </Alert>
                }
              <div className="container">

                  <Form onSubmit= {this.submitLogin}>

                      <div style={{textAlign:"center"}}>
                      <img  src={process.env.PUBLIC_URL + '/login_image.png'} alt="" width="120"/>
                      </div>
               
               <br/>

                    <InputGroup size="md">
                        <InputGroupAddon addonType="prepend"><span className="input-group-text text-primary fa fa-envelope"></span></InputGroupAddon>
                        <Input  type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                    </InputGroup>

                <br/>
                    
                    <InputGroup size="md">
                        <InputGroupAddon addonType="prepend"> <span className="input-group-text fa fa-key  fa-1x  text-primary" ></span></InputGroupAddon>
                        <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                    </InputGroup>

                <br/><br/>
              <ModalFooter>
                  <Button type="submit" color="primary" size="lg" block onClick={toggleLogin}>Login</Button>{' '}
               </ModalFooter>
               </Form>
               </div>  

                
            </ModalBody>

           
        </Modal>
               
              
             
            
         );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));