
export default [
      

      // B construct Start:
      {construct_Name: 'Lucia ',
      construct_Model:"Lotus",
      construct_Rank:"B" ,
      construct_Image:require('../../assets/Images/Construct_Lotus.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (80%) Fire (20%)',
      id: '1',
      combat:{

            // orbs
            redPingIcon:require('../../assets/Images/Lotus/RedOrb.png'),
            redPing: 'Thrusts forward and pulls the target, dealing 266.72% / 533.32% / 800% Physical DMG based on the number of orbs pinged',
            
            yellowPingIcon:require('../../assets/Images/Lotus/YellowOrb.png'),
            yellowPing: 'Quickly strikes once and knocks the target airborne, dealing 150% / 300% / 450% Physical DMG based on the number of orbs pinged.',

            bluePingIcon:require('../../assets/Images/Lotus/BlueOrb.png'),
            bluePing: 'Deals 100% / 200% / 300% Physical DMG and flares up weapon, all attacks deal 10% / 15% / 20% extra Fire DMG within 4/4/6 seconds based on the number of orbs pinged.',


            // Skills
            basicAttack: 'Basic Attack: Launches consecutive attacks of Lotus Quick Blade, dealing 540% Physical DMG in total.',
            basicAttackIcon:require('../../assets/Images/Lotus/BasicAttack.png'),

            signature: 'Signature Move: Costs 100 Energy. Unleashes Lotus Flurry to deal quick slashes to enemies ahead. Each slash deals 140% Physical DMG. Finishes the move by striking enemies with a heavy blow that deals 1000% Physical DMG.',
            signatureIcon:require('../../assets/Images/Lotus/Signature.png'),

            qte: 'QTE: Lucia strikes at enemies with her Dual Blades, dealing 1110% Physical DMG in total.',
            qteIcon:require('../../assets/Images/Lotus/QTE.png'),

            class: 'Extra DMG Bonus increases by 20%.',
            classIcon:require('../../assets/Images/Lotus/Class.png'),

            awakening: 'Gains 3 Signal Orbs when entering battle.',
            awakeningIcon: require('../../assets/Images/Lotus/Awakening.png'),



            //Passives
            core: 'Core Passive: Pinging a Red Orb within 4 seconds of any 3-Ping will make Lucia enter Burst mode. Basic Attacks will be replaced with Dual Blades. Lotus - Dual Blades: Launches consecutive attacks at enemies, dealing 1080% Physical DMG in total.',
            coreIcon: require('../../assets/Images/Lotus/Core.png'),
            leader: 'Attack of all Attacker Constructs increases by 10%.',
            leaderIcon: require('../../assets/Images/Lotus/Leader.png'),
            ssRank:'Passive: When attacking airborne targets, deal extra 20% Physical DMG per attack.',
            ssRankIcon: require('../../assets/Images/Lotus/SS.png'),
            sssRank: 'Passive: Under Burst mode, Extra DMG Bonus increases by 15%.',
            sssRankIcon: require('../../assets/Images/Lotus/SSS.png'),
            sssPlusRank: 'Passive: Extra DMG Bonus of Basic Attack increases by 15%.',
            sssPlusRankIcon: require('../../assets/Images/Lotus/SSSPlus.png')

            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Nanami ',
      construct_Model:"Storm",
      construct_Rank:"B" ,
      construct_Image:require('../../assets/Images/Construct_Storm.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (100%)',
      id: '2',
      combat:{
            // orbs
            redPingIcon:require('../../assets/Images/Lotus/RedOrb.png'),
            redPing: 'Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.',
            
            yellowPingIcon:require('../../assets/Images/Lotus/YellowOrb.png'),
            yellowPing: '',

            bluePingIcon:require('../../assets/Images/Lotus/BlueOrb.png'),
            bluePing: '',


            // Skills
            basicAttack: '',
            basicAttackIcon:require('../../assets/Images/Lotus/BasicAttack.png'),

            signature: '',
            signatureIcon:require('../../assets/Images/Lotus/Signature.png'),

            qte: '',
            qteIcon:require('../../assets/Images/Lotus/QTE.png'),

            class: '',
            classIcon:require('../../assets/Images/Lotus/Class.png'),

            awakening: '',
            awakeningIcon: require('../../assets/Images/Lotus/Awakening.png'),



            //Passives
            core: '',
            coreIcon: require('../../assets/Images/Lotus/Core.png'),

            leader: '',
            leaderIcon: require('../../assets/Images/Lotus/Leader.png'),

            ssRank:'',
            ssRankIcon: require('../../assets/Images/Lotus/SS.png'),

            sssRank: '',
            sssRankIcon: require('../../assets/Images/Lotus/SSS.png'),

            sssPlusRank: '',
            sssPlusRankIcon: require('../../assets/Images/Lotus/SSSPlus.png')
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Liv ',
      construct_Model:"Eclipse",
      construct_Rank:"B" ,
      construct_Image:require('../../assets/Images/Construct_Eclipse.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (100%)',
      id: '3',
      combat:{
           // orbs
           redPingIcon:require('../../assets/Images/Lotus/RedOrb.png'),
           redPing: 'Charges forward and deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged to enemies in a rectangular area ahead.',
           
           yellowPingIcon:require('../../assets/Images/Lotus/YellowOrb.png'),
           yellowPing: '',

           bluePingIcon:require('../../assets/Images/Lotus/BlueOrb.png'),
           bluePing: '',


           // Skills
           basicAttack: '',
           basicAttackIcon:require('../../assets/Images/Lotus/BasicAttack.png'),

           signature: '',
           signatureIcon:require('../../assets/Images/Lotus/Signature.png'),

           qte: '',
           qteIcon:require('../../assets/Images/Lotus/QTE.png'),

           class: '',
           classIcon:require('../../assets/Images/Lotus/Class.png'),

           awakening: '',
           awakeningIcon: require('../../assets/Images/Lotus/Awakening.png'),



           //Passives
           core: '',
           coreIcon: require('../../assets/Images/Lotus/Core.png'),

           leader: '',
           leaderIcon: require('../../assets/Images/Lotus/Leader.png'),

           ssRank:'',
           ssRankIcon: require('../../assets/Images/Lotus/SS.png'),

           sssRank: '',
           sssRankIcon: require('../../assets/Images/Lotus/SSS.png'),

           sssPlusRank: '',
           sssPlusRankIcon: require('../../assets/Images/Lotus/SSSPlus.png')
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      // A Construct Start (Attacker)
      {construct_Name: 'Lucia ',
      construct_Model:"Dawn",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Dawn.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (40%) Lightning (60%)',
      id: '4',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Lee ',
      construct_Model:"Palefire",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Palefire.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (60%) Fire (40%)',
      id: '5',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Watanabe ',
      construct_Model:"Nightblade",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Nightblade.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (100%)',
      id: '6',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Karenina ',
      construct_Model:"Blast",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Blast.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (80%) Physical (20%)',
      id: '7',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Bianca ',
      construct_Model:"Zero",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Zero.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (100%)',
      id: '8',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Watanabe ',
      construct_Model:"Astral",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Astral.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (50%) Dark (50%)',
      id: '9',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },
      
      // A Constructs (Tank) start:
      {construct_Name: 'Kamui ',
      construct_Model:"Bastion",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Bastion.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (100%)',
      id: '10',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Ayla ',
      construct_Model:"Brilliance",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Brilliance.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (100%)',
      id: '11',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Chrome ',
      construct_Model:"Arclight",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Arclight.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (30%) Lightning (70%)',
      id: '12',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },


      {construct_Name: 'Chang Yu ',
      construct_Model:"Kirin",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Kirin.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (20%) Ice (80%)',
      id: '13',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: '21 ',
      construct_Model:"XXI",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_XXI.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (20%) Dark (80%)',
      id: '14',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      //Construct A (Support) Start:
      {construct_Name: 'Liv ',
      construct_Model:"Lux",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Lux.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (20%) Physical (80%)',
      id: '15',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Sophia ',
      construct_Model:"Silverfang",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Silverfang.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (20%) Fire (80%)',
      id: '16',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Vera ',
      construct_Model:"Rozen",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Rozen.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (20%) Physical (80%)',
      id: '17',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Wanshi ',
      construct_Model:"Fate",
      construct_Rank:"A" ,
      construct_Image:require('../../assets/Images/Construct_Fate.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (20%) Ice (80%)',
      id: '18',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      
      //S constructs (Attacker) start:
      {construct_Name: 'Lee ',
      construct_Model:"Entropy",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Entropy.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (100%)',
      id: '20',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Karenina ',
      construct_Model:"Ember",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Ember.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (30%) Fire (70%)',
      id: '21',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Lucia ',
      construct_Model:"Crimson Abyss",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_CrimsonAbyss.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (100%)',
      id: '22',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Bianca ',
      construct_Model:"Veritas",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Veritas.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (20%) Lightning (80%)',
      id: '23',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Lucia ',
      construct_Model:"Plume",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Plume.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (20%) Ice (80%)',
      id: '24',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Luna ',
      construct_Model:"Laurel",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Laurel.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (10%) Dark (90%)',
      id: '25',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: '2B ',
      construct_Model:"Unknown",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_2B.png'),
      construct_Type:"Attacker",
      construct_Element: 'Physical (100%)',
      id: '26',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      //S constructs(Tank) starts:

      {construct_Name: 'Nanami ',
      construct_Model:"Pulse",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Pulse.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (50%) Fire (50%)',
      id: '27',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Kamui ',
      construct_Model:"Tenebrion",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Tenebrion.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (50%) Dark (50%)',
      id: '28',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Rosetta ',
      construct_Model:"Arctic",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Arctic.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (100%)',
      id: '29',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'A2 ',
      construct_Model:"Unknown",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_A2.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (100%)',
      id: '30',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Chrome ',
      construct_Model:"Glory",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Glory.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (20%) Ice (80%)',
      id: '31',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Vera ',
      construct_Model:"Flare",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Flare.png'),
      construct_Type:"Tank",
      construct_Element: 'Physical (15%) Lightning (85%)',
      id: '32',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      //S constructs(Support) start:
      {construct_Name: 'Liv ',
      construct_Model:"Luminance",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Luminance.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (100%)',
      id: '33',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: '9S ',
      construct_Model:"Unknown",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_9S.png'),
      construct_Type:"Support",
      construct_Element: 'Physical (100%)',
      id: '34',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      //S construct amplifier starts:
      {construct_Name: 'Liv ',
      construct_Model:"Solaeter",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Solaeter.png'),
      construct_Type:"Amplifier",
      construct_Element: 'Physical (10%) Fire (90%)',
      id: '35',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },

      {construct_Name: 'Selena ',
      construct_Model:"Capriccio",
      construct_Rank:"S" ,
      construct_Image:require('../../assets/Images/Construct_Capriccio.png'),
      construct_Type:"Amplifier",
      construct_Element: 'Physical (10%) Dark (90%)',
      id: '36',
      combat:{
            redPing: 'Red Orb',
            yellowPing: 'Yellow Orb',
            bluePing: 'Blue Orb',
            },
      memories:{
            set1: 'Set 1',
            set2: 'Set 2'
            },
      weapons:{
            weapon1: 'weapon1',
            weapon2: 'weapon2'
      }
      },
      

]