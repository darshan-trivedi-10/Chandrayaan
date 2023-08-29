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