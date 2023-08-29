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
