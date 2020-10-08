import React from 'react'
import { postLiked, sendComment } from '../redux/Actions/postActions'
import {connect} from 'react-redux'
import {Image} from 'cloudinary-react'
import {useSelector} from 'react-redux'
import ProfileButton from './profileButton'

const Post = (props) =>  {
    
         
   
     
   

   const postStyle = {
       padding : "50px",
       marginLeft : "300px",
       boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.4)",
       width : "630px"
   }



   
       const {post} = props
       console.log(post)
       return(
        <div style= {postStyle}>
         <div style={{width : "100px"}}>
         <ProfileButton user={post.user} /> 
         </div>
        <p>{post.postText}</p>
        <Image cloudName = "prakhar-parashar" publicId = {post.assetId}/>

        
        
        <p>Created On : {String(post.DateTime).slice(0,10)}</p>
        <p>Created At : {String(post.DateTime).slice(11,19)}</p>

        
        
        
        
    </div>
       )
   }






const passDispatchMethodsToProps = {
    postLiked : postLiked,
    sendComment : sendComment
}
    //  const passReduxStateToProps = (state) => {
    //      reutrn {

    //      }
    // }



 export default connect (null, passDispatchMethodsToProps)(Post)