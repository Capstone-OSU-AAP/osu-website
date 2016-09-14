Template.home.onRendered(function() {
  $('.slider').slider({full_width: true});
})

Template.home.helpers({
  articles: function () {
    var articles = Content.find().fetch()
    console.log("Start of articles");
    console.log(articles);
    console.log("End of articles");

    return articles;
  },

})

Template.article.helpers({
  getDateFromTimeStamp: function(number) {
    // var myObj = $.parseJSON('{"date_created":"1273185387"}'),
    var myDate = new Date(1000*number);

    console.log(myDate.toString());
    console.log(myDate.toLocaleString());
    console.log(myDate.toUTCString());
    return myDate.toString();
  }
})
