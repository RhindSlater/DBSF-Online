function SearchingOpponent(username){
    $.ajax({
        url: '/lobby/checkopponent/',
        type: 'GET',
        data: { username: username},
        success: function(session){
            if(session != null){
                console.log(session);
                window.location.href = session;
            }
        },
    });
}