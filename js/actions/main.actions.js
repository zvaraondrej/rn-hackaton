import * as types from "./main.constants";

export const helloWorld = () => ({
  type: types.HELLO_WORLD,
  text: "hello world!!!"
});
