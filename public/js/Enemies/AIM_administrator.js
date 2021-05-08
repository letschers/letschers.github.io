export const aim_administrator = () => {

    let char = {
        "name": "Administrator",
        "class": "Infiltrator",
        "alive": true,
        "health_base": "10",
        "stamina_base": "3",
        "attack": "3",
        "defense": "2",
        "accuracy": "3",
        "evasion": "2",

        "effects": {
        },

        "skills": {
            "1": {
                "name": "Digital Cosh",
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
                "name": "I.E.D.",
                "type": "Ranged",
                "target": 1,
                "number_of_hits": 1,

                "special_properties": {
                },
                "effect_on_enemy": {
                },
                "effect_on_self": {
                }
            },
            "3": {
                "name": "Phased Shot",
                "type": "Debuff",
                "target": 1,
                "number_of_hits": 0,

                "special_properties": {
                    "1": "Subtle"
                },
                "effect_on_enemy": {
                    "1": "Extradimensional Bullet"
                },
                "effect_on_self": {
                }
            }
        }
    }

    return char;
}