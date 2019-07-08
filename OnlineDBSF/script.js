const socket = io('http://localhost:3000');
var P1Status = 'block';
var P2Status = 'block';
var P1 = Object.assign({},userObj.P1[0]);
var P2 = Object.assign({},userObj.P2[0]);

socket.on('Time',function(data){
    var i = $('#Timer');
 	i.text((data / 1000 ));
})

socket.on('gameover',function(data){
    alert(data);
})

socket.on('P1Wins',function(data){
  if(data == 1){
    $('#p1checkbox3').prop('checked', true);
  }
  if(data == 2){
    $('#p1checkbox2').prop('checked', true);
  }
  if(data == 3){
    $('#p1checkbox1').prop('checked', true);
  }
})

socket.on('P2Wins',function(data){
    if(data == 1){
      $('#p2checkbox3').prop('checked', true);
    }
    if(data == 2){
      $('#p2checkbox2').prop('checked', true);
    }
    if(data == 3){
      $('#p2checkbox1').prop('checked', true);
    }
  })

socket.on('Round',function(data){
    var round = $('#Round');
    round.text('Round ' + data);
})

socket.on('UpdateP1',function(data){
    P1 = data;
    $('#P1-Health').val(data.Health);
    $('#P1-Power').val(data.Power);
    var p1hp = $('.HP-Left');
    p1hp.text('Health: ' + data.Health);
    p1hp = $('.Power-Left');
    p1hp.text('Power: ' + data.Power);
})

socket.on('UpdateP2',function(data){
    P2 = data;
    $('#P2-Health').val(data.Health);
    $('#P2-Power').val(data.Power);
    var p2hp = $('.HP-Right');
    p2hp.text('Health: ' + data.Health);
    p2hp = $('.Power-Right');
    p2hp.text('Power: ' + data.Power);
})

socket.on('BattleLog', function(data){
    console.log(data);
    var para = document.createElement('p');
    para.append(data);
    var battlelog = document.getElementById('BattleLog');
    battlelog.appendChild(para);
})

$(document).ready(function(){
    socket.emit('P1_Stats',userObj.P1[0]);
    socket.emit('P2_Stats',userObj.P2[0]);
    


	$('a.Attack-button').click(function(){
        if($('#sessionid').val() == "P1"){
            if(P1.Power < P1.PowerCost){
                alert("Not enough energy");
            }
            else{
                P1Status = 'attack';
                console.log(P1Status);
            }
        }
        else{
            if(P2.Power < P2.PowerCost){
                alert("Not enough energy");
            }
            else{
                P2Status = 'attack';
                console.log(P2Status);
            }
        }
    });
	$('a.Block-button').click(function(){
        if($('#sessionid').val() == "P1"){
            P1Status = 'block';
            console.log(P1Status);
        }
        else{
            P2Status = 'block';
            console.log(P2Status);
        }
    });
	$('a.Powerup-button').click(function(){
        if($('#sessionid').val() == "P1"){
            if(P1.Power == 100){
               alert('Already full power'); 
            }
            else{
                P1Status = 'powerup';
                console.log(P1Status);
            }
        }
        else{
            if(P2.Power == 100){
                alert('Already full power'); 
             }
             else{
                 P2Status = 'powerup';
                 console.log(P2Status);
             }
        }
    });
	$('a.Transform-button').click(function(){
        if($('#sessionid').val() == "P1"){
            P1Status = 'transform';
            console.log(P1Status);
        }
        else{
            P2Status = 'transform';
            console.log(P2Status);
        }
    });
	$('a.Ultimate-button').click(function(){
        if($('#sessionid').val() == "P1"){
            if(P1.Power < P1.UltCost){
                alert('Not enough power!'); 
             }
             else{
                 P1Status = 'ultimate';
                 console.log(P1Status);
             }
        }
        else{
            if(P2.Power < P2.UltCost){
                alert('Not enough power!'); 
             }
             else{
                 P2Status = 'ultimate';
                 console.log(P2Status);
             }
        }
    });
	$('a.Lockin-button').click(function(){
        if($('#sessionid').val() == "P1"){
            socket.emit('P1_Lock_In',P1Status);
        }
        else{
            socket.emit('P2_Lock_In',P2Status);
        }
    });
});