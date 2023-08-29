/*
X - E,W
Y - N,S
Z - U,D

MOVE - F(+1), B(-1)
TURN - 90 DEGREE (L, R) 
TURN - U, D

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

Commands: [“f”, “r”, “u”, “b”, “l”]

Starting Position: (0, 0, 0)

Initial Direction: N

“f” - (0, 1, 0) - N
“r” - (0, 1, 0) - E
“u” - (0, 1, 0) - U
“b” - (0, 1, -1) - U
“l” - (0, 1, -1) - N
Final Position: (0, 1, -1)

Final Direction: N
*/

class Chandrayaan{
    constructor(initialDirection, startPosition, command){
        this.initialDirection = initialDirection;
        this.startPosition = startPosition;
        this.command = command;
    }

    print(){
        console.log(this.initialDirection);
        console.log(this.startPosition);
        console.log(this.command);
    }
};

let c = new Chandrayaan('N', [0, 0, 0], ['a', 'b', 'c']);