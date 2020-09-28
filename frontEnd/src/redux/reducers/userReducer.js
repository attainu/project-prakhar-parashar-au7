const initialState = {
    user : "",
    isAuthenticated : false,
    token : ""
}


const userReducer = (state=initialState, action) => {
    
    switch(action.type){
        case("USER_REGISTERED"):
         return state
        
        case("CREATE_USER_SESSION"):
        console.log(action)
             return {
                 ...state, user : action.payload.user, isAuthenticated : true, token : action.payload.token
             }

        default : 
           return state

    }
}

export default userReducer