export const emma_frost = () => {

    let char = {
        "name": "Emma_Frost",
        "class": "Tactician",
        "alive": true,
        "health_base": 100,
        "stamina_base": 130,
        "attack_base": 29,
        "defense_base": 29,
        "accuracy": 26,
        "evasion": 23,
        "effects": {
            "1": "Diamond Body"
        },
        "skills": {
            "1": {
                "name": "Psychic Tap",
                "level": 0,
                "stamina_cost": "10%",
                "target": 1,
                "total_damage": "273-382",
                "cooldown": 0,
                "number_of_hits": 1,
                "hit": "98%",
                "critical": "12%",
                "type": "Ranged Psychic",
                "special_properties": {
                    "1": "Psychic Attack"
                },
                "effect_on_enemy": {
                    "1": "Mental Anguish"
                },
                "effect_on_self": {
                },

            },
            "2": {
                "name": "War Diamond",
                "level": 2,
                "stamina_cost": "18%",
                "target": 1,
                "total_damage": "634-760",
                "cooldown": 2,
                "number_of_hits": 2,
                "hit": "88%",
                "critical": "11%",
                "type": "Melee Unarmed",
                "special_properties": {
                },
                "effect_on_enemy": {
                    "1": "Stun",
                },
                "effect_on_self": {
                }
            },
            "3": {
                "name": "Unlock Potential",
                "level": 6,
                "stamina_cost": "25%",
                "target": 1,
                "target_ally": "true",
                "total_damage": "0",
                "cooldown": 2,
                "number_of_hits": 0,
                "hit": "100%",
                "critical": "0%",
                "type": "Buff",
                "special_properties": {
                    "1": "Quick Action",
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                },
                "effect_on_all_allies": {
                    "1": "Energize"
                },
                "effect_on_one_ally": {
                    "1": "Potential Unleashed"
                }
            },
            "4": {
                "name": "Mental Trauma",
                "level": 9,
                "stamina_cost": "33%",
                "target": 3,
                "total_damage": "944-1040",
                "cooldown": 0,
                "number_of_hits": 8,
                "hit": "88%",
                "critical": "11%",
                "type": "Ranged Psychic",
                "special_properties": {
                    "1": "Psychic Attack"
                },
                "effect_on_enemy": {
                    "1": "Migraine",
                },
                "effect_on_self": {
                }
            }
        }
    }

    return char;
}

