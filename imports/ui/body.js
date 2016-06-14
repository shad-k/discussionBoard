import { Template } from 'meteor/templating';

import { Discussions } from '../api/discussions.js';
 
import './body.html';

 
Template.body.helpers({
  discussions() {
    // Show newest tasks at the top
    return Discussions.find({}, { sort: { createdAt: -1 } });
  },
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('hh:mm a DD-MM-YYYY');
});

Template.body.events({
  'submit .new-discussion'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Discussions.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address,
    });
 
    // Clear form
    target.text.value = '';
  },

  'click .logout' (event) {
		event.preventDefault();
		Meteor.logout();	
	}
  	,
});

Template.signup.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.signupEmail.value;
        	var passwordVar = event.target.signupPassword.value;
            Accounts.createUser({
            	email: emailVar,
            	password: passwordVar
        	});
        }
    });


Template.signin.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.signinEmail.value;
        	var passwordVar = event.target.signinPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });