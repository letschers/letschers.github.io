export const elektra = () => {

    let char = {
        "name": "Elektra",
        "class": "Infiltrator",
        "alive": true,
        "health_base": 100,
        "stamina_base": 143,
        "attack_base": 23,
        "defense_base": 23,
        "accuracy": 29,
        "evasion": 29,

        "effects": {
            "1": "Master Assassin",
            "2": "Way of the Stick"
            
        },
        "skills": {
            "1": {
                "name": "Heavy Sais",
                "level": 0,
                "stamina_cost": "16%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "n/a",
                "cooldown": 0,
                "number_of_hits": 2,
                "hit": "92%",
                "critical": "43%",
                "type": "Melee",
                "special_properties": {
                    "1": "Hemorrhaging Attack",
                    "2": "Stealthy"
                },
                "effect_on_enemy": {
                    "1": "Internal Bleeding"
                },
                "effect_on_self": {
                }
            },
            "2": {
                "name": "Ancient Art",
                "level": 2,
                "stamina_cost": "30%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "n/a",
                "cooldown": 0,
                "number_of_hits": 3,
                "hit": "92%",
                "critical": "43%",
                "type": "Melee",
                "special_properties": {
                    "1": "Stealthy"
                },
                "effect_on_enemy": {
                    "1": "Internal Bleeding",
                    "2": "Wide-Open",
                    "3": "Flanked"
                },
                "effect_on_self": {
                }
            },
            "3": {
                "name": "Rain of Blood",
                "level": 6,
                "stamina_cost": "20%",
                "target": 3,
                "target_ally": "false",
                "total_damage": "n/a",
                "cooldown": 0,
                "number_of_hits": 1,
                "hit": "92%",
                "critical": "43%",
                "type": "Melee",
                "special_properties": {
                    "1": "Stealthy"
                },
                "effect_on_enemy": {
                    "1": "Internal Bleeding",
                    "2": "Hobbled",
                    "3": "Ravaged"
                },
                "effect_on_self": {
                }
            },
            "4": {
                "name": "Assassinate",
                "level": 9,
                "stamina_cost": "20%",
                "target": 1,
                "target_ally": "false",
                "total_damage": "n/a",
                "cooldown": 0,
                "number_of_hits": 1,
                "hit": "92%",
                "critical": "43%",
                "type": "Melee",
                "special_properties": {
                    "1": "Brutal Strike",
                    "2": "Stealthy"
                },
                "effect_on_enemy": {
                    "1": "Internal Bleeding",
                    "2": "Fatal Blow",
                },
                "effect_on_self": {
                }
            }
        }
    }

    return char;
}

