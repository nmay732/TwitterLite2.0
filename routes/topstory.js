exports.topstorys = function(req, res){
  
  // pull out the story with most likes 
  // show in the dashboard

  var userlb = require('../lib/user');
  var tweet = userlb.tweet;
  var content;
  var topstoryList[];
  var MaxLike=userlb.maxlike;
  for (int i=0; i<tweet.length;i++)
  	if(tweet[i].like<=maxlike-10)
  		if(tweet[i].like>maxlike-10)
      topstoryList.push(tweet[i]);

  content+='<h2> Top Story List</h2> </br>';
        for(var i=1;i<topstorylist.length;i++)
          content+=topstorylist[i].Tweet '</br>';     
  res.render('topstory', { title   : 'Top Storys'});
 
};