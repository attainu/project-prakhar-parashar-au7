import User from '../Models/User.js'

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

const controllers = {
    
    userRegistered : (req, res) => {
        const saltRounds = 10
        bcrypt.hash(req.body.password, saltRounds, function(err, hashedPassword){
        req.body.password = hashedPassword
        User.create(req.body)
            .then((user, err) => {
                if (err) {
                    res.json({
                        status : 400,
                        message : "Mongodb Cannot create new user",
                        error : err
                    })
                }
                res.json({
                    status : 200,
                    message : "Registration Successful",
                    user : user
                })
            }
            )
   
        })
        
    
    },

    
    logInPost : (req, res) => {
        console.log(req.body)
        User.findOne({userName : req.body.userName}, (err, user) => {
            if(err) {
                res.json({message : "User not found"})
            }
            if(!user){
                res.json({message :"User not found"})
            }
            else {

            console.log(req.body.password, user.password)
           bcrypt.compare (req.body.password, user.password, (err, result) => {
               
               console.log(err)
               if(err) {
                   console.log("heyyy")
                   res.json({message :"password don't match"})
               }
               else if (result == true){
                  console.log("loggingIn")
                  const token = jwt.sign({userName :  req.body.userName}, 'secret', (err, token) => {
                      User.findByIdAndUpdate(user._id, {token : token})
                      .then(res.json({
                          message: "Login Successful",
                          user : user,
                          token : token
                      }))
  
                  })

               }
               else {
                   res.json({message :"password don't match"})
               }

           }) 
        }

            

         
       })
      }
}


    export default controllers

