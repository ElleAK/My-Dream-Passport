//import all models
const dream = require('./dream');
const visited = require('./visited');
const users = require('./users');

//create associations
// users.hasMany(dream, {
//     as: 'dream', 
//     foreignKey: 'user_id'});
// dream.belongsTo(users, {
//     as: 'users',
//     foreignKey: 'dream_id'});


module.exports = { dream, visited, users };