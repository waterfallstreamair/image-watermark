import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ disabled, children, onClick }) => {
  const Styled = styled.div`
    color: ${disabled ? '#cccccc' : '#999999'};
    background-color: ${disabled ? '#999999' : '#cccccc'};
    margin-top: 1em;
    margin-left: 0em;
    height: 1em;
    min-height: 1.5em;
    border-radius: 0.25em;
    width: 8em;
    text-align: center;
    opacity: ${disabled ? 1 : 0.5};
    cursor: pointer;
  `;
  return <Styled onClick={!disabled ? onClick : () => {}}>{children}</Styled>;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
