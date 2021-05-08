export const gambit = () => {

    let char = {
        "name": "Gambit",
        "class": "Infiltrator",
        "alive": true,
        "health_base": 100,
        "stamina_base": 8584,
        "attack_base": 1288,
        "defense_base": 1288,
        "accuracy": 1717,
        "evasion": 1574,
        "effects": {
            "1": "Wild Card"
        },
        "skills": {
            "1": {
                "name": "Bo Roulette",
                "level": 0,
                "stamina_cost": "10%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "613-858",
                "cooldown": 0,
                "number_of_hits": 1,
                "hit": "94%",
                "critical": "22%",
                "type": "Melee Kinetic",
                "special_properties": {
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                    "1": "Kinetic Charge"
                },

            },
            "2": {
                "name": "Ace of Spades",
                "level": 2,
                "stamina_cost": "4%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "311-343",
                "cooldown": 0,
                "number_of_hits": 1,
                "hit": "94%",
                "critical": "22%",
                "type": "Ranged Kinetic",
                "special_properties": {
                    "1": "Kinetic Release"
                },
                "effect_on_enemy": {
                    "1": "Exposed",
                    "2": "Pain",
                },
                "effect_on_self": {
                }
            },
            "3": {
                "name": "Ragin Cajun",
                "level": 6,
                "stamina_cost": "29%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "561-669",
                "cooldown": 0,
                "number_of_hits": 3,
                "hit": "94%",
                "critical": "22%",
                "type": "Melee Kinetic",
                "special_properties": {
                    "1": "Deadly Crits",
                    "2": "Exploits Exposure",
                    "3": " Kinetic Burst"
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                }
            },
            "4": {
                "name": "Royal Flush",
                "level": 9,
                "stamina_cost": "17%",
                "target": 3,
                "target_ally": "false",
                "total_damage": "268-524",
                "cooldown": 0,
                "number_of_hits": 4,
                "hit": "94%",
                "critical": "2%",
                "type": "Ranged Kinetic",
                "special_properties": {
                    "1": "Deadly Crits"
                },
                "effect_on_enemy": {
                    "1": "Wide-Open",
                    "2": "Remove Buffs",
                    "3": "Fumbling"
                },
                "effect_on_self": {
                }
            }
        }
    }

    return char;
}

