//ADVANCED SEARCH
Template.advancedSearch.events({
  "click .edit_search_fields": function(e,t) {
  },
  "click .save_fields": function(e,t) {
    var searchIDs = $("#fields input:checkbox:checked").map(function(){
         return $(this).attr("id");
    }).get();
    Session.set("fieldsToSearch",searchIDs)

    return;
  },
});

Template.registerHelper("stringToArray", function (string) {
  var arr = [string];
  return arr;
})

function selectedContactFields() {
  if (Session.get("fieldsToSearch") != undefined) {
    var contactfields = ContactFields.find( { name: { $in: Session.get("fieldsToSearch") } } ).fetch();
    return contactfields;
  } else {
    var contactfields = ContactFields.find({default: true}).fetch();
    return contactfields;
  }
}
