
// global variables


$("document").ready(function() {
  // the url for the request
  var url = "http://www.freecodecamp.com/news/hot";

  // make the request
   $.getJSON(url, function(result){
    // $("#content").html(JSON.stringify(result));
     var strResult = JSON.stringify(result);

    //  loop through the strResult object
    for (var i = 0; i < result.length; i++) {
      // url for the posts
      var url = JSON.stringify(result[i].link);
      // name of the post
      var title = JSON.stringify(result[i].headline);
      // post's image
      var  image = JSON.stringify(result[i].image);
      // number of upvotes
      var upVotesNum = JSON.stringify(result[i].upVotes.length);
      // author picture
      var authorPicture = JSON.stringify(result[i].author.picture);
      // author's username
      var userName = JSON.stringify(result[i].author.username);

      // if the post has an image
      if (result[i].hasOwnProperty('image') && result[i].image)
      {
        //console.log(JSON.stringify(result[i].image));
         image = JSON.stringify(result[i].image);
      }
      // if not use user's image
      else
      {
         image = authorPicture;
      }

      // if there's an image add it
      // if ((image))
      // {
         $("#content").append('<div class="col-xs-4">
         <a href="' +url.replace(/\"/g, "")+ '" target="_blank"><img src=' + image + ' class=" img-responsive news-image" >
         <h5 class="news-title">' + title.replace(/\"/g, "") +'</h5></a>
         <p class="upvotes">' + upVotesNum + '</p>
         </div>');
      // }
      // else
      // {
      //   $("#content").append('<div class="col-xs-2"><img src=' + authorPicture + ' class=" img-responsive" ></div>');
      // }
    }
    //$("#content").html(JSON.stringify(result[0]));

      // get the url for each post

   });

});
