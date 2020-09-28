import express from 'express'
import userControllers from '../Controllers/userController.js'
import postControllers from '../Controllers/postControllers.js'
import cors from 'cors'


const Router = express()


Router.use(cors())

//to check  if deployed on heroku 

Router.get('/', (req, res) => {
    res.send("done")
})


 
//User SignUp
Router.post('/userRegistration', userControllers.userRegistered)

//User Login
Router.post('/userLogin', userControllers.logInPost)

//To add a post
Router.post('/addPost', postControllers.addPosts)

//For FrontEnd

Router.post('/createPost',  postControllers.createPost)

// To view all posts
Router.get('/viewPosts', postControllers.viewPosts)

//To like a post 
Router.post('/likePost/:id', postControllers.likePost)

//To comment on a post 
Router.post('/commentOnPost/:id', postControllers.commentOnPost)

export default Router