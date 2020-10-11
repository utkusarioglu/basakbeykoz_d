import React from "react";
import { shallow } from "enzyme";
import AppView from "./App.view";
// import { RootState } from "../../store/rootReducer";

describe("Components", () => {
  describe("App", () => {
    it("runs without crashing", () => {
      shallow(<AppView refs={{ body: undefined }} />);
    });

    // it("can register props", () => {
    //   const mockFn = jest.fn<string[], [RootState["app"]["refs"]["body"]]>();
    //   const wrapper = shallow(<AppView {...{ refs: { body: mockFn } }} />);
    //   expect(wrapper.prop("refs")).toEqual("undefined");
    // });
  });
});
