const io = require('socket.io')(3000);
var P1Status = 'block';
var P2Status = 'block';
var Time = 15000;
var Round = 1;
let players = [];
var P1;
var P2;
var P1BackUp;
var P2BackUp;
var P1Wins = 0;
var P2Wins = 0;
var P1ready;
var P2ready;

function AttackMethod(Player,Opponent,Status){
    if(Status == 'block'){
        Opponent.Health -= (Player.AttackDamage / 2);
        io.emit('BattleLog', Opponent.Name + ' blocked ' + Player.Name + "'s attack and took " + (Player.AttackDamage / 2) + ' damage');
    }
    else{
        Opponent.Health -= (Player.AttackDamage);
        io.emit('BattleLog', Player.Name + ' Attacked ' + Opponent.Name + ' dealing ' + Player.AttackDamage + ' damage');

    }
    Player.Power -= Player.PowerCost;
}

function PowerupMethod(Player){
    Player.Power += 30;
    if(Player.Power > 100){
        Player.Power = 100
    }
    io.emit('BattleLog', Player.Name + ' powered up to ' + Player.Power + '%');
}

function UltimateMethod(Player,Opponent,Status){
    if(Status == 'block'){
        Opponent.Health -= (Player.UltDamage / 2);
        io.emit('BattleLog', Player.Name + ' Attacked ' + Opponent.Name + ' dealing ' + (Player.UltDamage / 2) + ' damage');
    }
    else{
        Opponent.Health -= (Player.UltDamage);
        io.emit('BattleLog', Player.Name + ' Attacked ' + Opponent.Name + ' dealing ' + Player.UltDamage + ' damage');

    }
    Player.Power -= Player.UltCost;
}

function GameOver(){
    if(P1.Health <= 0 & P2.Health <= 0 & P1Wins == 2 & P2Wins == 2){
        io.emit('gameover','Game ended in a draw');
        clearInterval(interval);
    } else if(P2.Health <= 0 & P1Wins == 2){
        io.emit('gameover','Player 1 wins');
        clearInterval(interval);
    } else if(P1.Health <= 0 & P2Wins == 2){
        io.emit('gameover','Player 2 wins');
        clearInterval(interval);
    }
    if(P1.Health <= 0 | P2.Health <= 0){
        if(P1.Health <= 0 & P2.Health <= 0){
            console.log('Round ended in a draw');
            P1Wins++;
            P2Wins++;
        }
        if(P1.Health <= 0){
            console.log('p2 wins one round');
            P2Wins++;
        }
        else{
            console.log('p1 wins one round');
            P1Wins++;
        }
        io.emit('P1Wins', P1Wins);
        io.emit('P2Wins', P2Wins);
        Round = 1;
        io.emit('Round', Round);
        P1 = Object.assign({},P1BackUp);
        P2 = Object.assign({},P2BackUp);
    }
}


io.on('connection', function(socket){
    players.push(socket);
    console.log('player joined');
    io.emit('UpdateP1', P1);
    io.emit('UpdateP2', P2);
    io.emit('P1Wins', P1Wins);
    io.emit('P2Wins', P2Wins);
    io.emit('Round', Round);

    if(players.length == 2){
        console.log('Time started');
        interval = setInterval(function() {
            io.emit('Time', Time);
            Time -= 100;
            if(Time == 0){
                if(P1Status == 'attack'){
                    AttackMethod(P1,P2,P2Status)
                }
                if(P2Status == 'attack'){
                    AttackMethod(P2,P1,P1Status)
                }
                if(P1Status == 'powerup'){
                    PowerupMethod(P1)
                }
                if(P2Status == 'powerup'){
                    PowerupMethod(P2)
                }
                if(P1Status == 'transform'){
                    TransformMethod(P1)
                }
                if(P2Status == 'transform'){
                    TransformMethod(P2)
                }
                if(P1Status == 'ultimate'){
                    UltimateMethod(P1,P2,P2Status)
                }
                if(P2Status == 'ultimate'){
                    UltimateMethod(P2,P1,P1Status)
                }
                io.emit('Round', Round);
                Round++;
                GameOver();
                Time = 15000;
                P1Status = 'block';
                P2Status = 'block';
                P2ready = false;
                P1ready = false;
                io.emit('UpdateP1', P1);
                io.emit('UpdateP2', P2);
            }
          }, 100);
    }

    socket.on("P1_Lock_In",P1State => {
        P1Status = P1State;
        P1ready = true;
        readycheck();
    })

    socket.on("P2_Lock_In",P2State => {
        P2Status = P2State;
        P2ready = true;
        readycheck();
    })

    function readycheck(){
        if(P2ready & P1ready){
            Time = 100;
        }
    }


    socket.on('P1_Stats',function(data){
        console.log(data);
        P1 = Object.assign({},data);
        P1BackUp = Object.assign({},data);
    })

    socket.on('P2_Stats',function(data){
        console.log(data);
        P2 = Object.assign({},data);
        console.log(P2);
        P2BackUp = Object.assign({},data);
    })

    socket.on('disconnect',function(){
        if(players.length == 1){
            clearInterval(interval);
        }
        console.log('player left');
        players.splice(players.indexOf(socket),1);
    })
})