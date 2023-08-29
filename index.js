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
        return possibleCommands.includes(command.toUpperCase());
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
    return { direction: this.direction[0], position: this.position };
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
        this.direction = "U" + this.direction;
        break;
      case "D":
        this.direction = "D" + this.direction;
        break;
      default:
        break;
    }
  }

  moveForward() {
    let currDirection = this.direction[0];
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
    let currDirection = this.direction[0];
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
    if (currDirection.length > 1) {
      currDirection = currDirection[1];
    }
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
    if (currDirection.length > 1) {
      currDirection = currDirection[1];
    }
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
