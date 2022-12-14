import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import { typography } from '../../utils/typography';
import Icon from './Icon';

interface ButtonWrapperProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
  border?: string;
  text?: string | boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  border-radius: ${(props) =>
    props.border == 'normal'
      ? '64px'
      : props.border == 'small'
      ? '8px'
      : '64px'};
  border-width: 1px;
  border-style: solid;
  transition: 0.3s ease-in-out 0s;
  cursor: pointer;
  font-weight: ${typography.weight.bold};

  :focus-visible {
    outline: none;
  }

  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};

  svg path {
    stroke: currentColor;
  }

  ${({ size, text }) =>
    size === 'xs' &&
    css`
      padding: ${text ? '7px 13px' : '7px'};
      font-size: ${typography.textSm.size};
      line-height: ${typography.textSm.height};
      letter-spacing: ${typography.textSm.spacing};
    `};

  ${({ size, text }) =>
    size === 's' &&
    css`
      padding: ${text ? '9px 15px' : '9px'};
      font-size: ${typography.textSm.size};
      line-height: ${typography.textSm.height};
      letter-spacing: ${typography.textSm.spacing};
    `};

  ${({ size, text }) =>
    size === 'm' &&
    css`
      padding: ${text ? '9px 17px' : '11px'};
      font-size: ${typography.textSm.size};
      line-height: ${typography.textSm.height};
      letter-spacing: ${typography.textSm.spacing};
    `};

  ${({ size, text }) =>
    size === 'l' &&
    css`
      padding: ${text ? '11px 19px' : '13px'};
      font-size: ${typography.textLg.size};
      line-height: ${typography.textLg.height};
      letter-spacing: ${typography.textLg.spacing};
    `};

  ${({ size, text }) =>
    size === 'xl' &&
    css`
      padding: ${text ? '15px 27px' : '15px'};
      font-size: ${typography.textLg.size};
      line-height: ${typography.textLg.height};
      letter-spacing: ${typography.textLg.spacing};
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
      background-color: ${checkColor('white')};
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

  ${({ variant, disabled }) =>
    variant === 'destructive' &&
    css`
      border-color: ${disabled ? checkColor('red100') : checkColor('red500')};
      background-color: ${disabled
        ? checkColor('red100')
        : checkColor('red500')};
      color: ${checkColor('white')};

      :hover {
        border-color: ${checkColor('red600')};
        background-color: ${checkColor('red600')};
      }

      :is(:active, :focus) {
        box-shadow: 0px 0px 0px 3px #ffa499;
      }
    `};

  ${({ variant, disabled }) =>
    variant === 'success' &&
    css`
      border-color: ${disabled
        ? checkColor('green100')
        : checkColor('green500')};
      background-color: ${disabled
        ? checkColor('green100')
        : checkColor('green500')};
      color: ${checkColor('white')};

      :hover {
        border-color: ${checkColor('green600')};
        background-color: ${checkColor('green600')};
      }

      :is(:active, :focus) {
        box-shadow: 0px 0px 0px 3px #b7e6c1;
      }
    `};
`;

type ButtonProps = {
  variant?: string;
  size?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string | boolean;
  icon?: string;
  iconPosition?: string | boolean;
  border?: string;
};

const handleClick = (): unknown => {
  return console.log('This is working!');
};

const Button = ({
  variant,
  size,
  disabled,
  text,
  icon,
  iconPosition,
  border,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper
      className="button"
      variant={variant}
      size={size}
      disabled={disabled}
      border={border}
      onClick={handleClick}
      text={text}
    >
      {!icon &&
      (variant == 'destructive' || variant == 'success') &&
      (!iconPosition || iconPosition == 'left') ? (
        <Icon
          name={variant == 'destructive' ? 'trash' : 'check-circle-broken'}
        />
      ) : icon &&
        (variant == 'destructive' || variant == 'success') &&
        (!iconPosition || iconPosition == 'left') ? (
        <Icon name={icon} />
      ) : icon && iconPosition == 'left' ? (
        <Icon name={icon} />
      ) : (
        ''
      )}

      {text && <span>{text}</span>}

      {!icon &&
      (variant == 'destructive' || variant == 'success') &&
      iconPosition == 'right' ? (
        <Icon
          name={variant == 'destructive' ? 'trash' : 'check-circle-broken'}
        />
      ) : icon &&
        (variant == 'destructive' || variant == 'success') &&
        iconPosition == 'right' ? (
        <Icon name={icon} />
      ) : icon &&
        ((!iconPosition && variant != 'destructive' && variant != 'success') ||
          iconPosition == 'right') ? (
        <Icon name={icon} />
      ) : (icon || !icon) &&
        !text &&
        variant != 'destructive' &&
        variant != 'success' ? (
        <Icon name={icon ? icon : 'circle'} />
      ) : (
        ''
      )}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  variant: 'primary',
  border: 'normal',
  size: 'm',
  icon: 'circle',
};

export default Button;
