
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
      $("#content").html(JSON.stringify(result[i]));
    }
    //$("#content").html(JSON.stringify(result[0]));

      // get the url for each post

   });

});
