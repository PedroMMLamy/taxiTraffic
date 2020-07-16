# taxiTraffic
Description
Moving a car using canvas, TaxiTRAFFIC game uses basic animations in a 2D context. The canvas is a cartesian plane, where the player uses the left and right arrow to avoid taxis, collecting fuel points. The game ends when there is a collision.

MVP (DOM - CANVAS)
Avoiding collision with horizontally opposing taxis, appearing randomly, the car must be moved from left to right.
There are fuel points to collect that appear on a score sign. It’s game-over if the car collides with a taxi. 
The score is displayed in the game over screen.

Backlog
Scoreboard
car.png
road.png
taxi.png
taxisImage
arrows.png
logo.png 
fuel.png
smash.mp3


Data Structure

script.js
Window.onload = function () {}
function startGame() {}
  
game.js
init() {}
createObstacles() {}
setTimeout () {}
drawBackground(){}
drawMainCharacter() {}
drawGasIcons(){}
totalScore(){}
clear(){}
gas () { this.x; this.y; this.direction; this.size }

player.js
crashCollision(){}
move () {}

components.js
drawComponent(imgSource){}

obstacles.js
draw () {}
move () {}

States y States Transitions
Definition of the different states and their transition (transition functions)
introScreen
gameScreen

Task
script - function startGame

game - init
game - start
game - setInterval
game - createObstacles
game - setTimeout 
game - drawBackground
game - drawMainCharacter
game - totalScore
game - clear 
player - crashCollision 
player - move
component - drawComponent
obstacles - draw
obstacles - move

Links
Trello
https://trello.com/b/7JcnzMO7/taxitraffic

Git
URls for the project repo and deploy Link Repo Link Deploy

Slides
URls for the project presentation (slides) Link Slides.com
