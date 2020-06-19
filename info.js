function resetTakenStatuses()
{
	for (let i = 0; i < alienRoleNames.length; i++)
	{
		alienRoles[alienRoleNames[i]].Taken = false;
	}
	
	for (let i = 0; i < humanRoleNames.length; i++)
	{
		humanRoles[humanRoleNames[i]].Taken = false;
	}
}

var alienRoleNames = 
[
	"The Blink Alien", "The Silent Alien", "The Surge Alien",
	"The Brute Alien", "The Invisible Alien", "The Lurking Alien",
	"The Fast Alien", "The Psychic Alien"
];

var humanRoleNames = 
[
	"The Captain", "The Pilot", "The Psychologist",
	"The Soldier", "The Executive Officer", "The Co-Pilot",
	"The Engineer", "The Medic"
];

var alienRoles = {
	"The Blink Alien": {
		Description: "The Blink Alien can use the Teleport Item Cards, when found, following the rules for Item Card play and without revealing his identity.",
		Taken: false
	},
	"The Silent Alien": {
		Description: "The Silent Alien can use the Sedatives Item Cards, when found, following the rules for Item Card play and without revealing his identity.",
		Taken: false
	},
	"The Surge Alien": {
		Description: "The Surge Alien can use the Adrenaline Item Cards, when found, following the rules for Item Card play and without revealing her identity.",
		Taken: false
	},
	"The Brute Alien": {
		Description: "The Brute Alien is immune to all Attacks, Human and Alien. He must disclose his identity and reveal his character card when Attacked.",
		Taken: false
	},
	"The Invisible Alien": {
		Description: "The Invisible Alien is immune to the Sensor Item and the Spotlight Item. Instead of revealing his location, he must disclose his identity and reveal his character card when targeted with those cards.",
		Taken: false
	},
	"The Lurking Alien": {
		Description: "The Lurking Alien can choose to directly attack in his Sector, instead of moving. If he does, he will not move at all in that turn.",
		Taken: false
	},
	"The Fast Alien": {
		Description: "The Fast Alien can move up to three sectors on his first movement of the game.",
		Taken: false
	},
	"The Psychic Alien": {
		Description: "The Psychic Alien always behaves as if he had drawn a Noise In Any Sector card when drawing a Silence Card.",
		Taken: false
	}
};

var humanRoles = {
	"The Captain": {
		Description: "The Captain does not draw a Dangerous Sector Card the first time he moves into a Dangerous Sector.",
		Taken: false
	},
	"The Pilot": {
		Description: "The Pilot can announce two noises upon drawing a Dangerous Sector Card ONCE, as if he had used a Cat card and without needing one",
		Taken: false
	},
	"The Psychologist": {
		Description: "The Psychologist begins the game in the Alien Sector.",
		Taken: false
	},
	"The Soldier": {
		Description: "The Soldier can Attack ONCE in the game, as if he had used an Attack card and without needing one. NOTE: this power is very useful if trying to pass as an Alien early in the game.",
		Taken: false
	},
	"The Executive Officer": {
		Description: "The Executive Officer can stay still and not move during his turn ONCE during the game, without announcing it. Take a Dangerous Sector card or declare ‘Silent Sector’ as normal.",
		Taken: false
	},
	"The Co-Pilot": {
		Description: "The Co-Pilot can Teleport ONCE in the game, as if she had used a Teleport card and without needing one. She must disclose her identity and show her character card when doing so.",
		Taken: false
	},
	"The Engineer": {
		Description: "The Engineer draws two Escape Pod Cards when he reaches an Escape Pod Sector and chooses which one to use. The unused Escape Pod Card is reshuffled with the remaining Escape Pod Card.",
		Taken: false
	},
	"The Medic": {
		Description: "The Medic can force another player to reveal their identity once during the game. The medic discloses his identity and reveals his character card when doing so.",
		Taken: false
	}
};