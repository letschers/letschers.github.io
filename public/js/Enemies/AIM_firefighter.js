export const aim_firefighter = () => {

    let char = {
        "name": "Firefighter",
        "class": "Blaster",
        "alive": true,
        "health_base": "10",
        "stamina_base": "3",
        "attack": "4",
        "defense": "2",
        "accuracy": "3",
        "evasion": "3",

        "effects": {
            "1": "Flammable!"
        },

        "skills": {
            "1": {
                "name": "Mechanical Strike",
                "type": "Melee",
                "target": 1,
                "number_of_hits": "1",

                "special_properties": {
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                }
            },
            "2": {
                "name": "Plasma Flame",
                "type": "Ranged",
                "target": 3,
                "number_of_hits": 1,

                "special_properties": {
                },
                "effect_on_enemy": {
                    "1": "Burning"
                },
                "effect_on_self": {
                }
            },
            "3": {
                "name": "Plasma Flare",
                "type": "Ranged",
                "target": 1,
                "number_of_hits": 4,

                "special_properties": {
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                }
            }
        }
    }

    return char;
}