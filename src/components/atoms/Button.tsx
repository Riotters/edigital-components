import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import { color } from '../../utils/colors';
import { typography } from '../../utils/typography';
import Icon from './Icon';

export interface ButtonWrapperProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  border-radius: 64px;
  border-width: 1px;
  border-style: solid;
  transition: 0.3s ease-in-out 0s;
  cursor: pointer;

  :focus-visible {
    outline: none;
  }

  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};

  svg {
    transition: 0.3s ease-in-out 0s;
  }

  svg path {
    stroke: currentColor;
  }

  :hover {
    svg {
      transform: rotate(160deg);
    }
  }

  /* ${({ size }) =>
    size === ('xs' || 's' || 'm') &&
    css`
      font-size: ${typography.textSmBold.size};
      line-height: ${typography.textSmBold.height};
      letter-spacing: ${typography.textSmBold.spacing};
      font-weight: ${typography.textSmBold.weight};
    `};

  ${({ size }) =>
    size === ('l' || 'xl') &&
    css`
      font-size: ${typography.textLgBold.size};
      line-height: ${typography.textLgBold.height};
      letter-spacing: ${typography.textLgBold.spacing};
      font-weight: ${typography.textLgBold.weight};
    `}; */

  ${({ size }) =>
    size === 'xs' &&
    css`
      padding: 7px 13px;
      font-size: ${typography.textSmBold.size};
      line-height: ${typography.textSmBold.height};
      letter-spacing: ${typography.textSmBold.spacing};
      font-weight: ${typography.textSmBold.weight};
    `};

  ${({ size }) =>
    size === 's' &&
    css`
      padding: 9px 15px;
      font-size: ${typography.textSmBold.size};
      line-height: ${typography.textSmBold.height};
      letter-spacing: ${typography.textSmBold.spacing};
      font-weight: ${typography.textSmBold.weight};
    `};

  ${({ size }) =>
    size === 'm' &&
    css`
      padding: 9px 17px;
      font-size: ${typography.textSmBold.size};
      line-height: ${typography.textSmBold.height};
      letter-spacing: ${typography.textSmBold.spacing};
      font-weight: ${typography.textSmBold.weight};
    `};

  ${({ size }) =>
    size === 'l' &&
    css`
      padding: 11px 19px;
      font-size: ${typography.textLgBold.size};
      line-height: ${typography.textLgBold.height};
      letter-spacing: ${typography.textLgBold.spacing};
      font-weight: ${typography.textLgBold.weight};
    `};

  ${({ size }) =>
    size === 'xl' &&
    css`
      padding: 15px 27px;
      font-size: ${typography.textLgBold.size};
      line-height: ${typography.textLgBold.height};
      letter-spacing: ${typography.textLgBold.spacing};
      font-weight: ${typography.textLgBold.weight};
    `};

  ${({ variant, disabled }) =>
    variant === 'primary' &&
    css`
      border-color: ${disabled
        ? checkColor('orange100')
        : checkColor('orange500')};
      background-color: ${disabled
        ? checkColor('orange100')
        : checkColor('orange500')};
      color: ${checkColor('white')};

      :hover {
        border-color: ${checkColor('orange600')};
        background-color: ${checkColor('orange600')};
      }

      :is(:active, :focus) {
        box-shadow: 0px 0px 0px 4px #ffdbd6;
      }
    `};

  ${({ variant, disabled }) =>
    variant === 'secondary' &&
    css`
      border-color: ${disabled ? checkColor('gray50') : checkColor('gray100')};
      background-color: checkColor('white');
      color: ${disabled ? checkColor('gray500') : checkColor('gray900')};

      :hover {
        box-shadow: inset 0px 0 0 3px ${checkColor('gray100')};
      }

      :is(:active, :focus) {
        box-shadow: 0px 0px 0px 3px ${checkColor('gray50')},
          inset 0px 0 0 1px ${checkColor('gray100')};

        :hover {
          box-shadow: 0px 0px 0px 3px ${checkColor('gray50')},
            inset 0px 0 0 1px ${checkColor('gray100')};
        }
      }
    `};

  ${({ variant, disabled }) =>
    variant === 'secondary-color' &&
    css`
      border-color: ${disabled
        ? checkColor('orange25')
        : checkColor('orange25')};
      background-color: ${disabled
        ? checkColor('orange25')
        : checkColor('orange25')};
      color: ${disabled ? checkColor('orange200') : checkColor('orange500')};

      :hover {
        color: ${checkColor('orange600')};
        border-color: ${checkColor('orange50')};
        background-color: ${checkColor('orange50')};
      }

      :is(:active, :focus) {
        border-color: ${checkColor('orange50')};
        box-shadow: 0px 0px 0px 4px ${checkColor('orange25')};
      }
    `};

  ${({ variant, disabled }) =>
    variant === 'tertiary' &&
    css`
      border-color: ${checkColor('white')};
      background-color: ${checkColor('white')};
      color: ${disabled ? checkColor('gray300') : checkColor('gray800')};

      :hover {
        border-color: ${checkColor('gray25')};
        background-color: ${checkColor('gray25')};
      }

      :is(:active, :focus) {
        border-color: ${checkColor('gray50')};
        box-shadow: 0px 0px 0px 3px ${checkColor('gray50')};
      }
    `};

  ${({ variant, disabled }) =>
    variant === 'link' &&
    css`
      transition: 0.3s ease-in-out 0s;
      border-color: ${checkColor('white')};
      background-color: ${checkColor('white')};
      border-radius: 0;
      color: ${disabled ? checkColor('gray300') : checkColor('orange500')};

      :hover {
        border-color: ${checkColor('white')};
        color: ${checkColor('orange600')};
      }

      :is(:active, :focus) {
        border-bottom: 1px solid ${checkColor('orange500')};
      }
    `};
`;

type ButtonProps = {
  children?: any;
  variant?: string;
  size?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  icon?: any;
};

const handleClick = (): unknown => {
  return console.log('This is working!');
};

const Button = ({
  children,
  variant,
  size,
  disabled,
  text,
  icon,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper
      className="button"
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    >
      {text && <span>{text}</span>}
      {children}
      <Icon src={icon} />
    </ButtonWrapper>
  );
};

export default Button;
