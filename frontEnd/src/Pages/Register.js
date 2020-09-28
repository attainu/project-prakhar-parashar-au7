import React from 'react'
import LoginSignUpForm from '../Components/LoginSignUpForm';
import { useDispatch} from 'react-redux'
import {userInfoToDB} from '../redux/Actions/userActions'
import {connect} from 'react-redux'




const Register = (props) => {
  

   // const dispatch = useDispatch()

    const userInfoToDb = (userInfo, dispatch) => { props.userInfoToDB(userInfo)}

        return (

            <LoginSignUpForm formType="Register" userRegistered={userInfoToDb} />


        )
    }

const dispatchMapper = {
 userInfoToDB : userInfoToDB 
}


export default connect(null, dispatchMapper)(Register)