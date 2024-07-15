const getToday = require("./src/today");

test("It should return a string", () => {
  expect(typeof getToday()).toBe("number");
});

test("It should return today's day", () => {
  expect(getToday()).toBe(
    new Date().toLocaleString("en-us", { weekday: "long" })
  );
});
