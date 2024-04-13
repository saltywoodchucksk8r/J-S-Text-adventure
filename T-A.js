const player = {
   health: 100,
   inventory: [
      'anItem',
      'anotherItem'
   ]
}

console.log(player.inventory)

const story = {
start : {
    text : "It's currently 8:pm and Ze is asleep (your name is ze). your alarm makes you wake up. Then you wakes up and realizes hes late for a pizza lovers convention (for some reason they happen at night). You are rushed out of the house and decided to pick an outfit but only has 3",
    choices : [
        ["tan1","The meat lovers outfit"],
        ["tan2","The pizza lovers outfit"],
        ["tan3","The cheesed-outfit"]
    ]
},
tan1 : {
 text : "You pick your outfit and you leave the house",
 choices : [
    ["tan4","Next"]
 ]
},
tan2 : {
    text : "You pick your outfit and you leave the house",
    choices : [
     ["tan4","Next"]
 ]
},
tan3 : {
 text : "You pick your outfit and you leave the house",
 choices : [
    ["tan4","Next"]
   //  player[inventory]
 ]
},
tan4 : {
 text : "ze starts running across the street and a 5 ton pizza truck hauling an unholy amount of pizza and ze dies",
 choices : [
    ["tan5","Next"]
 ]
},
tan5 : {
    text : "ze opens their eyes Suddenly and realizes they are no longer in their own world",
    choices : [
       ["tan6","Next"]
    ]
   },
 tan6 : {
    text : "ze sees a new world ridden with pizza all over it, the buildings and the houses everywhere you look theres pizza",
    choices : [
       ["tan7","Next"]
    ]
   },
tan7 : {
    text : "You return to your house where you are greeted by your parents who have chef hats on with a weird greasy pizza stench",
    choices : [
       ["tan8","Next"]
    ]
   },
tan8 : {
    text : "You hear a magical noise and a  white beirded man in a yellow cloak with red spots appears in front of you looking confused and sweaty",
    choices : [
       ["tan9","Next"]
    ]
   },
tan9 : {
    text : "The man introduces himself and says <hey Ze im the great wizard Pizzarino",
    choices : [
       ["tan10","Next"]
    ]
   },
tan10 : {
    text : "I need your help, i was chilling in my tower and all of a sudden the evil demon lord pizzaria stole the 8 slices that hold enough power to destroy our world. Luckily I have the pizza staff which is the only last piece stopping him from destroying the world. Please go retrieve our 8 slices and save the world from destroying the world",
    choices : [
       ["tan11","Next"]
    ]
   },
tan11 : {
      text : `"Will you help me?"`,
      choices : [
         ["tan12",`tell Pizzarino that you need to stay here and protect your "family"`]
         ["tan13",`tell Pizzarino that "you dont want to because you're in a new world with new people and a whole lot of pizza"`]
         ["tan14",`tell Pizzarino no and that you want to explore the world on your own`]
         ["tan15",`ask  pizzarino what he knows about you`]
    ]
   },
tan12 : {
      text : `Pizzarino says "ok" then walks out and goes off to fight pizzario`,
      choices : [
         ["tan16","Next"]
    ]
   },
tan16 : {
      text : `You never hear from pizzarino again and your new world slowly breaks out into chaos and you see the world open up and swallow everything up and you see pizzario in th edistance casting some sort of spell ad you live for about 10 more seconds before the world explodes killing eveyone including you`,
      choices : [
         ["start","Next"]
    ]
   },
tan13 : {
      text : `Pizzarino says "You have 2 choices, Let everyone in this new world die because you selfishly don't want to even try or you set off to have the adventure of a lifetime"`,
      choices : [
         ["tan17","Next"]
    ]
   },
tan17 : {
      text : `What will you do?`,
      choices : [
         ["tan18","Let everyone die"]
         ["tan19","Set off on an amazing adventure"]
    ]
   },
tan18 : {
      text : `Pizzarino. utterly shocked unleashes all unholy high hell on you killing you and your family`,
      choices : [
         ["start","Next"]
    ]
   },
tan19 : {
      text : `Pizzarino thanks you then says "Take this to help you on your journey"`,
      choices : [
         ["tan22", "head off on your journey"]
    ]
   },
tan14 : {
      text : `You make it as far as the other side of town utterly avoiding all obsticals untill you reach the three meat forest and the guardian`,
      choices : [
         ["tan20","Next"]
    ]
   },
tan20 : {
      text : `You make a gesture that the three meat guardian takes as a sign that you want to fight and the guardian kills you with one hit (you stood no chance)`,
      choices : [
         ["start","Next"]
    ]
   },
tan15 : {
      text : `Pizzarino responds with "I know everything, i know this isn't your original world and i know this is you're just a human but i since some sort of power in you that nobody else has here"`,
      choices : [
         ["tan21","Next"]
    ]
   },
tan21 : {
      text : `"I think that if anyone where to save our world it would be you"You understand what you need to do next and you tell pizzario that you're going to help`,
      choices : [
         ["tan19","Next"]
    ]
   },
tan22 : {
      text : `you see the outside of the three meat forest and you see a barder  and it looks as if you owe it something`,
      choices : [
         ["tan23","Next"]
    ]
   },
//Ask mr fast or the internet how to make turn based fighing
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
// Make it to where if your health goes to Zero the screen turns red
tan25 : {
      text : `you run into a guy holding a hanger and he picks a fight`,
      choices : [
         ["tan26","Next"]
    ]
   },
tan26 : {
      text : `you travel deeper into the forest and you see 3 paths in front of you`,
      choices : [
         ["tan27","next"]
    ]
   },
tan26 : {
      text : `north of you, you see a crimson sky and a terrifying path with skulls on the side of the road,in front of you; you see a regular park path, South of you; see some type of peper flake path that looks majestic, maybe even suspiciously peaceful `,
      choices : [
         ["tan28","Front"]
         ["tan43","North"]
         ["tan28","South"]
    ]
   },
tan28 : {
      text : `as you travel north you notice the path is singed with burn marks and skulls scattered across on the road`,
      choices : [
         ["tan29","next"]
    ]
   },
tan29 : {
      text : `some sort of hobgoblins block your path, and they want you to join them`,
      choices : [
         ["tan30","next"]
    ]
   },
tan30 : {
      text : `Will you join them?`,
      choices : [
         ["tan31","say no"]
         ["tan36","say yes"]
    ]
   },
tan31 : {
      text : `You go off to spend the rest of your life as a hobgoblin over the years you slowly turn into a hob goblin`,
      choices : [
         ["tan33","next"]
    ]
   },
tan33 : {
      text : `one day, somone comes through the forest and you ask them if they want to join and with no words they slaughter you, your family, and your kind`,
      choices : [
         ["start","next"]
    ]
   },
tan34 : {
      text : `The hob goblins are offended, now you have to fight them (4 hobgoblins)`,
      choices : [
         ["tan35","next"]
    ]
   },
tan36 : {
      text : `a scary dude named pepino the wicked comes at you and makes a cheesesplosion to himself nearly ending his own life, you awkwardly walk past this man and you see a man in the distance and you approach him`,
      choices : [
         ["tan37","next"]
    ]
   },
//make it to where if you pick an item it says something different
tan37 : {
      text : `A humble craftsman wants you to see his wares will you see them?`,
      choices : [
         ["tan38","Yes"]
         ["tan41","No"]
    ]
   },
tan38 : {
      text : `a scary dude named pepino the wicked comes at you and makes a cheesesplosion to himself nearly ending his own life, you awkwardly walk past this man and you see a man in the distance and you approach him`,
      choices : [
         ["tan39","Cheese cutter blade"]
         ["tan39","Sausage slicer"]
         ["tan39","Basil grenade launcher"]
         ["tan39","Tomato Tosser"]
         ["tan39","Moterella morning star"]
         ["tan39","Marrinerra mace"]
         ["tan39","Breadstick brrage"]
    ]
   },
tan37 : {
      text : `"Thank you kind fellow"`,
      choices : [
         ["tan42","next"]
    ]
   },
tan41 : {
      text : `The humble craftsman turns mad after you neglect his kind offer and in a flash murders you sllicing you in half with his perfected wepon`,
      choices : [
         ["start","next"]
    ]
   },
// tan42 is the meeting point
tan42 : {
      text : `you're now on the right path twards the evil demon lords castle`,
      choices : [
         ["","next"]
    ]
   },
tan43 : {
      text : `This path has all of the regular park fixins exept you only see a homeless man on a bench`,
      choices : [
         ["tan44","next"]
    ]
   },
tan44 : {
      text : `The homeless man approaches you,the homeless man asks you to join his homeless armada, they call themselfs the homies, will you join them?`,
      choices : [
         ["tan45","no"]
         ["tan47","Yes"]
    ]
   },
//make a theoretical if then statemnt for if your health goes to zero 
tan45 : {
      text : `The homeless people pull out guns from behind their backs as if they took them from some sort of inventory and shoot at you`,
      choices : [
         ["tan46","next"]
    ]
   },
tan46 : {
      text : `You survive that ordeal and you see a man in the distance and you approach him`,
      choices : [
         ["tan42","next"]
    ]
   },
tan47 : {
      text : `You hangout with the homies and suddenly realize they are homeless for a reason`,
      choices : [
         ["tan48","next"]
    ]
   },
tan48 : {
      text : `because they take you inside of their tent in the woods and it has a elavator in it and it goes down to a underground mansion/bunker and they tell you to run and give you 20 minutes to run and hide`,
      choices : [
         ["tan52","Stay and fight(there is 3 of them and one of you)"]
         ["tan50","Run and hide"]
    ]
   },
tan50 : {
      text : `Stay and fight(there is 3 of them and one of you)`,
      choices : [
         ["tan51","next"]
    ]
   },
tan51 : {
      text : `You run at them like an idiot and they hit you with a pizza themed projectile wepon instantly vaporizing you`,
      choices : [
         ["start","next"]
    ]
   },
tan52 : {
      text : `you turn around sprint 2 corners and see 4 path doors in front of you,A sign above these 4 doors "only one of these are true"`,
      choices : [
         ["tan53",`Path 1's door Is a large 12 foot door that says "Exit"`]
         ["tan54",`Path 2's door is a 10 foot door that says "Pinapple belongs on pizza"`]
         ["tan55",`Path 3's door is a 14 foot door that says "Peanuts belong on pizza"`]
         ["tan56",`Path 4's door is a 18 foot door that says "anchovies belong on pizza"`]
    ]
   },
tan53 : {
      text : `You cracked the door and it snatched you into a room with bees... need i say more?`,
      choices : [
         ["start","next"]
    ]
   },
tan54 : {
      text : `Congratulations!!!!!! you're a normal human being and your opinion is valid about this, you get to move on to the next door this time you see 3 doors and a sign in front of these doors`,
      choices : [
         ["tan57","next"]
    ]
   },
tan55 : {
      text : `You walked into the room and its pitch black and you and its a room filled with peanut butter and you drown in it`,
      choices : [
         ["start","next"]
    ]
   },
tan56 : {
      text : `You touch the door thinking you were right when you were so so so wrong and the door activated and the text changed  to shame door and the door strapped you to a chair and it puts you in a room full of people and they shame you  to death`,
      choices : [
         ["start","next"]
    ]
   },
tan57 : {
      text : `The sign says "who created pizza?"`,
      choices : [
         ["tan58","Raffaele Esposito"]
         ["tan59","Angelo Lombardi"]
         ["tan60","Pizzarino Huzzario"]
    ]
   },
tan58 : {
      text : `CONGRATULATIONS!!!!!!! you either successfully guessed, searched this up or actually know this random information. anyways you can contine on to the last 2 doors`,
      choices : [
         ["tan61","Raffaele Esposito"]
    ]
   },
tan59 : {
      text : `You turn into a certified world-renouned mustashed man and you go to attempt to through the worlds largest pizza and butter on the floor makes you and get sufficated by it`,
      choices : [
         ["start","next"]
    ]
   },
tan60 : {
      text : `You might be right for this universe but we're talking about the one you're in right now, you die, no sound no nothing, just death`,
      choices : [
         ["start","next"]
    ]
   },
tan61 : {
      text : `"Two doors stand before you, a choice you must make,
      One leads to freedom, the other a mistake.
      One door hides wisdom, the other holds dread,
      To make the right choice, use the voice in your head.
      Decide with care, for your fate lies in store,
      Which door holds the key? The smart one or more?"`,
      choices : [
         ["tan62",`The 1st door says "FREEDOM!!"it is painted red white and blue and has bald eagles etched in the door`]
         ["tan63",`The 2nd door says "Second chance door" you can only assume it's a second chance to join the homies`]
    ]
   },
tan63 : {
      text : `You pick door 2 and you get put in a endless loop forever`,
      choices : [
         ["start","next"]
    ]
   },
tan62 : {
      text : `You pick door one probably thinking and saying that you picked the right door because you did. Congratulations!!! you made it through the labrinth, outside the labrinth you see a guy and you have no choice but to approach him`,
      choices : [
         ["tan64","next"]
    ]
   },
//you get the legendary naples katana
tan64 : {
      text : `The humble craftsman meets you at the end of the labrenth and tosses you one of his wepons and you both slay the homies`,
      choices : [
         ["tan65","next"]
    ]
   },
tan65 : {
      text : `Now that you're safe, you thank the humble craftsman and he replies with"you're welcome" then he tells you to continue down the path and he points to a light at the end of a tunnel`,
      choices : [
         ["tan66","next"]
    ]
   },
tan66 : {
      text : `You make it to the exit of the labrinth and you see the castle of pizzaria what seems a few miles away what will you do next?`,
      choices : [
         ["tan65","Travle south"]
         ["tan42","Head north"]
    ]
   },
}