import axios from 'axios'
//import history from '../../history'
import {useHistory} from 'react-router-dom'


export const  userInfoToDB = (userInfo) => {
    console.log(userInfo)
    return  async (dispatch) => {  
        await axios({
        method: 'post',
        url: 'userRegistration',

        data: {
            email: userInfo.email,
            userName: userInfo.userName,
            password: userInfo.password
        }
    })
        .then((response) => {
            alert(response.data.message)
        },
            (error) => {
                console.log(error)
            })

            return dispatch(userRegistered)

}
}

const userRegistered = {
      type : "USER_REGISTERED"
}


export const userLoggingIn = (userInfo) => {
    console.log("action")
    return async (dispatch) => {
        return axios({
            method : 'post',
            url : 'userLogin',
            data : {
                userName : userInfo.userName,
                password : userInfo.password
            }
        }).then((response) => {
            console.log(response.data.message)
             localStorage.setItem("token",response.data.token)
             axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
           
             dispatch(userLoggingActionCreator(response.data.user, response.data.token))
             
            
        })
    }
}


export const userLoggingActionCreator = (user, token) => {
    return {
        type : "CREATE_USER_SESSION",
        payload : {
        user,
        token
    }
}
}