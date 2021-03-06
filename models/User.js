const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: String,
  hash: String,
  salt: String,
});

UsersSchema.methods.setPassword = password => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, 
                                this.salt, 
                                10000, 
                                512, 
                                'sha512').toString('hex');
};

UsersSchema.methods.validatePassword = password => {
  const hash = crypto.pbkdf2Sync(
    password, 
    this.salt, 
    10000, 
    512, 
    'sha512').toString('hex');

  return this.hash === hash;
};

UsersSchema.methods.generateJWT = () => {
  
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  return {
    _id: this._id,
    email: this.email,
    token: jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret')
  };
};

mongoose.model('Users', UsersSchema);