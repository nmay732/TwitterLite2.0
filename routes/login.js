
var userlib = require('../lib/user');
var online = {};
// exports.login = function(req, res){
  

//     var content='';
     
//      // if(loginCount!=0)
//      // content += '<h3>Invalid username or password ,Please login again</h3>';
//      // else
//     content += '<h1>Please Login </h1></br>';
//      content += '<form method="get" action="/loginverify">' +
//         'Username: <input type="text" name="username"/><br/>' +
//         'Password: <input type="text" name="password"/><br/>' +
//         '<input type="submit" value="Login"/>'
//         '</loginverify>';
//     res.send(content);
//   }

 var users=userlib.userdb;

  exports.login = function(req, res){
  //var user  = req.session.user;
  //var users=userlib.userdb;
  if (users != undefined && online[users.uid] != undefined) {
    res.redirect('loginverify');
  }
  else {
    res.render('login', { title   : 'User Login'});
  
}
};