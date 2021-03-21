const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: mongoose.ObjectId,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    created_tuts: {
        type: [mongoose.ObjectId],
        required: true
    },
    followed_tuts: {
        type: [mongoose.ObjectId],
        required: true
    },
    category: {
        type:[String],
        required: true
    }
});
/*
TODO - The User model will have to be linked to the auth0 user profile.  I can provied a user_id mongoose.ObjectId
TODO - to submit to the auth0 user profile.

TODO - On MongoDB can I test the schema values and are correct and that I can successfully store entries before
TODO - I actually setup the api endpoints?
*/


const Users = mongoose.model('User', userSchema);
module.exports = Users;