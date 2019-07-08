// var Time = 1500;
// var Round = 1;
// var turn = "P1's Turn";
// var p1health = 100;
// var p2health = 100;
// var p1hp = $('#P1-Health');
// var p2hp = $('#P2-Health');
// var P1Status = 'block';
// var P2Status = 'block';

// function TimerTick(){
// 	var i = $('#Timer');
// 	i.text((Time - 10) / 100 );
//     Time -= 10;
//     if(Time == 0){
//         Time = 1500;
//     }
// }


// function reset(){
//     if(turn == "P1's Turn"){
//         $('.Turn').text("P2's Turn");
// 		turn = "P2's Turn";
//     }
//     else{
// 		if(P1Status == 'attack'){
// 			AttackMethod1();
// 		}
// 		if(P2Status == 'attack'){
// 			AttackMethod2();
// 		}
// 		if(P1Status == 'powerup'){
// 			PowerUpMethod1();
// 		}
// 		if(P2Status == 'powerup'){
// 			PowerUpMethod2();
// 		}
// 		if(P1Status == 'transform'){
// 			TransformMethod();
// 		}
// 		if(P2Status == 'transform'){
// 			TransformMethod();
// 		}
// 		if(P1Status == 'ultimate'){
// 			UltimateMethod1();
// 		}
// 		if(P2Status == 'ultimate'){
// 			UltimateMethod2();
// 		}
// 		GameOver();
//         $('.Turn').text("P1's Turn");
// 		$('.Round').text("Round " + (Round + 1));
// 		Round += 1;
// 		turn = "P1's Turn";
// 		Time = 1500;
// 		P1Status = 'block';
// 		P2Status = 'block';
//     }
//     Time = 200;
// }

// function TransformMethod(){

// }

// function AttackMethod1(){
// 	if(P2Status == 'block'){
// 		$('#P2-Health').val(($('#P2-Health').val() - 10)); //hard coded value change later
// 	}
// 	else{
// 		$('#P2-Health').val(($('#P2-Health').val() - 20)); //hard coded value change later
// 	}
// 	$('#P1-Power').val(($('#P1-Power').val() - 20)); //hard coded value change later
// 	$('.Power-Left').text('Power: ' + $('#P1-Power').val());
// 	$('.HP-Right').text('Health: ' + $('#P2-Health').val());
// 	var para = document.createElement("P");
// 	para.append("");
// }
// function AttackMethod2(){
// 	if(P1Status == 'block'){
// 		$('#P1-Health').val(($('#P1-Health').val() - 10)); //hard coded value change later
// 	}
// 	else{
// 		$('#P1-Health').val(($('#P1-Health').val() - 20)); //hard coded value change later
// 	}
// 	$('#P2-Power').val(($('#P2-Power').val() - 20)); //hard coded value change later
// 	$('.Power-Right').text('Power: ' + $('#P2-Power').val());
// 	$('.HP-Left').text('Health: ' + $('#P1-Health').val());
// }

// function PowerUpMethod1(){
// 	$('#P1-Power').val(($('#P1-Power').val() + 30)); //hard coded value change later
// 	$('.Power-Left').text('Power: ' + $('#P1-Power').val());
// }

// function PowerUpMethod2(){
// 	$('#P2-Power').val(($('#P2-Power').val() + 30)); //hard coded value change later
// 	$('.Power-Right').text('Power: ' + $('#P2-Power').val());
// }

// function UltimateMethod1(){
// 	if(P2Status == 'block'){ 
// 		$('#P2-Health').val(($('#P2-Health').val() - 35)); //hard coded value change later
// 	}
// 	else{
// 		$('#P2-Health').val(($('#P2-Health').val() - 70)); //hard coded value change later
// 	}
// 	$('#P1-Power').val(($('#P1-Power').val() - 70)); //hard coded value change later
// 	$('.Power-Left').text('Power: ' + $('#P1-Power').val());
// 	$('.HP-Right').text('Health: ' + $('#P2-Health').val());
// }
// function UltimateMethod2(){
// 	if(P1Status == 'block'){
// 		$('#P1-Health').val(($('#P1-Health').val() - 50)); //hard coded value change later
// 	}
// 	else{
// 		$('#P1-Health').val(($('#P1-Health').val() - 100)); //hard coded value change later
// 	}
// 	$('#P2-Power').val(($('#P2-Power').val() - 100)); //hard coded value change later
// 	$('.Power-Right').text('Power: ' + $('#P2-Power').val());
// 	$('.HP-Left').text('Health: ' + $('#P1-Health').val());
// }

// function GameOver(){
// 	if($('#P2-Health').val() == 0 & $('#P1-Health').val() == 0){
// 		alert("Game ended in a draw");
// 	}
// 	if($('#P2-Health').val() == 0){
// 		alert("Player 1 wins!");
// 	}
// 	if($('#P1-Health').val() == 0){
// 		alert("Player 2 wins!");
// 	}
// }
// $(document).ready(function(){
// 	$('a.Attack-button').click(AttackBTN);
// 	$('a.Block-button').click(BlockBTN);
// 	$('a.Powerup-button').click(PowerupBTN);
// 	$('a.Transform-button').click(TransformBTN);
// 	$('a.Ultimate-button').click(UltimateBTN);
// 	$('a.Lockin-button').click(LockinBTN);
// });

// function AttackBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		if($('#P1-Power').val() < 20){ //hard coded value change later
// 			alert('Not enough power');
// 		}
// 		else{
// 			P1Status = "attack";
// 			console.log('p1 attack');
// 		}
// 	}
// 	else{
// 		if($('#P2-Power').val() < 20){ //hard coded value change later
// 			alert('Not enough power');
// 		}
// 		else{
// 			P2Status = "attack";
// 			console.log('p2 attack');
// 		}
// 	}
// }

// function BlockBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		P1Status = "block";
// 		console.log('p1 block');
// 	}
// 	else{
// 		P2Status = "block";
// 		console.log('p2 block');
// 	}
// }

// function PowerupBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		if($('#P1-Power').val() == 100){
// 			alert('Already max power')
// 		}
// 		else{
// 			P1Status = "powerup";
// 			console.log('p1 power up');
// 		}
// 	}
// 	else{
// 		if($('#P2-Power').val() == 100){
// 			alert('Already max power')
// 		}
// 		else{
// 			P2Status = "powerup";
// 			console.log('p2 power up');
// 		}
// 	}
// }

// function TransformBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		P1Status = "transform";
// 		console.log('p1 transform');
// 	}
// 	else{
// 		P2Status = "transform";
// 		console.log('p2 transform');
// 	}
// }

// function UltimateBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		P1Status = "ultimate";
// 		console.log('p1 ult');
// 	}
// 	else{
// 		P2Status = "ultimate";
// 		console.log('p2 ult');
// 	}
// }

// function LockinBTN(){
// 	if($('#sessionid').val() == "P1"){
// 		if(turn == "P1's Turn"){
//             socket.emit('reset','P1Status');
// 		}
//     }
// 	else{
// 		if(turn == "P2's Turn"){
// 			socket.emit('reset',P2Status);
// 		}
// 	}
// }