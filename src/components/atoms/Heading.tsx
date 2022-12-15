import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import { typography } from '../../utils/typography';

interface HeadingWrapperProps {
  size?: number;
  weight?: string;
  color?: string;
}

const HeadingWrapper = styled.h1<HeadingWrapperProps>`
  font-weight: ${(props) =>
    props.weight ? typography.weight[props.weight] : 700};
  color: ${(props) =>
    props.color ? checkColor(props.color) : checkColor('black')};

  ${({ size }) =>
    size === 1 &&
    css`
      font-size: ${typography.display2xl.size};
      line-height: ${typography.display2xl.height};
      letter-spacing: ${typography.display2xl.spacing};
    `};

  ${({ size }) =>
    size === 2 &&
    css`
      font-size: ${typography.displayXl.size};
      line-height: ${typography.displayXl.height};
      letter-spacing: ${typography.displayXl.spacing};
    `};

  ${({ size }) =>
    size === 3 &&
    css`
      font-size: ${typography.displayLg.size};
      line-height: ${typography.displayLg.height};
      letter-spacing: ${typography.displayLg.spacing};
    `};

  ${({ size }) =>
    size === 4 &&
    css`
      font-size: ${typography.displayMd.size};
      line-height: ${typography.displayMd.height};
      letter-spacing: ${typography.displayMd.spacing};
    `};

  ${({ size }) =>
    size === 5 &&
    css`
      font-size: ${typography.displaySm.size};
      line-height: ${typography.displaySm.height};
      letter-spacing: ${typography.displaySm.spacing};
    `};

  ${({ size }) =>
    size === 6 &&
    css`
      font-size: ${typography.displayXs.size};
      line-height: ${typography.displayXs.height};
      letter-spacing: ${typography.displayXs.spacing};
    `};
`;

type HeadingProps = {
  children?: string;
  text?: string;
  size?: number;
  weight?: string;
  color?: string;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  text,
  size,
  weight,
  color,
}) => {
  return (
    <HeadingWrapper
      className="heading"
      as={
        size == 1
          ? 'h1'
          : size == 2
          ? 'h2'
          : size == 3
          ? 'h3'
          : size == 4
          ? 'h4'
          : size == 5
          ? 'h5'
          : size == 6
          ? 'h6'
          : 'h1'
      }
      size={size}
      weight={weight}
      color={color}
    >
      {children && !text ? children : text}
    </HeadingWrapper>
  );
};
// 
Heading.defaultProps = {
  children: 'Heading',
  size: 1,
  weight: 'bold',
  color: 'black',
};

export default Heading;
