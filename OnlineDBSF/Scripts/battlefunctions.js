var Time = 1500;
var Round = 1;
var P1Status;
var P2Status;
var turn = "P1's Turn";

function TimerTick(){
    var i = $('#Timer');
    i.text((Time - 10) / 100 );
    Time -= 10;
    if(Time == 0){
        reset();
    }
}

function reset(){
    if(turn == "P1's Turn"){
        $('.Turn').text("P2's Turn");
		turn = "P2's Turn";
    }
    else{
        LockinBTN();
    }
    Time = 1500;
}

$('.Attack-button').click(AttackBTN());
$('.Block-button').click(BlockBTN());
$('.Powerup-button').click(PowerupBTN());
$('.Transform-button').click(TransformBTN());
$('.Ultimate-button').click(UltimateBTN());
$('.Lockin-button').click(LockinBTN(), alert("Lockin"));

function AttackBTN(){
	if($('#sessionid').val() == "P1"){
		P1Status == "attack";
	}
	else{
		P2Status == "attack";
	}
}

function BlockBTN(){
	if($('#sessionid').val() == "P1"){
		P1Status == "block";
	}
	else{
		P2Status == "block";
	}
}

function PowerupBTN(){
	if($('#sessionid').val() == "P1"){
		P1Status == "powerup";
	}
	else{
		P2Status == "powerup";
	}
}

function TransformBTN(){
	if($('#sessionid').val() == "P1"){
		P1Status == "transform";
	}
	else{
		P2Status == "transform";
	}
}

function UltimateBTN(){
	if($('#sessionid').val() == "P1"){
		P1Status == "ultimate";
	}
	else{
		P2Status == "ultimate";
	}
}

function LockinBTN(){
	if($('#sessionid').val() == "P1"){
        $('.Turn').text("P2's Turn");
		turn = "P2's Turn";
    }
	else{
        $('.Turn').text("P1's Turn");
        $('.Round').text("Round " + (Round + 1));
        Round += 1;
        turn = "P1's Turn";
	}
}