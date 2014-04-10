chatStream = new Meteor.Stream('chat');
inviteStream = new Meteor.Stream('invite');
gameStream = new Meteor.Stream('game');
mapStream = new Meteor.Stream('map');
serverStream = new Meteor.Stream('server');
gameMessageStream = new Meteor.Stream('gameMessage');


gameCollection = new Meteor.Collection('games');
savedCollection = new Meteor.Collection('savedgames');
mapCollection = new Meteor.Collection('maps');
inviteCollection = new Meteor.Collection('invites');
