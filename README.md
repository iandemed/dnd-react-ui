# Dungeons and Dragons 5th Edition SRD Monster Visualization

## Overview  

Dungeons & Dragons (D&D) is a fantasy table role-playing game introduced in the 1970s. Since then, D&D has gone in and out of the cultural zeitgeist and has gained a resurgence of popularity thanks to television programs like Stranger Things and internet produced playthroughs of the game such as Critical Role.  

My project focuses on displaying monster data from the 5th Edition Systems Reference Document [(5E SRD)](https://dnd.wizards.com/articles/features/systems-reference-document-srd). The 5E SRD is a document that provides aspiring D&D content creators with references and guidelines to create and publish their own adventures, characters, or monsters.


## Data

### Overview

Monsters are an integral part of any D&D, who else will populate the dungeons, cities, and landscapes in the world that you are due to explore? In reality, the term monsters is a bit of a misnomer. The term conjures up images of gobilins, dragons, and creatures that go bump in the night, but a monster is really any Non-Player Character (NPC) that does not follow the same conventions of character creation as the players. Let's look at two different monsters that vary in both complexity and in the situation you might find them: [commoner](#commoner) and [lich](#lich).  

Commoners are ordinary everyday people found throughout the many fictional worlds of D&D, as a result they have a short character sheet that is quite flexible on some of the specifics about the commoner's identity. They could be dwarves toiling deep under the mountain, or humans working on the docks of a large city. Either way, these are people trying to make ends meet.

A lich is a malevalont, undead wizard who is obsessed with perserving their own immortality. They are ancient, extremely intelligent, and extremely powerful. A quick glance at their character sheet shows the divide between these two "monsters" more concisely. Their magically enhanced constituion makes them impervious to non-magical weaponary, they have fearsome list of spells to command, and they have a bevy of legendary actions to really hit home on their grandeur.

### Issues with Processing Data

The above comparison also showcases one of the problems with working with the data as provided. Some information is included in one character sheet and absent from others (i.e. the Legendary Actions). Some attributes are listed as arrays of objects(e.g. proficiencies, and condition immunities), simple arrays (e.g. damage vulnerabilities and resistances), or objects with multiple properties (e.g. senses). This presented a unique challenge and neccesitated that I used different subcomponents to accurately display the data.

### Array of Objects

The primary reason for the data to use arrays of objects was to make it easier for any user to reference other important information. You can see this primarily with the conditions immunities, the skill proficienies, and the spells. While a player might intuitively understand what it is like to be frightened or restrained, each of these conditions have game play implications and anyone referencing this character sheet may need to know more about the conditions. Skills work similarly. As a seasoned dungeon master I may know the difference between athletics and acrobatics, but the differences may need to be clarified from time to time.  

Spells are frequently used and tend to have a lot of text describing their usage and effects. Having them be easily referenced in one central location provides a lot of benefits for the user and is one of the biggest draws to using online tools instead of traditional manuals.

## Technologies Used   

I use the two following technologies to construct my application:  

1. ReactJS - to create all of the monster entries and fetch data from the D&D 5E API
2. CSS - to style all of the elements

## Features to Be Implemented 

1. Actions
2. Search Bar  
3. Modals that display information on spells, conditions, and skills
4. Sorting - this presents a unique challenge due to how the data is called

## Example API Monster Entries

##### Commoner 
```
{
	"index": "commoner",
	"name": "Commoner",
	"size": "Medium",
	"type": "humanoid",
	"subtype": "any race",
	"alignment": "any alignment",
	"armor_class": 10,
	"hit_points": 4,
	"hit_dice": "1d8",
	"speed": {
		"walk": "30 ft."
	},
	"strength": 10,
	"dexterity": 10,
	"constitution": 10,
	"intelligence": 10,
	"wisdom": 10,
	"charisma": 10,
	"proficiencies": [],
	"damage_vulnerabilities": [],
	"damage_resistances": [],
	"damage_immunities": [],
	"condition_immunities": [],
	"senses": {
		"passive_perception": 10
	},
	"languages": "any one language (usually Common)",
	"challenge_rating": 0,
	"actions": [
		{
			"name": "Club",
			"desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
			"attack_bonus": 2,
			"damage": [
				{
					"damage_type": {
						"name": "Bludgeoning",
						"url": "/api/damage-types/bludgeoning"
					},
					"damage_dice": "1d4"
				}
			]
		}
	],
	"url": "/api/monsters/commoner"
}
```

##### Lich 
```
{
	"index": "lich",
	"name": "Lich",
	"size": "Medium",
	"type": "undead",
	"subtype": null,
	"alignment": "any evil alignment",
	"armor_class": 17,
	"hit_points": 135,
	"hit_dice": "18d8",
	"speed": {
		"walk": "30 ft."
	},
	"strength": 11,
	"dexterity": 16,
	"constitution": 16,
	"intelligence": 20,
	"wisdom": 14,
	"charisma": 16,
	"proficiencies": [
		{
			"name": "Saving Throw: CON",
			"url": "/api/proficiencies/saving-throw-con",
			"value": 10
		},
		{
			"name": "Saving Throw: INT",
			"url": "/api/proficiencies/saving-throw-int",
			"value": 12
		},
		{
			"name": "Saving Throw: WIS",
			"url": "/api/proficiencies/saving-throw-wis",
			"value": 9
		},
		{
			"name": "Skill: Arcana",
			"url": "/api/proficiencies/skill-arcana",
			"value": 18
		},
		{
			"name": "Skill: History",
			"url": "/api/proficiencies/skill-history",
			"value": 12
		},
		{
			"name": "Skill: Insight",
			"url": "/api/proficiencies/skill-insight",
			"value": 9
		},
		{
			"name": "Skill: Perception",
			"url": "/api/proficiencies/skill-perception",
			"value": 9
		}
	],
	"damage_vulnerabilities": [],
	"damage_resistances": [
		"cold",
		"lightning",
		"necrotic"
	],
	"damage_immunities": [
		"poison",
		"bludgeoning, piercing, and slashing from nonmagical weapons"
	],
	"condition_immunities": [
		{
			"name": "Charmed",
			"url": "/api/conditions/charmed"
		},
		{
			"name": "Exhaustion",
			"url": "/api/conditions/exhaustion"
		},
		{
			"name": "Frightened",
			"url": "/api/conditions/frightened"
		},
		{
			"name": "Paralyzed",
			"url": "/api/conditions/paralyzed"
		},
		{
			"name": "Poisoned",
			"url": "/api/conditions/poisoned"
		}
	],
	"senses": {
		"truesight": "120 ft.",
		"passive_perception": 19
	},
	"languages": "Common plus up to five other languages",
	"challenge_rating": 21,
	"special_abilities": [
		{
			"name": "Legendary Resistance",
			"desc": "If the lich fails a saving throw, it can choose to succeed instead.",
			"usage": {
				"type": "per day",
				"times": 3
			}
		},
		{
			"name": "Rejuvenation",
			"desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
		},
		{
			"name": "Spellcasting",
			"desc": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n\n- Cantrips (at will): mage hand, prestidigitation, ray of frost\n- 1st level (4 slots): detect magic, magic missile, shield, thunderwave\n- 2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image\n- 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball\n- 4th level (3 slots): blight, dimension door\n- 5th level (3 slots): cloudkill, scrying\n- 6th level (1 slot): disintegrate, globe of invulnerability\n- 7th level (1 slot): finger of death, plane shift\n- 8th level (1 slot): dominate monster, power word stun\n- 9th level (1 slot): power word kill",
			"spellcasting": {
				"level": 18,
				"ability": {
					"name": "INT",
					"url": "http://www.dnd5eapi.co/api/ability-scores/4"
				},
				"dc": 20,
				"modifier": 12,
				"components_required": [
					"V",
					"S",
					"M"
				],
				"school": "wizard",
				"slots": {
					"1": 4,
					"2": 3,
					"3": 3,
					"4": 3,
					"5": 3,
					"6": 1,
					"7": 1,
					"8": 1,
					"9": 1
				},
				"spells": [
					{
						"name": "Mage Hand",
						"level": 0,
						"url": "http://www.dnd5eapi.co/api/spells/187"
					},
					{
						"name": "Prestidigitation",
						"level": 0,
						"url": "http://www.dnd5eapi.co/api/spells/227"
					},
					{
						"name": "Ray of Frost",
						"level": 0,
						"url": "http://www.dnd5eapi.co/api/spells/240"
					},
					{
						"name": "Detect Magic",
						"level": 1,
						"url": "http://www.dnd5eapi.co/api/spells/179"
					},
					{
						"name": "Magic Missile",
						"level": 1,
						"url": "http://www.dnd5eapi.co/api/spells/190"
					},
					{
						"name": "Shield",
						"level": 1,
						"url": "http://www.dnd5eapi.co/api/spells/261"
					},
					{
						"name": "Thunderwave",
						"level": 1,
						"url": "http://www.dnd5eapi.co/api/spells/292"
					},
					{
						"name": "Acid Arrow",
						"level": 2,
						"url": "http://www.dnd5eapi.co/api/spells/1"
					},
					{
						"name": "Detect Thoughts",
						"level": 2,
						"url": "http://www.dnd5eapi.co/api/spells/81"
					},
					{
						"name": "Invisibility",
						"level": 2,
						"url": "http://www.dnd5eapi.co/api/spells/172"
					},
					{
						"name": "Mirror Image",
						"level": 2,
						"url": "http://www.dnd5eapi.co/api/spells/207"
					},
					{
						"name": "Animate Dead",
						"level": 3,
						"url": "http://www.dnd5eapi.co/api/spells/9"
					},
					{
						"name": "Counterspell",
						"level": 3,
						"url": "http://www.dnd5eapi.co/api/spells/65"
					},
					{
						"name": "Dispel Magic",
						"level": 3,
						"url": "http://www.dnd5eapi.co/api/spells/86"
					},
					{
						"name": "Fireball",
						"level": 3,
						"url": "http://www.dnd5eapi.co/api/spells/119"
					},
					{
						"name": "Blight",
						"level": 4,
						"url": "http://www.dnd5eapi.co/api/spells/30"
					},
					{
						"name": "Dimension Door",
						"level": 4,
						"url": "http://www.dnd5eapi.co/api/spells/82"
					},
					{
						"name": "Cloudkill",
						"level": 5,
						"url": "http://www.dnd5eapi.co/api/spells/44"
					},
					{
						"name": "Scrying",
						"level": 5,
						"url": "http://www.dnd5eapi.co/api/spells/253"
					},
					{
						"name": "Disintegrate",
						"level": 6,
						"url": "http://www.dnd5eapi.co/api/spells/84"
					},
					{
						"name": "Globe of Invulnerability",
						"level": 6,
						"url": "http://www.dnd5eapi.co/api/spells/138"
					},
					{
						"name": "Finger of Death",
						"level": 7,
						"url": "http://www.dnd5eapi.co/api/spells/115"
					},
					{
						"name": "Plane Shift",
						"level": 7,
						"url": "http://www.dnd5eapi.co/api/spells/220"
					},
					{
						"name": "Dominate Monster",
						"level": 8,
						"url": "http://www.dnd5eapi.co/api/spells/91"
					},
					{
						"name": "Power Word Stun",
						"level": 8,
						"url": "http://www.dnd5eapi.co/api/spells/225"
					},
					{
						"name": "Power Word Kill",
						"level": 9,
						"url": "http://www.dnd5eapi.co/api/spells/224"
					}
				]
			}
		},
		{
			"name": "Turn Resistance",
			"desc": "The lich has advantage on saving throws against any effect that turns undead."
		}
	],
	"actions": [
		{
			"name": "Paralyzing Touch",
			"desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			"attack_bonus": 12,
			"damage": [
				{
					"damage_type": {
						"name": "Cold",
						"url": "/api/damage-types/cold"
					},
					"damage_dice": "3d6"
				}
			]
		}
	],
	"legendary_actions": [
		{
			"name": "Cantrip",
			"desc": "The lich casts a cantrip."
		},
		{
			"name": "Paralyzing Touch (Costs 2 Actions)",
			"desc": "The lich uses its Paralyzing Touch."
		},
		{
			"name": "Frightening Gaze (Costs 2 Actions)",
			"desc": "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
			"dc": {
				"dc_type": {
					"name": "WIS",
					"url": "/api/ability-scores/wis"
				},
				"dc_value": 18,
				"success_type": "none"
			}
		},
		{
			"name": "Disrupt Life (Costs 3 Actions)",
			"desc": "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
			"dc": {
				"dc_type": {
					"name": "CON",
					"url": "/api/ability-scores/con"
				},
				"dc_value": 18,
				"success_type": "none"
			},
			"damage": [
				{
					"damage_type": {
						"name": "Necrotic",
						"url": "/api/damage-types/necrotic"
					},
					"damage_dice": "6d6"
				}
			]
		}
	],
	"url": "/api/monsters/lich"
}
```