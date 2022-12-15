import React from 'react';
import styled, { css } from 'styled-components';

interface BoxWrapperProps {
  display?: string;
}

const BoxWrapper = styled.button<BoxWrapperProps>``;

type BoxProps = {
  children?: JSX.Element | string | number;
  display?: string;
};

const Box: React.FC<BoxProps> = ({ children, display }) => {
  return <BoxWrapper display={display}>{children}</BoxWrapper>;
};

Box.defaultProps = {};

export default Box;
