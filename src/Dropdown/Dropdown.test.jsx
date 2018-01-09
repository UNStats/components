import React from "react";
import { mount } from "enzyme";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  let props;

  beforeEach(() => {
    // Reset props before each test.
    props = {
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn()
    };
  });

  // Components styled with styled-components tend to be deeply nested several.
  // Shallow renderer is not suitable, use mount instead.

  test("render with valid value prop", () => {
    props.value = "blue";
    const select = mount(<Dropdown {...props} />).find("select");
    const { value, disabled } = select.props();
    expect({ value, disabled }).toEqual({ value: "blue", disabled: false });
    expect(select.children().length).toEqual(3);
    expect(
      select.contains([
        <option value="red">Red</option>,
        <option value="green">Green</option>,
        <option value="blue">Blue</option>
      ])
    ).toEqual(true);
  });

  test("render with invalid value prop", () => {
    props.value = "black";
    const select = mount(<Dropdown {...props} />).find("select");
    const { value, disabled } = select.props();
    expect({ value, disabled }).toEqual({ value: "black", disabled: false });
    expect(select.children().length).toEqual(4);
    expect(
      select.contains([
        <option disabled hidden value="black">
          Select...
        </option>,
        <option value="red">Red</option>,
        <option value="green">Green</option>,
        <option value="blue">Blue</option>
      ])
    ).toEqual(true);
  });

  test("render with no value prop", () => {
    const select = mount(<Dropdown {...props} />).find("select");
    const { value, disabled } = select.props();
    expect({ value, disabled }).toEqual({ value: "", disabled: false });
    expect(select.children().length).toEqual(4);
    expect(
      select.contains([
        <option disabled hidden value="">
          Select...
        </option>,
        <option value="red">Red</option>,
        <option value="green">Green</option>,
        <option value="blue">Blue</option>
      ])
    ).toEqual(true);
  });

  test("changing selected option triggers onChange callback", () => {
    const onChange = jest.fn();
    props.onChange = onChange;
    props.value = "blue";
    const select = mount(<Dropdown {...props} />).find("select");
    select.simulate("change", {
      target: { value: "green" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("green");
  });

  test("custom placeholder", () => {
    props.placeholder = "Make your selection...";
    const select = mount(<Dropdown {...props} />).find("select");
    expect(select.children().length).toEqual(4);
    const { disabled, hidden, value, children } = select.childAt(0).props();
    expect({ disabled, hidden, value, children }).toEqual({
      disabled: true,
      hidden: true,
      value: "",
      children: "Make your selection..."
    });
  });

  test("empty options", () => {
    props.options = [];
    const select = mount(<Dropdown {...props} />).find("select");
    const { value, disabled } = select.props();
    expect({ value, disabled }).toEqual({ value: "", disabled: true });
    expect(select.children().length).toEqual(1);
    expect(
      select.contains(
        <option disabled hidden value="">
          Select...
        </option>
      )
    ).toEqual(true);
  });
});
