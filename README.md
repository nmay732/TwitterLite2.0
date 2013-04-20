TwitterLite2.0
===========

CS326 project TwitterLite

## Dependencies:

* node.js
* express

## How to get it running

* On linux in the terminal navigate to the top level directory
* run >node app.js
* open a browser connect to "localhost:/3000"
* the app will direct to login windows at the begining of the program


___________________________________________________________________
___________________________________________________________________

# How the program works
(1) User will be direct to login page
     (a) if login sucess,redirect to dashboard
     (b) if login fail , rerender the login page
(2) After login in, program will get the search all the data for user  from database , display in dashboard.
    # dashboard contain the following informations
    @  UserName 
    @  FollowerList
    @  FollowerTweet
    @  FollowingList
    @  FollowingTweet
    @  UserTweet
    Navigation 
    @  logout buttom
    @  Tweet buttom
    @  follow buttom / unfollow buttom
    @  following buttom / unfollowing buttom
    @  profile buttom
(3) People can navigate back and for between functions
(4) if user closed the app , the user can login automatically
(4) user can logout , all login information will be clear.
New functions will be add as we progress.



## function need to work with
* login ,logout, 
* search ( by users or tweet )
* Tweet                        #  tweet a message            
* getFollowers                 #  return a list of followers user followers
* Following                    #  follow another user, 
* profile                      #  disply user information 
* UnFollow					   #  unfollower from a user
* dashboard                    #  (put all the piece together), combination view of everthing


## functions done
* login 
* logout

----------------------------------------------------
## new feature 
* post the tweet of top_start  not start

----------------------------------------------------

## routes
* login_handler.js      done
* routes.js             done
* user.js               done

----------------------------------------------------

## views
* login.ejs             done
* index.ejs             done
* dashboard.ejs         done
* profile.ejs           progress
* 

----------------------------------------------------

## public 
/images
no files yet

/javascripe
no files yet

/stylesheets
* style.css            done

-------------------------------------------------------

## lib
* user.js              done

_______________________________________________________

##  doc 


________________________________________________________
























