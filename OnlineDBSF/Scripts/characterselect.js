function Hover(name){
    $('#overlay_' + name).attr('src','/img/Portraits/highlight2.png')
}

function Unhover(name){
    $('#overlay_' + name).attr('src','/img/Portraits/border.png')
}

function LockIn(character, session, ID ){
    $.ajax({
        url: '/characterselect/LockIn',
        type: 'POST',
        data: { characterid:character, sessionid: session, id: ID},
        success: function(data){
            if(data != null){
                window.location.href = data;
            }
            else{
                alert("Waiting on opponent");
            }
        },
    });
}

function opponentcheck(){
    console.log('checking for opponent character');
    $.ajax({
        url: '/characterselect/CheckOp',
        data: {id: userObj.MySession.ID , userID: userObj.MySession.user1.ID },
        type: 'POST',
        success: function(data){
            if(data != null){
                window.location.href = data;
            }
            else{
                alert("Waiting on opponent");
            }
        },
    })
}

var check = setInterval(opponentcheck, 1500);
var intervalID = setInterval(displaycharacter, 500);

function displaycharacter(){
    console.log('checking for opponent character image selected');
    $.ajax({
        url: '/characterselect/displaycharacterLeft/' + userObj.MySession.ID,
        success: function(data){
            console.log(data);
            if(data != null){
                $('.characterselect-big-left').attr('src',data);
            }
        },
    });

    $.ajax({
        url: '/characterselect/displaycharacterRight/' + userObj.MySession.ID,
        success: function(data){
            console.log(data);
            if(data != null){
                $('.characterselect-big-right').attr('src',data);
            }
        },
    });
}