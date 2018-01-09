import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonCircle, Flex, Box } from "rebass";

/**
 * This component renders an array of tags. It does not maintain state. Use
 * callback to hook up component to a parent component that manages state.
 */
class Tags extends Component {
  static propTypes = {
    /** Array of tags to be displayed. */
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string
      })
    ).isRequired,
    /** Callback with tag's `key` as payload is fired when a tag is clicked. */
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(event.target.value);
  }

  render() {
    return (
      <Flex wrap>
        {this.props.tags.map(tag => (
          <Box p={1} key={tag.key}>
            <ButtonCircle f={0} value={tag.key} onClick={this.handleClick}>
              {tag.value}
            </ButtonCircle>
          </Box>
        ))}
      </Flex>
    );
  }
}

export default Tags;
