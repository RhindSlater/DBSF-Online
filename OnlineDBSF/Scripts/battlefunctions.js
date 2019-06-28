var Time = 1500;
var Round = 1;

function TimerTick(){
    var i = $('#Timer');
    i.text((Time - 10) / 100 );
    Time -= 10;
    if(Time == 0){
        reset();
    }
}

function reset(){
    if($('.Turn').text() == "P1's Turn"){
        $('.Turn').text("P2's Turn");
    }
    else{
        $('.Turn').text("P1's Turn");
        $('.Round').text("Round " + (Round + 1));
        Round += 1;
    }
    Time = 1500;
}