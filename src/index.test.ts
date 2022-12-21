import { main } from "./index";

test("validate main function", () => {
  expect(main([0])).toMatchObject([0]);
});
