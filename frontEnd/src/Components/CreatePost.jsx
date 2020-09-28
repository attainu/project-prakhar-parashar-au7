import React, { Component } from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
import {postCreateRequestAction} from '../redux/Actions/postActions'
import './styles/createPost.css'
import PhotosUploader from './UploadPhotos';
import {Modal} from 'react-bootstrap'
import Post from './Post';
import CreatePostModal from './createPostModal'



const CreatePost = (props) => {
   
    const [modalShow, setModalShow] = React.useState(false);


   const postChanged = (e) => {
       this.setState({postText : e.target.value})
   } 

   const handlePostClick = () => {
       console.log(this.props)
       this.props.postCreateRequestAction(this.state.postText)
   }

        return (
            <div>

            

                   
                   <button><span><img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/13747136691537356029-512.png" width="30" height="30"></img></span></button>
                   <button><PhotosUploader/></button>
                   <button onClick={() => {setModalShow(true)}}><span><img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15071590061574055268-64.png" width="30" height="30"></img></span></button>
                   

                   <CreatePostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                  {/* <input onChange={this.postChanged} placeholder="Speak your heart out"></input>
                  <button onClick = {this.handlePostClick}>Post</button>
                  <br></br><br></br>
                  <button><span></span>Live Video</button> */}
                  
                  

                </div>

                

        )

    }


const stateMapper = (state) => {
    
    return {
        userName : state.userReducer.userName
    }
}


const dispatchMapper = {
    postCreateRequestAction : postCreateRequestAction
}

export default connect(stateMapper, dispatchMapper)(CreatePost)