
if (Meteor.isServer) {

  ReactiveTable.publish("contacts", function () {
  if (this.userId) {
    return Contacts;
  } else {
    return [];
  }
});

}
