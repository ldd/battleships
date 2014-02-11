Meteor.subscribe('invites', Meteor.userId());
inviteCollection.find({opponent : Meteor.userId()}).observeChanges({ //Hotfix for only showing when you're challenged to
    added: function(id, fields) {
        console.log('received invite ' + id);
        console.log(fields);
        new ui.Confirmation({message: Meteor.users.findOne(fields.challenger).username + ' wants to challenge you to a battleship duel!'}).show(function(accept){
            if (accept) {
        //        fields.accepted = true;
            }
        }).hide(5555);
    }
});
