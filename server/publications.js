Meteor.publish("published_articles", function () {
  return Content.find(
    //query predicate (where clause)
    {
      content_type : "article",
      mainpic: { $exists: true, $ne : ""}
    },
    //filter object
    {
      sort: {start_date: -1},
      limit: 10

    });
});

Meteor.publish("visible_contact_fields", function () {
  return ContactFields.find({visible : true});
});

Meteor.publish("user_searches", function () {
  // return UserSearches.find({userId : this.userId});
  return UserSearches.find();

});

Meteor.publish("submissionsByEe", function () {
  return SubmissionByEe.find();
});
