import Axios from 'axios'

export const postCreateRequestAction =  (post) => {
    console.log("postcreateaction")
     return async (dispatch) => {

    const {data} =   await Axios({
        method : "post",
        url : 'https://fast-mountain-25827.herokuapp.com/createPost',
        data : {
            Title : post ,
            Description : "tocheckandtest",
            Author : "Mee"
        }
    })
    dispatch(getAllPostsAction())
    console.log(data.message)
    
    
}
}

export const getAllPostsAction = () => {
    console.log("getPostAction")
    return async (dispatch) => {
        const {data} = await Axios({
            method : "get",
            url : "https://fast-mountain-25827.herokuapp.com/viewPosts",
        })

        return dispatch(storePostsInRedux(data))

    }
}


export const storePostsInRedux = (posts) => {
    console.log(posts)
    return {
        type : "POSTS_FROM_DB",
        payload : posts
    }
}





export const postLiked = (id) => {
    return {
        type : "LIKE_POST",
        payload : id
    }
}

export const savePosts = (posts) => {
    console.log(posts)
    
    return {
        type : "SAVE_POSTS",
        payload : {
            posts : posts
        }
    }
}

export const sendComment = (id, presentComment) => {
    
        return {
            type : "ADD_COMMENT",
            payload : {
                id : id,
                presentComment : presentComment

            }
        }
    }
