export default[
    //Lotus Berserker
    {   
        id: 0,
        weaponName: 'Lotus Berserker',
        stats:{
            atk: '428',
            crit: '234'
        },
        weaponType: 'Katana',
        weaponImage: require('../../assets/Images/Weapons/Katana/LotusBerserker.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Lotus/Construct_Lotus.png'),
        constructName: 'Lucia-Lotus',
        Ability: "Basic Attack DMG increases by 10%. Physical DMG increases by 5% for 2s after each Basic Attack. Can be stacked up to 5 times. Duration resets every time it is triggered."
        
    },
    //Inverse Chimera
    {   
        id: 1,
        weaponName: 'Inverse Chimera',
        stats:{
            atk: '425',
            crit: '235'
        },
        weaponType: 'Saw',
        weaponImage: require('../../assets/Images/Weapons/Saw/InverseChimera.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Storm/Construct_Storm.png'),
        constructName: 'Nanami-Storm',
        Ability: "Attacks have a 20% chance to inflict Breach, dealing 2% Physical DMG per second for 3s. The chance is doubled if the enemy's DEF has been reduced. Can be stacked up to 10 times. Duration resets every time it is triggered. Physical DMG increases by 10% when attacking a Breached enemy."
        
    },
    // Type Zero
    {   
        id: 2,
        weaponName: 'Type Zero',
        stats:{
            atk: '415',
            crit: '249'
        },
        weaponType: 'Levi Gun',
        weaponImage: require('../../assets/Images/Weapons/LeviGuns/TypeZero.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Eclipse/Construct_Eclipse.png'),
        constructName: 'Liv-Eclipse',
        Ability: "Laser Shot's Extra DMG increases by 50%. Gains 15% ATK after a 3-Ping for 5s. Duration resets every time it is triggered."
        
    },
    // Inverse-Shadow
    {   
        id: 3,
        weaponName: 'Inverse-Shadow',
        stats:{
            atk: '445',
            crit: '226'
        },
        weaponType: 'Katana',
        weaponImage: require('../../assets/Images/Weapons/Katana/Inverse-Shadow.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Dawn/Construct_Dawn.png'),
        constructName: 'Lucia-Dawn',
        Ability: 'Elemental DMG increases by 5% for 4s when a Signal Orb skill is performed. Can be stacked up to 4 times. Signature Move increases Extra DMG Bonus by 10% for 10s. Both duration will reset every time it is triggered.'
        
    },
    // Benediction
    {   
        id: 4,
        weaponName: 'Benediction',
        stats:{
            atk: '423',
            crit: '245'
        },
        weaponType: 'Levi Gun',
        weaponImage: require('../../assets/Images/Weapons/LeviGuns/Benediction.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Lux/Construct_Lux.png'),
        constructName: 'Eclipse-Lux',
        Ability: 'For every 12 orbs pinged, increases Extra DMG Bonus of the allies within 5m by 10% for 5s. Duration resets every time it is triggered. When attacking Imprisoned enemies, Extra DMG Bonus increases by 10%.'
        
    },
    //WolfFang
    {   
        id: 5,
        weaponName: 'Wolf Fang',
        stats:{
            atk: '458',
            crit: '249'
        },
        weaponType: 'Dual Guns',
        weaponImage: require('../../assets/Images/Weapons/DualGuns/WolfFang.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Palefire/Construct_Palefire.png'),
        constructName: 'Lee-Palefire',
        Ability: 'Extra DMG Bonus increases by 20% when attacking enemies in a burning area.'
        
    },
    // Soul Ripper
    {   
        id: 6,
        weaponName: 'Soul Ripper',
        stats:{
            atk: '458',
            crit: '261'
        },
        weaponType: 'Dagger',
        weaponImage: require('../../assets/Images/Weapons/Dagger/SoulRipper.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Nightblade/Construct_Nightblade.png'),
        constructName: 'Watanabe-Nightblade',
        Ability: 'Dealing a Critical Hit from behind inflicts Breach, dealing 50% Physical DMG per second for 3s. Duration resets every time it is triggered. Physical DMG increases by 20% when attacking a Breached enemy.'
        
    },
    //Ramiel
    {   
        id: 7,
        weaponName: 'Ramiel',
        stats:{
            atk: '471',
            crit: '254'
        },
        weaponType: 'Bow',
        weaponImage: require('../../assets/Images/Weapons/Bow/Ramiel.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Zero/Construct_Zero.png'),
        constructName: 'Bianca-Zero',
        Ability: "Signature Move's Extra DMG Bonus increases by 15%. Signature Move reduces its target's Physical Resistance by 2% for 5% per hit. Can be stacked up to 8 times. Duration resets every time it is triggered."
        
    },
    //BerserkFusion
    {   
        id: 8,
        weaponName: 'Berserk Fusion',
        stats:{
            atk: '458',
            crit: '249'
        },
        weaponType: 'Cannon',
        weaponImage: require('../../assets/Images/Weapons/Cannon/BerserkFusion.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Blast/Construct_Blast.png'),
        constructName: 'Karenina-Blast',
        Ability: "Physical DMG increases by 10%. After a 3-Ping, Basic Attack's Extra DMG Bonus increases by 30% for 5s. Duration resets every time it is triggered."
        
    },
    //Dragon Wind
    {   
        id: 9,
        weaponName: 'Dragon Wind',
        stats:{
            atk: '406',
            crit: '253'
        },
        weaponType: 'LeviGuns',
        weaponImage: require('../../assets/Images/Weapons/LeviGuns/DragonWind.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Luminance/Construct_Luminance.png'),
        constructName: 'Liv-Luminance',
        Ability: "Basic Attacks have a 10% chance to inflict Frail, reducing the target's ATK by 10% for 5s. Duration resets every time it is triggered. Attacking a Frail enemy has a 10% chance to restore 1 Signal Orb. 6s coolsown."
        
    },
    //ZeroScale
    {   
        id: 10,
        weaponName: 'ZeroScale',
        stats:{
            atk: '445',
            crit: '254'
        },
        weaponType: 'Dual Guns',
        weaponImage: require('../../assets/Images/Weapons/DualGuns/ZeroScale.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Entropy/Construct_Entropy.png'),
        constructName: 'Lee-Entropy',
        Ability: "Increases Skill - Space Lord's Extra DMG Bonus by 10%. Physical DMG is increased by 15% for 5s after a 3-Ping. Duration resets every time it is triggered."
        
    },
    // Fusion Dragon
    {   
        id: 11,
        weaponName: 'Fusion Dragon',
        stats:{
            atk: '450',
            crit: '253'
        },
        weaponType: 'Cannon',
        weaponImage: require('../../assets/Images/Weapons/Cannon/FusionDragon.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Ember/Construct_Ember.png'),
        constructName: 'Karenina-Ember',
        Ability: "Fire DMG increases by 10%. Pinging Red Orbs increases Fire DMG by 10% for 5s. Duration resets every time it is triggered."
        
    },
    //Hydro Heat
    {   
        id: 12,
        weaponName: 'Hydro Heat',
        stats:{
            atk: '436',
            crit: '230'
        },
        weaponType: 'Saw',
        weaponImage: require('../../assets/Images/Weapons/Saw/HydroHeat.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Pulse/Construct_Pulse.png'),
        constructName: 'Nanami-Pulse',
        Ability: "Attacks have a 10% chance to reduce the target's Fire Resistance by 5% for 5s. 8s cooldown against the same target. A Signature Move increases Fire DMG by 20% and doubles the chance of reducing the target's Resistance."
        
    },
    //Darkness
    {   
        id: 13,
        weaponName: 'Darkness',
        stats:{
            atk: '445',
            crit: '226'
        },
        weaponType: 'Greatsword',
        weaponImage: require('../../assets/Images/Weapons/Greatsword/Darkness.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Tenebrion/Construct_Tenebrion.png'),
        constructName: 'Kamui-Tenebrion',
        Ability: "After a 3-Ping, Physical DMG and Dark DMG dealt increase by 20% for 5s. Duration resets every time it is triggered."
        
    },
    //Sakura
    {   
        id: 14,
        weaponName: 'Sakura',
        stats:{
            atk: '447',
            crit: '239'
        },
        weaponType: 'Katana',
        weaponImage: require('../../assets/Images/Weapons/Katana/Sakura.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/CrimsonAbyss/Construct_CrimsonAbyss.png'),
        constructName: 'Lucia-Crimson Abyss',
        Ability: "For each orb pinged. Physical DMG increases by 2% for 5s. Can be stacked up to 10 times. Duration resets every time it is triggered. Gains an extra Swordwave Orb in Swordwave Mode. 10s cooldown."
        
    },
    // Big Kamui
    {   
        id: 15,
        weaponName: 'Big Kamui',
        stats:{
            atk: '436',
            crit: '230'
        },
        weaponType: 'Greatsword',
        weaponImage: require('../../assets/Images/Weapons/Greatsword/BigKamui.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Bastion/Construct_Bastion.png'),
        constructName: 'Kamui-Bastion',
        Ability: "Physical DMG increases by 15%. Upon a successful parry. Extra DMG Bonus of the next skill increases by 30%."
        
    },
    // Peacemaker
    {   
        id: 16,
        weaponName: 'Peacemaker',
        stats:{
            atk: '436',
            crit: '230'
        },
        weaponType: 'Dagger',
        weaponImage: require('../../assets/Images/Weapons/Dagger/Peacemaker.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Astral/Construct_Astral.png'),
        constructName: 'Watanabe-Astral',
        Ability: "Physical DMG increases by 15%. Upon a successful parry. Extra DMG Bonus of the next skill increases by 30%."
        
    },
    //Purple Peony
    {   
        id: 17,
        weaponName: 'Purple Peony',
        stats:{
            atk: '425',
            crit: '249'
        },
        weaponType: 'Scythe',
        weaponImage: require('../../assets/Images/Weapons/Scythe/PurplePeony.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Brilliance/Construct_Brilliance.png'),
        constructName: 'Ayla-Brilliance',
        Ability: "Extra DMG Bonus increases by 2% for 5s when dealing DMG to enemies with Super Armor. Can be stacked up to 3 times. Duration resets every time it is triggered. Stuns an enemy for 2s when breaking its Super Armor. 10s cooldown for the same target. Physical DMG increases by 15% for 7s when releasing Vector Cube. Duration resets every time it is triggered."
        
    },
    // Tonitrus
    {   
        id: 18,
        weaponName: 'Tonitrus',
        stats:{
            atk: '476',
            crit: '249'
        },
        weaponType: 'Bow',
        weaponImage: require('../../assets/Images/Weapons/Bow/Tonitrus.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Veritas/Construct_Veritas.png'),
        constructName: 'Bianca-Veritas',
        Ability: "Lightning DMG is increased by 15%. When dealing Lightning DMG caused by skills to the same target 5 times, calls down a lightning strike that deals 150% Lightning DMG. 2s cooldown."
        
    },
    //Dual Guns
    {   
        id: 19,
        weaponName: 'Scion',
        stats:{
            atk: '436',
            crit: '244'
        },
        weaponType: 'Dua lGuns',
        weaponImage: require('../../assets/Images/Weapons/DualGuns/Scion.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Silverfang/Construct_Silverfang.png'),
        constructName: 'Sophia-Silverfang',
        Ability: "When picking up an Energy Ball, increases Extra DMG Bonus by 3% for 5s. Can be stacked up to 5 times. For every 5 Energy Balls picked up, gains an additional random Signal Orb and 10 Energy. 10s cooldown."
        
    },
    //St Elmo
    {   
        id: 20,
        weaponName: 'St Elmo',
        stats:{
            atk: '436',
            crit: '236'
        },
        weaponType: 'Scythe',
        weaponImage: require('../../assets/Images/Weapons/Scythe/StElmo.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Arclight/Construct_Arclight.png'),
        constructName: 'Chrome-Arclight',
        Ability: "Lightning DMG increases by 10%. During Signature Move, the number of Lightning Strikes needed to activate Core Passive is reduced to 3."
        
    },
    //Crimson Birch
    {   
        id: 21,
        weaponName: 'Crimson Birch',
        stats:{
            atk: '463',
            crit: '234'
        },
        weaponType: 'Katana',
        weaponImage: require('../../assets/Images/Weapons/Katana/CrimsonBirch.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Plume/Construct_Plume.png'),
        constructName: 'Lucia-Plume',
        Ability: "Ice DMG increases by 15%. DMG increases by 10% for 5s after a 3-Ping."
        
    },
    //Sariel
    {   
        id: 22,
        weaponName: 'Sariel',
        stats:{
            atk: '441',
            crit: '241'
        },
        weaponType: 'Katana',
        weaponImage: require('../../assets/Images/Weapons/Katana/Sariel.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Rozen/Construct_Rozen.png'),
        constructName: 'Vera-Rozen',
        Ability: "Dark DMG increases by 15%. There is a 15% chance of unleashing a dark wave when attacking, dealing 75% Dark DMG. 0.5s cooldown."
        
    },
    // Thanatos
    {   
        id: 23,
        weaponName: 'Thanatos',
        stats:{
            atk: '493',
            crit: '249'
        },
        weaponType: 'Greatsword(T)',
        weaponImage: require('../../assets/Images/Weapons/Greatsword/Thanatos(T).png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Crocotta/Construct_Crocotta.png'),
        constructName: 'Camu-Crocotta',
        Ability: "Extra DMG Bonus increases by 15%. When Camu: Crocotta enters Berserk, Thanatos will continuously increase Dark DMG for characters on the battlefield by 10%."
        
    },

    //Gungnir
    {   
        id: 24,
        weaponName: 'Gungnir',
        stats:{
            atk: '458',
            crit: '230'
        },
        weaponType: 'SpearShield',
        weaponImage: require('../../assets/Images/Weapons/SpearShield/Gungnir.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Arctic/Construct_Arctic.png'),
        constructName: 'Rosetta-Rigor',
        Ability: 'Damaging a target will reduce their Physical DEF by 20% for 8s. The duration is refreshed each time this effect is triggered. Dealing damage with small/medium/wide-area electromagnetic beam also applies a damage over time effect for 8s, dealing Physical DMG equal to 25% / 50% / 100% of ATK every second.'
        
    },
    //Baji
    {   
        id: 25,
        weaponName: 'Baji',
        stats:{
            atk: '467',
            crit: '236'
        },
        weaponType: 'Gauntlet',
        weaponImage: require('../../assets/Images/Weapons/Gauntlet/Baji.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Kirin/Construct_Kirin.png'),
        constructName: 'Changyu-Kirin',
        Ability: "Ice DMG increases by 15%. When triggering Circulating Tide or QTE skill, leaves an Ice Mirror for 8s."
        
    },
    // Qinghe
    {   
        id: 26,
        weaponName: 'Qinghe',
        stats:{
            atk: '506',
            crit: '261'
        },
        weaponType: 'Dragon Spear (T)',
        weaponImage: require('../../assets/Images/Weapons/DragonSpear/Qinghe(T).png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Peafowl/Construct_Peafowl.png'),
        constructName: 'Qu-Peafowl',
        Ability: "Physical DMG increases by 20%. Huiyu's attack frequency increases by 50% and gains a new skill: Curse. Huiyu transforms into an amulet and attaches itself to the target, dealing up to 210% Physical DMG. After a short delay, deals 240% Physical DMG again. Damage scales with Qu's ultimate level."
        
    },
    //Ozma
    {   
        id: 27,
        weaponName: 'Ozma',
        stats:{
            atk: '480',
            crit: '261'
        },
        weaponType: 'Amplifier',
        weaponImage: require('../../assets/Images/Weapons/Amplifier/Ozma.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Laurel/Construct_Laurel.png'),
        constructName: 'Luna-Laurel',
        Ability: "Dark DMG increases by 15%. The fourth spike after Annihilation Orbs are expended does an additional 100% Dark AOE DMG."
        
    },
    //VirtuousContractKai
    {   
        id: 28,
        weaponName: 'VirtuousContractKai',
        stats:{
            atk: '467',
            crit: '261'
        },
        weaponType: 'NierAutomata',
        weaponImage: require('../../assets/Images/Weapons/NierAutomata/VirtuousContractKai.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/2B/Construct_2B.png'),
        constructName: '2B-Unknown',
        Ability: "Physical DMG increases by 15%. Leader Bonus Effect is doubled. Gains 160 Stance Stability points when swapping into battle and enters Combat Stance with 2 stacks of Data Correction."
        
    },
    //CruelOathKai
    {   
        id: 29,
        weaponName: 'CruelOathKai',
        stats:{
            atk: '445',
            crit: '254'
        },
        weaponType: 'NierAutomata',
        weaponImage: require('../../assets/Images/Weapons/NierAutomata/CruelOathKai.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/9S/Construct_9S.png'),
        constructName: '9S-Unknown',
        Ability: "Physical DMG and Healing increases by 15%. Leader Bonus Effect is doubled. When Overclock Indicator is successfully triggered, 2B and A2's swapping cooldown is reduced by 1s and also gains 1 Signal Orb."
        
    },
    //Type40LanceKai
    {   
        id: 30,
        weaponName: 'Type40LanceKai',
        stats:{
            atk: '458',
            crit: '249'
        },
        weaponType: 'NierAutomata',
        weaponImage: require('../../assets/Images/Weapons/NierAutomata/Type4OLanceKai.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/A2/Construct_A2.png'),
        constructName: 'A2-Unknown',
        Ability: "Leader Bonus Effect is doubled. A2 can enter Berserk Mode with 40% POD: Shield gauge, as well as gaining 10% Attack DMG increase. Press and hold the Basic Attack button within 2s from dodging to unleash an empowered attack, dealing 370% Physical DMG. Press the button again to unleash a follow-up attack, dealing 720% Physical DMG (DMG is scaled with Basic Attack skill level). All Yellow Orbs will be consumed to charge the lance, with each Yellow Orb dealing 100% Physical DMG (Up to 300%), and granting 3% POD: Shield. Consuming any amount of Yellow Orb for the charge grants an increased 10% Physical DMG for 15s."
        
    },
    //Auncel
    {   
        id: 31,
        weaponName: 'Auncel',
        stats:{
            atk: '454',
            crit: '249'
        },
        weaponType: 'Rifle',
        weaponImage: require('../../assets/Images/Weapons/Rifle/Auncel.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Fate/Construct_Fate.png'),
        constructName: 'Wanshi-Fate',
        Ability: "Ice DMG increases by 15%. Gains Condensed Frost (Ice DMG increases by 10%) for 8s after dodging with Bloom Shot."
        
    },
    // MistressOfTheWoods
    {   
        id: 32,
        weaponName: 'Mistress Of The Woods',
        stats:{
            atk: '471',
            crit: '261'
        },
        weaponType: 'Cello Blade (T)',
        weaponImage: require('../../assets/Images/Weapons/CelloBlade/MistressofTheWoods(T).png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Tempest/Construct_Tempest.png'),
        constructName: 'Selena-Tempest',
        Ability: "Physical DMG increases by 20%. Huiyu's attack frequency increases by 50% and gains a new skill: Curse. Huiyu transforms into an amulet and attaches itself to the target, dealing up to 210% Physical DMG. After a short delay, deals 240% Physical DMG again. Damage scales with Qu's ultimate level."
        
    },
    //Apollo
    {   
        id: 33,
        weaponName: 'Apollo',
        stats:{
            atk: '446',
            crit: '253'
        },
        weaponType: 'Gunblade',
        weaponImage: require('../../assets/Images/Weapons/Gunblade/Apollo.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Glory/Construct_Glory.png'),
        constructName: 'Chrome-Glory',
        Ability: "Ice DMG increases by 15%. After a QTE or a 3-Ping, triggers Etching Frost (Reduces target's Ice Resistance)."
        
    },
    //CollabBot
    {   
        id: 34,
        weaponName: 'Growl',
        stats:{
            atk: '454',
            crit: '251'
        },
        weaponType: 'Collab Bot',
        weaponImage: require('../../assets/Images/Weapons/CollabBot/Growl.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/XXI/Construct_XXI.png'),
        constructName: '21-XXI',
        Ability: "Collab Bot unleashes a Positional Wave whenever No.21 performs a Shadow Prism attack, QTE or breaking out of incoming attacks. The effect can only be triggered once every 1s.\n\nPositional Wave deals 50% Dark DMG to all enemies struck (Damage scales with the Core Passive Level). Friendly targets in the Positional Wave gain 3s of Energy Suppression. Energy Suppression: When dealing Dark DMG, enemies have healing effectiveness reduced by 100% for 2s. The Collab Bot activates Fortress Mode whenever the Positional Wave detonates 4 Twilight Matrices at the same time or when No.21 enters Matrix, unleashing a high energy pulse, dealing 400% of No.21's Attack as Dark DMG. The effect can only be triggered once every 12s (Damage scales with the Core Passive level). Shadow Prism, Twilight Matrices, and Resonance Pulses DMG increases by 15%."
        
    },
    //BannerSpear
    {   
        id: 35,
        weaponName: 'Phoenix',
        stats:{
            atk: '454',
            crit: '251'
        },
        weaponType: 'Banner Spear',
        weaponImage: require('../../assets/Images/Weapons/BannerSpear/Phoenix.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Flare/Construct_Flare.png'),
        constructName: 'Vera-Flare',
        Ability: "Lightning DMG increases by 15%. Triggering QTE and Signature Move will grant Electric Charge. When QTE Battle Standard is on the field, switching in Vera consumes all Electric Charges to perform a Thunderfall and gains an Electric Charge."
        
    },
    // Durandal
    {   
        id: 36,
        weaponName: 'Durandal',
        stats:{
            atk: '467',
            crit: '249'
        },
        weaponType: 'Chain Sword (T)',
        weaponImage: require('../../assets/Images/Weapons/ChainSword/Durandal(T).png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Theatrical/Construct_Theatrical.png'),
        constructName: 'Rolnad-Theatrical Flame',
        Ability: "Fire DMG increases by 10%. Dodge cooldown is removed. Gains 1 Follow-Up 2 Dazzling Blade Orb when successfully dodging attacks. Triggering it will immediately activate the attack in the direction of the movement stick and increases DMG by 10% for 8s. During Trick Climax, the Bluff points generated are instead converted to 10 Trickery."
        
    },
    //Scepter
    {   
        id: 37,
        weaponName: 'Hestia',
        stats:{
            atk: '476',
            crit: '249'
        },
        weaponType: 'Scepter',
        weaponImage: require('../../assets/Images/Weapons/Scepter/Hestia.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Solaeter/Construct_Solaeter.png'),
        constructName: 'Liv-Solaeter',
        Ability: "DMG increases by 10%. Gains 50% Prayer when swapping into battle. Sincerity Oath DMG is increased by 20% (Up to 100%) towards enemies affected by Holy Words."
        
    },
    //FluteSword
    {   
        id: 38,
        weaponName: 'Sarastro',
        stats:{
            atk: '463',
            crit: '254'
        },
        weaponType: 'Flute Sword',
        weaponImage: require('../../assets/Images/Weapons/FluteSword/Sarastro.png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Capriccio/Construct_Capriccio.png'),
        constructName: 'Selena-Capriccio',
        Ability: "For every after-image produced by Selena: Capriccio on the field, Extra DMG Bonus of 5% is granted. Stacks up to 6 times. Additionally, when Selena: Capriccio releases any Ensemble or Echo, she will gain 12 Energy."
        
    },
    //Boundless
    {   
        id: 39,
        weaponName: 'Boundless',
        stats:{
            atk: '463',
            crit: '269'
        },
        weaponType: 'DragonMaelstrom(T)',
        weaponImage: require('../../assets/Images/Weapons/DragonMaelstrom/Boundless(T).png'),
        rarity: '6',
        signatureConstruct: require('../../assets/Images/Ornate/Construct_Ornate.png'),
        constructName: 'Pulao-Ornate Bell',
        Ability: "Physical damage +15%, Ultimate damage +25%.\nEvery Dragon Force Combo performed will increase the next Spirit Blade - Starfall Break Critical Rate by 30% (Up to 2 stacks)."
        
    },
    

]