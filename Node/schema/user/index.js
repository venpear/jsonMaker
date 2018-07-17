const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../../config/schema/user').USERSCHEMACONFIG

const UserSchema = new Schema({
  account: config.account,
  password: config.password,
  name: config.name
})

const UserModel = mongoose.model('UserModel', UserSchema)

module.exports = UserModel
