import React from 'react'
import { connect } from 'react-redux'
import {userLoggingIn} from '../redux/Actions/userActions'
import LoginSignUpForm from '../Components/LoginSignUpForm'
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const history = useHistory()
    const userLoggingIn = (userInfo) => {
         props.userLoggingIn(userInfo)         
         history.push('/Home')
     }
        
        
        return (
  <LoginSignUpForm formType="Login" userLoggingIn = {userLoggingIn}/>

           


        )
    }


const dispatchMapper = {
    userLoggingIn : userLoggingIn
} 

const stateMapper = (state) => {
    return {
        userName : state.userReducer,
        isAuthenticated : state.userReducer.isAuthenticated
    }
}

export default connect(stateMapper, dispatchMapper)(Login);
