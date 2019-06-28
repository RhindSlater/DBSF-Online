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

function opponentcheck(id){
    $.ajax({
        url: '/characterselect/CheckOp',
        data: {id: id},
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

var intervalID = window.setInterval(displaycharacter(), 500);

function displaycharacter(session){
    $.ajax({
        url: '/characterselect/displaycharacterLeft',
        data: { id: session},
        success: function(data){
            console.log(data);
            if(data != null){
                $('.characterselect-big-left').attr('src',data);
            }
        },
    });
    $.ajax({
        url: '/characterselect/displaycharacterRight',
        data: { id: session},
        success: function(data){
            console.log(data);
            if(data != null){
                $('.characterselect-big-right').attr('src',data);
            }
        },
    });
}