import { check } from 'prettier';
import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor } from '../../utils/functions';
import Paragraph from './Paragraph';

interface BadgeWrapperProps {
  text?: string | number | boolean;
  badgeSize?: number;
  variant?: string;
}

const BadgeWrapper = styled.span<BadgeWrapperProps>`
  display: block;
  border-width: 1px;
  border-style: solid;
  border-radius: 64px;
  text-align: center;

  ${({ text, badgeSize }) =>
    text !== '' &&
    badgeSize === 0 &&
    css`
      padding: 0 7px;
      min-width: 32px;
    `};

  ${({ text, badgeSize }) =>
    !text &&
    badgeSize != 0 &&
    css`
      border-width: 4px;
      border-color: ${checkColor('white')} !important;
      width: ${badgeSize == 1
        ? '40px'
        : badgeSize == 2
        ? '32px'
        : badgeSize == 3
        ? '24px'
        : badgeSize == 4
        ? '20px'
        : badgeSize == 5
        ? '16px'
        : badgeSize == 6
        ? '10px'
        : badgeSize == 7
        ? '8px'
        : '4px'};
      height: ${badgeSize == 1
        ? '40px'
        : badgeSize == 2
        ? '32px'
        : badgeSize == 3
        ? '24px'
        : badgeSize == 4
        ? '20px'
        : badgeSize == 5
        ? '16px'
        : badgeSize == 6
        ? '10px'
        : badgeSize == 7
        ? '8px'
        : '4px'};
      aspect-ratio: 1/1;
    `};

  ${({ variant }) =>
    variant === 'default' &&
    css`
      background-color: ${checkColor('gray25')};
      color: ${checkColor('gray900')};
      border-color: ${checkColor('gray25')};
    `};
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${checkColor('orange500')};
      color: ${checkColor('white')};
      border-color: ${checkColor('orange500')};
    `};
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${checkColor('white')};
      color: ${checkColor('orange500')};
      border-color: ${checkColor('gray50')};
    `};
  ${({ variant }) =>
    variant === 'important' &&
    css`
      background-color: ${checkColor('red500')};
      color: ${checkColor('white')};
      border-color: ${checkColor('red500')};
    `};
  ${({ variant }) =>
    variant === 'added' &&
    css`
      background-color: ${checkColor('green25')};
      color: ${checkColor('green500')};
      border-color: ${checkColor('green25')};
    `};
  ${({ variant }) =>
    variant === 'removed' &&
    css`
      background-color: ${checkColor('red25')};
      color: ${checkColor('red500')};
      border-color: ${checkColor('red25')};
    `};
`;

type BadgeProps = {
  badgeSize?: number;
  textSize?: number;
  className?: string;
  variant?: string;
  text?: string | number;
  children?: string | number;
};

const Badge: React.FC<BadgeProps> = ({
  textSize,
  badgeSize,
  className,
  variant,
  text,
}) => {
  return (
    <BadgeWrapper badgeSize={badgeSize} variant={variant} className={className}>
      {text && (
        <Paragraph
          text={text}
          color="inherit"
          weight="semibold"
          size={textSize == 1 ? 6 : 5}
        />
      )}
    </BadgeWrapper>
  );
};

Badge.defaultProps = {
  textSize: 1,
  badgeSize: 0,
  variant: 'default',
  text: '15',
};

export default Badge;
