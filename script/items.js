var defaultItemGrid = [
    [
        "bow",
        "hookshot",
        "hammer",
        "firerod",
        "glove",
        "moonpearl",
    ],
    [
        "somaria",
        "lantern",
        "flute",
        "book",
        "boots",
        "flippers",
        "mirror",
    ],
    [
        "sword",
        "tunic",
        "shield",
        "blank",
        "bombos",
        "ether",
        "quake",
    ],
        [
        "shovel",
        "mushroom",
        "powder",
        "bottle",
        "cape",
        "icerod",
		"silvers",
    ],
    [
        "boss3",
        "boss4",
        "boss5",
        "boss6",
        "boss7",
        "boss8",
        "boss9",
    ],
    [
        "blank",
        "boss0",
        "boss1",
        "boss2",
        "agahnim",
        "blank",
    ],
]

var items = {
    bow: false,
    hookshot: false,
    hammer: false,
    firerod: false,
    glove: 0,
    moonpearl: false,
    sword: 0,
    tunic: 1,
    shield: 0,
    bombos: false,
    ether: false,
    quake: false,
    somaria: false,
    lantern: false,
    flute: false,
    book: false,
    boots: false,
    flippers: false,
    mirror: false,
    shovel: false,
    mushroom: false,
    powder: false,
    bottle:0,
    cape: false,
    icerod: false,
    byrna: false,
    net: false,
	silvers: false,

    boss0: 1,
    boss1: 1,
    boss2: 1,
    boss3: 1,
    boss4: 1,
    boss5: 1,
    boss6: 1,
    boss7: 1,
    boss8: 1,
    boss9: 1,
    agahnim: 0,

    blank: false
};

var dungeonchests = {
    0: 6,
    1: 6,
    2: 6,
    3: 14,
    4: 10,
    5: 8,
    6: 8,
    7: 8,
    8: 8,
    9: 12     
}


var itemsMin = {
    sword:0,
    shield:0,
    tunic:1,

    bottle:0,
    boomerang:0,
    glove:0,

	boss0: 1,
	boss1: 1,
	boss2: 1,

    agahnim:0,

	boss3: 1,
	boss4: 1,
	boss5: 1,
	boss6: 1,
	boss7: 1,
	boss8: 1,
	boss9: 1
};

var itemsMax = {
    sword:4,
    shield:3,
    tunic:3,

    bottle:4,
    boomerang:3,
    glove:2,

	boss0: 2,
	boss1: 2,
	boss2: 2,

    agahnim:1,

	boss3: 2,
	boss4: 2,
	boss5: 2,
	boss6: 2,
	boss7: 2,
	boss8: 2,
	boss9: 2,
	
	chest0: 6,
    chest1: 6,
    chest2: 6,
	chest3: 14,
    chest4: 10,
    chest5: 8,
    chest6: 8,
    chest7: 8,
    chest8: 8,
    chest9: 12 
};