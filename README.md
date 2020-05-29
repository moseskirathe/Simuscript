# SimuScript
SimuScript is a Domain Specific Language that allows users to build a game map, by specifying the size of the map, setting different terrains, characters and then playing a game simulation to see the game in action.

Characters can be customized to have different qualities. For example, characters may like some characters and be scared of others. Characters can be given the ability to drop items as well as collect items that others have dropped.

SimuScript is built for prospective game developers, providing an intuitive way to test out game ideas through the construction of draft maps and worlds, and the ability to run quick simulations to see how the game would play out.

<img src="https://simuscript.000webhostapp.com/images/demo.png" width="300" height="300">

### Grammar
PROGRAM::= GRID TERRAIN* PATH* LANDMARKPOS* CREATURE? PLAY?  
GRID::= “Set grid size to be” (NUM, NUM)  

TERRAIN ::= “Set rectangle”  (NUM, NUM) (NUM, NUM) “to” TEXTURE  
TEXTURE ::= "forest" | "rock" | "ice" | "lava" | "swamp" | "desert" | "dirt" | "grass" | "path"  
PATH::= “draw from” (NUM, NUM) “using” TEXTURE (“with” (waviness NUM)? (thickness NUM)?)?  


CREATURE::= CREATUREDEF* CREATUREPOS*  
CREATUREDEF ::= “Define” CREATURENAME “as” CREATURETYPE (CREATUREATTRIBUTES)*  
CREATURETYPE = "cat" | "chicken" | "dog" | "deer" | "hamster" | "horse" | "monkey" | "parrot" | "squirrel" | "wolf"  

CREATUREATTRIBUTES ::= (“that” (“moves” | “drops” ITEM | “likes” CREATURENAME | “collects” ITEM | “dislikes” CREATURENAME)+  
CREATUREPOS ::= “place” CREATURENAME “at” ((NUM, NUM) | [(NUM, NUM)+] | “anywhere” NUM “times”)  
LANDMARK ::= "bamboo" | "cactus" | "coconuttree" | "pond" | "rose" | "sakura" | "shell" | "temple" | "volcano" | "stone" | "house"  

LANDMARKPOS ::= “plant” LANDMARK “at” ((NUM, NUM) | [(NUM, NUM)+] | “anywhere” NUM “times”)  
ENTITY ::= (CREATURENAME | CREATURETYPE | LANDMARK | TEXTURE)  
ITEM ::= "feather" | "gold" | "meat" | "egg" | "friedegg" | "potion" | "scroll" | "diamond"  

CREATURENAME ::= STRING  
PLAY::= “Play for” NUM “seconds”


### Example Program
```
set grid size to be(15,15)
set rectangle (0,0)(14,14) as grass
draw from (0,0)(14,14) using rock with waviness 2 thickness 1
Define chicko as chicken that moves that drops feather that collects friedegg
define bigkitty as wolf that moves that drops meat that collects diamond
place bigkitty anywhere 5 times
place chicko anywhere 8 times
play for 10 seconds
```

### DEMO
*Demo goes here*

