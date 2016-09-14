
var fields = ['city', 'contact_type', 'contact_sub_type', 'member', 'first_name', 'last_name', 'email', 'cellphone','grade','youth_group','year_group'];

Template.contacts.onRendered(function() {
  Session.set("fieldsToSearch", fields);
  Session.set("visibleFields", fields);
  Session.set("quickSearchTerm", null);
  $('.modal-trigger-save-search').leanModal();
  $('.modal-trigger-open-search').leanModal();
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    }
  );
})

Template.add_contact.onRendered(function() {
  $('.modal-trigger').leanModal();
});

Template.searchBox.onRendered(function() {
  $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
});

Template.advancedSearch.onRendered(function() {
  $('.modal-trigger').leanModal();
});

Template.searchResult.onRendered(function() {
  $('.modal-trigger-columns').leanModal();
});

Template.advancedSearchSelect.onRendered(function() {
  $('select').material_select();
});

Template.searchBox.events({
  "click .advancedSearch" : function(e,t) {
    // Session.set('reactiveTableFilters', []);
    var fields = selectedContactFields();
    var filters = [];
    fields.forEach(function(item) {
      if (item.options == undefined){
          filters.push(item._id)
        }
    })
    Session.set('reactiveTableFilters', filters);

  },
  "click .quickSearch" : function(e,t) {
    var filters = ["quickSearchFilter"];
    Session.set('reactiveTableFilters', filters);
  }
})

Template.registerHelper("availableContactFields", function () {
    var contactfields = ContactFields.find().fetch();
    return contactfields;
});

Template.registerHelper("selectedContactFields", function () {
  return selectedContactFields();
});

Template.registerHelper("userSelectedSearchableOrDefault", function (field, isDefault) {
  var ret = false;
  var fieldsToSearch = Session.get("fieldsToSearch")
  var index = fieldsToSearch.indexOf(field)
  if (index > -1) {
    ret = true;
  };
  return ret;
});


Template.registerHelper("userSelectedVisibleOrDefault", function (field, isDefault) {
  var ret = false;
  var visibleFields = Session.get("visibleFields")
  var index = visibleFields.indexOf(field)
  if (index > -1) {
    ret = true;
  };
  return ret;
});

Template.registerHelper("getUserSearches", function () {
  var existingUserSearches = UserSearches.findOne();
  if (existingUserSearches != undefined) {
    return existingUserSearches.searches;
  }
});


function selectedContactFields() {
  if (Session.get("fieldsToSearch") != undefined) {
    var contactfields = ContactFields.find( { name: { $in: Session.get("fieldsToSearch") } } ).fetch();
    return contactfields;
  } else {
    var contactfields = ContactFields.find({default: true}).fetch();
    return contactfields;
  }
}
//MENU
