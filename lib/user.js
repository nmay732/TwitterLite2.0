// # User Library
var users = require('../data/dbMethods');
// ## User Objects
function User(username, password) {
  this.username = username;
  this.password = password;
}

// This is our stub database until we look at a real database!
var userdb = [
  new User('bob', 'b'),
  new User('alice', 'a'),
  new User('jack', 'j'),
  new User('mick', 'm')
];

//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//
exports.lookup = function(username, password, cb){
	var user = username;
	var pass = password;
	console.log('at lookup');
	users.getAllUsers( function(err, ss) {
		if (err){
			console.log('problem accessing the data layer!');
		}
		else{
			for(var i = 0; i < ss.length; i++){
				if(ss[i].user_id == user && ss[i].password == pass){
					//send the username to a cookie or some other method of passing on the username
					cb(undefined, user);
					}
				else{
					cb('password or username incorrect');
				}		
			}
			}
		
	});
};


