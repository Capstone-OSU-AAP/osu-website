 Template.submissions_by_ee.onRendered(function() {
    $('.modal-trigger').leanModal();
 })

if(Meteor.isClient){

  Meteor.subscribe("submissionsByEe");
  Template.submissions_by_ee.helpers({
    submissionsByEe: function () {
      return SubmissionByEe.find().fetch();
    }


  });

  Template.submissions_by_ee.events({



    'click #upload-file': function (evt) {
      evt.preventDefault();
      console.log('showing')
      var self = this;
          filepicker.pick( function onSuccess(Blob){
            console.log(Blob.url);
            console.log("file picked");
            $('.file-url').val(Blob.url);
          });

    },

    'click .save' : function(event, template ){

      var descript = template.find('.description').value;
      var fileUrl = template.find('.file-url').value;
      SubmissionByEe.insert({
        description: descript,
        createdBy : Meteor.userId(),
        fileUrl: fileUrl
      });
      FlashMessages.sendSuccess("Successfully saved");
    }
  });




}
