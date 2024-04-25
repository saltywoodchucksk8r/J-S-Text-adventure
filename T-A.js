console.log('js works')

const player = {
   health: 100,
   inventory: [
      'anItem',
      'anotherItem'
   ]
}

console.log(player.inventory)

const story = {

   start: {
      text: "It's currently 8:pm and Ze is asleep (your name is ze). your alarm makes you wake up. Then you wake up and realizes hes late for a pizza lovers convention (for some reason they happen at night). You are rushed out of the house and decided to pick an outfit but only have 3",
      choices: [
         ["tan1", "The meat lovers outfit"],
         ["tan2", "The pizza lovers outfit"],
         ["tan3", "The cheesed-outfit"]
      ]
   },
   tan1: {
      text: "You pick your outfit and you leave the house",
      choices: [
         ["tan4", "Next"]
      ]
   },
   tan2: {
      text: "You pick your outfit and you leave the house",
      choices: [
         ["tan4", "Next"]
      ]
   },
   tan3: {
      text: "You pick your outfit and you leave the house",
      choices: [
         ["tan4", "Next"]

      ]
   },
   tan4: {
      text: "ze starts running across the street and a 5 ton pizza truck hauling an unholy amount of pizza and ze dies",
      choices: [
         ["tan5", "Next"]
      ]
   },
   tan5: {
      text: "ze opens their eyes and suddenly and realizes they are no longer in their own world",
      choices: [
         ["tan6", "Next"]
      ]
   },
   tan6: {
      text: "ze sees a new world ridden with pizza, the buildings and the houses everywhere you look theres pizza",
      choices: [
         ["tan7", "Next"]
      ]
   },
   tan7: {
      text: "You return to your house where you are greeted by your parents who have chef hats on with a weird greasy pizza stench",
      choices:  [
         ["tan8", "Next"]
      ]
   },
   tan8: {
      text: "You hear a magical noise and a white beirded man in a yellow cloak with red spots appears in front of you looking confused and sweaty",
      choices: [
         ["tan9", "Next"]
      ]
   },
   tan9: {
      text: "The man introduces himself and says <hey Ze im the great wizard Pizzarino",
      choices: [
         ["tan10", "Next"]
      ]
   },
   tan10: {
      text: "I need your help, i was chilling in my tower and all of a sudden the evil demon lord pizzaria stole the 8 slices that hold enough power to destroy our world. Luckily I have the pizza staff which is the only last piece stopping him from destroying the world. Please go retrieve our 8 slices and save the world from destroying the world",
      choices: [
         ["tan11", "Next"]
      ]
   },
   tan11: {
      text: `"Will you help me?"`,
      choices: [
         ["tan12", `tell Pizzarino that you need to stay here and protect your "family"`],
         ["tan13", `tell Pizzarino that "you dont want to because you're in a new world with new people and a whole lot of pizza"`],
         ["tan14", `tell Pizzarino no and that you want to explore the world on your own`],
         ["tan15", `ask  pizzarino what he knows about you`]
      ]
   },
   tan12: {
      text: `Pizzarino says "ok" then walks out and goes off to fight pizzario`,
      choices: [
         ["tan16", "Next"]
      ]
   },
   tan16: {
      text: `You never hear from pizzarino again and your new world slowly breaks out into chaos and you see the world open up and swallow everything up and you see pizzario in th edistance casting some sort of spell ad you live for about 10 more seconds before the world explodes killing eveyone including you`,
      choices: [
         ["start", "Next"]
      ]
   },
   tan13: {
      text: `Pizzarino says "You have 2 choices, Let everyone in this new world die because you selfishly don't want to even try or you set off to have the adventure of a lifetime"`,
      choices: [
         ["tan17", "Next"]
      ]
   },
   tan17: {
      text: `What will you do?`,
      choices: [
         ["tan18", "Let everyone die"],
         ["tan19", "Set off on an amazing adventure"]
      ]
   },
   tan18: {
      text: `Pizzarino. utterly shocked unleashes all unholy high hell on you killing you and your family`,
      choices: [
         ["start", "Next"]
      ]
   },
   tan19: {
      text: `Pizzarino thanks you then says "Take this to help you on your journey"`,
      choices: [
         ["tan22", "head off on your journey"]
      ]
   },
   tan14: {
      text: `You make it as far as the other side of town utterly avoiding all obsticals untill you reach the three meat forest and the guardian`,
      choices: [
         ["tan20", "Next"]
      ]
   },
   tan20: {
      text: `You make a gesture that the three meat guardian takes as a sign that you want to fight and the guardian kills you with one hit (you stood no chance)`,
      choices: [
         ["start", "Next"]
      ]
   },
   tan15: {
      text: `Pizzarino responds with "I know everything, i know this isn't your original world and i know this is you're just a human but i since some sort of power in you that nobody else has here"`,
      choices: [
         ["tan21", "Next"]
      ]
   },
   tan21: {
      text: `"I think that if anyone where to save our world it would be you"You understand what you need to do next and you tell pizzario that you're going to help`,
      choices: [
         ["tan19", "Next"]
      ]
   },
tan22 : {
      text : `you see the outside of the three meat forest and you see a barder  and it looks as if you owe it something`,
      choices : [
         ["tan23","Next"]
    ]
   },
tan157 : {
      text : `The barder approaches you, what will you do?`,
      choices : [
         ["tan","Next"]
    ]
   },
//Make this fight sam
tan23 : {
      text : `you fight the barder which seems to be the gardian of the forest`,
      choices : [
         ["tan24","Next"]
    ]
   },
tan24 : {
      text : `you see the outside of the three meat forest and you see a barder  and it looks as if you owe it something`,
      choices : [
         ["tan25","Next"]
    ]
   },
//Make this fight sam
tan25 : {
      text : `you run into a guy holding a hanger and he picks a fight`,
      choices : [
         ["tan26","Next"]
    ]
   },
   tan26: {
      text: `you travel deeper into the forest and you see 3 paths in front of you`,
      choices: [
         ["tan27", "next"]
      ]
   },
   tan26: {
      text: `north of you, you see a crimson sky and a terrifying path with skulls on the side of the road,in front of you; you see a regular park path, South of you; see some type of peper flake path that looks majestic, maybe even suspiciously peaceful `,
      choices: [
         ["tan43", "Front"],
         ["tan28", "North"],
         ["tan28", "South"]
      ]
   },

tan28: {
      text: `as you travel north you notice the path is singed with burn marks and skulls scattered across on the road`,
      choices: [
         ["tan29", "next"]
      ]
   },

   tan28: {
      text: `as you travel north you notice the path is singed with burn marks and skulls scattered across on the road`,
      choices: [
         ["tan29", "next"]
      ]
   },
   tan29: {
      text: `some sort of hobgoblins block your path, and they want you to join them`,
      choices: [
         ["tan30", "next"]
      ]
   },
   tan30: {
      text: `Will you join them?`,
      choices: [
         ["tan32", "say no"],
         ["tan36", "say yes"]
      ]
   },
   tan32: {
      text: `Will you join them?`,
      choices: [
         ["tan32", "say no"],
         ["tan36", "say yes"]
      ]
   },
   tan31: {
      text: `You go off to spend the rest of your life as a hobgoblin over the years you slowly turn into a hob goblin`,
      choices: [
         ["tan33", "next"]
      ]
   },
   tan33: {
      text: `one day, somone comes through the forest and you ask them if they want to join and with no words they slaughter you, your family, and your kind`,
      choices: [
         ["start", "next"]
      ]
   },
// Make this fight sam
   tan34: {
      text: `The hob goblins are offended, now you have to fight them (4 hobgoblins)`,
      choices: [
         ["tan35", "next"]
      ]
   },
   tan36: {
      text: `a scary dude named pepino the wicked comes at you and makes a cheesesplosion to himself nearly ending his own life, you awkwardly walk past this man and you see a man in the distance and you approach him`,
      choices: [
         ["tan37", "next"]
      ]
   },
   //make it to where if you pick an item it says something different
   tan37: {
      text: `A humble craftsman wants you to see his wares will you see them?`,
      choices: [
         ["tan38", "Yes"],
         ["tan41", "No"]
      ]
   },
   tan38: {
      text: `a scary dude named pepino the wicked comes at you and makes a cheesesplosion to himself nearly ending his own life, you awkwardly walk past this man and you see a man in the distance and you approach him`,
      choices: [
         ["tan39", "Cheese cutter blade"],
         ["tan39", "Sausage slicer"],
         ["tan39", "Basil grenade launcher"],
         ["tan39", "Tomato Tosser"],
         ["tan39", "Moterella morning star"],
         ["tan39", "Marrinerra mace"],
         ["tan39", "Breadstick brrage"]
      ]
   },
   tan37: {
      text: `"Thank you kind fellow"`,
      choices: [
         ["tan42", "next"]
      ]
   },
   tan41: {
      text: `The humble craftsman turns mad after you neglect his kind offer and in a flash murders you sllicing you in half with his perfected wepon`,
      choices: [
         ["start", "next"]
      ]
   },
   // tan42 is the meeting point
   tan42: {
      text: `you're now on the right path twards the evil demon lords castle`,
      choices: [
         ["tan113", "next"]
      ]
   },
   tan43: {
      text: `This path has all of the regular park fixins exept you only see a homeless man on a bench`,
      choices: [
         ["tan44", "next"]
      ]
   },
   tan44: {
      text: `The homeless man approaches you,the homeless man asks you to join his homeless armada, they call themselfs the homies, will you join them?`,
      choices: [
         ["tan45", "no"],
         ["tan47", "Yes"]
      ]
   },
   //make a theoretical if then statemnt for if your health goes to zero 
   tan45: {
      text: `The homeless people pull out guns from behind their backs as if they took them from some sort of inventory and shoot at you`,
      choices: [
         ["tan46", "next"]
      ]
   },
   tan46: {
      text: `You survive that ordeal and you see a man in the distance and you approach him`,
      choices: [
         ["tan42", "next"]
      ]
   },
   tan47: {
      text: `You hangout with the homies and suddenly realize they are homeless for a reason`,
      choices: [
         ["tan48", "next"]
      ]
   },
   tan48: {
      text: `because they take you inside of their tent in the woods and it has a elavator in it and it goes down to a underground mansion/bunker and they tell you to run and give you 20 minutes to run and hide`,
      choices: [
         ["tan52", "Stay and fight(there is 3 of them and one of you)"],
         ["tan50", "Run and hide"]
      ]
   },
   tan50: {
      text: `Stay and fight(there is 3 of them and one of you)`,
      choices: [
         ["tan51", "next"]
      ]
   },
   tan51: {
      text: `You run at them like an idiot and they hit you with a pizza themed projectile wepon instantly vaporizing you`,
      choices: [
         ["start", "next"]
      ]
   },
   tan52: {
      text: `you turn around sprint 2 corners and see 4 path doors in front of you,A sign above these 4 doors "only one of these are true"`,
      choices: [
         ["tan53", `Path 1's door Is a large 12 foot door that says "Exit"`],
         ["tan54", `Path 2's door is a 10 foot door that says "Pinapple belongs on pizza"`],
         ["tan55", `Path 3's door is a 14 foot door that says "Peanuts belong on pizza"`],
         ["tan56", `Path 4's door is a 18 foot door that says "anchovies belong on pizza"`]
      ]
   },
   tan53: {
      text: `You cracked the door and it snatched you into a room with bees... need i say more?`,
      choices: [
         ["start", "next"]
      ]
   },
   tan54: {
      text: `Congratulations!!!!!! you're a normal human being and your opinion is valid about this, you get to move on to the next door this time you see 3 doors and a sign in front of these doors`,
      choices: [
         ["tan57", "next"]
      ]
   },
   tan55: {
      text: `You walked into the room and its pitch black and you and its a room filled with peanut butter and you drown in it`,
      choices: [
         ["start", "next"]
      ]
   },
   tan56: {
      text: `You touch the door thinking you were right when you were so so so wrong and the door activated and the text changed  to shame door and the door strapped you to a chair and it puts you in a room full of people and they shame you  to death`,
      choices: [
         ["start", "next"]
      ]
   },
   tan57: {
      text: `The sign says "who created pizza?"`,
      choices: [
         ["tan58", "Raffaele Esposito"],
         ["tan59", "Angelo Lombardi"],
         ["tan60", "Pizzarino Huzzario"]
      ]
   },
   tan58: {
      text: `CONGRATULATIONS!!!!!!! you either successfully guessed, searched this up or actually know this random information. anyways you can contine on to the last 2 doors`,
      choices: [
         ["tan61", "Raffaele Esposito"]
      ]
   },
   tan59: {
      text: `You turn into a certified world-renouned mustashed man and you go to attempt to through the worlds largest pizza and butter on the floor makes you and get sufficated by it`,
      choices: [
         ["start", "next"]
      ]
   },
   tan60: {
      text: `You might be right for this universe but we're talking about the one you're in right now, you die, no sound no nothing, just death`,
      choices: [
         ["start", "next"]
      ]
   },
   tan61: {
      text: `"Two doors stand before you, a choice you must make,
      One leads to freedom, the other a mistake.
      One door hides wisdom, the other holds dread,
      To make the right choice, use the voice in your head.
      Decide with care, for your fate lies in store,
      Which door holds the key? The smart one or more?"`,
      choices: [
         ["tan62", `The 1st door says "FREEDOM!!"it is painted red white and blue and has bald eagles etched in the door`],
         ["tan63", `The 2nd door says "Second chance door" you can only assume it's a second chance to join the homies`]
      ]
   },
   tan63: {
      text: `You pick door 2 and you get put in a endless loop forever`,
      choices: [
         ["start", "next"]
      ]
   },
   tan62: {
      text: `You pick door one probably thinking and saying that you picked the right door because you did. Congratulations!!! you made it through the labrinth, outside the labrinth you see a guy and you have no choice but to approach him`,
      choices: [
         ["tan64", "next"]
      ]
   },
   //you get the legendary naples katana
   tan64: {
      text: `The humble craftsman meets you at the end of the labrenth and tosses you one of his wepons and you both slay the homies`,
      choices: [
         ["tan65", "next"]
      ]
   },
   tan65: {
      text: `Now that you're safe, you thank the humble craftsman and he replies with"you're welcome" then he tells you to continue down the path and he points to a light at the end of a tunnel`,
      choices: [
         ["tan66", "next"]
      ]
   },
   tan66: {
      text: `You make it to the exit of the labrinth and you see the castle of pizzaria what seems a few miles away what will you do next?`,
      choices: [
         ["tan67", "Travle south"],
         ["tan42", "Head north"]
      ]
   },
   tan67: {
      text: `You travle south and see a oddly placed tavern called "PPP" (pedestiran pizza parlor)what is your next move?`,
      choices: [
         ["tan68", "Approach and enter the parlor"],
         ["tan69", "Swing your sword at the trees around you"]
      ]
   },
   tan68: {
      text: `You walk into the parlor and out of pure chance you get hit with an axe as soon as you open the door`,
      choices: [
         ["start", "next"]
      ]
   },
   tan69: {
      text: `You swing at the trees around you fall. A stranger approaches you and asks you if you're alright`,
      choices: [
         ["tan70", "next"]
      ]
   },
   tan70: {
      text: `What do you do?`,
      choices: [
         ["tan71", "Challange the stranger to battle(because why not)"],
         ["tan72", "Thank the stranger and ask what their name is"]
      ]
   },
   tan71: {
      text: `Suddenly the stranger raises his hand and a bolt of lightning comes down to smite you`,
      choices: [
         ["start", "next"]
      ]
   },
   tan72: {
      text: `You thank the stranger and and before you ask for a name he introduces himself "Hi my name is pablo pesto i saw you trying to practice and you looked like you were in distress"`,
      choices: [
         ["tan73", "next"]
      ]
   },
   tan73: {
      text: `Pablo pesto proceeds to show you how to properly weald your wepon`,
      choices: [
         ["tan74", "next"]
      ]
   },
   tan74: {
      text: `you thank him once again, will you befriend Pablo?`,
      choices: [
         ["tan76", "Yes"],
         ["tan75", "No"]
      ]
   },
   tan75: {
      text: `Boo. Lame. you get sent to a different storyline because you didn't pick the cooler option`,
      choices: [
         ["tan42", "next"]
      ]
   },
   tan76: {
      text: `You befriend pablo pesto then you both run into several ordeals for charecter development so you and pablo are best of friends`,
      choices: [
         ["tan77", "next"]
      ]
   },
   tan77: {
      text: `You both journey far and wide and finally make it to castle of pizzaria whats your next move?`,
      choices: [
         ["tan80", "Knock on the gates"],
         ["tan77", "Search for an alternate entrance"],
         ["tan78", "Trojan horse"],
         ["tan77", "Create a distraction"]
      ]
   },
   tan78: {
      text: `You and pablo make a trojan horse big enough to fit the both of you and pull a classic torjan horse.`,
      choices: [
         ["tan79", "next"]
      ]
   },
   tan79: {
      text: `It works for about day untill you both get tired of sitting in a hot cramped peice of wood and you and pablo leave and are met with hundreds of armed guards and you both get swarmed`,
      choices: [
         ["start", "next"]
      ]
   },
   tan80: {
      text: `You knock on the gate and nobody answers....Knock again?`,
      choices: [
         ["tan81", "Yes"],
         ["tan82", "No"]
      ]
   },
   tan81: {
      text: `You knock again First you hear silence a guard is then you hear the 30 foot gate creek then start to open and watch it as it moves down faster then you think and the gate falls on you`,
      choices: [
         ["start", "next"]
      ]
   },
   tan82: {
      text: `You feel embarassed after the silence after you knocked fills the area`,
      choices: [
         ["tan83", "next"]
      ]
   },
   tan83: {
      text: `You find 2 entrances`,
      choices: [
         ["tan84", "Enter through a akwardly placed  window of the back of the castle?"],
         ["tan85", "Enter through a hole in the stone wall on the west side of the castle?"]
      ]
   },
   tan84: {
      text: `You enter through the window without looking through it and you see hundreds of guards eating lunch. They all swarm you and you die piled under 30 guards`,
      choices: [
         ["start", "next"]
      ]
   },
   tan85: {
      text: `You both enter through the stone wall and see the castle of pizzario and admire the structural integrity`,
      choices: [
         ["tan86", "next"]
      ]
   },
   tan86: {
      text: `Ya'll continue to head twards the castle and  yall enter through the front door`,
      choices: [
         ["tan164", "next"]
      ]
   },
   // Make this fight sam
   tan164: {
      text: `Once you enter the castle you guys are met with 5 silly looking royal guards (the castle seems very understaffed). They apprach you guys and attack`,
      choices: [
         ["tan88", "next"]
      ]
   },

   tan87: {
      text: `Once you enter the castle you guys are met with 5 silly looking royal guards (the castle seems very understaffed). They apprach you guys and attack`,
      choices: [
         ["tan86", "next"]
      ]
   },
   tan88: {
      text: `You both survive this trial and head twards the big doors that appears after the last gard dies`,
      choices: [
         ["tan89", "next"]
      ]
   },
   tan89: {
      text: `Will you open the doors?`,
      choices: [
         ["tan97", "Yes"],
         ["tan90", "No"]
      ]
   },
   tan90: {
      text: `You just stare the door with pablo right behind you, and you both just kinda do nothing now you have to open the door`,
      choices: [
         ["tan91", "next"]
      ]
   },
   tan91: {
      text: `You open the door and you are both met with a room lit by torches with blue flames and a throne room with only pizzaria in it and the door slams behind you guys`,
      choices: [
         ["tan92", "next"]
      ]
   },
   tan92: {
      text: `He speaks in his deep voice that shakes the floor and says "Take one more step and i will end your lifes." Will you take the step and do what you've been entending to do?`,
      choices: [
         ["tan93", "Turn back and cower away?"],
         ["tan92", "Take the step?"]
      ]
   },
   tan93: {
      text: `You cower away and you see the credits roll in front of you and pablo calls you a coward for quitting then fades into black`,
      choices: [
         ["tan94", "next"]
      ]
   },
   tan95: {
      text: `You blackout and "wake up" in a room shrouded in darkness and all of the chareters in the game appear in front of you and start doing a ragdoll like dance then a sign appears in front of you and it says congradulations you got the "coward ending" then everything fades to black and you, and everything stop existing`,
      choices: [
         ["tan96", "next"]
      ]
   },
   tan96: {
      text: `The End`,
      choices: [
         ["start", "next"]
      ]
   },
   tan97: {
      text: `You and pablo both take the step togeather and everything behind pizzarino is shrouded in black then it looks like pizzarino is charging up an attack`,
      choices: [
         ["tan98", "next"]
      ]
   },
   tan98: {
      text: `You hear a magical hum coming from pizzarino and you start the battle`,
      choices: [
         ["tan99", "next"]
      ]
   },
   // Make this fight sam
   //first phase he has the attacks of pizza barage, mozzarella minefeld, and pepperoni projection
   tan99: {
      text: `Pizzarino starts slowing down but his attacks get stronger`,
      choices: [
         ["tan100", "next"]
      ]
   },
   tan101: {
      text: `Pizzarino starts to talk about the reason why he took the pizza and his backstory`,
      choices: [
         ["tan102", "next"]
      ]
   },
   //second phase with the calzone catastorophy, pizza wheel whirlwind, and doughy demolition
   tan102: {
      text: `His words bring you to tears but you both know that you've made it  too far to stop now`,
      choices: [
         ["tan103", "next"]
      ]
   },
   tan103: {
      text: `The fight is getting intinse and pizzarino refuses to lose`,
      choices: [
         ["tan104", "next"]
      ]
   },
   //THIRD PHASE calzone catastorophy, pizza wheel whirlwind, doughy demolition, pizza barage, mozzarella minefeld, and pepperoni projection
   tan104: {
      text: `pizzarino determination brings him to use over his full power and shatter his limits`,
      choices: [
         ["tan105", "next"]
      ]
   },
   tan105: {
      text: `You and pablo finally finish the fight and aquire the golden slices and you and pablo both teleport back to your home where pizzarino and your parents await`,
      choices: [
         ["tan106", "next"]
      ]
   },
   tan106: {
      text: `You and pablo hand over the staff and the slices to pizzarino and he laughs minacingly then pizzario says "You fools, you gave me everything i needed to take over the world"He says in a different evil sounding voice `,
      choices: [
         ["tan107", "next"]
      ]
   },
   tan107: {
      text: `You and pablo hand over the staff and the slices to pizzarino and he laughs minacingly then pizzario says "You fools, you gave me everything i needed to take over the world"He says in a different evil sounding voice`,
      choices: [
         ["tan108", "next"]
      ]
   },
  // Make this fight sam
   tan108: {
      text: `"Thank you both so much for being so stupid, you didn't even ask who brought you here" Then he challanges you to battle and you know you have to do this fight alone`,
      choices: [
         ["tan108", "next"]
      ]
   },
   tan109: {
      text: `You beat pizzarino and a portal that seems to like it'll take you home what will you do?`,
      choices: [
         ["tan110", "Stay"],
         ["tan112", "Go home"]
      ]
   },
   tan110: {
      text: `You stay and live a long and adventurious life and everybody in your real world lives their regular lifes. Congradulations you got the "Main ending"`,
      choices: [
         ["tan108", "next"]
      ]
   },

   tan111: {
      text: `You go home and you're family is mourning your "death" and they all call you a zombie then laugh and they welcome you back and you live the rest of you're life peacefully. Congradulaitons you got the "Home sweet home" ending.`,
      choices: [
         ["tan112", "next"]
      ]
   },
   tan112: {
      text: `The End?`,
      choices: [
         ["start", "next"]
      ]
   },
   tan113: {
      text: `You're walking fowards and you barely see the castle of Pizzaria in the distance, it looks thousands of miles away`,
      choices: [
         ["tan115", "next"]
      ]
   },

   //Rig it to make the fight to where you can only win if you're about to die
   tan115: {
      text: `While you're walking fowards you don't look down and you fall into a ditch almost dieing you're at 10 hp practically about to die and you're surrounded by cheese amalgamations a breed of too much cheese and not enough crust what will you do?`,
      choices: [
         ["tan120", "turn around"],
         ["tan116", "Run foward"],
         ["tan119", "Run right"],
         ["tan121", "Stay and fight"]
      ]
   },
   tan116: {
      text: `You run foward and you see a wall and you see a path open up as you approach it, will you enter?`,
      choices: [
         ["tan117", "Yes"]
         ["tan118", "No"]
      ]
   },
   tan117: {
      text: `You enter the secret door and it appears to not be a secret because all it is, is a hidey hole that is filled with bones and you soon realize how the amalgamations pass through the solid matter and dispatch you like a navy seal`,
      choices: [
         ["start", "next"]
      ]
   },
   tan118: {
      text: `You make it to the door and dont go in, and the amalgamations grab you by your ankle and you disolve, you died.`,
      choices: [
         ["start", "next"]
      ]
   },
   tan119: {
      text: `You run right and see wall. you full on sprinted into a wall. foreshame. You fall unconcious and you get ate`,
      choices: [
         ["start", "next"]
      ]
   },
   tan120: {
      text: `You turn around and the amalgamations kill you fast then you can say pladapus`,
      choices: [
         ["start", "next"]
      ]
   },
   // make fighting please
   //Rig it to make the fight to where you can only win if you're about to die
   tan121: {
      text: `Congradulations you made it out alive barely with one hp`,
      choices: [
         ["tan122", "next"]
      ]
   },
   //make everything go up by 20
   tan122: {
      text: `You have a awakening revalation and you're charecter gains +20 on all of your stats and unbritled motivaiton`,
      choices: [
         ["tan123", "next"]
      ]
   },
   tan123: {
      text: `You transform into a lean mean pizza eating machine(nothing about you changed about you but now have that dawg in you)`,
      choices: [
         ["tan124", "next"]
      ]
   },
   tan124: {
      text: `You approach the castle of pizzario what will you do?`,
      choices: [
         ["tan125", "next"]
      ]
   },
   tan125: {
      text: `Knock on the gates?`,
      choices: [
         ["tan126", "Yes"],
         ["tan128", "Look for alternitive entrances"]
      ]
   },
   tan126: {
      text: `You knock again `,
      choices: [
         ["tan127", "next"]
      ]
   },
   tan127: {
      text: `First you hear silence a guard is  then you hear the 30 foot gate creek then start to open and watch it as it moves down faster then you think  and the gate falls on you`,
      choices: [
         ["start", "next"]
      ]
   },
   tan128: {
      text: `as you look around the perimater you find a soft path of soil that feels like you could almost dig through it what do you do?`,
      choices: [
         ["tan130", "Dig through the patch?"],
         ["tan129", "ignore it?"]
      ]
   },
   tan129: {
      text: `You ignore the path and realize there are no entrances you go back`,
      choices: [
         ["tan125", "next"]
      ]
   },
   tan130: {
      text: `dig through the patch?`,
      choices: [
         ["tan131", "next"]
      ]
   },
   tan131: {
      text: `you find yourself in the castles kitchen where the chefs are making spagetti`,
      choices: [
         ["tan132", "next"]
      ]
   },
   //fight 3 spegetti chefs
   tan132: {
      text: `After you fight the chefs you steal all of their marrinerra sauce and explore the castle`,
      choices: [
         ["tan133", "next"]
      ]
   },
   tan133: {
      text: `as you explore the castle you are met with three doors (two of which you cant come back from)`,
      choices: [
         ["tan138", "infront of you is a very large door with skulls on the front"],
         ["tan134", "a door with glowing light perecing through the crack of itself"],
         ["tan135", "a average sized door nothing too special"]
      ]
   },
   tan134: {
      text: `you open the door only for your mortal body to be blasted into the abiss of light. as you feel your soul leaches out of your body it is pulled twords a strange tall man who take in in his and and puts it into a lantern. your death had caught up to you, it waited too long`,
      choices: [
         ["start", "next"]
      ]
   },
   tan135: {
      text: `opening the door you see two chests and a bottle`,
      choices: [
         ["tan136", "next"]
      ]
   },
   //recive the olive oil flame thrower, a suply of olive oil, and 2 stacks of breadsticks
   tan136: {
      text: `you open the two chest and recive the olive oil flame thrower, a suply of olive oil, and 2 stacks of breadsticks`,
      choices: [
         ["tan137", "next"]
      ]
   },
   tan137: {
      text: `you exit the room feeling more confident for what awaits next. you notice the dark door calls you forth`,
      choices: [
         ["tan138", "next"]
      ]
   },
   tan138: {
      text: `you open the door and is met by the boss himself, pizzario, and hes appauled on how you snuck in`,
      choices: [
         ["tan139", "next"]
      ]
   },
   // you fight pizzario
   tan139: {
      text: `nonetheless, he initiates the battle`,
      choices: [
         ["tan138", "next"]
      ]
   },
   tan140: {
      text: `you win the battle`,
      choices: [
         ["tan141", "next"]
      ]
   },
   tan141: {
      text: `winning the battle doesnt mean the slices of life are safe you must bring them together using the magic staff`,
      choices: [
         ["tan142", "next"]
      ]
   },
   tan142: {
      text: `you walk out of the room into the larger plan siting infront of a giant oven`,
      choices: [
         ["tan143", "next"]
      ]
   },
   tan143: {
      text: `you cast the special degorinos degree which metls the slices of life back together forming a full pizza again`,
      choices: [
         ["tan144", "next"]
      ]
   },
   tan144: {
      text: `pizzarino spawns in and greats you telling you youve done a great ordeal to humaity. the world is put back into order and you can finally rest in peace`,
      choices: [
         ["tan145", "next"]
      ]
   },
   tan145: {
      text: `before you wake up from your dream you must make it home`,
      choices: [
         ["tan146", "next"]
      ]
   },
   tan146: {
      text: `you arrive home and as you open the door you sence the feeling of accomplishemnt`,
      choices: [
         ["tan147", "next"]
      ]
   },
   tan147: {
      text: `your body slowly starts to de-materialize. as your vision fades away you regain consusness in your body int the real world. you are met by a pizza truck driver who is shruging you and calls nine one one. your eyes close. then are re-opend by doctors picking you away and flashing lights`,
      choices: [
         ["tan148", "next"]
      ]
   },
   tan148: {
      text: `eyes close and re-open. youre rushed around the office.`,
      choices: [
         ["tan149", "next"]
      ]
   },
   tan150: {
      text: `6 days later...`,
      choices: [
         ["tan151", "next"]
      ]
   },
   tan151: {
      text: `as you wake up a grone leaves your body. You then see pizzarino. `,
      choices: [
         ["tan152", "next"]
      ]
   },
   tan152: {
      text: `Standing there he says, "Youve done well be there is still evil out there. will you join me?''`,
      choices: [
         ["tan153", `"Yes i will gladly."`],
         ["tan156", `"No, why would i want to go back?"`]
      ]
   },
   tan153: {
      text: `You are accepted back in and you a brought to be king of pizzealia.`,
      choices: [
         ["tan151", "next"]
      ]
   },
   tan154: {
      text: `The End....`,
      choices: [
         ["tan155", "next"]
      ]
   },
   tan155: {
      text: `To be continued.`,
      choices: [
         ["start", "next"]
      ]
   },
   tan156: {
      text: `YOU ARE KILLED ON THE SPOT. BRUTALLY THROW OUT THE WINDOW AND EATEN ALIVE BY CLOWN SNAKES`,
      choices: [
         ["start", "next"]
      ]
   },
}
//taken from taber sand's halo restitution, Thank you taber
let storyContainer = document.getElementById("story");
storyContainer.innerHTML = "";
let buttonContainer = document.createElement("buttons");
for (let i = 0; i < 3; i++) {
   buttonContainer.innerHTML = story.start.text;
   document.body.appendChild(buttonContainer);
}

let storage = ["start"];
function makeButton(btnText, choice) {
   let button = document.createElement("button");

   button.innerHTML = btnText;

   buttonContainer.appendChild(button);

   button.addEventListener("click", function () {
      storage.push(choice);
      printStory();
   });
}

function printStory(text) {
   let pageNow = storage[storage.length - 1];
   storyContainer.innerHTML = "";
   buttonContainer.innerHTML = "";
   // for(let page of storage){
   //     createStory(story[page].text);
   // }
   createStory(story[pageNow].text)
   for (let choice of story[pageNow].choices) {
      makeButton(choice[1], choice[0])
   }
}
function createStory(text) {
   let storyItem = document.createElement("p");

   storyItem.innerText = text;

   storyContainer.appendChild(storyItem);
}
printStory(story.start.text);
//taken from taber sand's halo restitution, Thank you taber