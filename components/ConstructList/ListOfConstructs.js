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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      redPingIcon: require("../../assets/Images/Fate/RedOrb.png"),
      redPing:
        "Performs a spiral kick attack, dealing AOE in a straight line fro 170% / 340% / 510% Physical DMG. Gains a short duration of Super Armor for 1 or 2-Pings, 3-Pings grant extended Super Armor.",

      yellowPingIcon: require("../../assets/Images/Fate/YellowOrb.png"),
      yellowPing: "Performs an elbow strike, dealing 190% / 380% / 570% Physical DMG AOE in a straight line. Gains a short duration of invulnerability, 3-Pings grant extended Super Armor.",

      bluePingIcon: require("../../assets/Images/Fate/BlueOrb.png"),
      bluePing: "Lobs a freezing hand grenade, slowing enemies in its AOE for 140% / 280% / 420% Ice DMG and heals all allies within the area based on 30% / 60% / 90% Wanshi's attack. 3-Pings grant extended Super Armor.",

      // Skills
      basicAttack: "Basic Attack: Combines both Form and Combat tactics, dealing 350% Physical DMG and 360% Ice DMG. Holding the Basic Attack button within 1 second after performing a 3-Ping activates Tactical Shooting Stance. Stance can be maintained by continuous holding. Every barrage deals 100% Ice DMG.",
      basicAttackIcon: require("../../assets/Images/Fate/BasicAttack.png"),

      signature: "Signature Move: Costs 80 Energy. Fires ahead for 1400% Ice DMG.",
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

      ssRank: "Passive: Bloom shot DMG increases by 50%. Gains 5% Energy for every second off-field.",
      ssRankIcon: require("../../assets/Images/Fate/SS.png"),

      sssRank: "Passive: Condensed Frost buff increases to 20%.",
      sssRankIcon: require("../../assets/Images/Fate/SSS.png"),

      sssPlusRank: "Passive: Signature Move DMG increases by 100%. Bloom Shot grants 5% energy. Successfully evading during Bloom Shot grants a bonus 10% energy.",
      sssPlusRankIcon: require("../../assets/Images/Fate/SSSPlus.png"),
      hiddenSkill: "See: Core",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      redPingIcon: require("../../assets/Images/XXI/RedOrb.png"),
      redPing:
        "Leaps into the air and places a Twilight Field on target's location. The Twilight Field will pull all enemies in a large area once upon generation, dealing 100% / 200% / 300% Physical DMG. DMG is converted to Dark element on a 3-Ping. The field lasts for 1.5/3.5/6 seconds and continuously draws in enemies. No. 21 enters Stagnation upon 3-Ping chains and is able to perform a Forced Evasion while unleashing 3 Twilight Matrices on the target. Collab Bot: Whenever No. 21 generates a Twilight Matrix, unleashes a gravitational wave on the Twilight Field, pulling targets in a large area once and dealing 70% Dark DMG.",

      yellowPingIcon: require("../../assets/Images/XXI/YellowOrb.png"),
      yellowPing:
        "Leaps according to the directional button and unleashes a Twilight Saw, dealing a total of 140% / 280% / 420% Physical DMG. DMG is converted to Dark element on a 3-Ping. No. 21 enters Stagnation upon 3-Ping chains and is able to perform Forced Evasion while unleashing 3 Twilight Matrices on the target. ",

      bluePingIcon: require("../../assets/Images/XXI/BlueOrb.png"),
      bluePing:
        "Enters Overload Superposition state. Copies the next 1/2/4 Basic Attacks and Shadow Prism Attacks. The effect cannot be stacked. Collab Bot: Immediately performs a sprint attack at the current target, dealing a total of 40% of No. 21's Attack as Physical DMG and reducing the target's DMG dealt by 20% for 5 seconds. The effect can only be triggered once every 2 seconds.",

      // Skills
      basicAttack:
        "Basic Attack: Fires continuously with the beam cannons, dealing a total of 348% Physical DMG. Collab Bot: Performs self-regulated attacks on the current target, dealing 20% of No. 21's attack as Physical DMG. The collaborative bot will always be on-field.",
      basicAttackIcon: require("../../assets/Images/XXI/BasicAttack.png"),

      signature:
        "Signature Move: Costs 120 Energy. Unleashes an Enhanced Twilight Field on target's location and enters Quick Attack mode, emptying all of No. 21's Signal Orbs and Shadow Prism energy while granting unlimited Blue Orbs and extreme attack speed. During Quick Attack mode, Basic Attacks deal 20% Dark DMG. Shadow Prism attacks can be triggered and will generate Twilight Matrices. When Quick Attack mode ends, the Twilight Field explodes, dealing 600% Dark DMG and emptying all of No. 21's Signal Orbs, Signature Move Energy and Blue Orb buff at the same time. The explosion DMG of each Twilight Matrix during Quick Attack mode increases by 40%. When the total number of generated Twilight Matrices reaches 6, an S-rating Signature Move is awarded, granting up to 300% increased Twilight Matrix explosion DMG. Collab Bot: Projects onto No. 21's space and inflicts Stillness onto all enemies. The Collab Bot will not be able to trigger other abilities during Signature Move.",
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

      class:
        "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
      classIcon: require("../../assets/Images/Tank.png"),

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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Orb.png"),
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
      hiddenSkill: "",
      hiddenSkillIcon: require("../../assets/Images/Lotus/SSSPlus.png"),
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
