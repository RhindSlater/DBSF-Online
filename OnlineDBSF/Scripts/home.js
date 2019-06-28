
function ShowLogin(){
    var username = $('.username-field').val();
    console.log(username);
    $.ajax({
        url: '/u/login/',
        data: username,
        type: "POST",
        success: function(data) {
            alert(data);
        }
    });
}