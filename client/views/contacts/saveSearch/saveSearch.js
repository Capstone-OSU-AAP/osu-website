
Template.contacts.events({
  "click .menu_save": function(e,t) {
    var searchToSave = new Object()
    searchToSave.quickSearchName = $("#search_name").val();
    searchToSave.quickSearchTerm = Session.get("quickSearchTerm");
    searchToSave.createdAt = new Date();
    var userSearches = UserSearches.findOne();

    if (userSearches == undefined || userSearches.length == 0) {
      UserSearches.insert({
        userId : Meteor.userId(),
        createdAt: new Date(),
        searches : [searchToSave]
      },
      function( error, result) {
        if ( error ) FlashMessages.showError(error);
        if ( result ) FlashMessages.showSuccess("Saved Search"); //the _id of new object if successful
      });
    } else {
      UserSearches.update({ "_id": userSearches._id},{ $push: { searches: searchToSave }},
      function( error, result) {
        if ( error ) FlashMessages.showError(error);
        if ( result ) FlashMessages.showSuccess("Saved Search"); //the _id of new object if successful
      });
    }
    // FlashMessages.sendSuccess("Successfully saved");
  },
  // "click .menu_open": function(e,t) {
  //   var existingUserSearches = UserSearches.find({userId : Meteor.userId()});
  //   console.log(existingUserSearches);
  // }
});
