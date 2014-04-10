Template.savedGames.helpers({
    savedGames: function() {
    var opp = Session.get('opponentID');
    return gameCollection.find( {$or: [{challenger : opp}, {opponent  : opp}]} ).fetch();
    }
});

Template.savedGames.events({
    'mouseover .previousGameElement' : function(evt) {
        Session.set('currentMap', gameCollection.findOne({_id: evt.target.id}).map);
    },
    'click .previousGameElement' : function(evt) {
        var game = gameCollection.findOne({_id: evt.target.id});
        console.log("sending invite to continue game with id " + evt.target.id);
        if(game.challenger == Meteor.userId()) { //If you were the challenger in a game we are loading
            inviteCollection.insert({challenger: game.challenger, opponent: game.opponent, gameID: game._id});
        }
        else {
            inviteCollection.insert({challenger: game.opponent, opponent: game.challenger, gameID: game._id});
        }
    }

});