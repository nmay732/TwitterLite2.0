// # User Library
var users = require('./dbMethods.js');


//This method returns a list of all Users in the database, 
//use users[i].fname to get the first name, users[i].lname to get the
//last name etc...
exports.users_list = function(req, res){
	users.getAllUsers(function (err, ss) {
		if(err){
			res.send('problem accessing the data layer!');
		}
		else{       
			res.send('users_list', { title: 'Users List',
		                                     users : ss});
	}	
	})
};



// ## User Objects
function User(username, password) {
  this.username = username;
  this.password = password;
}


//This method returns a list of all Users in the database, 
//use users[i].fname to get the first name, users[i].lname to get the
//last name etc...


exports.users_list = function(req, res){
	users.getUsers(function (err, ss) {
		if(err){
			res.send('problem accessing the data layer!');
		}
		else{
			res.render('users_list', { title: 'Users List',
		                                     users : ss});
	}	
	})
};

//This method inserts a user with all of their required fields 
exports.insert_user = function(req, res){
	var userName = req.query.name;
	var fname = req.query.fname;
	var lname = req.query.lname;
	var password = req.query.password;
	if(userName && fname && lname && password){
		users.addUser(userName, fname, lname, password, function (err) {
			if (err) {
				res.send('bad user insert');
			}
			else{
				res.redirect('/dashboard');
			}
		});
	}
		else {
			res.send('missing fields for user');
		}
	};
	


//returns a user for the given username
exports.get_user = function (req, res){
	var userName = req.params.name;
	users.getUser(userName, function (err, data)){
		res.send(data.)
	}
}

//Returns a list of all followers for a specific user 
exports.followers_list = function(req, res){
	var userName = req.params.name;
	if(userName){
	users.getUsersFollowers(userName, function (err) {
		if (err){
			res.send('bad lookup');
		}
		else {
		res.redirect()//not sure what to do with the redirect 
	}
	});
};
else{
	res.send('one or more fields missing');
}
}

//Returns a list of all people that a user is following 
exports.following_list = function (req, res){
	var userName = req.params.name;
	if(userName){
		users.getUsersFollowing(userName, function (err){
			if (err){
				res.send('failed to get following');
			}
			else {
				//display the following 
				//probably redirect
			}
		});
	}
	else{
		res.send('missing userName');
	}
};


//Adds a follower or a following for a specific user, depends on which
//one you want. Just switch the two fields 
//To make it clear, the first field follows the user in the second field
exports.addFollower = function (req, res){
	var follower = req.query.name;
	var following = req.query.otherName;
	if(userName && follower){
		users.addFollows(follower, following, function (err) {
			if (err){
				res.send('problem adding a follower');
			}
			else{
				//do something, maybe render the followers list
			}
		});
		}//Follower is the user, following is the person they follow...
		else{
			res.send('one or more fields empty');
		}
	};
	
exports.getTweetsforUser = function(req, res){
	var userName = req.query.name;
	if(userName){
		users.getTweetsForUser(userName, function (err){
			if (err){
				res.send('failed to get tweets');
			}
			else{
				//do something with the tweets
			}
		});
	}
	else{
		res.send('username not provided for query');
	}
	
};

exports.getTweetsforFollowers = function(req, res){
	var userName = req.params.name;
	if(userName){
			if (err){
				res.send('failed to get tweets');
			}
			else{
				//do something with the tweets
			}
		});
	}
	else{
		res.send('username not provided for query');
	}
	
};






//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//
exports.lookup = function(username, password, cb) {
  var len = userdb.length;
  for (var i = 0; i < len; i++) {
    var u = userdb[i];
    if (u.username === username) {
      if (u.password === password) {
        cb(undefined, u);
      }
      else {
        cb('password is not correct');
      }
      return;
    }
  }
  cb('user not found');
};

