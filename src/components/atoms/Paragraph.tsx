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
  const calculatedSize: any =
    'text' + propsSize.charAt(0).toUpperCase() + propsSize.slice(1);

  return {
    fontSize: typography[calculatedSize].size,
    lineHeight: typography[calculatedSize].height,
    letterSpacing: typography[calculatedSize].spacing,
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
  asTag?: any;
  size?: string;
  weight?: string;
  color?: string;
  text?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  asTag,
  size,
  weight,
  color,
  text,
}) => {
  return (
    <ParagraphWrapper
      className={className}
      as={asTag}
      size={size}
      weight={weight}
      color={color}
    >
      {text}
    </ParagraphWrapper>
  );
};

Paragraph.defaultProps = {
  asTag: 'p',
  size: '2xl',
  color: 'black',
  text: 'Paragraph',
};

export default Paragraph;
