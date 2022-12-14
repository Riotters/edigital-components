import React from 'react';
import styled, { css } from 'styled-components';

interface BoxWrapperProps {
  display?: string;
}

const ButtonWrapper = styled.button<BoxWrapperProps>``;

type BoxProps = {
  children?: JSX.Element | string | number;
  display?: string;
};

const Box = ({ children, display }: BoxProps): JSX.Element => {
  return <ButtonWrapper display={display}>{children}</ButtonWrapper>;
};

Box.defaultProps = {};

export default Box;
