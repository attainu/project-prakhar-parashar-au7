import express from 'express'

import bodyparser from 'body-parser'
import cookieParser from 'cookie-parser'

import router from './routes/userRoutes.js'

import './Models/db_connect.js'

const app = express()


app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cookieParser())

app.use(router)

app.listen(process.env.PORT||8080, () => {
    console.log('Server listening on port 8080')
})

