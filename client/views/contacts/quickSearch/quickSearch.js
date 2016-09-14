//QUICK SEARCH
Template.quickSearch.events({
  "keyup input": function(e,t) {
    var searchTerm = $(".reactive-table-input").val()
    Session.set("quickSearchTerm", searchTerm);
  },
});
