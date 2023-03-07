import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, LoadMoreBotton } from './Button.styled';

const Button = ({ children, onClick }) => (
  <ButtonWrapper>
    <LoadMoreBotton type="button" onClick={onClick}>
      {children}
    </LoadMoreBotton>
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
