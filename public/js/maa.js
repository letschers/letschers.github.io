//How damage is calculated
//Random( min_damage , max_damage ) * 6 * Attack * Attack / ( Attack + 5 * Defense)


import { elektra } from './Heroes/Elektra.js';
import { gambit } from './Heroes/Gambit.js';
import { emma_frost } from './Heroes/Emma_Frost.js';

import { aim_firefighter } from './Enemies/AIM_firefighter.js';
import { aim_administrator } from './Enemies/AIM_administrator.js';



let ally_players = [];
let enemy_players = [];
let turn_order = [];
let next_player;
let chosen_skill;

//TODO think about how to manage dead characters



const set_global = () => {
    window.ally_players = ally_players;
    window.enemy_players = enemy_players;
    window.turn_order = turn_order;
    window.next_player = next_player;
}

const show_board = () => {
    let button = document.getElementById("pregame");
    button.style.visibility = "hidden";

    let game = document.getElementById("game");
    game.style.visibility = "";
}

//TODO get json players then create heros and enemies properly 
const create_players = () => {
    let p1 = elektra();
    let p2 = emma_frost();
    let p3 = gambit();

    let e_p1 = aim_firefighter();
    let e_p2 = aim_administrator();
    let e_p3 = aim_administrator();

    ally_players.push(p1);
    ally_players.push(p2);
    ally_players.push(p3);

    enemy_players.push(e_p1);
    enemy_players.push(e_p2);
    enemy_players.push(e_p3);

}

//TODO set only alive characters
const set_all_to_bright = () => {

    document.getElementById("player-1").style.filter = "brightness(100%)";
    document.getElementById("player-2").style.filter = "brightness(100%)";
    document.getElementById("player-3").style.filter = "brightness(100%)";
    document.getElementById("enemy-1").style.filter = "brightness(100%)";
    document.getElementById("enemy-2").style.filter = "brightness(100%)";
    document.getElementById("enemy-3").style.filter = "brightness(100%)";

}


const set_enemy_pointevents_none = () => {

    for (let i = 0; i < enemy_players.length; i++) {
        document.getElementById("enemy-" + (i + 1)).style.pointerEvents = "none";
    }
}

const draw_ally_info_skillbar = (character_index) => {

    document.getElementById("skills-bar").style.visibility = "visible";

    for (let i = 0; i < 4; i++) {
        document.getElementById("skill-" + (i + 1)).style.backgroundImage = "url('./assets/" + ally_players[character_index].name + "/skill-" + (i + 1) + ".png')";
    }

    for (let i = 0; i < ally_players.length; i++) {

        if (ally_players[i]["name"] != next_player["name"]) {
            document.getElementById("player-" + (i + 1)).style.filter = "brightness(50%)";
        }

        document.getElementById("enemy-" + (i + 1)).style.filter = "brightness(50%)";
    }
}

const verify_who_plays = () => {

    if (next_is_ally()) {

        switch (next_player.name) {

            case ally_players[0].name:
                draw_ally_info_skillbar(0);
                break;

            case ally_players[1].name:
                draw_ally_info_skillbar(1);
                break;

            case ally_players[2].name:
                draw_ally_info_skillbar(2);
                break;
        }
    } else {
        document.getElementById("skills-bar").style.visibility = "hidden";

        let skill = next_player["skills"]["1"];
        chosen_skill = skill;
        let rand = Math.floor(Math.random() * 3);

        attack(ally_players[rand], chosen_skill);

    }
}



const turn = () => {

    if (next_player == null) {
        console.log("Already dead");
        setup_next_turn();
        turn();
    }

    /*for (let i = 0; i < ally_players.length; i++) {

        if (ally_players[i]["health_base"] <= 0 ) {
            ally_players[i] = null;
            //ally_players.splice(i, 1);

        }

    }

    for (let i = 0; i < ally_players.length; i++) {

        if (enemy_players[i]["health_base"] <= 0 && enemy_players[i] != null) {
            enemy_players[i] = null;
            //enemy_players.splice(i, 1);
        }

    }*/



    reset_animations();

    set_enemy_pointevents_none();
    set_skill_eventlisteners_css();

    draw_turn_order();
    set_all_to_bright();
    set_combat_info();

    //this line was made my day worse for a couple of hours
    //set_event_listeners();

    verify_who_plays();
}

const start_game = () => {

    show_board();
    create_players();
    set_combat_info();
    set_turn_order();

    //debug purposes only
    set_global();

    next_player = turn_order[0];
    turn();
}

const teste = () => {
    console.log("Click");
};

const next_is_ally = () => {

    switch (next_player["name"]) {
        case ally_players[0]["name"]:
            return true;
        case ally_players[1]["name"]:
            return true;
        case ally_players[2]["name"]:
            return true;
        default:
            return false;
    }

}

const set_combat_info = () => {



    for (let i = 0; i < ally_players.length; i++) {

        if (ally_players[i] == null) {
            document.getElementById("info-player-" + (i + 1)).innerHTML = "";
            //document.getElementById("player-1").remove();

        } else {
            document.getElementById("name-player-" + (i + 1)).innerHTML = ally_players[i]["name"];
            document.getElementById("hp-quant-player-" + (i + 1)).innerHTML = ally_players[i]["health_base"];
            document.getElementById("st-quant-player-" + (i + 1)).innerHTML = ally_players[i]["stamina_base"];
        }

    }

    for (let i = 0; i < enemy_players.length; i++) {

        if (enemy_players[i] == null) {
            document.getElementById("info-enemy-" + (i + 1)).innerHTML = "";
            //document.getElementById("enemy-1").remove();

        } else {
            document.getElementById("name-enemy-" + (i + 1)).innerHTML = enemy_players[i]["name"];
            document.getElementById("hp-quant-enemy-" + (i + 1)).innerHTML = enemy_players[i]["health_base"];
            document.getElementById("st-quant-enemy-" + (i + 1)).innerHTML = enemy_players[i]["stamina_base"];
        }

    }

    /*document.getElementById("name-player-1").innerHTML = ally_players[0]["name"];
    document.getElementById("hp-quant-player-1").innerHTML = ally_players[0]["health_base"];
    document.getElementById("st-quant-player-1").innerHTML = ally_players[0]["stamina_base"];

    document.getElementById("name-player-2").innerHTML = ally_players[1]["name"];
    document.getElementById("hp-quant-player-2").innerHTML = ally_players[1]["health_base"];
    document.getElementById("st-quant-player-2").innerHTML = ally_players[1]["stamina_base"];

    document.getElementById("name-player-3").innerHTML = ally_players[2]["name"];
    document.getElementById("hp-quant-player-3").innerHTML = ally_players[2]["health_base"];
    document.getElementById("st-quant-player-3").innerHTML = ally_players[2]["stamina_base"];

    document.getElementById("name-enemy-1").innerHTML = enemy_players[0]["name"];
    document.getElementById("hp-quant-enemy-1").innerHTML = enemy_players[0]["health_base"];
    document.getElementById("st-quant-enemy-1").innerHTML = enemy_players[0]["stamina_base"];

    document.getElementById("name-enemy-2").innerHTML = enemy_players[1]["name"];
    document.getElementById("hp-quant-enemy-2").innerHTML = enemy_players[1]["health_base"];
    document.getElementById("st-quant-enemy-2").innerHTML = enemy_players[1]["stamina_base"];

    document.getElementById("name-enemy-3").innerHTML = enemy_players[2]["name"];
    document.getElementById("hp-quant-enemy-3").innerHTML = enemy_players[2]["health_base"];
    document.getElementById("st-quant-enemy-3").innerHTML = enemy_players[2]["stamina_base"];*/
}

const set_turn_order = () => {
    for (let i = 0; i < ally_players.length; i++) {
        turn_order.push(ally_players[i]);
        turn_order.push(enemy_players[i]);
    }

    //just uncomment sort to shuffle order
    //turn_order.sort(() => Math.random() - 0.5);

    draw_turn_order();
}

const draw_turn_order = () => {

    let string = "";
    let name;

    for (let i = 0; i < 6; i++) {

        name = turn_order[i].name;

        switch (name) {
            case "Emma_Frost":
                string += "<div id='icon-emma'></div>";
                break;
            case "Gambit":
                string += "<div id='icon-gambit'></div>";
                break;
            case "Elektra":
                string += "<div id='icon-elektra'></div>";
                break;
            case "Administrator":
                string += "<div id='icon-enemy-1'></div>";
                break;
            case "Firefighter":
                string += "<div id='icon-enemy-3'></div>";
                break;
            case "Enemy 3":
                string += "<div id='icon-enemy-3'></div>";
                break;
            default:
                console.log("Wtf");
        }

    }

    document.getElementById("rounds").innerHTML = string;
}

const reset_animations = () => {
    document.getElementById('player-1').style.animationName = "";
    document.getElementById('player-1').style.animationDuration = "";

    document.getElementById('player-2').style.animationName = "";
    document.getElementById('player-2').style.animationDuration = "";

    document.getElementById('player-3').style.animationName = "";
    document.getElementById('player-3').style.animationDuration = "";

    document.getElementById('enemy-1').style.animationName = "";
    document.getElementById('enemy-1').style.animationDuration = "";

    document.getElementById('enemy-2').style.animationName = "";
    document.getElementById('enemy-2').style.animationDuration = "";

    document.getElementById('enemy-3').style.animationName = "";
    document.getElementById('enemy-3').style.animationDuration = "";

}

const setup_next_turn = () => {


    let aux = next_player;
    turn_order.shift();
    turn_order.push(aux);
    next_player = turn_order[0];


}

const attack = (target, attack) => {

    //TODO make it better
    switch (next_player) {
        case ally_players[0]:
            document.getElementById('player-1').style.animationName = "teste";
            document.getElementById('player-1').style.animationDuration = "4s";
            break;
        case ally_players[1]:
            document.getElementById('player-2').style.animationName = "teste";
            document.getElementById('player-2').style.animationDuration = "4s";
            break;
        case ally_players[2]:
            document.getElementById('player-3').style.animationName = "teste";
            document.getElementById('player-3').style.animationDuration = "4s";
            break;
        case enemy_players[0]:
            document.getElementById('enemy-1').style.animationName = "teste-enemy";
            document.getElementById('enemy-1').style.animationDuration = "4s";
            break;
        case enemy_players[1]:
            document.getElementById('enemy-2').style.animationName = "teste-enemy";
            document.getElementById('enemy-2').style.animationDuration = "4s";
            break;
        case enemy_players[2]:
            document.getElementById('enemy-3').style.animationName = "teste-enemy";
            document.getElementById('enemy-3').style.animationDuration = "4s";

    }

    console.log(target["name"] + " / " + attack["name"]);



    target["health_base"] -= 10;

    document.getElementById("game").style.pointerEvents = "none";
    document.getElementById("skills-bar").style.visibility = "hidden";


    setTimeout(() => {

        document.getElementById("game").style.pointerEvents = "";
        document.getElementById("skills-bar").style.visibility = "visible";
        setup_next_turn();
        turn();


    }, 2000);


}

const set_skill_eventlisteners_css = () => {

    document.getElementById("skill-1").style.pointerEvents = "";
    document.getElementById("skill-2").style.pointerEvents = "";
    document.getElementById("skill-3").style.pointerEvents = "";
    document.getElementById("skill-4").style.pointerEvents = "";

}

const skill_1 = () => {



    document.getElementById("enemy-1").style.pointerEvents = "";
    document.getElementById("enemy-2").style.pointerEvents = "";
    document.getElementById("enemy-3").style.pointerEvents = "";

    let skill = next_player["skills"]["1"];
    chosen_skill = skill;

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    //set_enemies_eventlisteners();


    document.getElementById("skill-1").style.pointerEvents = "none";
}

const skill_2 = () => {

    document.getElementById("enemy-1").style.pointerEvents = "";
    document.getElementById("enemy-2").style.pointerEvents = "";
    document.getElementById("enemy-3").style.pointerEvents = "";


    let skill = next_player["skills"]["2"];
    chosen_skill = skill;

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }


    document.getElementById("skill-2").style.pointerEvents = "none";

}

const skill_3 = () => {

    document.getElementById("enemy-1").style.pointerEvents = "";
    document.getElementById("enemy-2").style.pointerEvents = "";
    document.getElementById("enemy-3").style.pointerEvents = "";

    let skill = next_player["skills"]["3"];
    chosen_skill = skill;


    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }


    document.getElementById("skill-3").style.pointerEvents = "none";

}

const skill_4 = () => {

    document.getElementById("enemy-1").style.pointerEvents = "";
    document.getElementById("enemy-2").style.pointerEvents = "";
    document.getElementById("enemy-3").style.pointerEvents = "";

    let skill = next_player["skills"]["4"];
    chosen_skill = skill;


    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    document.getElementById("skill-4").style.pointerEvents = "none";

}


const set_event_listeners = () => {

    document.getElementById("click-start").addEventListener("click", start_game, false);
    document.getElementById("player-1").addEventListener("click", teste, false);


    document.getElementById("skill-1").addEventListener("click", skill_1, false);
    document.getElementById("skill-2").addEventListener("click", skill_2, false);
    document.getElementById("skill-3").addEventListener("click", skill_3, false);
    document.getElementById("skill-4").addEventListener("click", skill_4, false);
    document.getElementById("recharge").addEventListener("click", teste, false);
    document.getElementById("items").addEventListener("click", teste, false);
    document.getElementById("help").addEventListener("click", teste, false);
    document.getElementById("store").addEventListener("click", teste, false);

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        //console.log("Triggered");

        attack(enemy_players[0], chosen_skill);


        document.getElementById("enemy-1").style.pointerEvents = "none";
        document.getElementById("enemy-2").style.pointerEvents = "none";
        document.getElementById("enemy-3").style.pointerEvents = "none";


    }, false);



    document.getElementById("enemy-2").addEventListener("click", function handler(e) {
        //console.log("Triggered");

        attack(enemy_players[1], chosen_skill);


        document.getElementById("enemy-1").style.pointerEvents = "none";
        document.getElementById("enemy-2").style.pointerEvents = "none";
        document.getElementById("enemy-3").style.pointerEvents = "none";


    }, false);

    document.getElementById("enemy-3").addEventListener("click", function handler(e) {
        //console.log("Triggered");

        attack(enemy_players[2], chosen_skill);
        document.getElementById("enemy-1").style.pointerEvents = "none";
        document.getElementById("enemy-2").style.pointerEvents = "none";
        document.getElementById("enemy-3").style.pointerEvents = "none";
    }, false);




}


set_event_listeners();

//document.getElementById("rounds").innerHTML = "teste";



/*$(function () {
    $('[data-toggle="popover"]').popover({placement: 'top'});
})*/

