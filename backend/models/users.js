const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({});
//TODO - The User model will have to be linked to an authentication provider Auth0? How can I link the Auth0
//TODO - accounts to the User model to pull information (name, birthdate, followed tutorials, etc)?


const Users = mongoose.model('User', userSchema);
module.exports = Users;