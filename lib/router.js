//GLOBAL

Meteor.startup(function() {
  if(Meteor.isClient){
    loadFilePicker('AL2CzgdtNQ0SELHygHnDWz');
  }
});

Router.configure({
  layoutTemplate: 'main',
  template: 'home'

});

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('accounts');
        return pause();
      } else {
        return this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['staff', 'contacts']
});

//ROUTES
Router.route('/', function () {
  Meteor.subscribe("published_articles");
  this.render('home');
});


Router.route('/accounts', function () {
  this.render('accounts');
});

Router.route('/accounts/register', function () {
  this.render('register');
});

Router.route('/staff', function () {
  this.render('staff');
});
Router.route('/about', function () {
  this.render('about');
});

Router.route('/contacts', {
  // this template will be rendered until the subscriptions are ready
  // loadingTemplate: 'loading',

  waitOn: function () {
    return [Meteor.subscribe("visible_contact_fields"),
            Meteor.subscribe("user_searches")];
  },
  action: function () {
    this.render('contacts');
  }
});

Router.route('/tools', function () {
  this.render('tools');
});

Router.route('/tools/submissions_by_ee', function () {
  this.render('submissions_by_ee');
});

Router.route('/tools/research_by_ee', function () {
  this.render('research_by_ee');
});

Router.route('/tools/research_into_ee', function () {
  this.render('research_into_ee');
});

Router.route('/contactus', function () {
  this.render('contact_us');
});
