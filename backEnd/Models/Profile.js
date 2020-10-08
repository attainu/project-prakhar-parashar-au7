import mongoose from 'mongoose'

const schema = mongoose.Schema

const profileDetailsSchema = new schema ({
    basicInfo : {
        type : {}
    },

    workAndEducation : {
        type : {}
    },

    otherDetails : {
        type : {}
    }
})

const ProfileDetails = mongoose.model('ProfileDetails', profileDetailsSchema)

export  default ProfileDetails