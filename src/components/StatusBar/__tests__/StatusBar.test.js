import React from "react";
import StatusBar from "../StatusBar";
import renderer from "react-test-renderer";

test("renders correctly", () => {
    const tree = renderer.create(<StatusBar/>).toJSON();
    expect(tree).toMatchSnapshot();
});