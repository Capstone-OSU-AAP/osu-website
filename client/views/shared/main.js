  Template.header.onRendered(function() {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  });


Template.registerHelper("userEmailAddress", function (param2) {
    var user = Meteor.user();
    if (user && user.emails)
        return user.emails[0].address;
});
