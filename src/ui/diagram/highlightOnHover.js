import React from 'react';

import {getDisplayName} from './Utils.js';

export default CircuitElement => {
  class Highlighter extends React.Component {

    render() {
      const COLORS = this.props.theme.COLORS,
            color = this.props.hovered ? COLORS.highlight : COLORS.base;

      return (
        <CircuitElement ref='elem'
          {...this.props}
          color={color}
        />
      );
    }
  }

  Highlighter.propTypes = {
    hovered: React.PropTypes.bool,
    theme: React.PropTypes.object.isRequired
  };

  Highlighter.defaultProps = {
    hovered: false
  };

  Highlighter.displayName = `Highlighted(${getDisplayName(CircuitElement)})`;

  return Highlighter;
};