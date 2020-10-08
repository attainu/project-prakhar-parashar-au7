import React, { Component } from 'react'
import Post from '../Components/Post'
import { connect } from 'react-redux'
import {getAllPostsAction} from '../redux/Actions/postActions' 
import CreatePost from '../Components/CreatePost'
import {Image,} from 'cloudinary-react'
import PhotosUploader from '../Components/photoUploader';
import './styles/Home.css'



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

        
      
      console.log(this.props.Posts[0])
      const Posts = this.props.Posts[0]
      console.log(Posts)
        return (
            <div>
                <nav>
                    <button id="profileButton">
                        <div>
                            <Image publicId={this.props.currentUser.profilePic} width="40" height="40" radius="100" cloudName="prakhar-parashar"/>
                            <p>{this.props.currentUser.userName}</p>
                        </div>
                    </button>
                </nav>
                <div id="createPost" >               
                <CreatePost id="createPost"/>
                </div>           
                { 

                    this.props.Posts.length !== 0
                        
                        ?
                        Posts.map(post =>
                            
                             <Post key={post._id} post={post} />)
                        :
                        null }
            </div>
        )



    }
}

const mapState = (state) => {
    return {
        Posts: state.postReducer,
        currentUser : state.userReducer.user
    }
}

const mapDispatch = {
    getAllPostsAction : getAllPostsAction
}

export default connect(mapState, mapDispatch)(Postpage)