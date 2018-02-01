import React from "react";
import { mount } from "enzyme";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("valid value", () => {
    const props = {
      value: "blue",
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn()
    };
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

  test("valid value but disabled", () => {
    const props = {
      value: "blue",
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn(),
      disabled: true
    };
    const select = mount(<Dropdown {...props} />).find("select");
    const { disabled } = select.props();
    expect(disabled).toEqual(true);
  });

  test("invalid value", () => {
    const props = {
      value: "black",
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn()
    };
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

  test("no value", () => {
    const props = {
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn()
    };
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
    const props = {
      value: "blue",
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange
    };
    const select = mount(<Dropdown {...props} />).find("select");
    select.simulate("change", {
      target: { value: "green" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("green");
  });

  test("custom placeholder", () => {
    const props = {
      options: [
        { key: "red", value: "Red" },
        { key: "green", value: "Green" },
        { key: "blue", value: "Blue" }
      ],
      onChange: jest.fn(),
      placeholder: "Make your selection..."
    };
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
    const props = {
      options: [],
      onChange: jest.fn()
    };
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
