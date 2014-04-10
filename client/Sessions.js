getOldGames = function () {
    return true;
    // var game =  gameCollection.findOne({_id: Session.get('inGame')});
    // if(game) {
    //     game.__proto__ = new Game();
    //     return game;
    // }
    // else{
    //     Session.set('inGame', false);
    //     return undefined;
    // }    
}
getCurrentGame = function () {
    var game =  gameCollection.findOne({_id: Session.get('inGame'), active: true});
    if(game) {
        return game;
    }
    else{
        Session.set('inGame', false);
        return undefined;
    }    
}

getCurrentMap = function() {
    var map = Session.get('currentMap');
    return map;
}

clearSessionVars = function() {
    Session.set('inGame', null);
    Session.set('currentMap', null);
    Session.set('opponentID', null);
    Session.set('selectedShip', null);
    Session.set('selectedAction', null);
    Session.set('complexGame', null);
    Session.set('showModal', null);
}

getSquares = function(){
    Meteor.call('getGrid', function(err, data){
        console.log('yo!');
        if (!err){
            Session.set('grid', data);
        }
    });
}
