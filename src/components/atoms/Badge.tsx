import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor } from '../../utils/functions';
import Paragraph from './Paragraph';

interface BadgeWrapperProps {
  type?: string;
  value?: string | number | boolean;
  statusSize?: string;
  variant?: string;
}

interface badgeStatusSizeIF {
  [key: string]: number;
}

const badgeStatusSize = ({
  statusSize,
}: BadgeWrapperProps): badgeStatusSizeIF => {
  switch (statusSize) {
    case 'xl':
      return {
        borderWidth: 3.5,
        width: 32,
        height: 32,
      };
    case 'l':
      return {
        borderWidth: 3,
        width: 24,
        height: 24,
      };
    case 'm':
      return {
        borderWidth: 2.5,
        width: 20,
        height: 20,
      };
    case 's':
      return {
        borderWidth: 2,
        width: 16,
        height: 16,
      };
    case 'xs':
      return {
        borderWidth: 1.5,
        width: 10,
        height: 10,
      };
    case '2xs':
      return {
        borderWidth: 1,
        width: 8,
        height: 8,
      };
    default:
      return {
        borderWidth: 4,
        width: 40,
        height: 40,
      };
  }
};

const BadgeWrapper = styled.span<BadgeWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 64px;
  text-align: center;

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

  ${({ type, value }) =>
    type === 'info' &&
    value !== null &&
    css`
      border-width: 1px;
      padding: 0 7px;
      min-width: 32px;
    `};

  ${({ type, value }) =>
    type === 'status' &&
    !value &&
    css`
      border-color: ${checkColor('white')};
      ${badgeStatusSize}
      aspect-ratio: 1/1;
    `};
`;

type BadgeProps = {
  className?: string;
  type: string;
  statusSize?: string;
  infoSize?: string;
  variant?: string;
  value?: string;
};

const Badge: React.FC<BadgeProps> = ({
  type,
  infoSize,
  statusSize,
  className,
  variant,
  value,
}) => {
  return (
    <BadgeWrapper
      className={className}
      type={type}
      statusSize={statusSize}
      variant={variant}
    >
      {type === 'info' && value && (
        <Paragraph
          text={value}
          color="inherit"
          weight="semibold"
          size={infoSize}
        />
      )}
    </BadgeWrapper>
  );
};

Badge.defaultProps = {
  type: 'info',
  infoSize: 's',
  variant: 'default',
  value: '15',
};

export default Badge;
