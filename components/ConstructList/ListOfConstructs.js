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
      hiddenSkill: 'Pinging a Red Orb within 4 seconds after any 3-Ping will make Lucia Burst. Lucia then replaces Basic Attacks with Dual Blades.',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      yellowPing: "Spins and cuts enemies rapidly, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged to nearby enemies.",

      bluePingIcon: require("../../assets/Images/Storm/BlueOrb.png"),
      bluePing: "Bursts and pulls enemies. Based on the number of orbs pinged, deals 100% / 200% / 300% Physical DMG, reduces DEF of targets hit by 10% / 20% / 30%, and increases own Physical Resistance by 20% / 40% / 60% for 4/4.5/5 seconds.",

      // Skills
      basicAttack: "Basic Attack: Launches consecutive attacks with a sawblade, dealing 800% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Storm/BasicAttack.png"),

      signature: "Signature Move: Costs 100 Energy. Deploys an energy barrier to resist attacks from enemies and protect allies within the area. The barrier explodes after 5 seconds, dealing 1000% Physical DMG to enemies.",
      signatureIcon: require("../../assets/Images/Storm/Signature.png"),

      qte: "QTE: Nanami spins and slices the target, dealing 770% Physical DMG in total and knocks down the target.",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "Core Passive: Pinging a Yellow Orb after any 3-Ping will cause Nanami to use EX - Storm of Cuts and launch 8 consecutive attacks at nearby targets, dealing 100% Physical DMG per attack.",
      coreIcon: require("../../assets/Images/Storm/Core.png"),

      leader: "Passive: DEF of all party members increases by 15%.",
      leaderIcon: require("../../assets/Images/Storm/Leader.png"),

      ssRank: "Passive: Extra DMG Bonus of Basic Attack increases by 15%. Ability to draw Aggro increases by 20% when attacking.",
      ssRankIcon: require("../../assets/Images/Storm/SS.png"),

      sssRank: "Passive: While your core passive is active, Physical Resistance increases by 30%.",
      sssRankIcon: require("../../assets/Images/Storm/SSS.png"),

      sssPlusRank: "Passive: After using Signature - Crystal Barrier, Extra DMG Bonus increases by 20% for 5 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Storm/SSSPlus.png"),
      hiddenSkill: 'Core Passive: When pinging a Yellow Orb after any 3-Ping, Nanami will use EX - Slash Storm and launch 8 consecutive attacks at surrounding targets, dealing * Physical DMG per attack.',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      yellowPing: "Deploys a black hole at the target area that pulls nearby enemies in. Based on the number of orbs pinged, the black hole lasts 1/2/3 seconds and enemies in contact with the black hole take 90% / 150% / 210% Physical DMG, it then explodes afterwards and deals 80% / 160% / 240% Physical DMG.",

      bluePingIcon: require("../../assets/Images/Eclipse/BlueOrb.png"),
      bluePing: "Unleashes energy that knocks back enemies. Based on the number of orbs pinged, deals 100% / 200% / 300% Physical DMG and heals nearby allies for 40% / 80% / 120% of your attack. Physical DMG increases by 16% / 32% / 48% for 5 seconds.",

      // Skills
      basicAttack: "Basic Attack: Summons laser beams to strike at the target, dealing 640% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Eclipse/BasicAttack.png"),

      signature: "Signature Move: Costs 100 Energy. Summons beams to consecutively strike at the target area for 2 seconds. Each beam deals 70% Physical DMG.",
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

      sssRank: "Passive: When Liv is in reserve, Physical DMG of all allies on the field increases by 10%.",
      sssRankIcon: require("../../assets/Images/Eclipse/SSS.png"),

      sssPlusRank: "Passive: After using Signature - Azure Starfall, Extra DMG Bonus increases by 20% for 8 seconds.",
      sssPlusRankIcon: require("../../assets/Images/Eclipse/SSSPlus.png"),
      hiddenSkill: 'Pinging a Red Orb after any 3-Ping will trigger core lasers to deal 10 times of Physical DMG to a wide area.',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      yellowPing: "Deploys a lightning field. Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged and marks the target. Mark duration refreshes when Marks stack (Max 3 Marks per target). The field lasts 3/4/5 seconds and attacks enemies in the area once per second, dealing 20% / 30% / 40% Lightning DMG.",

      bluePingIcon: require("../../assets/Images/Dawn/BlueOrb.png"),
      bluePing: "Quickly strikes the target, dealing 80% / 160% / 240% Lightning DMG based on the number of orbs pinged. Then pulls the target towards you, dealing 80% / 160% / 240% Physical DMG and marking the target. Mark duration refreshes when Marks stack (Max 3 Marks per target).",

      // Skills
      basicAttack: "Basic Attack: Launches consecutive attacks with Lotus - Quick Blade, dealing 650% Physical DMG total.",
      basicAttackIcon: require("../../assets/Images/Dawn/BasicAttack.png"),

      signature: "Signature Move: Costs 50 Energy. Using basic attacks and skills will carry out an additional attack with Lotus Blade that deals 25% Lightning DMG. Lotus Blade lasts 15 seconds. Reusing this skill while it is still active will refresh the duration.",
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

      ssRank: "Passive: Within the Lightning Field, Lightning DMG increases by 20%.",
      ssRankIcon: require("../../assets/Images/Dawn/SS.png"),

      sssRank: "Passive: Extra DMG of Lightning Lure increases by 20%.",
      sssRankIcon: require("../../assets/Images/Dawn/SSS.png"),

      sssPlusRank: "Passive: Extra DMG Bonus increases by 15% for 10 seconds after performing a Signature Move.",
      sssPlusRankIcon: require("../../assets/Images/Dawn/SSSPlus.png"),
      hiddenSkill: 'Marks the enemy with Blue Orb or Yellow Orb skills. Attacking an enemy marked by Lucia has a chance to launch lightning attacks that deal Lightning DMG.',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },

    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      yellowPing: "Fires a blasting round at the target that explodes on hit and deals 100% / 150% / 200% Fire DMG based on the number of orbs pinged. Creates a burning area for 3/4/5 seconds that deals 12% / 24% / 36% Fire DMG per 0.5 seconds to the enemies inside. Attacking enemies in the burning area deals extra 12% Fire DMG for up to once per 0.1 seconds.",

      bluePingIcon: require("../../assets/Images/Palefire/BlueOrb.png"),
      bluePing: "Fires an explosive round at the target, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",

      // Skills
      basicAttack: "Basic Attack: Fires consecutive shots, dealing 880% Physical DMG in total.",
      basicAttackIcon: require("../../assets/Images/Palefire/BasicAttack.png"),

      signature: "Signature Move: Costs 100 Energy. Fires consecutive shots at nearby enemies, dealing 800% Physical DMG in total, then deals 1200% Fire DMG with the last shot.",
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

      leader: "Increases all party member’s Physical DMG by 5% and Elemental DMG by 5%.",
      leaderIcon: require("../../assets/Images/Palefire/Leader.png"),

      ssRank: "Passive: When hitting enemies in the burning area of Infernal Shot, Extra DMG Bonus increases by 15%.",
      ssRankIcon: require("../../assets/Images/Palefire/SS.png"),

      sssRank: "Passive: Extra DMG Bonus increases by 15% before taking any damage. Has a cooldown of 10 seconds.",
      sssRankIcon: require("../../assets/Images/Palefire/SSS.png"),

      sssPlusRank: "Passive: Extra DMG Bonus of Core Passive - Controlling Bullet increases by 20%.",
      sssPlusRankIcon: require("../../assets/Images/Palefire/SSSPlus.png"),
      hiddenSkill: 'After pinging a Yellow Orb, next Red Orb will inflict Blast and deal Fire DMG to a small area.',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Support.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Lotus/Class.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Lotus/Class.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Lotus/Class.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Lotus/Class.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "Extra DMG Bonus increases by 20%.",
      classIcon: require("../../assets/Images/Attacker.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Orb.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
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
      redPingIcon: require("../../assets/Images/Lotus/RedOrb.png"),
      redPing:
        "Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.",

      yellowPingIcon: require("../../assets/Images/Lotus/YellowOrb.png"),
      yellowPing: "",

      bluePingIcon: require("../../assets/Images/Lotus/BlueOrb.png"),
      bluePing: "",

      // Skills
      basicAttack: "",
      basicAttackIcon: require("../../assets/Images/Lotus/BasicAttack.png"),

      signature: "",
      signatureIcon: require("../../assets/Images/Lotus/Signature.png"),

      qte: "",
      qteIcon: require("../../assets/Images/QTE.png"),

      class: "",
      classIcon: require("../../assets/Images/Lotus/Class.png"),

      awakening: "Gains 3 Signal Orbs when entering battle.",
      awakeningIcon: require("../../assets/Images/Awakening.png"),

      //Passives
      core: "",
      coreIcon: require("../../assets/Images/Lotus/Core.png"),

      leader: "",
      leaderIcon: require("../../assets/Images/Lotus/Leader.png"),

      ssRank: "",
      ssRankIcon: require("../../assets/Images/Lotus/SS.png"),

      sssRank: "",
      sssRankIcon: require("../../assets/Images/Lotus/SSS.png"),

      sssPlusRank: "",
      sssPlusRankIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
      hiddenSkill: '',
      hiddenSkillIcon:require('../../assets/Images/Lotus/SSSPlus.png')
    },
    memories: {
      set1: "Set 1",
      set2: "Set 2",
    },
    weapons: {
      weapon1: "weapon1",
      weapon2: "weapon2",
    },
  },
];
