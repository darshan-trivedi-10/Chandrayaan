const Chandrayaan = require("../index");

describe("Chandrayaan Testing", () => {
  test("No Move or No Commands", () => {
    // initialDirection, startPosition, commands
    let initialDirection = "N";
    let startPosition = [0, 0, 0];
    let commands = [];
    const chandrayan = new Chandrayaan(
      initialDirection,
      startPosition,
      commands
    );
    var result = chandrayan.executeCommands();
    expect(result).toEqual({
      direction: initialDirection,
      position: startPosition,
    });
  });

  test("Move Forward Testing", () => {
    let initialDirection = "N"; 
    let startPosition = [0, 0, 0];
    let commands = [];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    chandrayan.moveForward();

    var result = chandrayan.executeCommands();
    let expectedPosition = [0, 1, 0];

    expect(result).toEqual({
      direction: initialDirection,
      position: expectedPosition,
    });
  });

  test("Move Backward Testing", () => {
    let initialDirection = "W"; 
    let startPosition = [1, 0, 0];
    let commands = [];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    chandrayan.moveBackward();

    var result = chandrayan.executeCommands();
    let expectedPosition = [2, 0, 0];

    expect(result).toEqual({
      direction: initialDirection,
      position: expectedPosition,
    });
  });

  test("Turn Right Testing", () => {
    let initialDirection = "W"; 
    let startPosition = [1, 0, 0];
    let commands = [];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    chandrayan.turnRight();

    var result = chandrayan.executeCommands();
    let expectedDirection = 'N';

    expect(result).toEqual({
      direction: expectedDirection,
      position: startPosition,
    });
  });

  test("Turn Left Testing", () => {
    let initialDirection = "W"; 
    let startPosition = [1, 0, 0];
    let commands = [];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    chandrayan.turnLeft();

    var result = chandrayan.executeCommands();
    let expectedDirection = 'S';

    expect(result).toEqual({
      direction: expectedDirection,
      position: startPosition,
    });
  });

  test("Turn Up Testing", () => {
    let initialDirection = "W"; 
    let startPosition = [1, 0, 0];
    let commands = ['U'];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    var result = chandrayan.executeCommands();
    let expectedDirection = 'U';

    expect(result).toEqual({
      direction: expectedDirection,
      position: startPosition,
    });
  });

  test("Turn Down Testing", () => {
    let initialDirection = "W"; 
    let startPosition = [1, 0, 0];
    let commands = ['U', 'R', 'L', 'D'];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    var result = chandrayan.executeCommands();
    let expectedDirection = 'D';

    expect(result).toEqual({
      direction: expectedDirection,
      position: startPosition,
    });
  });

  test("Complete Test Suite for Chandrayaan Operations", () => {
    let initialDirection = "N"; 
    let startPosition = [0, 0, 0];
    let commands = ['f', 'r', 'u', 'b', 'l'];
    const chandrayan = new Chandrayaan(initialDirection,startPosition,commands);

    var result = chandrayan.executeCommands();
    console.log(result);
    let expectedDirection = 'N';
    let expectedPosition = [0, 1, -1];

    expect(result).toEqual({
      direction: expectedDirection,
      position: expectedPosition,
    });
  });
  
});

describe("Input Validation Testing", () => {
  test("Invalid Direction Handling", () => {
    let initialDirection = "A";
    let startPosition = ["A", "D", "F"];
    let commands = [10, 11, 12];
    const functionWithError = () => {
      new Chandrayaan(initialDirection, startPosition, commands);
    };
    expect(functionWithError).toThrow("Invalid initial Direction");
  });

  test("Invalid Position Handling", () => {
    let initialDirection = "N";
    let startPosition = ["A", "D", "F", "G"];
    let commands = [10, 11, 12];
    const functionWithError = () => {
      new Chandrayaan(initialDirection, startPosition, commands);
    };
    expect(functionWithError).toThrow("Invalid start position");
  });

  test("Invalid commands Handling", () => {
    let initialDirection = "W";
    let startPosition = [0, 0, 0];
    let commands = ["A", "B", "C", "D"];
    const functionWithError = () => {
      new Chandrayaan(initialDirection, startPosition, commands);
    };
    expect(functionWithError).toThrow("Invalid commands");
  });
});
