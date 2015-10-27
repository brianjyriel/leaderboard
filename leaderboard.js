/*if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}*/

console.log("Hello World!");
if(Meteor.isClient){
  console.log("Hello client!");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find()
    },
    'otherHelperFunction': function(){
      return PlayersList.find()
    }
  });

  Template.leaderboard.events({
    'click': function(){
      console.log("You clicked something");
    }
  });

}


PlayersList = new Mongo.Collection('players');