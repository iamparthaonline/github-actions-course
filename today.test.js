const getToday = require("./today");

test("It should return a string", () => {
  expect(typeof getToday()).toBe("string");
});

test("It should return today's day", () => {
  expect(getToday()).toBe(
    new Date().toLocaleString("en-us", { weekday: "long" })
  );
});
