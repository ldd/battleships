Template.grid.helpers({
    rows: function () {
        return Session.get('grid');
    }
});

Template.grid.rendered = function(){
    var currentGame = getCurrentGame();
    var map = getCurrentMap();
    Meteor.call('getVisibleSquares');
}

Template.grid.events({
    'click .square' : function(evt) {
        var action = Session.get('selectedAction');
        console.log(action);

        if(action != undefined && action != "" && action != "turnShipLeft" && action != "turnShipRight" && action != "turn180") {
            var position = JSON.parse(evt.target.id);
            console.log("completing action " + action + " with position " + position);
            Meteor.call('completeTurn', action, Session.get('selectedShip'), position);
        }
        Session.set('selectedAction', "");
    },
    'click .square.ship.challenger' : function (evt) {
        var currentGame = getCurrentGame();
        var currentMap  = getCurrentMap();
        if (currentGame.challenger == Meteor.userId()) { //get shipName from this square and find the ship
            var ship = currentMap.shipDictionary[this.shipName];
            Session.set('selectedShip', ship); 
        }
        else { //handle clicking opponent's ship
            Session.set('selectedShip', undefined);
        }
    },

    'click .square.ship.opponent' : function (evt) {
        var currentGame = getCurrentGame();
        var currentMap  = getCurrentMap();
        if (currentGame.opponent == Meteor.userId()){
            var ship = currentMap.shipDictionary[this.shipName];
            Session.set('selectedShip', ship)
        }

    },

    'click .square.sea' : function (evt) {
        Session.set('selectedShip', undefined); 
    },

    'click .square.coral' : function (evt) {
        Session.set('selectedShip', undefined);
    }
})
