Template.header.username = function () {
    return Meteor.user().username;
};
Template.header.helpers({
    isInGame: function() {
        return getCurrentGame();
    }
})

Template.header.events({
    'click #logoutButton' : function () {
        Session.set("inGame", false);
        Meteor.logout();
    },
    'click #toggle2D' : function () {
        Session.set("complexGame", false);
    },
    'click #toggle3D' : function () {
        Session.set("complexGame", true);
    },
    'click #changeName' : function (evt) {
        gameCollection.update({_id: getCurrentGame()._id}, {$set: {name: $('#gameName').val(), active: false}});
        clearSessionVars();
    }

});
