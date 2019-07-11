function SearchingOpponent(){
    console.log('Searching ' + userObj.user1.ID);
    $.ajax({
        url: '/lobby/checkopponent/',
        type: 'GET',
        data: { username: userObj.user1.ID},
        success: function(session){
            if(session != null){
                console.log(session);
                window.location.href = session;
            }
            else{
                console.log('No user found');
            }
        },
    });
}

var interval = setInterval(SearchingOpponent, 500);