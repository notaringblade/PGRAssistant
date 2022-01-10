export default [
  //Lotus
  {
    construct_Name: "Lucia ",
    construct_Model: "Lotus",
    construct_Rank: "B",
    construct_Image: require("../../assets/Images/Lotus/Construct_Lotus.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (80%) Fire (20%)",
    id: "1",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Thrusts forward and pulls the target, dealing 266.72% / 533.32% / 800% Physical DMG based on the number of orbs pinged",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing:
        "Quickly strikes once and knocks the target airborne, dealing 150% / 300% / 450% Physical DMG based on the number of orbs pinged.",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing:
        "Deals 100% / 200% / 300% Physical DMG and flares up weapon, all attacks deal 10% / 15% / 20% extra Fire DMG within 4/4/6 seconds based on the number of orbs pinged.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks of Lotus Quick Blade, dealing 540% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Unleashes Lotus Flurry to deal quick slashes to enemies ahead. Each slash deals 140% Physical DMG. Finishes the move by striking enemies with a heavy blow that deals 1000% Physical DMG.",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "QTE: Lucia strikes at enemies with her Dual Blades, dealing 1110% Physical DMG in total.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Red Orb within 4 seconds of any 3-Ping will make Lucia enter Burst mode. Basic Attacks will be replaced with Dual Blades. Lotus - Dual Blades: Launches consecutive attacks at enemies, dealing 1080% Physical DMG in total.",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),
      leader: "Attack of all Attacker Constructs increases by 10%.",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),
      ssRank:
        "Passive: When attacking airborne targets, deal extra 20% Physical DMG per attack.",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),
      sssRank: "Passive: Under Burst mode, Extra DMG Bonus increases by 15%.",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),
      sssPlusRank: "Passive: Extra DMG Bonus of Basic Attack increases by 15%.",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill:
        "Pinging a Red Orb within 4 seconds after any 3-Ping will make Lucia Burst. Lucia then replaces Basic Attacks with Dual Blades.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "DPS",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "Support(Plume/Ice)",
        image1: require('../../assets/Images/Memories/ZuwenYan/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/ZuwenYan/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Erwin/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/ZuwenYan/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/ZuwenYan/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Erwin/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Storm
  {
    construct_Name: "Nanami ",
    construct_Model: "Storm",
    construct_Rank: "B",
    construct_Image: require("../../assets/Images/Storm/Construct_Storm.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (100%)",
    id: "2",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Storm/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Storm/YellowOrb.png"),
      yellowPing:
        "Spins and cuts enemies rapidly, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged to nearby enemies.",

      bluePingIcon: require("../../assets/Images/Storm/BlueOrb.png"),
      bluePing:
        "Bursts and pulls enemies. Based on the number of orbs pinged, deals 100% / 200% / 300% Physical DMG, reduces DEF of targets hit by 10% / 20% / 30%, and increases own Physical Resistance by 20% / 40% / 60% for 4/4.5/5 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks with a sawblade, dealing 800% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Storm/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Deploys an energy barrier to resist attacks from enemies and protect allies within the area. The barrier explodes after 5 seconds, dealing 1000% Physical DMG to enemies.",
      signatureIcon: require("../../assets/Images/Storm/Signature.png"),

      qte: "QTE: Nanami spins and slices the target, dealing 770% Physical DMG in total and knocks down the target.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Yellow Orb after any 3-Ping will cause Nanami to use EX - Storm of Cuts and launch 8 consecutive attacks at nearby targets, dealing 100% Physical DMG per attack.",
      coreIcon: require("../../assets/Images/Storm/Core.png"),

      leader: "Passive: DEF of all party members increases by 15%.",
      leaderIcon: require("../../assets/Images/Storm/Leader.png"),

      ssRank:
        "Passive: Extra DMG Bonus of Basic Attack increases by 15%. Ability to draw Aggro increases by 20% when attacking.",
      ssRankIcon: require("../../assets/Images/Storm/SS.png"),

      sssRank:
        "Passive: While your core passive is active, Physical Resistance increases by 30%.",
      sssRankIcon: require("../../assets/Images/Storm/SSS.png"),

      sssPlusRank:
        "Passive: After using Signature - Crystal Barrier, Extra DMG Bonus increases by 20% for 5 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Storm/SSSPlus.png"),
      hiddenSkill:
        "Core Passive: When pinging a Yellow Orb after any 3-Ping, Nanami will use EX - Slash Storm and launch 8 consecutive attacks at surrounding targets, dealing * Physical DMG per attack.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/PhilipII/image1.png'),
        memory1: 'Philip II',
        image2: require('../../assets/Images/Memories/DaVinci/image2.png'),
        memory2: 'Da Vinci',
        image3: require('../../assets/Images/Memories/PhilipII/image3.png'),
        memory3: 'Philip II',
        image4: require('../../assets/Images/Memories/DaVinci/image1.png'),
        memory4: 'Da Vinci',
        image5: require('../../assets/Images/Memories/DaVinci/image2.png'),
        memory5: 'Da Vinci',
        image6: require('../../assets/Images/Memories/DaVinci/image3.png'),
        memory6: 'Da Vinci',
      },
      set2: {
        set2Name: "",
        // image1: require('../../assets/Images/Memories/Patton/image1.png'),
        // memory1: 'Patton',
        // image2: require('../../assets/Images/Memories/Patton/image2.png'),
        // memory2: 'Patton',
        // image3: require('../../assets/Images/Memories/Patton/image3.png'),
        // memory3: 'Patton',
        // image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        // memory4: 'Frederick',
        // image5: require('../../assets/Images/Memories/Patton/image2.png'),
        // memory5: 'Patton',
        // image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        // memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Eclipse
  {
    construct_Name: "Liv ",
    construct_Model: "Eclipse",
    construct_Rank: "B",
    construct_Image: require("../../assets/Images/Eclipse/Construct_Eclipse.png"),
    construct_Type: "Support",
    construct_Element: "Physical (100%)",
    id: "3",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Eclipse/RedOrb.png"),
      redPing:
        "Orders weapon to fire laser beam, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Eclipse/YellowOrb.png"),
      yellowPing:
        "Deploys a black hole at the target area that pulls nearby enemies in. Based on the number of orbs pinged, the black hole lasts 1/2/3 seconds and enemies in contact with the black hole take 90% / 150% / 210% Physical DMG, it then explodes afterwards and deals 80% / 160% / 240% Physical DMG.",

      bluePingIcon: require("../../assets/Images/Eclipse/BlueOrb.png"),
      bluePing:
        "Unleashes energy that knocks back enemies. Based on the number of orbs pinged, deals 100% / 200% / 300% Physical DMG and heals nearby allies for 40% / 80% / 120% of your attack. Physical DMG increases by 16% / 32% / 48% for 5 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Summons laser beams to strike at the target, dealing 640% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Eclipse/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Summons beams to consecutively strike at the target area for 2 seconds. Each beam deals 70% Physical DMG.",
      signatureIcon: require("../../assets/Images/Eclipse/Signature.png"),

      qte: "QTE: Unleashes energy wave to heal nearby allies for 20% of your maximum HP and deals 200% Physical DMG to nearby enemies.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: After any 3-Ping, the next Red Orb skill will unleash laser beams that deal 800% Physical DMG.",
      coreIcon: require("../../assets/Images/Eclipse/Core.png"),

      leader: "Passive: HP of all party members increases by 10%.",
      leaderIcon: require("../../assets/Images/Eclipse/Leader.png"),

      ssRank: "Passive: Gains 3 Blue Orbs after using a Signature Move.",
      ssRankIcon: require("../../assets/Images/Eclipse/SS.png"),

      sssRank:
        "Passive: When Liv is in reserve, Physical DMG of all allies on the field increases by 10%.",
      sssRankIcon: require("../../assets/Images/Eclipse/SSS.png"),

      sssPlusRank:
        "Passive: After using Signature - Azure Starfall, Extra DMG Bonus increases by 20% for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Eclipse/SSSPlus.png"),
      hiddenSkill:
        "Pinging a Red Orb after any 3-Ping will trigger core lasers to deal 10 times of Physical DMG to a wide area.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/PhilipII/image1.png'),
        memory1: 'PhilipII',
        image2: require('../../assets/Images/Memories/DaVinci/image2.png'),
        memory2: 'DaVinci',
        image3: require('../../assets/Images/Memories/PhilipII/image3.png'),
        memory3: 'PhilipII',
        image4: require('../../assets/Images/Memories/DaVinci/image1.png'),
        memory4: 'DaVinci',
        image5: require('../../assets/Images/Memories/DaVinci/image2.png'),
        memory5: 'DaVinci',
        image6: require('../../assets/Images/Memories/DaVinci/image3.png'),
        memory6: 'DaVinci',
      },
      set2: {
        set2Name: "",
        // image1: require('../../assets/Images/Memories/Patton/image1.png'),
        // memory1: 'Patton',
        // image2: require('../../assets/Images/Memories/Patton/image2.png'),
        // memory2: 'Patton',
        // image3: require('../../assets/Images/Memories/Patton/image3.png'),
        // memory3: 'Patton',
        // image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        // memory4: 'Frederick',
        // image5: require('../../assets/Images/Memories/Patton/image2.png'),
        // memory5: 'Patton',
        // image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        // memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  // Dawn
  {
    construct_Name: "Lucia ",
    construct_Model: "Dawn",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Dawn/Construct_Dawn.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (40%) Lightning (60%)",
    id: "4",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Dawn/RedOrb.png"),
      redPing:
        "Launches a flurry of attacks that deals 40% / 80% / 144% Physical DMG 5/5/5 times in a row based on the number of orbs pinged. Converts Physical DMG to Lightning DMG if this is a 3-Ping. Gains Super Armor while using the skill.",

      yellowPingIcon: require("../../assets/Images/Dawn/YellowOrb.png"),
      yellowPing:
        "Deploys a lightning field. Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged and marks the target. Mark duration refreshes when Marks stack (Max 3 Marks per target). The field lasts 3/4/5 seconds and attacks enemies in the area once per second, dealing 20% / 30% / 40% Lightning DMG.",

      bluePingIcon: require("../../assets/Images/Dawn/BlueOrb.png"),
      bluePing:
        "Quickly strikes the target, dealing 80% / 160% / 240% Lightning DMG based on the number of orbs pinged. Then pulls the target towards you, dealing 80% / 160% / 240% Physical DMG and marking the target. Mark duration refreshes when Marks stack (Max 3 Marks per target).",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks with Lotus - Quick Blade, dealing 650% Physical DMG total.",
      basicAttackIcon: require("../../assets/Images/Dawn/BasicAttack.png"),

      signature:
        "Signature Move: Costs 50 Energy. Using basic attacks and skills will carry out an additional attack with Lotus Blade that deals 25% Lightning DMG. Lotus Blade lasts 15 seconds. Reusing this skill while it is still active will refresh the duration.",
      signatureIcon: require("../../assets/Images/Dawn/Signature.png"),

      qte: "QTE: Lucia uses Scattering Petals, dealing 210% Physical DMG and 570% Lightning DMG to the target.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Lightning Lure: When attacking a marked enemy, based on the number of Marks on the enemy, there is 25% / 50% / 75% chance for the target to be struck with a 60% Lightning DMG bolt.",
      coreIcon: require("../../assets/Images/Dawn/Core.png"),

      leader: "Passive: Attack of all Attacker Constructs increases by 10%.",
      leaderIcon: require("../../assets/Images/Dawn/Leader.png"),

      ssRank:
        "Passive: Within the Lightning Field, Lightning DMG increases by 20%.",
      ssRankIcon: require("../../assets/Images/Dawn/SS.png"),

      sssRank: "Passive: Extra DMG of Lightning Lure increases by 20%.",
      sssRankIcon: require("../../assets/Images/Dawn/SSS.png"),

      sssPlusRank:
        "Passive: Extra DMG Bonus increases by 15% for 10 seconds after performing a Signature Move.",
      sssPlusRankIcon: require("../../assets/Images/Dawn/SSSPlus.png"),
      hiddenSkill:
        "Marks the enemy with Blue Orb or Yellow Orb skills. Attacking an enemy marked by Lucia has a chance to launch lightning attacks that deal Lightning DMG.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },

    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },
  //Lux
  {
    construct_Name: "Liv ",
    construct_Model: "Lux",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Lux/Construct_Lux.png"),
    construct_Type: "Support",
    construct_Element: "Physical (20%) Physical (80%)",
    id: "15",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Lux/RedOrb.png"),
      redPing:
        "Fires the ion cannon once, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Lux/YellowOrb.png"),
      yellowPing:
        "Creates a cube at the target location. Inflicts Matrix Effect on the target inside the cube for 1/2/3 seconds based on the number of orbs pinged, dealing 60% / 90% / 120% Lightning DMG and pulling enemies in. The cube explodes when it dissipates, dealing 60% / 120% / 180% Lightning DMG.",

      bluePingIcon: require("../../assets/Images/Lux/BlueOrb.png"),
      bluePing:
        "Deploys an ion wall at the target location that shocks enemies passing through. The ion wall lasts 2/4/6 seconds. Enemies take 60% Lightning DMG per second and their Movement Speed reduces by 20% / 40% / 80% based on the number of orbs pinged. The target will be marked for 8 seconds after being hit. Mark duration refreshes when Mark is inflicted again.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive lightning attacks, dealing 650% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Lux/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Deploys a lightning field. Allies within the field gain 1 Signal Orb per second and their attack increases by 20%. Movement Speed of the enemies within the area reduces by 50%.",
      signatureIcon: require("../../assets/Images/Lux/Signature.png"),

      qte: "QTE: Liv uses Ex - Lightning Lure to deal 200% Lightning DMG to the enemies in an area, then leaves an ion field that heals the allies within it for 25% of Lux’s attack.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: When Basic Attacks hit marked enemies, there is a 30% chance to trigger Lightning Lure and deal 60% Lightning DMG. Red Orbs have 30% / 60% / 100% of chance to trigger Lightning Lure. After triggering 4 Lightning Lures, the next Lightning Lure will summon a Ex - Lightning Lure that deals 200% Lightning DMG and heals allies in the area for 40% of Lux’s attack.",
      coreIcon: require("../../assets/Images/Lux/Core.png"),

      leader: "Increases all party member’s HP by 5% and ATK by 5%.",
      leaderIcon: require("../../assets/Images/Lux/Leader.png"),

      ssRank:
        "Passive: Within the ion field created by Ex - Lightning Lure, Lightning DMG of allies increases by 20%.",
      ssRankIcon: require("../../assets/Images/Lux/SS.png"),

      sssRank: "Passive: Extra DMG Bonus of Lightning Lure increases by 25%.",
      sssRankIcon: require("../../assets/Images/Lux/SSS.png"),

      sssPlusRank:
        "Passive: Lightning resistance of the target within Sanctum cube reduces by 15%.",
      sssPlusRankIcon: require("../../assets/Images/Lux/SSSPlus.png"),
      hiddenSkill:
        "Attacking a marked enemy with Basic or Red Orb Attacks has a chance to trigger Lightning Lure. When triggered for the 5th time, Ex - Lightning Lure will be used and deal Lightning DMG to enemies and heal the allies in the area.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Palefire
  {
    construct_Name: "Lee ",
    construct_Model: "Palefire",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Palefire/Construct_Palefire.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (60%) Fire (40%)",
    id: "5",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Palefire/RedOrb.png"),
      redPing:
        "Fires 15 quick shots at the target that deals 16% / 32% / 48% Physical DMG per shot based on the number of orbs pinged. Gains Super Armor while using this skill.",

      yellowPingIcon: require("../../assets/Images/Palefire/YellowOrb.png"),
      yellowPing:
        "Fires a blasting round at the target that explodes on hit and deals 100% / 150% / 200% Fire DMG based on the number of orbs pinged. Creates a burning area for 3/4/5 seconds that deals 12% / 24% / 36% Fire DMG per 0.5 seconds to the enemies inside. Attacking enemies in the burning area deals extra 12% Fire DMG for up to once per 0.1 seconds.",

      bluePingIcon: require("../../assets/Images/Palefire/BlueOrb.png"),
      bluePing:
        "Fires an explosive round at the target, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",

      // Skills
      basicAttack:
        "Basic Attack: Fires consecutive shots, dealing 880% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Palefire/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Fires consecutive shots at nearby enemies, dealing 800% Physical DMG in total, then deals 1200% Fire DMG with the last shot.",
      signatureIcon: require("../../assets/Images/Palefire/Signature.png"),

      qte: "QTE: Lee shoots at the target with dual guns, dealing 330% Physical DMG and inflicts Electrocute. Electrocute: Target takes extra 20% Physical DMG for 5 seconds when being attacked. Can be triggered for up to 15 times within the duration.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: After pinging a Yellow Orb, the next Red Orb skill will inflict Blast. Blast: Bullets explode after hitting the target, dealing 40% Fire DMG to enemies in the area.",
      coreIcon: require("../../assets/Images/Palefire/Core.png"),

      leader:
        "Increases all party member’s Physical DMG by 5% and Elemental DMG by 5%.",
      leaderIcon: require("../../assets/Images/Palefire/Leader.png"),

      ssRank:
        "Passive: When hitting enemies in the burning area of Infernal Shot, Extra DMG Bonus increases by 15%.",
      ssRankIcon: require("../../assets/Images/Palefire/SS.png"),

      sssRank:
        "Passive: Extra DMG Bonus increases by 15% before taking any damage. Has a cooldown of 10 seconds.",
      sssRankIcon: require("../../assets/Images/Palefire/SSS.png"),

      sssPlusRank:
        "Passive: Extra DMG Bonus of Core Passive - Controlling Bullet increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/Palefire/SSSPlus.png"),
      hiddenSkill:
        "After pinging a Yellow Orb, next Red Orb will inflict Blast and deal Fire DMG to a small area.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Nightblade
  {
    construct_Name: "Watanabe ",
    construct_Model: "Nightblade",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Nightblade/Construct_Nightblade.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (100%)",
    id: "6",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Nightblade/RedOrb.png"),
      redPing:
        "Launches a 4-combo attack at the enemies ahead, dealing 160% / 320% / 480% Physical DMG based on the number of orbs pinged. Launches an extra blow that deals 160% Physical DMG if this is a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Nightblade/YellowOrb.png"),
      yellowPing:
        "Thrusts and pierces the enemies ahead, dealing 160% / 320% / 480% Physical DMG to enemies in the path based on the number of orbs pinged. Launches an extra blow that deals 120% Physical DMG if this is a 3-Ping.",

      bluePingIcon: require("../../assets/Images/Nightblade/BlueOrb.png"),
      bluePing:
        "Carves target with a blade, dealing 80% / 160% / 240% Physical DMG in the initial stab and 70% / 140% / 210% Physical DMG when pulling the blade out based on the number of orbs pinged. Becomes a critical strike if the enemy's back is attacked.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks with dual blades, dealing 740% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Nightblade/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Attacks enemies with a blade for 3000% Physical DMG in total.",
      signatureIcon: require("../../assets/Images/Nightblade/Signature.png"),

      qte: "QTE: Watanabe lands from the air and thrusts, dealing 600% Physical DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: The final strike of each 3-Ping marks the target. Unleashes a shade to attack when marks reach 2 stacks. The shade lasts 5 seconds and will attack once with every Basic Attack. Shades deal 90% Physical DMG per attack.",
      coreIcon: require("../../assets/Images/Nightblade/Core.png"),

      leader:
        "Critical rate of all party members increases by 10% when they are of 3 different classes.",
      leaderIcon: require("../../assets/Images/Nightblade/Leader.png"),

      ssRank:
        "Passive: When attacking the back of a target, Extra DMG Bonus for that attack increases by 15%.",
      ssRankIcon: require("../../assets/Images/Nightblade/SS.png"),

      sssRank:
        "Passive: When a shade is present, Extra DMG Bonus increases by 15%.",
      sssRankIcon: require("../../assets/Images/Nightblade/SSS.png"),

      sssPlusRank:
        "Passive: Physical Resistance of enemies hit by a Signature Move decreases by 15% for 10 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Nightblade/SSSPlus.png"),
      hiddenSkill:
        "Enemies will be marked when hit by 3-Ping. When attacking a marked enemy with a 3-Ping, 5 energy clones will be created for 5 seconds and launch attacks. Clones will attack once with each Basic Attack.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Zero
  {
    construct_Name: "Bianca ",
    construct_Model: "Zero",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Zero/Construct_Zero.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (100%)",
    id: "8",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Zero/RedOrb.png"),
      redPing:
        "Shoots 1/2/3 arrows in a row based on the number of orbs pinged. Each arrow deals 200% Physical DMG.",

      yellowPingIcon: require("../../assets/Images/Zero/YellowOrb.png"),
      yellowPing:
        "Shoots 5/5/7 energy arrows forward, dealing 30% / 60% / 90% Physical DMG and recovers 1/2/3 Energy when hitting targets based on the number of orbs pinged.",

      bluePingIcon: require("../../assets/Images/Zero/BlueOrb.png"),
      bluePing:
        "Imbues weapon with energy. Basic Attacks will shoot extra 1/2/3 arrows per attack (max 7/20/42) that deals 20% / 30% / 40% Physical DMG based on the number of orbs pinged. Lasts 4/6/8 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Quickly shoots 9 arrows at the target, dealing 580% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Zero/BasicAttack.png"),

      signature:
        "Signature Move: Costs 60 Energy and fires a rain of arrows at the target area. Each arrow deals 200% Physical DMG.",
      signatureIcon: require("../../assets/Images/Zero/Signature.png"),

      qte: "QTE: Bianca leaps into the air and shoots 5 times at the target. Each shot deals 60% Physical DMG and will always be critical.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: After any 3-Ping, 1 energy arrow will be stored in the quiver (max 3 stored.) All arrows will be released when using the next Signature Move. Each energy arrow deals 100% Extra Physical DMG twice.",
      coreIcon: require("../../assets/Images/Zero/Core.png"),

      leader: "Passive: Critical DMG of all party members increases by 10%.",
      leaderIcon: require("../../assets/Images/Zero/Leader.png"),

      ssRank: "Passive: Extra DMG Bonus of Basic Attack increases by 15%.",
      ssRankIcon: require("../../assets/Images/Zero/SS.png"),

      sssRank: "Passive: Critical DMG increases by 30%.",
      sssRankIcon: require("../../assets/Images/Zero/SSS.png"),

      sssPlusRank:
        "Passive: Extra DMG Bonus of Signature Move increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/Zero/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Blast
  {
    construct_Name: "Karenina ",
    construct_Model: "Blast",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Blast/Construct_Blast.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (80%) Physical (20%)",
    id: "7",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Blast/RedOrb.png"),
      redPing:
        "Fires 6 projectiles forward, each dealing 40% / 80% / 120% Physical DMG based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Blast/YellowOrb.png"),
      yellowPing:
        "Quickly fires a projectile at the target and deals 150% / 300% / 450% Physical DMG based on the number of orbs pinged. Puts a Mark on the target. Marked targets have a 75% chance of exploding and taking 10% / 20% / 30% Fire DMG when hit by you.",

      bluePingIcon: require("../../assets/Images/Blast/BlueOrb.png"),
      bluePing:
        "Fires a special projectile at the ground that continues to pull enemies in and deal 100% / 200% / 300% Physical DMG based on the number of orbs pinged. Then deals 50% Physical DMG per second to enemies in the area for 1/2/3 seconds",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks with a cannon, dealing 600% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Blast/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Continuously bombards target area. Each projectile deals 100% Physical DMG.",
      signatureIcon: require("../../assets/Images/Blast/Signature.png"),

      qte: "QTE: Karenina fires a Spinning Projectile that deals Physical DMG up to 500%.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Karenina enters Burst mode after 3 times of any 3-Ping or using a Signature Move. For the next 3 seconds, your Basic Attacks will become cannon shots that deal 80% Physical DMG per shot.",
      coreIcon: require("../../assets/Images/Blast/Core.png"),

      leader:
        "Attack of all party members increases by 10% when they are of 3 different classes.",
      leaderIcon: require("../../assets/Images/Blast/Leader.png"),

      ssRank:
        "Passive: Extra DMG Bonus of explosion caused by Detonative Projectile increases by 50%.",
      ssRankIcon: require("../../assets/Images/Blast/SS.png"),

      sssRank:
        "Passive: When attacking a target Marked by Detonative Projectile, Extra DMG Bonus increases by 15%.",
      sssRankIcon: require("../../assets/Images/Blast/SSS.png"),

      sssPlusRank: "Passive: Extra DMG Bonus of Basic Attack increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/Blast/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Luminance
  {
    construct_Name: "Liv ",
    construct_Model: "Luminance",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Luminance/Construct_Luminance.png"),
    construct_Type: "Support",
    construct_Element: "Physical (100%)",
    id: "33",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Luminance/RedOrb.png"),
      redPing:
        "Fires a beam at the target location, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged, reducing Movement Speed by 20% for 3 seconds, and reducing Extra DMG Bonus by 5% for 5 seconds.",

      yellowPingIcon: require("../../assets/Images/Luminance/YellowOrb.png"),
      yellowPing:
        "Enhances the weapon and increases the hit count of Basic Attacks. Based on the number of orbs pinged, deals 30% / 40% / 50% Physical DMG per hit up to 16/20/32 times for 2.5/3.5/5 seconds.",

      bluePingIcon: require("../../assets/Images/Luminance/BlueOrb.png"),
      bluePing:
        "Deploys a particle array at the target location, marking all enemies within. The array lasts 3/6/9 seconds, dealing 100% / 200% / 300% Physical DMG based on the number of orbs pinged and dragging the targets in range once per second.",

      // Skills
      basicAttack:
        "Basic Attack: Launches an energy attack, dealing 520% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Luminance/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Deploys a wide-ranged energy field and uses Light Penalty that deals 150% Physical DMG at random enemies in the area. Physical DMG Resistance of party members in the area increases by 75%.",
      signatureIcon: require("../../assets/Images/Luminance/Signature.png"),

      qte: "QTE: Liv heals nearby allies for 100% of her Attack. Grants allies a shield equal to 100% of her Attack for 2 seconds.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Has a 20% chance to trigger Light Penalty that deals 150% Physical DMG when hitting a marked enemy. After a 3-Ping or triggering Light Penalty 5 times, heals allies for 60% of Liv's Attack.",
      coreIcon: require("../../assets/Images/Luminance/Core.png"),

      leader: "HP of all party members increases by 15%.",
      leaderIcon: require("../../assets/Images/Luminance/Leader.png"),

      ssRank:
        "Passive: Extra DMG Bonus against enemies in Gray Raven Field increases by 15%.",
      ssRankIcon: require("../../assets/Images/Luminance/SS.png"),

      sssRank: "Passive: Extra DMG Bonus of Light Penalty increases by 50%.",
      sssRankIcon: require("../../assets/Images/Luminance/SSS.png"),

      sssPlusRank:
        "Passive: After using a Signature Move, Extra DMG of all party members increases by 15% for 5 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Luminance/SSSPlus.png"),
      hiddenSkill:
        "Hitting marked enemies has a chance to activate Light Penalty that deals Physical DMG. When Light Penalty is activated for the 5th time or when a 3-Ping, trigger a self-centered area healing effect.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Entropy
  {
    construct_Name: "Lee ",
    construct_Model: "Entropy",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Entropy/Construct_Entropy.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (100%)",
    id: "20",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Leaps into the air and shoots continuously forward in a small area, dealing 22.5% / 45% / 70% Physical DMG per shot based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing:
        "Moves and shoots at the target. Based on the number of orbs pinged, deals 180% / 440% / 700% Physical DMG and marks the target for 4/6/8 seconds. Attacking a marked target will carry out an additional shot that deals 20% / 40% / 60% Physical DMG based on the number of orbs pinged. When marking an already marked target, the mark with the highest number of pings will replace the lower one.",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing:
        "Fires an energy projectile forward, dealing 100% / 200% / 300% Physical DMG based on the number of orbs pinged. An energy ring will be generated after the projectile hits a target or reaches a certain distance. When the energy ring is deployed, it slightly pulls the enemy towards the centre once. Based on the number of orbs pinged, enemies in the ring take 24% / 48% / 72% Physical DMG per second for 3/4/5 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Fires consecutively at the target, dealing 825% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Calls in fire support from long-rage energy cannons, dealing 400% Physical DMG per shot.",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "QTE: Lee shoots in mid-air, dealing 675% Physical DMG to the target",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: After any 3-Ping, pinging the next Red Orb will carry out consecutive shots that deal 55% Physical DMG per shot.",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader:
        "Physical DMG and Moment Speed of all party members increased by 15% and 10%.",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank:
        "Passive: Extra DMG Bonus increases by 15% when attacking a target within an energy ring.",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank:
        "Passive: Extra DMG Bonus increases by 20% when attacking a target by Backstep Firing.",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank:
        "Passive: Increases Physical DMG by 10% for 5 seconds after a 3-Ping, can be stacked up to 3 times. Duration refreshes when stacks overlap.",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill:
        "When pinging a Red Orb after any 3-Ping, summons multiple space bullets to assist in shooting.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Ember
  {
    construct_Name: "Karenina ",
    construct_Model: "Ember",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Ember/Construct_Ember.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (30%) Fire (70%)",
    id: "21",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Ember/RedOrb.png"),
      redPing:
        "Attacks the targets ahead with crossfire shooting, dealing 100% / 200% / 300% Physical DMG based on the number of orbs pinged. Gains Super Armor while using this skill. Enhanced: Deals 150% / 300% / 450% Fire DMG per hit based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Ember/YellowOrb.png"),
      yellowPing:
        "Leaps forward and hammers the target with a gun. Total damage taken by attacks reduces by 30% while using this skill. Deals 180% / 360% / 540% Physical DMG to nearby targets based on the number of orbs pinged. Enhanced: Deals 30% / 60% / 90% Fire DMG per hit based on the number of orbs pinged.",

      bluePingIcon: require("../../assets/Images/Ember/BlueOrb.png"),
      bluePing:
        "Calls for a flying laser cannon and deals 6% / 12% / 18% Physical DMG per hit based on the number of orbs pinged. The cannon deals 20% / 40% / 60% Physical DMG per attack based on the number of orbs pinged. If multiple cannons are available, the most powerful one takes priority. Enhanced: Deals 30% / 60% / 90% Fire DMG per hit based on the number of orbs pinged.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks at the target, dealing 720% Physical DMG in total. Enhanced: Basic Attacks deal Fire DMG.",
      basicAttackIcon: require("../../assets/Images/Ember/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Shoots a laser at the ground by 200% Fire DMG and leaves a path of fire for 5 seconds in the end. All enemies in the path take 200% Fire DMG per second.",
      signatureIcon: require("../../assets/Images/Ember/Signature.png"),

      qte: "QTE: Karenina deals 720% Fire DMG at the target.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: When in combat, gains an additional 3% of Thermal Energy per skill level. Thermal Energy can be gained by 3-Pings and using Signature Moves. Becomes Enhanced after the thermal energy reaches 50%. Gains additional effects and 20% Fire DMG Bonus from Signal Orb skills and Basic Attacks. When Enhanced, loses 5% of Thermal Energy per second.",
      coreIcon: require("../../assets/Images/Ember/Core.png"),

      leader:
        "When party members are of 3 different classes, ATK increases by 10% and ATK of Attacker increases by 5%.",
      leaderIcon: require("../../assets/Images/Ember/Leader.png"),

      ssRank:
        "Passive: Extra Fire DMG Bonus increases by 10% after entering Thermal mode.",
      ssRankIcon: require("../../assets/Images/Ember/SS.png"),

      sssRank: "Passive: Extra DMG Bonus of Enhanced skills increases by 10%.",
      sssRankIcon: require("../../assets/Images/Ember/SSS.png"),

      sssPlusRank:
        "Passive: Reduces Fire DMG Resistance of enemies that took burning damage from a Signature Move by 15% for 5 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Ember/SSSPlus.png"),
      hiddenSkill:
        "Gains thermal energy based on the skill level (3% per), and also by using certain skills. All skills become Enhanced when thermal energy is above 50%. Fire DMG increases when in Thermal Mode.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Pulse
  {
    construct_Name: "Nanami ",
    construct_Model: "Pulse",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Pulse/Construct_Pulse.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (50%) Fire (50%)",
    id: "27",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Pulse/RedOrb.png"),
      redPing:
        "Dashes forward and stabs the enemy with a chainsaw, dealing 20% / 40% / 60% Physical DMG per hit based on the number of orbs pinged. Can deal up to 12 hits. Converts Physical DMG into Fire DMG if this is a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Pulse/YellowOrb.png"),
      yellowPing:
        "Deals damage twice by flipping forward and slashes with a chainsaw. Deals 100% / 200% Physical DMG per hit if this is not a 3-Ping. Deals 200% Fire DMG per hit and create a rotating fire ring that deals 30% Fire DMG up to 12 times.",

      bluePingIcon: require("../../assets/Images/Pulse/BlueOrb.png"),
      bluePing:
        "Unleashes energy that interrupts enemy attacks and does a heavy strike that deals damage 3 times to nearby enemies. Deals 50% / 100% / 200% Physical DMG per hit based on the number of orbs pinged. Gains a shield equal to 5% / 7.5% / 10% of your maximum HP for 5 seconds and gains Super Armor when the shield is present. Physical DMG is converted to Fire DMG if ths is a 3-Ping.",

      // Skills
      basicAttack:
        "Basic Attack: Launches consecutive attacks with a sawblade, dealing 620% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Pulse/BasicAttack.png"),

      signature:
        "Signature Move: Costs 30 Energy. Nanami charges at the target and deals 900% Fire DMG to enemies in the path.",
      signatureIcon: require("../../assets/Images/Pulse/Signature.png"),

      qte: "QTE: Deploys a circle of fire on the ground, dealing 480% Fire DMG to nearby targets and reducing their Fire Resistance by 10% for 6 seconds.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Nanami enters Overclocking mode after using a Signature Move. Basic Attacks will deal Fire DMG and reduce Fire Resistance of the target by 15% for 8 seconds.",
      coreIcon: require("../../assets/Images/Pulse/Core.png"),

      leader:
        "DEF and Fire Resistance of all party members increases by 15% and 10%.",
      leaderIcon: require("../../assets/Images/Pulse/Leader.png"),

      ssRank:
        "Passive: Has a 30% chance to cause an explosion that deals 25% Fire DMG when doing Fire DMG attacks.",
      ssRankIcon: require("../../assets/Images/Pulse/SS.png"),

      sssRank:
        "Passive: Gains Super Armor after using a Signature Move, Extra DMG Resistance and Fire DMG increase by 10% and 15% for 8 seconds",
      sssRankIcon: require("../../assets/Images/Pulse/SSS.png"),

      sssPlusRank:
        "Passive: After using a Signature Move, Extra DMG Bonus increases by 15% for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Pulse/SSSPlus.png"),
      hiddenSkill:
        "Nanami enters Overclocking state after a Signature Move, Basic Attacks will be converted into Overclocking attacks that deal Fire DMG. Fire Resistance of targets hit will be reduced.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Tenebrion
  {
    construct_Name: "Kamui ",
    construct_Model: "Tenebrion",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Tenebrion/Construct_Tenebrion.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (50%) Dark (50%)",
    id: "28",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Tenebrion/RedOrb.png"),
      redPing:
        "Unleashes a cross slash at the target, dealing 200% / 400% / 600% Physical DMG and 40% / 80% / 160% Extra Dark DMG based on the number of orbs pinged. \nDark Form: Swings at the target ahead, dealing 800% / 1000% / 1200% Dark DMG based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Tenebrion/YellowOrb.png"),
      yellowPing:
        "Charges at the target, dealing 200% / 400% / 600% Physical DMG and 40% / 80% / 120% Extra Dark DMG based on the number of orbs pinged. When charging, reduces total damage taken from frontal attacks by 30% and becomes immune to control effects. \nDark Form: Charges at the target, dealing 600% / 750% / 900% Dark DMG based on the number of orbs pinged. When Charging, reduces total damage taken from frontal attacks by 30% and becomes immune to control effects.",

      bluePingIcon: require("../../assets/Images/Tenebrion/BlueOrb.png"),
      bluePing:
        "Spins and slashes the target airborne, dealing 140% / 280% / 420% Physical DMG and 40% / 80% / 120% Extra Dark DMG based on the number of orbs pinged. Pulls the target while spinning. \nDark Form: Hits the ground with a fan-shaped blast that deals 480% / 600% / 720% Dark DMG based on the number of Pings and stuns the target for 3/4/5 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Attack consecutively with your greatsword, dealing 560% Physical DMG in total. Dark Form: Launches consecutive attacks at the target with Dark Blade, dealing 900% Dark DMG in total.",
      basicAttackIcon: require("../../assets/Images/Tenebrion/BasicAttack.png"),

      signature:
        "Signature Move: Enters Dark Form when Energy is over 60. Transforms all skill forms and gains Super Armor. Costs 8 Energy per second when in Dark Form. The mode ends when Energy is used up. Dark DMG increases by 20% when in Dark Form.",
      signatureIcon: require("../../assets/Images/Tenebrion/Signature.png"),

      qte: "QTE: Kamui unleashes spinning slashes at the target, dealing 420% Physical DMG in total. The last strike deals 80% Dark DMG and reduces 10% Dark Resistance of the target for 6 seconds.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains extra 10 Energy from a 3-Ping. Physical Resistance and Dark Resistance increases by 30% when in Dark Form",
      coreIcon: require("../../assets/Images/Tenebrion/Core.png"),

      leader:
        "When party members are of 3 different classes, Elemental DMG and Physical DMG increases by 10% and 5%.",
      leaderIcon: require("../../assets/Images/Tenebrion/Leader.png"),

      ssRank:
        "Passive: Extra DMG Resistance increases by 20% when in Dark Form.",
      ssRankIcon: require("../../assets/Images/Tenebrion/SS.png"),

      sssRank: "Passive: Extra DMG Bonus of 3-Ping skills increases by 30%.",
      sssRankIcon: require("../../assets/Images/Tenebrion/SSS.png"),

      sssPlusRank: "Passive: Dark DMG increases by 20% when in Dark Form.",
      sssPlusRankIcon: require("../../assets/Images/Tenebrion/SSSPlus.png"),
      hiddenSkill:
        "Performs a 3-Ping for 10 Energy. Increases Physical and Dark Resistance when in Dark Form.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Crimson Abyss
  {
    construct_Name: "Lucia ",
    construct_Model: "Crimson Abyss",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/CrimsonAbyss/Construct_CrimsonAbyss.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (100%)",
    id: "22",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/CrimsonAbyss/RedOrb.png"),
      redPing:
        "Leaps forward and attacks targets ahead, dealing 25% / 50% / 75% Physical DMG per hit based on the number of orbs pinged. The last hit deals 75% Physical DMG and knocks back the target if this is a 3-Ping. Gains Super Armor when using this skill.",

      yellowPingIcon: require("../../assets/Images/CrimsonAbyss/YellowOrb.png"),
      yellowPing:
        "Charges forward and drives through enemies, dealing 250%/500%/750% Physical DMG to enemies in the path based on the number of orbs pinged.",

      bluePingIcon: require("../../assets/Images/CrimsonAbyss/BlueOrb.png"),
      bluePing:
        "Boosts energy supply for 5 seconds and increases Movement Speed by 20% / 30% / 50% based on the number of orbs pinged. Deals 4% / 8% / 12% Physical DMG twice when attacking. When unleashing Sword Waves, Extra DMG will be enhanced into extra Sword Waves that deal 8%/16%/24% Physical DMG per hit.",

      // Skills
      basicAttack:
        "Basic Attack: Attacks the target in 5 sword styles. Each attack deals 80% / 100% / 120% / 270% / 280% Physical DMG. Can immediately perform the 3rd move of Basic Attack after dodging.",
      basicAttackIcon: require("../../assets/Images/CrimsonAbyss/BasicAttack.png"),

      signature:
        "Signature Move: Costs 85 Energy. Slashes target ahead, dealing 2600% Physical DMG in total.",
      signatureIcon: require("../../assets/Images/CrimsonAbyss/Signature.png"),

      qte: "Lucia uses Rising Slashes that deal 600% Physical DMG in total and sends the target airborne.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Any 3-Ping after a Blue 3-Ping causes you to fall back and enter Blade Will mode. Signal Orbs will be converted into Blade Will Orbs and you will gain 2 extra Blade Will Orbs. In Blade Will mode, Signal Orbs gained by Basic Attacks will be converted into Blade Will Orbs. When pinging a Blade Will Orb, unleashes Sword Waves that deal 340% Physical DMG and gains Super Armor while unleashing.",
      coreIcon: require("../../assets/Images/CrimsonAbyss/Core.png"),

      leader:
        "ATK and CRIT of all Attacker Constructs increases by 10% and 5%.",
      leaderIcon: require("../../assets/Images/CrimsonAbyss/Leader.png"),

      ssRank:
        "Passive: When performing a Red 3-Ping, Physical DMG increases by 10% for 4 seconds.",
      ssRankIcon: require("../../assets/Images/CrimsonAbyss/SS.png"),

      sssRank:
        "Passive: Extra DMG increases by 5%. Gains 2 Signal Orbs when the Blade Will mode ends.",
      sssRankIcon: require("../../assets/Images/CrimsonAbyss/SSS.png"),

      sssPlusRank:
        "Passive: Under the effects of pinging a Blue Orb, Physical DMG increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/CrimsonAbyss/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },
  //   Bastion
  {
    construct_Name: "Kamui ",
    construct_Model: "Bastion",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Bastion/Construct_Bastion.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (100%)",
    id: "10",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Bastion/RedOrb.png"),
      redPing:
        "Slashes the target and deals 200% / 400% / 400% Physical DMG based on the number of orbs pinged. Unleashes an extra slash that deals 400% Physical DMG if this is a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Bastion/YellowOrb.png"),
      yellowPing:
        "Enters a parry stance and increases Extra DMG Reduction by 75% for 2 seconds. After successfully parrying, you will launch a wide counterattack, dealing 200% / 400% / 600% Physical DMG and gaining 40/80/120 Charge Points based on the number of orbs pinged. When parrying ends or when using Basic Attacks while parrying, you will launch a weak attack dealing 100% / 200% / 400% Physical DMG and exit parry stance.",

      bluePingIcon: require("../../assets/Images/Bastion/BlueOrb.png"),
      bluePing:
        "Releases energy to create a shield equivalent to 50% / 100% / 150% of your DEF based on the number of orbs pinged. Stuns targets for 1/1.5/2 seconds when hitting the ground with your greatsword, dealing 100% / 200% / 300% Physical DMG in total.",

      // Skills
      basicAttack:
        "Basic Attack: Swings your greatsword and launches multiple attacks in at enemies, dealing 790% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Bastion/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Charge up and quickly swing with your greatsword at enemies ahead for 2000% Physical DMG.",
      signatureIcon: require("../../assets/Images/Bastion/Signature.png"),

      qte: "QTE: Kamui slashes the target with his greatsword, dealing 500% Physical DMG and stunning the target for 3 seconds. Reduces DEF of the target by 10% for 6 seconds.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains 40 Charge Points after any 3-Ping (max 120 Charge Points). Your attack increases by 6% / 12% / 18% once his Charge Points are over 0/40/80. Charge Points will be reduced by 8 per second while in Charge mode.",
      coreIcon: require("../../assets/Images/Bastion/Core.png"),

      leader:
        "When the HP of all members is greater than 70%, their Physical DMG increases by 10%.",
      leaderIcon: require("../../assets/Images/Bastion/Leader.png"),

      ssRank:
        "Passive: Gains a random Signal Orb after a successful block. Has a cooldown of 5 seconds.",
      ssRankIcon: require("../../assets/Images/Bastion/SS.png"),

      sssRank:
        "Passive: When your Charge Points are over 60, your Physical DMG taken reduced by 10% and he deals 8% more Physical DMG.",
      sssRankIcon: require("../../assets/Images/Bastion/SSS.png"),

      sssPlusRank:
        "Passive: Physical DMG increases by 10% when a shield is present.",
      sssPlusRankIcon: require("../../assets/Images/Bastion/SSSPlus.png"),
      hiddenSkill:
        "Counterattacks and unleashes sword waves after a successful block, dealing Physical DMG to the enemy.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Astral
  {
    construct_Name: "Watanabe ",
    construct_Model: "Astral",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Astral/Construct_Astral.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (50%) Dark (50%)",
    id: "9",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Astral/RedOrb.png"),
      redPing:
        "Hops back and throws darts in a fan-shaped area, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged. Triggers Trailblade after clearing. Deals Dark DMG instead on a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Astral/YellowOrb.png"),
      yellowPing:
        "Spins forward into the air, draws in, and slashes at surrounding targets. Based on the number of orbs pinged, deals 40% / 80% / 120% Physical DMG per hit, then deals 50% / 100% / 150% Physical DMG when landing. Deals Dark DMG instead on a 3-Ping.",

      bluePingIcon: require("../../assets/Images/Astral/BlueOrb.png"),
      bluePing:
        "Swiftly moves to attack from the target’s rear, dealing 150% / 300% / 450% Physical DMG based on the number of orbs pinged. DMG will be converted into Dark DMG when performing a 3-Ping.",

      // Skills
      basicAttack:
        "Basic Attack: Slashes at the target, dealing 600% Physical DMG in total. After dodging or pinging a Red Orb, Basic Attacks will trigger Trailblade, dealing 200% Physical DMG.",
      basicAttackIcon: require("../../assets/Images/Astral/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Transforms into shadow and damages targets, dealing 600% Dark DMG per hit.",
      signatureIcon: require("../../assets/Images/Astral/Signature.png"),

      qte: "QTE: Watanabe dives at the target, splitting into shadows when he lands and attacks again, dealing 300% Dark DMG per hit.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Red Orb after any 3-Ping transforms Watanabe into a shadow that launches consecutive attacks in front of him, dealing 60% Dark DMG per hit. Enters enhanced shadow form at the end of the attack, during which Basic Attacks will deal additional 300% Dark DMG and Trailblade will deal additional 100% Dark DMG for 5 seconds.",
      coreIcon: require("../../assets/Images/Astral/Core.png"),

      leader:
        "Dark DMG of all members increases by 10% and Attack of Attacker Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Astral/Leader.png"),

      ssRank:
        "Passive: Watanabe deals 10% Extra DMG to targets hit by a Blue Orb skill for 4 seconds.",
      ssRankIcon: require("../../assets/Images/Astral/SS.png"),

      sssRank:
        "Passive: Watanabe deals 10% Extra DMG to targets hit by Trailblade.",
      sssRankIcon: require("../../assets/Images/Astral/SSS.png"),

      sssPlusRank:
        "Passive: Dark DMG increases by 20% while Core Passive is active.",
      sssPlusRankIcon: require("../../assets/Images/Astral/SSSPlus.png"),
      hiddenSkill:
        "When pinging a Red Orb after any 3-Ping, transforms into shadow and launches consecutive attacks to deal Dark DMG at the area ahead. When finished, enters enhanced shadow form that allows Basic Attacks to deal additional Dark DMG and Chasing Blade to deal additional Dark DMG. Lasts 5s.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Brilliance
  {
    construct_Name: "Ayla ",
    construct_Model: "Brilliance",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Brilliance/Construct_Brilliance.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (100%)",
    id: "11",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Brilliance/RedOrb.png"),
      redPing:
        "Swings scythe at target, dealing 150% / 300% / 900% Physical DMG based on the number of orbs pinged.",

      yellowPingIcon: require("../../assets/Images/Brilliance/YellowOrb.png"),
      yellowPing:
        "Charges at target. Based on the number of orbs pinged, deals 90% / 180% / 270% Physical DMG, then swings the scythe upward, dealing 120% / 240% / 360% Physical DMG.",

      bluePingIcon: require("../../assets/Images/Brilliance/BlueOrb.png"),
      bluePing:
        "Throws scythe and then returns it, dealing 20% / 40% / 60% Physical DMG based on the number of orbs pinged.",

      // Skills
      basicAttack:
        "Basic Attack: Swings scythe at target in a flurry, dealing 610% Physical DMG based on the number of orbs pinged.",
      basicAttackIcon: require("../../assets/Images/Brilliance/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Swings scythe at nearby targets, dealing 120% Physical DMG for each hit. Launches a charged slash at the targets for the last hit, dealing 600% Physical DMG. The attack direction can be controlled.",
      signatureIcon: require("../../assets/Images/Brilliance/Signature.png"),

      qte: "QTE: Ayla deals 500% Physical DMG continuously to the target, reducing their DEF by 10% for 6 seconds. The last hit will knock the target airborne.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's ExtAttacks lower the target's Extra DMG Reduction by 20% for 5 seconds.ra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Blue Orb after any 3-Ping will cause Ayla to charge and drag in nearby enemies. Ayla gains a shield equal to 8% of her maximum HP for 7 seconds, then unleashes a heavy strike that deals 700% Physical DMG to the targets ahead. Reduces DMG taken by 70% when charging.",
      coreIcon: require("../../assets/Images/Brilliance/Core.png"),

      leader:
        "When party members are of 3 different classes, DEF increases by 10% and ATK increases by 5%.",
      leaderIcon: require("../../assets/Images/Brilliance/Leader.png"),

      ssRank:
        "Passive: Hitting a target from a Yellow Orb skill increases your DEF and Physical DMG by 10% for 5 seconds.",
      ssRankIcon: require("../../assets/Images/Brilliance/SS.png"),

      sssRank:
        "Passive: Hitting targets with Ayla's Core Passive will lower their DEF by 15% for 5 seconds.",
      sssRankIcon: require("../../assets/Images/Brilliance/SSS.png"),

      sssPlusRank:
        "Passive: After using a Signature Move, Extra DMG Bonus increases by 20% for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Brilliance/SSSPlus.png"),
      hiddenSkill:
        "When pinging a Blue Orb after any 3-Ping, charges in place to drag the nearby enemies in and gains a shield equal to maximum HP for 7s, then unleashes a heavy strike to the targets ahead that deals Physical DMG. Extra DMG Reduction increases by 70% when charging.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Veritas
  {
    construct_Name: "Bianca ",
    construct_Model: "Veritas",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Veritas/Construct_Veritas.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (20%) Lightning (80%)",
    id: "23",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Veritas/RedOrb.png"),
      redPing:
        "Stands still to pull bow and charge, then shoots a long-ranged energy arrow in front. Deals 240% / 480% / 720% Physical DMG based on number of orbs pinged. Deals Lightning DMG on a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Veritas/YellowOrb.png"),
      yellowPing:
        "Flash hops to the sky and shoots a charged arrow at the target. The arrow explodes on hit and deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. The explosion will create a zone of lightning that reduces the Movement Speed of targets in zone by 20% / 35% / 50% and deals 40% / 60% / 80% Lightning DMG per second for 3/5/7 seconds.",

      bluePingIcon: require("../../assets/Images/Veritas/BlueOrb.png"),
      bluePing:
        "Detonates the energy in the arrow tip and knocks back nearby targets, dealing 40% / 80% / 120% Physical DMG based on the number of orbs pinged. Gains Electro Charge for 8 seconds, causing Veritas' Basic Attack to shoot 1 extra lightning arrow that deals 16% / 32% / 48% Lightning DMG; Red Orbs and Core Passive to shoot 2 extra lightning arrows that deal 24% / 48% / 72% Lightning DMG each.",

      // Skills
      basicAttack:
        "Basic Attack: Quickly shoots 7 arrows at the target, dealing 560% Physical DMG in total. The last arrow pierces targets.",
      basicAttackIcon: require("../../assets/Images/Veritas/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Shoots arrows at the sky, bringing down lightning bolts temporarily. Each bolt deals 160% Lightning DMG to targets within the area. After a short while, the bolt energies explode and deals 180% Lightning DMG to targets within the area.",
      signatureIcon: require("../../assets/Images/Veritas/Signature.png"),

      qte: "QTE: Bianca shoots 4 times at the target, dealing 160% Lightning DMG per hit.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Blue Orb after a Red 3-Ping will cause Veritas to enter into sniping mode. During so, Veritas' Basic Attack shoots a long-ranged lightning arrow that deals 500% Lightning DMG. Veritas exits sniping mode if 6 lightning arrows are shot or if 6 seconds passes. Dodging in sniping mode will lower the charge time of the next Basic Attack. Veritas will not gain Signal Orbs through Basic Attacks during sniping mode.",
      coreIcon: require("../../assets/Images/Veritas/Core.png"),

      leader:
        "Lightning DMG increases by 10%. ATK of Attacker Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Veritas/Leader.png"),

      ssRank:
        "Passive: Veritas's Extra DMG Bonus to targets pierced by her Red Orb skill increases by 10% for 8 seconds.",
      ssRankIcon: require("../../assets/Images/Veritas/SS.png"),

      sssRank:
        "Passive: Veritas' Extra DMG Bonus to targets within her Yellow Orb skill's zone of lightning increases by 15%.",
      sssRankIcon: require("../../assets/Images/Veritas/SSS.png"),

      sssPlusRank:
        "Passive: Lightning DMG increases by 20% while Core Passive is active.",
      sssPlusRankIcon: require("../../assets/Images/Veritas/SSSPlus.png"),
      hiddenSkill:
        "Enters into sniping mode when pinging a Blue Orb after a Red Orb 3-Ping. During so, Basic Attack shoots a long-ranged lightning arrow to deal Lightning DMG. Exits sniping mode if 6 lightning arrow are shot or if 6 seconds pass. Dodging in sniping mode will lower the charge time of the next Basic Attack.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Silverfang
  {
    construct_Name: "Sophia ",
    construct_Model: "Silverfang",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Silverfang/Construct_Silverfang.png"),
    construct_Type: "Support",
    construct_Element: "Physical (20%) Fire (80%)",
    id: "16",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Stands still and fires guided missiles at the target. Deals 240% / 480% / 720% Fire DMG to the target based on the number of orbs pinged. Hit target drops an Energy Ball on a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing:
        "Charges at the target. Deals 40% / 80% / 120% Physical DMG per hit in the charge based on the number of orbs pinged. On a 3-Ping, deals Fire DMG instead and the hit target drops an Energy Ball.",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing:
        "Fires scattered pellets in a fan-shaped area then hops back. Deals 200% / 400% / 600% Fire DMG to the hit targets based on the number of orbs pinged. Target drops an Energy Ball on a 3-Ping.",

      // Skills
      basicAttack:
        "Basic Attack: Shoots at the target continuously with handguns and mechanical arms, dealing 850% Fire and Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Silverfang accumulates energy before her, then shoots it out in front of her for 200% Fire DMG. The energy pulls in nearby targets continuously, dealing 20% Fire DMG for each pull. It explodes after the end of the accumulation, dealing 600% Fire DMG and dropping 2 Energy Balls.",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "Silverfang shoots in front, dealing 400% Fire DMG and dropping an Energy Ball. Drops an extra Energy Ball if the Skill Level is at 10 or above.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: On the last combo of Silverfang's Basic Attack, on a 3-Ping, or on using her Signature Move, targets will drop an Energy Ball. Picking up an Energy Ball heals friendly members that are within range for HP equal to 20% of Silverfang's ATK, boosts member's Fire DMG for 10% for 5 seconds. When an Energy Ball is picked up, Silverfang also gains 4 Energy and 75 Heat. When Silverfang's Heat is over 0/100/200, her Attack increases by 5% / 10% / 15% respectively.",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader:
        "When party members are of 3 different classes, HP and Movement Speed increases by 10% and 5%.",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "Passive: Signature Move and QTE will drop an extra Energy Ball.",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank:
        "Passive: Healing the same character 3 times in 5 seconds by picking up 5 Energy Balls will increase their Fire DMG by 10% for 5 seconds.",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank:
        "Passive: Reduces Fire Resistance of targets hit by Silverfang's Signature Move by 15% 5 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill:
        "On the last combo of Basic Attack, 3-Ping, Signature Move, or QTE, targets will drop an Energy Ball. Picking up an Energy Ball heals friendly members and boosts their Fire DMG. Picking up an Energy Ball earns Sophia Energy and Heat. When Heat reaches a certain level, Sophia's ATK will be increased.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Arclight
  {
    construct_Name: "Chrome ",
    construct_Model: "Arclight",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Arclight/Construct_Arclight.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (30%) Lightning (70%)",
    id: "12",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Arclight/RedOrb.png"),
      redPing:
        "Stands still and swings scythe several times, dealing 18% / 36% / 54% Physical DMG per hit based on the number of orbs pinged. (Deals Lightning DMG instead on a 3-Ping.)",

      yellowPingIcon: require("../../assets/Images/Arclight/YellowOrb.png"),
      yellowPing:
        "Moves while spinning with scythe, pulling nearby targets in. Brings down the scythe at the end, dealing 20% / 40% / 60% Physical DMG based on the number of orbs pinged. (Deals Lightning DMG instead on a 3-Ping.) Deals 60% / 120% / 180% Lightning DMG to nearby targets when the scythe hits the ground.",

      bluePingIcon: require("../../assets/Images/Arclight/BlueOrb.png"),
      bluePing:
        "Spins and emits an electric pulse, marking nearby targets for 6 seconds and dealing 150% / 300% / 450% Lightning DMG based on the number of orbs pinged. Arclight's Extra DMG Bonus increases by 6% / 8% / 10% and Extra DMG Reduction increases by 10% / 15% / 20% against the marked targets.",

      // Skills
      basicAttack:
        "Basic Attack: Swings scythe and launches multiple attacks at the target, dealing 610% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Arclight/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 Energy. Calls lightning to recharge and pull nearby targets in. Basic Attacks become Fulgurant Flurry for 8 seconds. Performing Fulgurant Flurry 5 times will trigger Arclight's Core Passive once. Fulgurant Flurry deals 35% Lighting DMG per dash and 120% Lightning DMG per slash.",
      signatureIcon: require("../../assets/Images/Arclight/Signature.png"),

      qte: "QTE: Chrome charges at nearby targets, dealing 250% Lightning DMG and reducing their Lightning Resistance by 10% for 6 seconds. Chrome then swings his scythe, causing an explosive impact when the scythe lands, dealing 250% Lightning DMG to nearby targets.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Blue Orb after any 3-Ping generates a shield equal to 10% of your maximum HP for 4s. When the shield expires or becomes refreshed, it explodes and deals 200% Lightning DMG to nearby targets.",
      coreIcon: require("../../assets/Images/Arclight/Core.png"),

      leader:
        "When party members are of 3 different classes, DEF increases by 10% and HP increases by 5%.",
      leaderIcon: require("../../assets/Images/Arclight/Leader.png"),

      ssRank:
        "Passive: While Arclight Shield is active, Lightning DMG increases by 10%.",
      ssRankIcon: require("../../assets/Images/Arclight/SS.png"),

      sssRank:
        "Passive: When Chrome is switched in, he will enter with Storm World active for 4 seconds.",
      sssRankIcon: require("../../assets/Images/Arclight/SSS.png"),

      sssPlusRank:
        "Passive: Fulgurant Flurry will lower target Lightning DMG Resistance by 15% for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Arclight/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Plume
  {
    construct_Name: "Lucia ",
    construct_Model: "Plume",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Plume/Construct_Plume.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (20%) Ice (80%)",
    id: "24",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Plume/RedOrb.png"),
      redPing:
        "Unleashes several quick slashes on the spot, attacking for 4/4/8 times and dealing 60% / 120% / 120% Physical DMG based on the number of orbs pinged. \nArctic Form: Creates an ice tornado that moves forward. Based on the number of orbs pinged, deals 30% / 60% / 90% Ice DMG 9 times while moving, then deals 390% Ice DMG when it fades.",

      yellowPingIcon: require("../../assets/Images/Plume/YellowOrb.png"),
      yellowPing:
        "Darts at the target and strikes twice, dealing 115% / 235% / 355% Physical DMG based on the number of orbs pinged. \nArctic Form: Leaps mid-air and smashes at the target for 2 times. Deals 150% / 300% / 450% Ice DMG based on the number of orbs pinged.",

      bluePingIcon: require("../../assets/Images/Plume/BlueOrb.png"),
      bluePing:
        "Whirls vertically while moving, then smashes downward in the end. Based on the number of orbs pinged, deals 30% / 60% / 90% Physical DMG per whirling hit and 70% / 160% / 250% Physical DMG for the downward slash. \nArctic Form: Unleashes a tornado at the front. Based on the number of orbs pinged, deals 40% / 80% / 120% Ice DMG 5 times, then deals 80% / 160% / 240% Ice DMG once at the end pulls in the targets.",

      // Skills
      basicAttack:
        "Basic Attack: Cuts at the target quickly with a katana, dealing 640% Physical DMG. \nArctic Form: Wields dual katanas to cut at the target continuously, dealing 270% Physical DMG and 410% Ice DMG.",
      basicAttackIcon: require("../../assets/Images/Plume/BasicAttack.png"),

      signature:
        "Signature Move: Quickly switch into Arctic Form. Becomes invincible while switching, all Signal Orbs will be reordered into 3-Pings. \nArctic Form: Leaps mid-air and hurls left-hand weapon at the ground, causing a massive area of effect Ice DMG and slowing the affected targets. Deals 900% / 1200% / 1600% / 3040% based on the number of Signature Points you have, then switches back to Normal Form. \nForm Switch: Always usable under Normal Form. In Arctic Form, you must have at least 1 Signature Point to use Form Switch. Form Switch has a cooldown of 3 seconds.",
      signatureIcon: require("../../assets/Images/Plume/Signature.png"),

      qte: "QTE: Dashes at the target, dealing 320% Physical DMG and 320% Ice DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: In Normal Form, every 3-Ping increases your Energy by 50% and gains 1 Signature Point (max 2 in Normal Form). \nArctic Form: Loses Energy over time. While you still have Energy, all attacks deal 50% extra Ice DMG, all 3-Pings grant you 1 Signature Point (max 4 in Arctic Form). The Ice DMG bonus applies to your Signature Move.",
      coreIcon: require("../../assets/Images/Plume/Core.png"),

      leader:
        "All team members' Ice DMG increases by 10%. ATK of Attacker Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Plume/Leader.png"),

      ssRank:
        "Passive: After Frigid Roundabout strikes hits a target, the target takes 10% extra DMG from you for 8s.",
      ssRankIcon: require("../../assets/Images/Plume/SS.png"),

      sssRank:
        "Passive: Gain max Energy and 2 Signature Points at the start of battle. While you still have Energy in Arctic Form, Extra DMG Bonus of Signal Orb Skills increases by 5%.",
      sssRankIcon: require("../../assets/Images/Plume/SSS.png"),

      sssPlusRank:
        "Passive: Ice DMG increases by 20% while Core Passive is active.",
      sssPlusRankIcon: require("../../assets/Images/Plume/SSSPlus.png"),
      hiddenSkill:
        "Every 3-Ping made in the Normal Form generates 50% more Energy and 1 Signature Point. Up to 2 Signature Points can be accumulated. Using From Switch in the Normal Form will transform Plume into the Arctic Form. Switching with full Energy will re-arrange all the existing Signal Orbs. Ice DMG is increased when in the Arctic Form. A 3-Ping grants 1 Signature Point. Final - Ice Flash requires 4 Signature Points to cast.",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Rozen
  {
    construct_Name: "Vera ",
    construct_Model: "Rozen",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Rozen/Construct_Rozen.png"),
    construct_Type: "Support",
    construct_Element: "Physical (20%) Physical (80%)",
    id: "17",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Rozen/RedOrb.png"),
      redPing:
        "Performs a flurry of attacks, dealing 180% / 360% / 560% Physical DMG. DMG is converted to Dark element when it is a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Rozen/YellowOrb.png"),
      yellowPing:
        "Unleashes a dark energy wave, dealing 100% / 200% / 300% Dark DMG. Subsequently rushes forward, dealing multiple hits of 10% / 20% / 30% Physical DMG. DMG is converted to Dark element when it is a 3-Ping",

      bluePingIcon: require("../../assets/Images/Rozen/BlueOrb.png"),
      bluePing:
        "Performs a short dash attack, dealing 100% / 200% / 300% Physical DMG and Marking the first target. DMG is converted to Dark element when it is a 3-Ping. Marked targets take 20% / 40% / 60% AOE Dark DMG every second. Members within the area are healed for 10% / 20% / 30% of Vera's Attack. Only 1 Mark can exist at a time.",

      // Skills
      basicAttack:
        "Basic Attack: Attacks repeatedly with main-hand and offhand weapons, dealing a total of 740% Physical DMG.",
      basicAttackIcon: require("../../assets/Images/Rozen/BasicAttack.png"),

      signature:
        "Signature Move: Costs 100 energy. Unleashes a dark field for 6 seconds, dealing 320% AOE Dark DMG and 80% Dark DMG every second. Allies within the area are healed for 16% of Vera's Attack and gains Dark Radiation effect and Movement Speed increases by 20%.",
      signatureIcon: require("../../assets/Images/Rozen/Signature.png"),

      qte: "QTE: Deals 400% AOE Dark DMG upon entering the field and heals allies within the area for 100% of Vera's Attack and gain 5 seconds of Dark Radiation (Dark DMG increases by 10%).",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains 3/7/12 Overclock when consuming orbs. Generates 2 Overclock every second as well. Overclock caps at 60 points. When Overclock value is sufficient, press and hold the Basic Attack button to unleash the Core attack. Repeatedly activate Basic Attack to continue the Core attack combo, dealing 300% / 290% / 290% / 290% / 312% AOE Dark DMG. Deals an additional 20% / 40% / 20% / 20% / 40% Dark DMG to nearby targets. Triggering Core attack consumes 12 Overclock and generates 6 Energy.",
      coreIcon: require("../../assets/Images/Rozen/Core.png"),

      leader:
        "All team members' HP and Healing received increases by 5% and 5%.",
      leaderIcon: require("../../assets/Images/Rozen/Leader.png"),

      ssRank:
        "Passive: Attack increases by 5% for 5 seconds, stacks up to 3 times when Core Passive attack is performed.",
      ssRankIcon: require("../../assets/Images/Rozen/SS.png"),

      sssRank: "Passive: Dark Radiation's Dark DMG bonus is changed to 20%.",
      sssRankIcon: require("../../assets/Images/Rozen/SSS.png"),

      sssPlusRank: "Passive: Signature Move duration increases by 4 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Rozen/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Arctic
  {
    construct_Name: "Rosetta ",
    construct_Model: "Arctic",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Arctic/Construct_Arctic.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (100%)",
    id: "29",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Arctic/RedOrb.png"),
      redPing:
        "Unleashes 3 blade waves ahead, striking 3 times and dealing a total of 222% / 444% / 666% Physical DMG.",

      yellowPingIcon: require("../../assets/Images/Arctic/YellowOrb.png"),
      yellowPing:
        "Raises the shield the charges towards the target followed by a spear attack, dealing 220% / 440% / 660% Physical DMG and gain 3% / 6% / 10% HP worth of shield for 5 seconds. Gains Super Armor during the move.",

      bluePingIcon: require("../../assets/Images/Arctic/BlueOrb.png"),
      bluePing:
        "Tosses and retrieves the shield, dragging enemies and dealing 220% / 440% / 660% Physical DMG and applying Spear of Insight for 8 seconds.\nSpear of Insight: Target's Physical DEF is reduced by 20%.",

      // Skills
      basicAttack:
        "Basic Attack: Continuously attacks the target with the spear and shield, dealing a total of 950% Physical DMG. Press and hold the Basic Attack button to charge the railgun, dealing 200% / 370% Physical DMG based on the hold duration. DMG received is reduced by 30% while charging.",
      basicAttackIcon: require("../../assets/Images/Arctic/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Soars into the sky and fires the ion cannon towards the ground. Nearby enemies are drawn together during the charging process. Deal a total of 2480% Physical DMG as the explosion occurs.",
      signatureIcon: require("../../assets/Images/Arctic/Signature.png"),

      qte: "QTE: Performs a spinning attack with the spear, dealing a total of 720% Physical DMG to nearby enemies.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Rosetta possesses 3 energy charges. 3-Pings expend 1 charge, enhancing a skill with 100% DMG bonus. Expends up to 2 charges when unleashing Signature Move, gaining a DMG bonus of 40% / 80% corresponding to the number of charges. When all charges have been expended, Rosetta enters Full-Charge state. Press and hold the Basic Attack button for its maximum duration to fire the wide-area railgun, dealing 1600% Physical DMG. Recovers 8 Signature Move Energy and applies Spear of Insight on affected targets for 20 seconds. DMG received is reduced by 90% while charging. Recover 3 energy charges 8 seconds after firing the wide-area railgun.",
      coreIcon: require("../../assets/Images/Arctic/Core.png"),

      leader:
        "All team members' DEF increases by 15%. Attack of Tank Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Arctic/Leader.png"),

      ssRank:
        "Passive: QTE triggers Spear of Insight for 8 seconds. Rosetta deals 10% bonus DMG to targets struck by Red Orb for 8 seconds.",
      ssRankIcon: require("../../assets/Images/Arctic/SS.png"),

      sssRank: "Passive: Spear of Insight's DEF reduction increases by 20%.",
      sssRankIcon: require("../../assets/Images/Arctic/SSS.png"),

      sssPlusRank: "assive: 3-Pings and Signature Move DMG increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/Arctic/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Kirin
  {
    construct_Name: "Chang Yu ",
    construct_Model: "Kirin",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Kirin/Construct_Kirin.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (20%) Ice (80%)",
    id: "13",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Kirin/RedOrb.png"),
      redPing:
        "Swiftly attacks the front twice, dealing 200% / 400% / 400% Physical DMG. During a 3-Ping, charges up for a short time after the two initial hits and follows up with a heavy attack, dealing 400% Ice DMG and target's speed is reduced.",

      yellowPingIcon: require("../../assets/Images/Kirin/YellowOrb.png"),
      yellowPing:
        "Dashes towards the target and performs an upwards kick, dealing 220% / 440% / 660% Physical DMG. DMG is converted to Ice element when it is a 3-Ping.",

      bluePingIcon: require("../../assets/Images/Kirin/BlueOrb.png"),
      bluePing:
        "Strikes the ground, dealing 100% / 150% / 200% Physical DMG to enemies within the 4 meter radius. DMG is converted to Ice element when it is a 3-Ping. Leaves behind an Ice Mirror for 4/6/8 seconds after striking the ground. Enemies within the Ice Mirror has 30% reduced Movement Speed and 5% reduced Ice Resistance for 8 seconds. Duration is constantly renewed within the field. Only 1 Ice Mirror can be present at any time and is replaced with the newest one, if any.",

      // Skills
      basicAttack:
        "Basic Attack: Attacks swiftly with the gauntlets, dealing a total of 320% Physical DMG and 810% Ice DMG.",
      basicAttackIcon: require("../../assets/Images/Kirin/BasicAttack.png"),

      signature:
        "Signature Move: When Signature Move Energy reaches 60 points, Formless Style can be accessed. All orbs apart from the Follow-up Attack Orb will be removed. Each orb removed grants 5 points of Signature Move Energy. The Follow-up Attack Orb is permanently lit. DEF and Ice DMG increases by 20%. Orbs cannot be generated in this state. Activating the Signature Move button again will deduct 60 Signature Move Energy, the Follow-up Attack Orb greys out, 4 random Signal Orbs are returned and Formless Style is cancelled. During Formless Style, pressing the Follow-up Attack Orb will consume 15 Energy to perform a Rupture, dealing 360% Ice DMG. Pressing the Follow-up Attack Orb after the 3rd or 4th Basic Attack sequence unleashes Circulating Tide, striking rapidly with each sequence costing 7/7/7/7/10 Signature Move Energy, dealing 980% Ice DMG in total. Gains Super Armor during the move. Recovers 100 evasion points when successfully dodging during Formless Style, Ice DMG increases by 20% during Matrix. Proceeds straight to the 4th Basic Attack sequence after dodging or performing Rupture.",
      signatureIcon: require("../../assets/Images/Kirin/Signature.png"),

      qte: "QTE: Instantaneously appears at the target's location and smashes downwards doing 5 hits, dealing a total of 500% Ice DMG and target is slowed for a short duration.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains a Follow-up Attack Orb at the start of battle. The Orb is usually greyed out (disabled). The Follow-up Attack Orb will flash after any 3-Ping is performed; there will be a short duration to activate the Orb. Different Orb colours will result in different Follow-up Attack moves. Red Follow-up: Strikes with the back, dealing 500% Ice DMG. Basic Attack continues from the 4th sequence after that. Yellow Follow-up: Shuffles backwards and pulls nearby enemies towards the condensed ice. Deals 400% AOE Ice DMG as the ice shatters. Blue Follow-up: Deals 300% Ice DMG with an icicle attack, reducing the target's speed for a short duration and leaves behind 8 seconds of Ice Mirror.",
      coreIcon: require("../../assets/Images/Kirin/Core.png"),

      leader: "All team members' DEF increases by 15%.",
      leaderIcon: require("../../assets/Images/Kirin/Leader.png"),

      ssRank:
        "Passive: Ice DMG and DEF increases by 15% during Formless Style.",
      ssRankIcon: require("../../assets/Images/Kirin/SS.png"),

      sssRank:
        "Passive: Ice Mirror's Ice Resistance reduction is strengthened to 10%. Blue Orbs grant an increased 10% Ice DMG to self for 4/6/8 seconds.",
      sssRankIcon: require("../../assets/Images/Kirin/SSS.png"),

      sssPlusRank:
        "Passive: Follow-up Attack and Circulating Tide reduces target's Ice Resistance by 5% for 8 seconds. Follow-up Attack and Circulating Tide grants an increased 20% Ice DMG to Changyu for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Kirin/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Laurel
  {
    construct_Name: "Luna ",
    construct_Model: "Laurel",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Laurel/Construct_Laurel.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (10%) Dark (90%)",
    id: "25",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Laurel/RedOrb.png"),
      redPing:
        "Unleashes the spheres ahead, attacking in a randomized pattern dealing 240% / 480% / 720% Physical DMG. DMG is converted to Dark element when it is a 3-Ping. Gains Super Armor during the move.",

      yellowPingIcon: require("../../assets/Images/Laurel/YellowOrb.png"),
      yellowPing:
        "Continuously channels the flow of energy, generates up to 4 spikes at the target's location, dealing 220% / 440% / 660% Physical DMG. DMG is converted to Dark element when it is a 3-Ping. Gains Super Armor during the move.",

      bluePingIcon: require("../../assets/Images/Laurel/BlueOrb.png"),
      bluePing:
        "Unleashes a virus network field for 3 seconds, dealing 200% / 400% / 600% Physical DMG. DMG is converted to Dark element when it is a 3-Ping. The field will automatically follow the nearest target, otherwise it accompanies the character instead. Character is able to move while triggering the skill.",

      // Skills
      basicAttack:
        "Basic Attack: Unleashes a flurry of attacks with spheres and spikes, dealing a total of 470% Physical DMG. Attack with a longsword and spear instead during Annihilation Mode, dealing a total of 950% Dark DMG. Attacking after dodging deals 300% Dark DMG. Signal Orbs will not be generated during Annihilation Mode.",
      basicAttackIcon: require("../../assets/Images/Laurel/BasicAttack.png"),

      signature:
        "Signature Move: Costs 150 Energy. Continuously alters the gravity in a large area ahead, dealing 2880% Dark DMG to all targets within. Performing Signature Move during Annihilation Mode drains all Annihilation points and exits Annihilation Mode.",
      signatureIcon: require("../../assets/Images/Laurel/Signature.png"),

      qte: "QTE: Appears in the air and attacks the area ahead with a spear, dealing 640% Dark DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains 15 Annihilation points during 3-Pings, up to 60 points. The next orb triggered will be considered a 3-Ping. The 3-Ping combo perk from other effects such as Matrix will be prioritized first. Press and hold the Basic Attack button when there are at least 15 Annihilation points to enter Annihilation Mode, dealing 200% Dark DMG to the surrounding targets. All current Signal Orbs will be hidden and replaced by up to 4 Annihilation Orbs. Triggering the mode will grant Super Armor during the move and activates all available QTE. Unleashes 4 spikes when an Annihilation Orb is expended, dealing 400% Dark DMG in total and awarding 10 Energy. Gains an additional Annihilation Orb when entering Matrix during Annihilation Mode. Basic Attack consumes 5 Annihilation points. Annihilation Mode ends when there are no Annihilation points left or when the character is switched out. Switching drains all Annihilation points.",
      coreIcon: require("../../assets/Images/Laurel/Core.png"),

      leader:
        "All team members' Dark DMG increases by 10%, Attack of Attacker constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Laurel/Leader.png"),

      ssRank: "Passive: Spike DMG increases by 5%. Drop 2 additional spikes.",
      ssRankIcon: require("../../assets/Images/Laurel/SS.png"),

      sssRank:
        "Passive: Dark DMG increases by 5% during Annihilation Mode. DMG bonus persists for 4 seconds after exiting Annihilation Mode. Trigger Matrix when entering Annihilation Mode with a full gauge, 12 seconds cooldown.",
      sssRankIcon: require("../../assets/Images/Laurel/SSS.png"),

      sssPlusRank:
        "Passive: Signature Move gains a DMG bonus of 15% / 30% / 45% / 60% / 75% corresponding to the number of Annihilation Orbs expended.",
      sssPlusRankIcon: require("../../assets/Images/Laurel/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //2b
  {
    construct_Name: "2B ",
    construct_Model: "Unknown",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/2B/Construct_2B.png"),
    construct_Type: "Attacker",
    construct_Element: "Physical (100%)",
    id: "26",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/2B/RedOrb.png"),
      redPing:
        "Attacks with both light and heavy weapons, dealing 220% / 440% / 660% Physical DMG. Gains Super Armor during the move.",

      yellowPingIcon: require("../../assets/Images/2B/YellowOrb.png"),
      yellowPing:
        "Moves forward and brandishes the light weapon, dealing 200% / 400% / 600% Physical DMG, dragging enemies along the way. Apply Withdraw to enemies struck, reducing Attack by 60% for 12 seconds. Gains Super Armor during the move. Direction of attack can be navigated with the directional stick.",

      bluePingIcon: require("../../assets/Images/2B/BlueOrb.png"),
      bluePing:
        "Unleashes an illusion using the POD, dealing 140% / 280% / 420% Physical DMG to nearby enemies. Gains Super Armor during the move.",

      // Skills
      basicAttack:
        "Basic Attack: Continuously attacks with the light weapon, dealing a total of 840% Physical DMG. Go into sprint after dodging. Triggering Basic Attack while sprinting deal 290% Physical DMG.",
      basicAttackIcon: require("../../assets/Images/2B/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Slashes forward after charging the heavy weapon, dealing a total of 800% Physical DMG. When the final hit lands on the target, triggers the second attack phase and slashes forward with the heavy weapon, dealing 1800% Physical DMG.",
      signatureIcon: require("../../assets/Images/2B/Signature.png"),

      qte: "QTE: Continuously slashes the target with the heavy weapon, dealing a total of 640% Physical DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Yellow 3-Ping followed by any 3-Ping grants 160 Stance Stability points. Stance Stability drains 20 points per second. Triggering it again does not refresh the duration. Enters Combat Stance while Stance Stability is active; Basic Attacks, Red and Yellow Orbs gain sword waves, dealing 70% Physical DMG. Blue Orbs can be used to break out of incoming attacks. During Combat Stance, Red 2 and 3-Pings grant 1 and 2 stacks of Data Correction respectively for 8 seconds up to 3 stacks, with each stack granting 2% Physical DMG bonus. (Effect is increased to 4% when 9S and A2 are present in the team). Data Correction stacks are removed when the Combat Stance ends. Triggering the effect again or activating Signature Move will refresh Data Correction's duration. Combat Stance gauge does not drain during Signature Move.",
      coreIcon: require("../../assets/Images/2B/Core.png"),

      leader:
        "2B, 9S and A2 within the team receive an increased 8% Physical DMG and 25 Energy at the start of battle.",
      leaderIcon: require("../../assets/Images/2B/Leader.png"),

      ssRank:
        "Passive: When 2B, 9S or A2 activates Signature Move, 9S and A2's Critical Rate increases by 10% and 2B's Critical Rate increases by 25% for 12 seconds.",
      ssRankIcon: require("../../assets/Images/2B/SS.png"),

      sssRank:
        "Passive: Sword wave DMG increases by 50%. When the Signature Move is triggered, convert all Yellow Orbs into random orbs. 2B and 9S gain 5 Energy when a sword wave strikes a target; A2 recovers 1% HP worth of POD: Shield, 1.5 seconds cooldown. Data Correction Attack buff is increased to 4% per stack (8% when 9S and A2 are in the team).",
      sssRankIcon: require("../../assets/Images/2B/SSS.png"),

      sssPlusRank:
        "Passive: DMG received is reduced by 30% during skill activations. Triggering Blue Orbs grant 0.3 seconds of invincibility. Physical DMG increases by 10% (20% when 9S and A2 are in the team) during Combat Stance.",
      sssPlusRankIcon: require("../../assets/Images/2B/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //9S
  {
    construct_Name: "9S ",
    construct_Model: "Unknown",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/9S/Construct_9S.png"),
    construct_Type: "Support",
    construct_Element: "Physical (100%)",
    id: "34",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/9S/RedOrb.png"),
      redPing:
        "Fires a laser using the pod, dealing 200% / 400 / 600% Physical DMG.",

      yellowPingIcon: require("../../assets/Images/9S/YellowOrb.png"),
      yellowPing:
        "Unleashes a deceleration field using the pod, dealing 190% / 380% / 570% Physical DMG and halting all enemies within the area for 0.6/1.2/2.4 seconds.",

      bluePingIcon: require("../../assets/Images/9S/BlueOrb.png"),
      bluePing:
        "Unleashes an expanding electric ring using the pod, dealing 180% / 360% / 540% Physical DMG to targets who come into contact with the ring while allies are healed for 40% / 80% / 120% of 9S' attack.",

      // Skills
      basicAttack:
        "Basic Attack: Attacks forward continuously, dealing a total of 860% Physical DMG. Sprint can be performed after dodging. Attacking while sprinting deals 240% Physical DMG. Basic Attacks do not generate orbs. Orbs are automatically generated every 2.5 seconds.",
      basicAttackIcon: require("../../assets/Images/9S/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Commences hacking on the target. Deal 2600% Physical DMG when the hack is successful.\n(Minigame can be toggled to skip in the Character Skills page).",
      signatureIcon: require("../../assets/Images/9S/Signature.png"),

      qte: "QTE: Hacks a friendly target and heals for 100% of 9S' attack.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases to 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Starts the battle with 100 Overclock Energy points. When a 3-Ping is performed and when Overclock Energy is greater than 50, consumes 50 Overclock Energy and gains an Overclock Indicator Orb of the corresponding color on the rightmost side of the orb bar (possession limit of 1). 20 points of Overclock Energy is generated every second (up tp 100). Pressing the Overclock Indicator Orb will expend all existing orbs of the same color, summoning POD to unleash a barrage of bullets, dealing 100% / 200% / 300% Physical DMG. (Expending Overclock Indicator Orbs is unique and does not follow the normal orb rules). If the number of Signal Orbs expended from Overclock Indicator exceeds 3 seconds, a random amount of excess orbs are returned. The swap cooldown of other characters is reduced by 1 second for each Overclock Indicator performed (up to 4 seconds).",
      coreIcon: require("../../assets/Images/9S/Core.png"),

      leader:
        "2B, 9S and A2 within the team receive an increased 8% Physical DMG and 10% DMG received.",
      leaderIcon: require("../../assets/Images/9S/Leader.png"),

      ssRank:
        "Passive: Possession limit of Overclock Indicator is increased by 1. Gains a random Overclock Indicator Orb when entering the field. QTE and Blue Orbs will apply E-Drug to 2B and A2.\nE-Drug: Physical DMG increases by 10% for 8 seconds.",
      ssRankIcon: require("../../assets/Images/9S/SS.png"),

      sssRank:
        "Passive: Signal Orb generation speed is increased to 1.5 seconds. Overclock Indicator DMG increases by 50%. E-Drug effect increases to 20% for 12 seconds.",
      sssRankIcon: require("../../assets/Images/9S/SSS.png"),

      sssPlusRank:
        "Passive: Triggering Overclock Indicator grants 0.3 seconds of invulnerability and Physical DMG increases by 10% for 5 seconds. (Effect is increased to 20% when 2B and A2 are in the team).",
      sssPlusRankIcon: require("../../assets/Images/9S/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //A2
  {
    construct_Name: "A2 ",
    construct_Model: "Unknown",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/A2/Construct_A2.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (100%)",
    id: "30",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/A2/RedOrb.png"),
      redPing:
        "Attacks forward continuously, dealing 200% / 400% / 600% Physical DMG. Enhances the next Basic Attack for 4 seconds when a 3-Ping is triggered, dealing a total of 300% Physical DMG and gain 3% HP worth of POD: Shield. Enemies in the area are knocked down.",

      yellowPingIcon: require("../../assets/Images/A2/YellowOrb.png"),
      yellowPing:
        "Attacks forward continuously, dealing 200% / 400% / 600% Physical DMG.",

      bluePingIcon: require("../../assets/Images/A2/BlueOrb.png"),
      bluePing:
        "Unleashes a gravity field using the POD, dealing 150% / 300% / 450% Physical DMG and continuously pulls in enemies for 2/2.5/3 seconds. (Pull speed outside of the field is slower and does not deal DMG).",

      // Skills
      basicAttack:
        "Basic Attack: Attacks forward continuously, dealing a total of 760% Physical DMG, each strike awarding 1% HP worth of POD: Shield.",
      basicAttackIcon: require("../../assets/Images/A2/BasicAttack.png"),

      signature:
        "Signature Move: Berserk mode can be activated when POD: Shield is fully charge. A2 receives 60% reduced DMG and Movement Speed is increased. DMG is also increased by 30% and gains Super Armor during the mode. During Berserk mode, Basic Attack speed is increased. 3-Pings will emit an electric burst, dealing 150% Physical DMG. Berserk mode drains 4% of the max HP every second (POD: Shield will be prioritized first if it is present). Berserk mode can be deactivated manually or when A2's HP reaches the 60% threshold. The mode cannot be activated again for 10 seconds after deactivation. When A2 leaves the battlefield with Berserk mode active, the POD: Shield continues to drain. Berserk mode ends when POD: Shield is emptied while off-field.",
      signatureIcon: require("../../assets/Images/A2/Signature.png"),

      qte: "QTE: Attacks continuously, dealing 600% Physical DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains 5% HP worth of POD: Shield when performing 3-Pings (up to 30% HP worth). Summons a pod at the same time to fire 6 honing missiles to targets at random, dealing a total of 140% Physical DMG and gaining 3% HP worth of POD: Shield. Honing missiles apply Provoke for 5 seconds (DEF is reduced by 20%. Effect is doubled when 2B and 9S are present in the team). Press and hold the dodge button while moving in a direction to initiate sliding, gaining 10% HP worth of POD: Shield each second. Dodge meter cannot regenerate while sliding. Electricity produced from sliding will drag nearby enemies along.",
      coreIcon: require("../../assets/Images/A2/Core.png"),

      leader:
        "2B, 9S and A2 within the team receive an increased 8% Physical DMG and dodge limit increases by 200.",
      leaderIcon: require("../../assets/Images/A2/Leader.png"),

      ssRank:
        "Passive: Always gain 50% POD: Shield upon entry into battle. The pod will automatically launch honing missiles every 4 seconds during Berserk mode (off-field included). Additionally, when 2B and 9S are present in the team, the next active character receives an increased 10% Physical DMG until Berserk mode ends.",
      ssRankIcon: require("../../assets/Images/A2/SS.png"),

      sssRank:
        "Passive: DMG decreases by 70% to enemies within the gravity field. Pod honing missiles DMG increases by 100%. Provoke (DEF down) effect is increased to 40%.",
      sssRankIcon: require("../../assets/Images/A2/SSS.png"),

      sssPlusRank:
        "Passive: The HP threshold of Berserk mode is lowered to 30%. When POD: Shield is active during Berserk mode, the Signature Move gauge drains at 2.5% HP per second instead and DMG increases by 10%.",
      sssPlusRankIcon: require("../../assets/Images/A2/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Fate
  {
    construct_Name: "Wanshi ",
    construct_Model: "Fate",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/Fate/Construct_Fate.png"),
    construct_Type: "Support",
    construct_Element: "Physical (20%) Ice (80%)",
    id: "18",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Fate/RedOrb.png"),
      redPing:
        "Performs a spiral kick attack, dealing AOE in a straight line fro 170% / 340% / 510% Physical DMG. Gains a short duration of Super Armor for 1 or 2-Pings, 3-Pings grant extended Super Armor.",

      yellowPingIcon: require("../../assets/Images/Fate/YellowOrb.png"),
      yellowPing:
        "Performs an elbow strike, dealing 190% / 380% / 570% Physical DMG AOE in a straight line. Gains a short duration of invulnerability, 3-Pings grant extended Super Armor.",

      bluePingIcon: require("../../assets/Images/Fate/BlueOrb.png"),
      bluePing:
        "Lobs a freezing hand grenade, slowing enemies in its AOE for 140% / 280% / 420% Ice DMG and heals all allies within the area based on 30% / 60% / 90% Wanshi's attack. 3-Pings grant extended Super Armor.",

      // Skills
      basicAttack:
        "Basic Attack: Combines both Form and Combat tactics, dealing 350% Physical DMG and 360% Ice DMG. Holding the Basic Attack button within 1 second after performing a 3-Ping activates Tactical Shooting Stance. Stance can be maintained by continuous holding. Every barrage deals 100% Ice DMG.",
      basicAttackIcon: require("../../assets/Images/Fate/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Fires ahead for 1400% Ice DMG.",
      signatureIcon: require("../../assets/Images/Fate/Signature.png"),

      qte: "QTE: Lobs a freezing hand grenade, slowing enemies in its AOE for 360% Ice DMG and leaves behind a field, dealing a total of 200% Ice DMG over time. Heals all allies within the area based on 100% of Wanshi's attack and grants 8 seconds of Condensed Frost (Ice DMG increases by 10%).",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Healing amount increases by 20%.",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Releasing the Basic Attack button during Tactical Shooting Stance activates Bloom Shot, dealing 200% Ice DMG in a line. Going into Bloom Shot counts as an evasive move. Successfully dodging during Bloom Shot grants extended invulnerability and deals 700% Ice DMG instead.",
      coreIcon: require("../../assets/Images/Fate/Core.png"),

      leader: "All team members' HP and Ice DMG increases by 10% and 5%.",
      leaderIcon: require("../../assets/Images/Fate/Leader.png"),

      ssRank:
        "Passive: Bloom shot DMG increases by 50%. Gains 5% Energy for every second off-field.",
      ssRankIcon: require("../../assets/Images/Fate/SS.png"),

      sssRank: "Passive: Condensed Frost buff increases to 20%.",
      sssRankIcon: require("../../assets/Images/Fate/SSS.png"),

      sssPlusRank:
        "Passive: Signature Move DMG increases by 100%. Bloom Shot grants 5% energy. Successfully evading during Bloom Shot grants a bonus 10% energy.",
      sssPlusRankIcon: require("../../assets/Images/Fate/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Glory
  {
    construct_Name: "Chrome ",
    construct_Model: "Glory",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Glory/Construct_Glory.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (20%) Ice (80%)",
    id: "31",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Glory/RedOrb.png"),
      redPing:
        "Draws the blade and leaps towards the enemy, striking them and dealing 190% / 380% / 570% Physical DMG.\n \nWhen Shield of Glory is more than 50%, performing a 3-Ping will consume 50% of it and deal 820% Ice DMG instead and also grants Frosted Body for a fixed duration during the attack. Incoming attacks are negated and enemies are slowed when struck while Frosted Body is active and also recovers 50% Shield of Glory.",

      yellowPingIcon: require("../../assets/Images/Glory/YellowOrb.png"),
      yellowPing:
        "Draws the blade and leaps towards the enemy, striking them and dealing 190% / 380% / 570% Physical DMG.\n\nWhen Shield of Glory is more than 50%, performing a 3-Ping will consume 50% of it and deal 740% Ice DMG instead and also grants Frosted Body for a fixed duration during the attack. Incoming attacks are negated and enemies are slowed when struck while Frosted Body is active and also recovers 50% Shield of Glory.",

      bluePingIcon: require("../../assets/Images/Glory/BlueOrb.png"),
      bluePing:
        "Boosts forward with the thrusters and strikes with the charged weapon, dealing 170% / 340% / 510% Physical DMG.\n\n When Shield of Glory is more than 50%, performing a 3-Ping will consume 50% of it and deal 740% Ice DMG instead and also grants Frosted Body for a fixed duration during the attack. Incoming attacks are negated and enemies are slowed when struck while Frosted Body is active and also recovers 50% Shield of Glory.",

      // Skills
      basicAttack:
        "Basic Attack: Attacks continuously with the gunblade, dealing a total of 750% Physical DMG. While Frigid Soul is active, Basic Attack is empowered into Frigid Assault, dealing a total of 900% Ice DMG and also gains Frosted Body for a fixed duration during the attack. Incoming attacks are negated and enemies are slowed when struck while Frosted Body is active and recovers 50% Shield of Glory. Frigid Assault does not generate Signal Orbs.",
      basicAttackIcon: require("../../assets/Images/Glory/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Injects frigid air into the ground, causing a large freezing AOE, dealing 2300% Ice DMG to all enemies struck.",
      signatureIcon: require("../../assets/Images/Glory/Signature.png"),

      qte: "QTE: Strikes ferociously from the air, dealing 640% Ice DMG.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core passive: During battle, Chrome's HP is reduced to 40%. The remaining 60% HP is converted to Shield of Glory that automatically regenerates overtime. When energy tank (horizontal gauge) is full, press and hold the Basic Attack button to enter Frigid Soul mode, draining Shield of Glory completely and rearranges all orbs. 3-Pings grant Frosted Body during this period and will not expend Shield of Glory. However, Shield of Glory does not regenerate during Frigid Soul as well. A ring of Frigid Erosion is generated around Chrome, applying Etching Frost to all enemies within and dealing 150% Ice DMG every 0.5 seconds.\n Etching Frost: Reduces IceResistance by 15% for 8 seconds. Triggering the effect again refreshes the duration.",
      coreIcon: require("../../assets/Images/Glory/Core.png"),

      leader:
        "All team members' Ice DMG increases by 10%, Attack of Tank Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Glory/Leader.png"),

      ssRank:
        "Passive: Signature Move DMG increases by 20%. DMG increases by 10% for 3-Pings performed with Frosted Body. The slow effect of Frosted Body is converted to Freeze, applying to all targets around the character.",
      ssRankIcon: require("../../assets/Images/Glory/SS.png"),

      sssRank:
        "Passive: Etching Frost effect increases by 10%. Recovers 100% Shield of Glory when struck while Frosted body is active and Attack increases by 10% for 5 seconds.",
      sssRankIcon: require("../../assets/Images/Glory/SSS.png"),

      sssPlusRank:
        "Passive: Retains 25% Shield of Glory and recover 40 Signature Move Energy when Frigid Soul is activated. Ice DMG increases by 20% during Frigid Soul. Freeze duration of Frosted Body increases by 1 second.",
      sssPlusRankIcon: require("../../assets/Images/Glory/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //XXI
  {
    construct_Name: "21 ",
    construct_Model: "XXI",
    construct_Rank: "A",
    construct_Image: require("../../assets/Images/XXI/Construct_XXI.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (20%) Dark (80%)",
    id: "14",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/XXI/RedOrb.png"),
      redPing:
        "Leaps into the air and places a Twilight Field on target's location. The Twilight Field will pull all enemies in a large area once upon generation, dealing 100% / 200% / 300% Physical DMG. DMG is converted to Dark element on a 3-Ping. The field lasts for 1.5/3.5/6 seconds and continuously draws in enemies. No. 21 enters Stagnation upon 3-Ping chains and is able to perform a Forced Evasion while unleashing 3 Twilight Matrices on the target. \nCollab Bot: Whenever No. 21 generates a Twilight Matrix, unleashes a gravitational wave on the Twilight Field, pulling targets in a large area once and dealing 70% Dark DMG.",

      yellowPingIcon: require("../../assets/Images/XXI/YellowOrb.png"),
      yellowPing:
        "Leaps according to the directional button and unleashes a Twilight Saw, dealing a total of 140% / 280% / 420% Physical DMG. DMG is converted to Dark element on a 3-Ping. No. 21 enters Stagnation upon 3-Ping chains and is able to perform Forced Evasion while unleashing 3 Twilight Matrices on the target. ",

      bluePingIcon: require("../../assets/Images/XXI/BlueOrb.png"),
      bluePing:
        "Enters Overload Superposition state. Copies the next 1/2/4 Basic Attacks and Shadow Prism Attacks. The effect cannot be stacked. \nCollab Bot: Immediately performs a sprint attack at the current target, dealing a total of 40% of No. 21's Attack as Physical DMG and reducing the target's DMG dealt by 20% for 5 seconds. The effect can only be triggered once every 2 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Fires continuously with the beam cannons, dealing a total of 348% Physical DMG. \nCollab Bot: Performs self-regulated attacks on the current target, dealing 20% of No. 21's attack as Physical DMG. The collaborative bot will always be on-field.",
      basicAttackIcon: require("../../assets/Images/XXI/BasicAttack.png"),

      signature:
        "Signature Move: Costs 120 Energy. Unleashes an Enhanced Twilight Field on target's location and enters Quick Attack mode, emptying all of No. 21's Signal Orbs and Shadow Prism energy while granting unlimited Blue Orbs and extreme attack speed. During Quick Attack mode, Basic Attacks deal 20% Dark DMG. Shadow Prism attacks can be triggered and will generate Twilight Matrices. When Quick Attack mode ends, the Twilight Field explodes, dealing 600% Dark DMG and emptying all of No. 21's Signal Orbs, Signature Move Energy and Blue Orb buff at the same time. The explosion DMG of each Twilight Matrix during Quick Attack mode increases by 40%. When the total number of generated Twilight Matrices reaches 6, an S-rating Signature Move is awarded, granting up to 300% increased Twilight Matrix explosion DMG. \nCollab Bot: Projects onto No. 21's space and inflicts Stillness onto all enemies. The Collab Bot will not be able to trigger other abilities during Signature Move.",
      signatureIcon: require("../../assets/Images/XXI/Signature.png"),

      qte: "QTE: Summons a Twilight Field on target's location, dealing 40% Dark DMG and unleashes 3 Twilight Matrices.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gathers 1 point of Shadow Prism energy for each Basic Attack performed. Perform a Shadow Prism attack upon the next Basic Attack when there are 4 points of energy and generate 1 Twilight Matrix on the target's location, knocking them down and dealing 48% Dark DMG. The Shadow Prism energy will reset once a Shadow Prism attack is performed. The Shadow Matrix lasts for 3 seconds and grants 2 Signature Move Energy to No. 21. A Resonance Pulse will trigger when the Collab Bot's positional wave interacts with the Twilight Matrix, destroying it and dealing 16% Dark DMG AOE. No. 21 recovers 40 evasion energy for each Twilight Matrix generated. Forced evasion: When No. 21 is staggered (got hit, knocked down or Stagnation), spends 1.4x evasion (350) to perform a Forced Evasion, removing all abnormal effects and unleashes 1 Twilight Matrix on the target's location. Forced Evasion grants 2 seconds of Super Armor and 15% of No. 21's HP as shield.",
      coreIcon: require("../../assets/Images/XXI/Core.png"),

      leader:
        "All members' maximum evasion limit and DMG increases by 250% and 5%.",
      leaderIcon: require("../../assets/Images/XXI/Leader.png"),

      ssRank:
        "Passive: DMG increases by 5% when No. 21 has a shield active. DMG taken decreases by 10% if there is no shield. Blue 3-Ping chains will immediately regenerate full Shadow Prism energy.",
      ssRankIcon: require("../../assets/Images/XXI/SS.png"),

      sssRank:
        "Passive: Matrices grant decreased 20% DMG taken and evasion recovery rate increases by 25% for all allies on-field for 2 seconds, up to 3 stacks. Triggering the effect again does not refresh its duration. Twilight Field now applies Chain Fusion (Dark Resistance decreases by 10% for 5 seconds) to targets within.",
      sssRankIcon: require("../../assets/Images/XXI/SSS.png"),

      sssPlusRank:
        "Passive: When the Signature Move rating is S, the Twilight Filed explosion DMG further increases by 210%. When the Collab Bot attacks, all allies on-field gain 2% of No. 21's HP as shield, up to 10%.",
      sssPlusRankIcon: require("../../assets/Images/XXI/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Flare
  {
    construct_Name: "Vera ",
    construct_Model: "Flare",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Flare/Construct_Flare.png"),
    construct_Type: "Tank",
    construct_Element: "Physical (15%) Lightning (85%)",
    id: "32",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Flare/RedOrb.png"),
      redPing:
        "Twirls the spear and gains 10% HP of shield and deal 230% / 460% / 690% physical DMG. DMG is converted to Lightning element on a 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Flare/YellowOrb.png"),
      yellowPing:
        "Spins around the spear, pulling enemies in and deals 190% / 380% / 570% Physical DMG.",

      bluePingIcon: require("../../assets/Images/Flare/BlueOrb.png"),
      bluePing:
        "Thrusts forward and pierces targets ahead, dealing 180% / 360% / 540% Physical DMG. DMG is converted to Lightning element on a 3-Ping.",

      // Skills
      basicAttack:
        "Basic Attack: Performs a series of spear attacks, dealing a total of 860% Physical DMG. Immediately performing Basic Attack after any 3-Ping will trigger a Follow-up, dealing 310% / 230% / 200% Lightning DMG for Red/Yellow/Blue Orbs respectively. Immediately enters the third combo after dodging.",
      basicAttackIcon: require("../../assets/Images/Flare/BasicAttack.png"),

      signature:
        "Signature Move: Costs 50 Energy. Hurls the spear at full force, dealing 1500% Lightning DMG ahead.",
      signatureIcon: require("../../assets/Images/Flare/Signature.png"),

      qte: "QTE: Plunges and places the battle standard into the ground, dealing 600% Lightning DMG and a total of 200% AOE DMG overtime for 8 seconds.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Gains 1 stack of Electric Charge when performing a Follow-up, up to 3 stacks. Press and hold the Basic Attack button when there is a stack available to perform Thunderfall, dealing 600% Lightning DMG and inflicting Interference (Lightning Resistance decreases by 15% for 8 seconds). DMG of Thunderfall is doubled for each stack consumed.",
      coreIcon: require("../../assets/Images/Flare/Core.png"),

      leader:
        "All team members' Lightning DMG increases by 10%, Attack of Tank Constructs increases by 5%.",
      leaderIcon: require("../../assets/Images/Flare/Leader.png"),

      ssRank:
        "Passive: QTE attacks will automatically be performed upon switching out, Signature Move Energy cost decreases by 20%. Thunderfall can be performed after activating Signature Move.",
      ssRankIcon: require("../../assets/Images/Flare/SS.png"),

      sssRank:
        "Passive: Gains Super Armor and reduces DMG taken by 50% when a shield is active. Interference Lightning Resistance reduction decreases to 25%. Signature Move Lightning DMG increases by 100%.",
      sssRankIcon: require("../../assets/Images/Flare/SSS.png"),

      sssPlusRank:
        "Passive: Thunderfall grants 20% HP of shield. Thunderfall Lightning DMG increases by 25%.",
      sssPlusRankIcon: require("../../assets/Images/Flare/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Solaeter
  {
    construct_Name: "Liv ",
    construct_Model: "Solaeter",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Solaeter/Construct_Solaeter.png"),
    construct_Type: "Amplifier",
    construct_Element: "Physical (10%) Fire (90%)",
    id: "35",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Solaeter/RedOrb.png"),
      redPing:
        "Liv releases a torrent of energy beams, dealing 220% / 440% / 660% Physical DMG based on the number of orbs pinged. Damage type is converted to Fire on 3-Ping.",

      yellowPingIcon: require("../../assets/Images/Solaeter/YellowOrb.png"),
      yellowPing:
        "Liv activates her wings, moving in the direction of the current directional input, and releases a barrage of shining feathers, dealing 210% / 420% / 630% Physical DMG to the target and any nearby enemies based on the number of orbs pinged. Damage type is converted to Fire on 3-Ping.",

      bluePingIcon: require("../../assets/Images/Solaeter/BlueOrb.png"),
      bluePing:
        "Liv summons an energy matrix, dealing 200% / 400% / 600% Physical DMG to a rectangular area around the target based on the number of orbs pinged. Damage type is converted to Fire on 3-Ping. Enemies damaged by this attack will enter a Matrix state for 1.5/2/2.5 seconds based on the number of orbs pinged.",

      // Skills
      basicAttack:
        "Basic Attack: Using her scepter and wings, Liv fires a series of beam attacks, dealing 860% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Solaeter/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Liv enters Radiant state for 7 seconds, polluting the space around her with the effects of her M.I.N.D. Instantly fill the Prayer gauge and obtain 6 random Signal Orbs (with a minimum of at least 1 set of three). At the end of the Radiant state, perform a Radiant Oath, dealing 1000% wide-area Fire DMG.\nWhile in Radiant state, double-tapping the Dodge button will enter Radiant Prayer Chant. In this state, pinging Signal Orbs will add stacks to a Radiant Prayer at a rate of 1/2/4 stacks depending on the number of Orbs pinged, up to a maximum of three 3-Pings. For each stack of Radiant Prayer, Liv gains a 0.5x DMG magnification.",
      signatureIcon: require("../../assets/Images/Solaeter/Signature.png"),

      qte: "QTE: Liv dives into the battlefield and then rises, releasing an energy shockwave that deals 600% Fire DMG and heals nearby allies' HP by 60% of Liv's Attack power.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Switched-in active units gain 10% ATK and 10% Elemental Damage (Element of the Amplifier) for 10s.",
      classIcon: require("../../assets/Images/Amplifier.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Basic attacks and Orb pings will accumulate Prayer points. When the Prayer gauge is full, quickly double-tapping the Dodge button will cause Liv to enter a Prayer Chant state, granting her 70% Damage Resistance. During Prayer Chant, performing two 3-Pings will cause special effects. If the two 3-Pings are all of the same color, Liv will unleash a Pure Oath, dealing 400% Fire DMG to the target and its surrounding area. If the two 3-Pings are different colors, Liv will release a Chaotic Oath, pulling nearby enemies together and dealing 400% Fire DMG. Pressing the Dodge button after releasing a Chaotic Oath will allow Liv to forcefully enter Matrix at the cost of HP.\nDuring Prayer Chant, pinging 1/2/3 Orbs increases the Prayer's stacks by 1/2/4; each stack magnifies Liv's attack by 0.5x. When an Orb is pinged and Liv prays, Prayer Ripples will radiate outwards, dealing 400% Fire DMG to surrounding enemies, imprisoning them for 2 seconds, and healing all allies by 7.5% of their maximum HP.\nLevel 22 bonus: Gain a random Signal Orb upon entering Prayer Chant and restore 100 Dodge gauge when releasing an Oath.",
      coreIcon: require("../../assets/Images/Solaeter/Core.png"),

      leader:
        "All party members' ATK increases by 10%. Party members also gain an additional 5% DMG bonus.",
      leaderIcon: require("../../assets/Images/Solaeter/Leader.png"),

      ssRank:
        "Passive: When entering Matrix outside of her Signature, Liv will automatically enter Prayer Chant and initiate the first Prayer (the color of which will be chosen from the color range of Orbs currently in possession).\nAllies healed by, or who gain a shield from, Liv gain a 10% increase to Fire DMG.",
      ssRankIcon: require("../../assets/Images/Solaeter/SS.png"),

      sssRank:
        "Passive: Gain a 100% increase to both Liv's Core Passive charge rate and Class Skill effect.\nDuring Liv's Signature effect, when 8 Prayer stacks are present, Liv gains three random Signal Orbs of the same color.\nThe 10% bonus to Fire DMG from Liv's SS-Rank effect increases to 20%.",
      sssRankIcon: require("../../assets/Images/Solaeter/SSS.png"),

      sssPlusRank:
        "Passive: When switching into the battlefield, Liv gains 40 points of energy.\nWhen Prayer stacks are maximized during Signature - Sea of Galan, the final Radiant Oath deals 1.5x DMG.",
      sssPlusRankIcon: require("../../assets/Images/Solaeter/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      Attackerapon1: "weapon1",
      weapon2: "weapon2",
    },
  },

  //Capriccio
  {
    construct_Name: "Selena ",
    construct_Model: "Capriccio",
    construct_Rank: "S",
    construct_Image: require("../../assets/Images/Capriccio/Construct_Capriccio.png"),
    construct_Type: "Amplifier",
    construct_Element: "Physical (10%) Dark (90%)",
    id: "36",
    combat: {
      // orbs
      redPingIcon: require("../../assets/Images/Capriccio/RedOrb.png"),
      redPing:
        "Selena rushes forward and pierces the target, dealing 168% / 336% / 504% Physical DMG corresponding to the number of Orbs pinged. 3-Pings convert Physical DMG to Dark DMG, additionally, Selena charges forward, dealing 90% Dark DMG.",

      yellowPingIcon: require("../../assets/Images/Capriccio/YellowOrb.png"),
      yellowPing:
        "Selena brandishes her sword, dealing 112% / 224% / 336% Physical DMG. 3-Pings convert Physical DMG to Dark DMG, additionally, Selena charges forward, dealing 144% Dark DMG.",

      bluePingIcon: require("../../assets/Images/Capriccio/BlueOrb.png"),
      bluePing:
        "Selena blows her flute, twirls and then leaps back, drawing in nearby enemies and breaking out of stun, dealing 182% / 364% / 546% Physical DMG. 3-Pings convert Physical DMG to Dark DMG.",

      // Skills
      basicAttack:
        "Basic Attack: Selena continuously attacks with her flute-sword, dealing 976% Physical DMG.",
      basicAttackIcon: require("../../assets/Images/Capriccio/BasicAttack.png"),

      signature:
        "Signature Move: Costs 80 Energy. Selena enters Capriccio Zone, increasing her Extra DMG Reduction by 50%. Selena gains 5 Shooting Star Orbs. Every time a Shooting Star Orb is expended, Selena charges toward the target, dealing 160% Dark DMG. When Shooting Star Orbs have been used up, Selena will control all her shadow remnants, activating Ensemble - Binary Star. Selena then blows her flute, commanding her present shadow remnants to pursue and attack the enemies, with each shadow remnant dealing 340% Dark DMG while triggering the zone to explode, dealing a total of 1360% Dark DMG and leaving behind 1 shadow remnant for 5 seconds. Surrounding allies are healed for 30% of Selena’s Attack every second for 5 seconds. When Capriccio Zone ends, Signal Orbs rearrange into a Red, Yellow, and Blue sequence.",
      signatureIcon: require("../../assets/Images/Capriccio/Signature.png"),

      qte: "QTE: Selena leaps and blows her flute, dealing 600% Dark DMG and heals for 60% of her attack.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class:
        "Switched-in active units gain 10% ATK and 10% Elemental Damage (Element of the Amplifier) for 10s.",
      classIcon: require("../../assets/Images/Amplifier.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: When Selena performs a 3-Ping, moving the directional stick summons a shadow remnant which continues executing the initial Signal Orb skill used. Selena activates Ensemble - Reverb and Red/Yellow/Blue Orbs deal 620% / 410% / 600% Dark DMG. When Selena expends Shooting Star Orbs, moving the directional stick activates Ensemble - Binary Star, dealing 180% Dark DMG and summoning a shadow remnant.",
      coreIcon: require("../../assets/Images/Capriccio/Core.png"),

      leader: "All team members’ Attack and HP increases by 10% and 5%.",
      leaderIcon: require("../../assets/Images/Capriccio/Leader.png"),

      ssRank:
        "Passive: When Selena enters the field, she recovers HP equal to 30% of her Attack. When Selena enters Capriccio Zone and heals her allies, excess healing above full HP converts to Musical Protection, lasting for 3 seconds. When Selena is in Capriccio Zone, she gains a 10% increase in Dark DMG.",
      ssRankIcon: require("../../assets/Images/Capriccio/SS.png"),

      sssRank:
        "Passive: Amplifier Class skill effect increases by 100%, Dark Radiation’s Dark DMG increases by 20%. Core Passive - [Core Passive name] Extra DMG Bonus increases by 20%. Capriccio Zone’s healing ability lasts for 5 seconds more.",
      sssRankIcon: require("../../assets/Images/Capriccio/SSS.png"),

      sssPlusRank:
        "Passive: When team members perform 3-Pings, Selena gains 12 Signature Move Energy. Signature Move - [Signature Move name] Extra DMG Bonus increases by 50%.",
      sssPlusRankIcon: require("../../assets/Images/Capriccio/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Capriccio/SSSPlus.png"),
    },
    memories: {
      set1:{
        set1Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
      set2: {
        set2Name: "",
        image1: require('../../assets/Images/Memories/Patton/image1.png'),
        memory1: 'Patton',
        image2: require('../../assets/Images/Memories/Patton/image2.png'),
        memory2: 'Patton',
        image3: require('../../assets/Images/Memories/Patton/image3.png'),
        memory3: 'Patton',
        image4: require('../../assets/Images/Memories/Frederick/image1.png'),
        memory4: 'Frederick',
        image5: require('../../assets/Images/Memories/Patton/image2.png'),
        memory5: 'Patton',
        image6: require('../../assets/Images/Memories/Frederick/image3.png'),
        memory6: 'Frederick',
      },
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },
];
