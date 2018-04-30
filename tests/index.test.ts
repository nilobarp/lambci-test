import { handler } from "../index";
describe("Simple test", () => {
  it("works", () => {
    const callbackFn = jest.fn();
    handler({}, {}, callbackFn);
    expect(callbackFn).toHaveBeenCalledWith(undefined, {
      body: "Hello world",
      statusCode: 500
    });
  });
});
