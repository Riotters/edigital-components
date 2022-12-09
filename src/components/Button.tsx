import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../utils/functions';
import { color } from '../utils/colors';
import { typography } from '../utils/typography';

interface ButtonWrapperProps {
  readonly color?: string;
  readonly size?: string;
  readonly variant?: string;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  /* color: ${(props) => (props.color ? props.color : color.black)}; */
  color: ${(props) => props.theme.textColor};

  box-shadow: ${checkShadow('xl')};

  ${({ size }) =>
    size == 'normal' &&
    css`
      font-size: ${typography.textMdMedium.size};
      line-height: ${typography.textMdMedium.height};
      letter-spacing: ${typography.textMdMedium.spacing};
      font-weight: ${typography.textMdMedium.weight};
    `};

  ${({ size }) =>
    size == 'big' &&
    css`
      font-size: ${typography.text2xlMedium.size};
      line-height: ${typography.text2xlMedium.height};
      letter-spacing: ${typography.text2xlMedium.spacing};
      font-weight: ${typography.text2xlMedium.weight};
    `};

  ${({ variant }) =>
    variant == 'primary' &&
    css`
      background-color: ${checkColor('orange500')};
      cursor: pointer;
      pointer-events: all;
    `};

  ${({ variant }) =>
    variant == 'disabled' &&
    css`
      background-color: ${checkColor('gray50')};
      pointer-events: none;
      cursor: not-allowed;
    `};
`;

type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper size="big" variant="primary">
      {children}
    </ButtonWrapper>
  );
};

export default Button;
