import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "rebass";

/**
 * This component encapsulates
 * [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).
 * It does does not maintain state, i.e. it does not store selected option.
 * State needs to be managed by parent component, which can be notified of
 * changes via `onChange` callabck.
 */
class Dropdown extends Component {
  static propTypes = {
    /** Selected option needs to correspond to `key` of option. */
    value: PropTypes.string,
    /** Enable or disable component. */
    disabled: PropTypes.bool,
    /** Selectable options. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string
      })
    ).isRequired,
    /** Display placeholder if no or invalid option is selected. */
    placeholder: PropTypes.string,
    /** Callback when selection changes. */
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: "",
    disabled: false,
    placeholder: "Select..."
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <Select
        value={this.props.value}
        disabled={this.props.disabled || this.props.options.length === 0}
        onChange={this.handleChange}
      >
        {this.props.options
          .map(option => option.key)
          .indexOf(this.props.value) < 0 && (
          <option
            value={this.props.value}
            key={this.props.value}
            disabled
            hidden
          >
            {this.props.placeholder}
          </option>
        )}
        {this.props.options.map(option => (
          <option value={option.key} key={option.key}>
            {option.value}
          </option>
        ))}
      </Select>
    );
  }
}

export default Dropdown;
