# Backlog

- 	[ ]	The player should be able to move across a map
	- Estimate: 3
		- It would be a fundamental aspect of the game, and many tasks later will be easier to develop with understanding of this concept
	- Requirements:
		- Needs to be able to press keys to move directionally
		- 8 way directional movement
		- Need to have a navigatable map


- 	[ ] The player should be able to interact with other NPCs
	- Estimate: 3
		- This should be pretty hard to understand at first, but after doing it it should be easier to understand
	- Requirements:
		- Collision with NPCs
		- Press key to interact
		- Various dialogue options
		- Story development


- 	[ ] The player should be able to interact with the environment
	- Estimate: 1
		- This should be easier after gleaming knowledge from NPC interaction
	- Requirements:
		- Have a detailed map
		- Different tiles have different identities (wall, floor, rock, wood, etc.)
		- Doors that lead to rooms, Key doors, objects that will do things


- 	[ ] The player should have an accessible menu
	- Estimate: 2
		- This shouldn't be too hard to do, but making the list of items and abilities may take a long while.
	- Requirements: 
		- Have an inventory
			- Have different items stored in inventory
			- Mainly consumables and items not currently equipped
			- Equippable Armor, Weapons and Trinkets
		- Have a character screen
			- Have different skills and abilities
		- Have a screen that is separate from the navigation screen (main game)


- 	[ ] The player should be able to fight enemies in combat
	- Estimate: 8
		- This should be quite difficult to do and shall take a long while to really understand. Not only would we need to design a nice screen for combat, we'd need images for us and enemies and maybe some animation. Not to mention designing and implementing the systems would be intense.
	- Requirements: 
		- Have enemy lists
		- Be able to target specific enemies
		- Choose different actions:
			- Attack
			- Item
			- Ability
			- Actions
				- Parley
				- Taunt
				- Debate
				- etc.
		- Track health, mana, turn and any other stats
		- Maybe have some text dialogue on the start of turns by enemies?


- 	[ ] The player should be able to save their game
	- Estimate: 5
		- This will be very difficult, but with the help of Riley and React it should be manageable.
	- Requirements:
		- Add the option to the menu
		- Save character stats, data, inventory, location, all the stuff so it can be accessed later.


-	[ ] The player should be able to fight random enemies
	- Estimate: 1
		- This shouldn't be too difficult, just adding something to the environment. Probably.
	- Requirements:
		- In different areas have a random likelyhood to fight enemies just by walking around.
		- Some areas have a higher chance than others.

-	[ ] The player should receive loot from enemies
	- Estimate: 1
		- This should be very simple, inventory would already be established, we would just be adding to it. (.push)
	- Requirements:
		- On defeating an enemy, they drop a certain (defined but random) amount of gold, experience, and items.
		- Add loot to inventory or character screen

-	[ ] The player should be able to trade with NPCs
	- Estimate: 2
		- This should be pretty good to understand, but may be tricky to get their inventories
	- Requirements:
		- Specific NPCs should be shop-owners.
		- Different NPCs would have different inventories.
		- You could buy items for gold, adding the item to your inventory.
		- You could sell items for gold, removing the item from your inventory.
