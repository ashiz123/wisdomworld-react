import React  from 'react';
import './index.styles.css';
import {useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';
import { useEffect } from 'react';
import storage from 'redux-persist/lib/storage';

const Index = (props) =>{

    const {toggleLogin, loginFormOpen} = props;
    const history = useHistory();

    

    function login()
    {
        //  this.props.toggleLogin(this.props.loginFormOpen)
        toggleLogin(loginFormOpen);
    }

    function register()
    {
        history.push('/register');
    }

    // useEffect(() => {
    //     storage.removeItem('persist:root');
    //     console.log('it works');
    // })
   

       
        return (
            <div className="container" style={{marginTop:200}}>
                <div className="text-center">
            <main role="main" className="inner cover">
               
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              

                <br/><br/><br/>
                <p className="lead">
                   
                    <button className="btn btn-primary btn-lg" style={{padding:20, paddingLeft:50, paddingRight:50}} onClick= {register}>Get Started</button>
                    <br/><br/>
                    <span>
                        Already have an account ?  <Button color="link"  onClick={login}>Login</Button>
                    </span>
                    
               
                </p>
            </main>
            </div>
            </div>
        )
    
}


export default Index;
