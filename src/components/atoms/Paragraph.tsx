import React from 'react';
import styled from 'styled-components';
import { checkColor } from '../../utils/functions';
import { typography } from '../../utils/typography';

interface ParagraphWrapperProps {
  size?: string;
  weight?: string;
  color?: string;
}

interface paragraphSizeIF {
  [key: string]: string;
}

const paragraphSize = ({ size }: ParagraphWrapperProps): paragraphSizeIF => {
  const propsSize: any = size;
  const thisIs: any =
    'text' + propsSize.charAt(0).toUpperCase() + propsSize.slice(1);

  return {
    fontSize: typography[thisIs].size,
    lineHeight: typography[thisIs].height,
    letterSpacing: typography[thisIs].spacing,
  };
};

const ParagraphWrapper = styled.p<ParagraphWrapperProps>`
  font-weight: ${(props) =>
    props.weight ? typography.weight[props.weight] : 'regular'};
  color: ${(props) =>
    props.color ? checkColor(props.color) : checkColor('black')};

  ${paragraphSize}
`;

type ParagraphProps = {
  className?: string;
  as?: any;
  size?: string;
  weight?: string;
  color?: string;
  text?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  as,
  size,
  weight,
  color,
  text,
}) => {
  return (
    <ParagraphWrapper
      className={className}
      as={as}
      size={size}
      weight={weight}
      color={color}
    >
      {text}
    </ParagraphWrapper>
  );
};

Paragraph.defaultProps = {
  as: 'p',
  size: '2xl',
  color: 'black',
  text: 'Paragraph',
};

export default Paragraph;
