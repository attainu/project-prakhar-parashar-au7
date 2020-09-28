import axios from 'axios'
import {getAllPostsAction} from './postActions'

export const saveAssetInfoToDB = (assetPublicId, userId) => {
    return dispatch => {
        axios({
            method : 'post',
            url : 'https://fast-mountain-25827.herokuapp.com/assetUploaded',
            data : {
                userId : userId,
                assetPublicId : assetPublicId
            }
        }).then((response) => {
            console.log(response.data.message)
            return dispatch(getAllPostsAction())
            
        })
    }
} 