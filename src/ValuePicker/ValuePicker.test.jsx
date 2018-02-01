import React from "react";
import { mount } from "enzyme";
import ValuePicker from "./ValuePicker";

describe("ValuePicker", () => {
  test("non-empty selectable and non-empty selected", () => {
    const props = {
      title: "Age",
      selectable: [
        { key: "red", value: "Red" },
        { key: "yellow", value: "Yellow" }
      ],
      selected: [
        { key: "blue", value: "Blue" },
        { key: "green", value: "Green" },
        { key: "black", value: "Black" }
      ],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    const wrapper = mount(<ValuePicker {...props} />);
    const select = wrapper.find("select");
    expect(select.length).toEqual(1);
    expect(select.children().length).toEqual(3);
    expect(
      select.contains([
        <option value="" disabled hidden>
          Add value...
        </option>,
        <option value="red">Red</option>,
        <option value="yellow">Yellow</option>
      ])
    ).toEqual(true);
    const buttons = wrapper.find("button");
    expect(buttons.length).toEqual(3);
    expect(
      buttons.containsAllMatchingElements([
        <button value="blue">Blue</button>,
        <button value="green">Green</button>,
        <button value="black">Black</button>
      ])
    ).toEqual(true);
  });

  test("non-empty selectable and selected but disabled", () => {
    const props = {
      disabled: true,
      title: "Age",
      selectable: [
        { key: "red", value: "Red" },
        { key: "yellow", value: "Yellow" }
      ],
      selected: [
        { key: "blue", value: "Blue" },
        { key: "green", value: "Green" },
        { key: "black", value: "Black" }
      ],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    const wrapper = mount(<ValuePicker {...props} />);
    // Verify that disabled flags have been set.
    const dropdown = wrapper.find("Dropdown");
    expect(dropdown.props().disabled).toEqual(true);
    const tags = wrapper.find("Tags");
    expect(tags.props().disabled).toEqual(true);
  });

  test("non-empty selectable and empty selected", () => {
    const props = {
      title: "Age",
      selectable: [
        { key: "red", value: "Red" },
        { key: "yellow", value: "Yellow" }
      ],
      selected: [],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    const wrapper = mount(<ValuePicker {...props} />);
    const select = wrapper.find("select");
    expect(select.children().length).toEqual(3);
    expect(
      select.contains([
        <option value="" disabled hidden>
          Add value...
        </option>,
        <option value="red">Red</option>,
        <option value="yellow">Yellow</option>
      ])
    ).toEqual(true);
    const buttons = wrapper.find("button");
    expect(buttons.length).toEqual(0);
  });

  test("empty selectable and non-empty selected", () => {
    const props = {
      title: "Age",
      selectable: [],
      selected: [
        { key: "blue", value: "Blue" },
        { key: "green", value: "Green" },
        { key: "black", value: "Black" }
      ],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    const wrapper = mount(<ValuePicker {...props} />);
    const select = wrapper.find("select");
    expect(select.children().length).toEqual(1);
    expect(
      select.contains(
        <option value="" disabled hidden>
          Add value...
        </option>
      )
    ).toEqual(true);
    const { value, disabled } = select.props();
    expect({ value, disabled }).toEqual({ value: "", disabled: true });
    const buttons = wrapper.find("button");
    expect(buttons.length).toEqual(3);
    expect(
      buttons.containsAllMatchingElements([
        <button value="blue">Blue</button>,
        <button value="green">Green</button>,
        <button value="black">Black</button>
      ])
    ).toEqual(true);
  });

  test("selecting value from selectable fires onAddValue", () => {
    const props = {
      title: "Age",
      selectable: [
        { key: "red", value: "Red" },
        { key: "yellow", value: "Yellow" }
      ],
      selected: [
        { key: "blue", value: "Blue" },
        { key: "green", value: "Green" },
        { key: "black", value: "Black" }
      ],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    mount(<ValuePicker {...props} />)
      .find("select")
      .simulate("change", { target: { value: "red" } });
    expect(props.onAddValue).toHaveBeenCalledTimes(1);
    expect(props.onAddValue).toHaveBeenCalledWith("red");
  });

  test("clicking button from selected fires onRemoveValue", () => {
    const props = {
      title: "Age",
      selectable: [
        { key: "red", value: "Red" },
        { key: "yellow", value: "Yellow" }
      ],
      selected: [
        { key: "blue", value: "Blue" },
        { key: "green", value: "Green" },
        { key: "black", value: "Black" }
      ],
      onAddValue: jest.fn(),
      onRemoveValue: jest.fn()
    };
    mount(<ValuePicker {...props} />)
      .find('button[value="blue"]')
      .simulate("click");
    expect(props.onRemoveValue).toHaveBeenCalledTimes(1);
    expect(props.onRemoveValue).toHaveBeenCalledWith("blue");
  });
});
