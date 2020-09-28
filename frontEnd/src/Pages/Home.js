import React, { Component } from 'react'
import Post from '../Components/Post'
import { connect } from 'react-redux'
import {getAllPostsAction} from '../redux/Actions/postActions' 
import CreatePost from '../Components/CreatePost'
import {Image,} from 'cloudinary-react'
import PhotosUploader from '../Components/UploadPhotos';


class Postpage extends Component {

    constructor() {
        super()
        this.state = {
             imageAttr : "" 
        }
    }

    

    componentDidMount() {
        this.props.getAllPostsAction()
        console.log("mounted")
    }
  
     
   

    render() {

        
       console.log(this.props)
        return (
            <div>
                <CreatePost/>
                <PhotosUploader/>
                <Image cloudName="prakhar-parashar" publicId="xyk243h8x2qoc6mnxnln.jpg" width="300" crop="scale" />
              
                { 

                    this.props.Posts !== ""
                        ?
                        this.props.Posts.map(post =>

                            <Post key={post._id} post={post} Likes = {post.Likes} Comments = {post.Comments}/>)
                        :
                        null }
            </div>
        )



    }
}

const mapState = (state) => {
    return {
        Posts: state.postReducer
    }
}

const mapDispatch = {
    getAllPostsAction : getAllPostsAction
}

export default connect(mapState, mapDispatch)(Postpage)