const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

User = mongoose.model('User', userSchema);

module.exports = User;