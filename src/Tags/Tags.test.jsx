import React from "react";
import { mount } from "enzyme";
import Tags from "./Tags";

describe("Tags", () => {
  let props;

  beforeEach(() => {
    props = {
      tags: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" },
        { key: "yellow", value: "Yellow" },
        { key: "orange", value: "Orange" }
      ],
      onClick: jest.fn()
    };
  });

  test("non-empty tags", () => {
    const wrapper = mount(<Tags {...props} />).find("button");
    expect(wrapper.length).toEqual(5);
    expect(
      wrapper.containsAllMatchingElements([
        <button value="red">Red</button>,
        <button value="green">Green</button>,
        <button value="blue">Blue</button>,
        <button value="yellow">Yellow</button>,
        <button value="orange">Orange</button>
      ])
    ).toEqual(true);
  });

  test("empty tags", () => {
    props.tags = [];
    const wrapper = mount(<Tags {...props} />).find("button");
    expect(wrapper.length).toEqual(0);
  });

  test("clicking on tag fires onClick callback", () => {
    mount(<Tags {...props} />)
      .find('button[value="blue"]')
      .simulate("click");
    expect(props.onClick).toHaveBeenCalledTimes(1);
    expect(props.onClick).toHaveBeenCalledWith("blue");
  });
});
