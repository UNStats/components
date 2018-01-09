import React from "react";
import PropTypes from "prop-types";
import { Box, Provider } from "rebass";

const Wrapper = ({ children }) => (
  <Provider>
    <Box p={1}>{children}</Box>
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
