import React from 'react'
import { postLiked, sendComment } from '../redux/Actions/postActions'
import {connect} from 'react-redux'

class Post extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            id : "",
            comments : ["heyyyy"],
            presentComment : ""
        }
    }
      
    componentDidMount(){
         this.setState({id:this.props.post._id})
    }

    handleLike = () => {
        console.log("heyy")
           this.props.postLiked(this.state.id)
           this.setState({Likes : this.props.post.Likes})
    }

    handleComment = () => {
        console.log("eh")
             this.props.sendComment(this.state.id, this.state.presentComment)
    }

    handleCommentText = (e) => {
         this.setState({presentComment : e.target.value})
    }
    
   style = {
       marginLeft : "200px",
       marginTop : "-100px"
   }

   commentStyle = {
       marginLeft : "600px"
   }

   postStyle = {
       padding : "50px",
       border : "1px dotted grey"
   }



   render() {
       const {post} = this.props

       console.log(post)
       
       return(
        <div style= {this.postStyle}>
        <h2>{post.Title}</h2><br></br><p>{post.Description}</p>
        <p>{this.props.Likes} Likes so far</p>
        <button onClick={this.handleLike}>Like</button>
        <br></br><p>Created By : {post.Author}</p><br></br>
        <p>Created On : {String(post.DateTime).slice(0,10)}</p>
        <p>Created At : {String(post.DateTime).slice(11,19)}</p>

        
        
        <div style={this.style}>
        
        
        
            <textarea onChange = {this.handleCommentText}></textarea>
            <button onClick = {this.handleComment}>Comment</button>
            <p ><small>Please click twice if doesn't work at once</small></p>
            
            

        </div>
        
    </div>
       )
   }



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