
/*** Module dependencies. */

//variable definitions
var express = require('express')
  , http = require('http')  
  , path = require('path')
  , routes = require('./routes/routes')
  , login_handler = require('./routes/login_handler');

var app = express();

//express configuration
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(express.cookieParser('cookies monster')); //needs to come before app.router
  app.use(app.router);

});

app.configure('development', function(){
  app.use(express.errorHandler());
});


// #ROUTES# //

//What should happen eventually:
//-Redirect EVERYTHING to a route which checks if there is an established connection with the client
//-If there is, go to the dashboard for that user
//-If NOT go to the login screen to create a session
app.get('/',function(req,res){res.redirect('/login');}); //redirect to login
app.get ('/login' , login_handler.login);
app.get ('/verifylogin' , login_handler.verify);
app.get ('/logout' , login_handler.logout);
app.get ('/dashboard' , routes.dashboard)

//launch the server

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


