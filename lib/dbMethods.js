var sqlite3 = require('sqlite3');

// Connect to the database:
var db = new sqlite3.Database('./data.db');

// Sailors data access layer.

exports.addUser = function (userName, fName, lName, password, cb) {
  db.run('insert into Users values (NULL, ?, ?, ?)',
    [name, rating, age],
    cb);
};

exports.addTweet = function (userName, tweet, mention, hash) {
  db.run("insert into Tweets values (?, ?, ?, ?, datetime('now'))",
     [userName, tweet, mention, hash], cb );
};

exports.addFollows = function (userName, followingName) {
  // Tricky - need ids from sailors and boats...
  // Example of how to use sqlite3 module:
  db.run("insert into User_Follows values (?, ?)", [userName, followingName]);
};

exports.getAllUsers = function (cb) {
	console.log('performing query...');
  db.all('select * from Users', cb);
};


//returns a user for the specific userName
exports.getUser = function(userName){
	db.get("select * from Users where user_id=?", [userName]);
}



exports.getTweets = function (cb) {
  db.all('select * from Tweets', cb);
};

//Retuns all users that one is following 
exports.getUsersFollowers = function (userName, cb) {
  db.get('select F.follows_id from User_Follows F where F.user_id=?', [userName], cb);
};

//Resturns all followers of a user
exports.getUsersFollowing = function(userName, cb){
	db.all('select F.user_id from User_Follows F where F.follows_id=?', [userName]);
}

exports.getTweetsForUser = function(userName, cb){
	db.all('select * from Tweets where user_id=?', [userName], cb);
}

exports.getTweetsforFollower = function(userName, cb){
	db.all('select * from Tweets T, User_Follows U where ')//Not implemented yet, might be better to do this query outside of the function. 
}