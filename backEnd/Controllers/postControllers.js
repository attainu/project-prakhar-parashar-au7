import Posts from '../Models/Posts.js'
import jwt from 'jsonwebtoken'
import Users from '../Models/User.js'




const controllers = {

    
    viewPosts : (req, res) => {
         console.log("here")
         Posts.find().populate('user').exec(function(err, posts) {
            // console.log(posts)
             res.send(posts)
         })
        // Posts.find((err, Posts) => {
        //     if(err) {
        //         res.send(err)

        //     }
            
        //    
        // })


    },

    likePost : (req, res) => {
        const id = req.params.id
        Posts.update({_id : id}, {$inc:{Likes :1}}, (err, post) => {
           if(err){res.send(err)}
            res.send("Liked Successfully")
        })
        
},
    
    commentOnPost : (req, res) => {
        const id = req.params.id

        Posts.update({_id : id}, {
            $push : {
                Comments : req.body.comment
            }
        
        }).then(() => {
            res.send("Commented")
        })
    },

    createPost : (req, res) => {
        
        const date = new Date()
        req.body.DateTime = date
        console.log(req.body)
        Posts.create(req.body).then((post, err) => {
            if (err) {
                console.log(err)
                res.json({
                    status : 400,
                    message : "Mongodb Cannot create new post",
                    error : err
                })
        }
        console.log(post)
        Posts.findById(post._id).populate('user').exec(function(err, post) {
            if(err) return err
            console.log(post.user)
        })
        res.json({
            status : 200,
            message : "Post created Successfully",
            post : post
        })
    })

    }

}


export default controllers