# Reports

## 2019 / 4 / 12
Working on a collaborative jsfiddle doc where I’ve created a couple sprites that can draw, stretch and rotate
We’re pretty much just experimenting at this point

## 2019 / 4 / 16
Added .js and .html files to our repo
Started to copy over code from out successful jsfiddle for drawing sprites on the page, stretched and rotating
Our next step is building a tilemap engine which we'll use as the base for our game
Also installed jquery, still not sure how to make it do the thing yet, but we'll get there

## 2019 / 4 / 25
I scratched my jsfiddle and query work, kaelen found a way to make movement and borders and idk if they’ll merge
Did some research on Tiled to create our maps and processing.js to make our movement smoother

## 2019 / 5 / 1
Spent the class trying to figure out how to access values through two arrays, little did we know we had constructed the arrays wrong
Now know how to access specific tiles and their corresponding values (material) which is hella helpful
Added our nice tiles to the main files

## 2019 / 5 / 3
Hark! we’ve accessed the VALUES
It was glorious, we finally got 100 iterations of 3 numbers for each 1 or 0 value on our list of lists
Next step is to get an image and coordinate values for each tile using these numbers


## 2019 / 5 / 6
We created the 100 divs and then deleted them all because we decided to create them in a new list of lists
We made a forEach within a forEach that creates a div for each item in our map array, we figured out how to get the different spaces on our map to know what they are (wall or floor)
We have yet to make any of our images appear within the map, but thats the next step

## 2019 / 5 / 8
IT DID THE THING
We finally have a map that places the tiles in the right place
The tiles are still just black and white, not images
We have to add collisions now, but we know how to get the values from the tile now and make things appear on the screen correctly
it works now tho so yea nice

## 2019 / 5 / 8
Our lord and saviour Kaelen implemented the images for tiles between last class and now
We're still working on collision, I think we're gonna do it by creating position globals for the tiles and adding an if to our directional movement functions
The if would ask if the positions would become the same upon movement and if the answer is yes, it wont let it move

## 2019 / 5 / 8
We gottem collision
We had a rough time finding the right function and getting the walls to be what we're colliding with
It works now (with riley's help) and we're excited

## 2019 / 5 / 8
Interaction possibility detection implemented, doesn't adjust html text like I want it to but thats fine
Kaelen and I will figure it out when he returns tomorrow hopefully