/*
this.X - E,W
this.Y - N,S
this.Z - U,D

MOVE - F(+1), B(-1)
TURN - 90 DEGREE (L, R) 
TURN - U, D

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

Commands: [“f”, “r”, “u”, “b”, “l”]

Starting Position: (0, 0, 0)

Initial Direction: N

['F', 'B', 'R', 'L', 'U', 'D']
“f” - (0, 1, 0) - N
“r” - (0, 1, 0) - E
“u” - (0, 1, 0) - U
“b” - (0, 1, -1) - U
“l” - (0, 1, -1) - N
Final Position: (0, 1, -1)

Final Direction: N
*/

class Chandrayaan {
  constructor(initialDirection, startPosition, commands) {
    if (this.inputValidator(initialDirection, startPosition, commands)) {
      this.direction = initialDirection.toUpperCase();
      this.position = startPosition;
      this.commands = commands.map((command) => command.toUpperCase());
    }
  }

  inputValidator(initialDirection, startPosition, commands) {
    let possibleDirection = ["N", "E", "S", "W", "U", "D"];
    let possibleCommands = ["F", "B", "R", "L", "U", "D"];

    initialDirection = initialDirection.toUpperCase();
    if (!possibleDirection.includes(initialDirection)) {
      throw Error("Invalid initial Direction");
    }

    if (
      !Array.isArray(startPosition) ||
      !(startPosition.length == 3) ||
      !startPosition.every(Number.isInteger)
    ) {
      throw new Error("Invalid start position");
    }

    if (
      !Array.isArray(commands) ||
      !commands.every((command) => {
        return possibleCommands.includes(command);
      })
    ) {
      throw new Error("Invalid commands");
    }

    return true;
  }

  executeCommands() {
    for (let i = 0; i < this.commands.length; i++) {
      let command = this.commands[i].toUpperCase();
      this.execute(command);
    }
    return { direction: this.direction, position: this.position };
  }

  execute(command) {
    switch (command) {
      case "F":
        this.moveForward();
        break;
      case "B":
        this.moveBackward();
        break;
      case "R":
        this.turnRight();
        break;
      case "L":
        this.turnLeft();
        break;
      case "U":
        this.direction = 'U'
        break;
      case "D":
        console.log(command);
        break;
      default:
        break;
    }
  }

  moveForward() {
    let currDirection = this.direction;
    switch (currDirection) {
      case "N":
        this.position[1]++;
        break;
      case "S":
        this.position[1]--;
        break;
      case "E":
        this.position[0]++;
        break;
      case "W":
        this.position[0]--;
        break;
      case "U":
        this.position[2]++;
        break;
      case "D":
        this.position[2]--;
        break;
      default:
        break;
    }
  }

  moveBackward() {
    let currDirection = this.direction;
    switch (currDirection) {
      case "N":
        this.position[1]--;
        break;
      case "S":
        this.position[1]++;
        break;
      case "E":
        this.position[0]--;
        break;
      case "W":
        this.position[0]++;
        break;
      case "U":
        this.position[2]--;
        break;
      case "D":
        this.position[2]++;
        break;
      default:
        break;
    }
  }

  turnRight() {
    let currDirection = this.direction;
    switch (currDirection) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
      case "U":
        this.direction = "E";
        break;
      case "D":
        this.direction = "W";
        break;
      default:
        break;
    }
  }

  turnLeft() {
    let currDirection = this.direction;
    switch (currDirection) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
      case "U":
        this.direction = "W";
        break;
      case "D":
        this.direction = "E";
        break;
      default:
        break;
    }
  }
}

module.exports = Chandrayaan;
