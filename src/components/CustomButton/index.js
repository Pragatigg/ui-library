import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

/**
 * The only true button.
 */
const CustomButton = ({ text, onClick }) => (
  <Button type="primary" onClick={onClick}>
    {text}
  </Button>
);

CustomButton.propTypes = {
    /** Button text */
    text: PropTypes.string.isRequired,
    /** Gets called when the user clicks on the button */
    onClick: PropTypes.func.isRequired
};

export default CustomButton;
