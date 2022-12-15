import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import { typography } from '../../utils/typography';

interface ParagraphWrapperProps {
  size?: number;
  weight?: string;
  color?: string;
}

const ParagraphWrapper = styled.h1<ParagraphWrapperProps>`
  font-weight: ${(props) =>
    props.weight ? typography.weight[props.weight] : 700};
  color: ${(props) =>
    props.color ? checkColor(props.color) : checkColor('black')};

  ${({ size }) =>
    size === 1 &&
    css`
      font-size: ${typography.text2xl.size};
      line-height: ${typography.text2xl.height};
      letter-spacing: ${typography.text2xl.spacing};
    `};

  ${({ size }) =>
    size === 2 &&
    css`
      font-size: ${typography.textXl.size};
      line-height: ${typography.textXl.height};
      letter-spacing: ${typography.textXl.spacing};
    `};

  ${({ size }) =>
    size === 3 &&
    css`
      font-size: ${typography.textLg.size};
      line-height: ${typography.textLg.height};
      letter-spacing: ${typography.textLg.spacing};
    `};

  ${({ size }) =>
    size === 4 &&
    css`
      font-size: ${typography.textMd.size};
      line-height: ${typography.textMd.height};
      letter-spacing: ${typography.textMd.spacing};
    `};

  ${({ size }) =>
    size === 5 &&
    css`
      font-size: ${typography.textSm.size};
      line-height: ${typography.textSm.height};
      letter-spacing: ${typography.textSm.spacing};
    `};

  ${({ size }) =>
    size === 6 &&
    css`
      font-size: ${typography.textXs.size};
      line-height: ${typography.textXs.height};
      letter-spacing: ${typography.textXs.spacing};
    `};
`;

type ParagraphProps = {
  children?: string;
  text?: string;
  size?: number;
  weight?: string;
  color?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  text,
  size,
  weight,
  color,
}) => {
  return (
    <ParagraphWrapper
      className="paragraph"
      size={size}
      weight={weight}
      color={color}
    >
      {children && !text ? children : text}
    </ParagraphWrapper>
  );
};

Paragraph.defaultProps = {
  children: 'Paragraph',
  size: 1,
  weight: '',
  color: 'black',
};

export default Paragraph;
