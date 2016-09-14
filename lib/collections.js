ContactFields = new Mongo.Collection('contact_fields');
SubmissionByEe = new Mongo.Collection('submissionsByEe');
Content = new Mongo.Collection('content');
UserSearches = new Mongo.Collection('userSearches');
Contacts = new Meteor.Collection("contacts");

// if(Meteor.isServer) {
//   Contacts._ensureIndex({city: 1, title: 1});
// }
if(Meteor.is_server) {

  UserSearches.allow({
    'insert': function () {
      return true;
    },
    'update': function () {
      return true;
    },
    'remove': function () {
      return true;
    },
    'upsert': function () {
      return true;
    },

  });

  SubmissionByEe.allow({
    'insert': function () {
      return true;
    },
    'update': function () {
      return true;
    },
    'remove': function () {
      return true;
    },

  });

}
