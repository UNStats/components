import React from "react";
import { mount } from "enzyme";
import Tags from "./Tags";

describe("Tags", () => {
  test("non-empty tags", () => {
    const props = {
      tags: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" },
        { key: "yellow", value: "Yellow" },
        { key: "orange", value: "Orange" }
      ],
      onClick: jest.fn()
    };
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

  test("non-empty tags but disabled", () => {
    const props = {
      disabled: true,
      tags: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" },
        { key: "yellow", value: "Yellow" },
        { key: "orange", value: "Orange" }
      ],
      onClick: jest.fn()
    };
    const wrapper = mount(<Tags {...props} />).find("button");
    expect(wrapper.length).toEqual(5);
    expect(
      wrapper.containsAllMatchingElements([
        <button value="red" disabled>
          Red
        </button>,
        <button value="green" disabled>
          Green
        </button>,
        <button value="blue" disabled>
          Blue
        </button>,
        <button value="yellow" disabled>
          Yellow
        </button>,
        <button value="orange" disabled>
          Orange
        </button>
      ])
    ).toEqual(true);
  });

  test("click on tag fires onClick callback", () => {
    const props = {
      tags: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" },
        { key: "yellow", value: "Yellow" },
        { key: "orange", value: "Orange" }
      ],
      onClick: jest.fn()
    };
    mount(<Tags {...props} />)
      .find('button[value="blue"]')
      .simulate("click");
    expect(props.onClick).toHaveBeenCalledTimes(1);
    expect(props.onClick).toHaveBeenCalledWith("blue");
  });

  test("empty tags", () => {
    const props = {
      tags: [],
      onClick: jest.fn()
    };
    props.tags = [];
    const wrapper = mount(<Tags {...props} />).find("button");
    expect(wrapper.length).toEqual(0);
  });
});
