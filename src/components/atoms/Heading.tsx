import React from 'react';
import styled from 'styled-components';
import { checkColor } from '../../utils/functions';
import { typography } from '../../utils/typography';

interface HeadingWrapperProps {
  size?: string;
  weight?: string;
  color?: string;
}

interface headingSizeIF {
  [key: string]: string;
}

const headingSize = ({ size }: HeadingWrapperProps): headingSizeIF => {
  const propsSize: any = size;
  const calculatedSize: string =
    'display' + propsSize.charAt(0).toUpperCase() + propsSize.slice(1);

  return {
    fontSize: typography[calculatedSize].size,
    lineHeight: typography[calculatedSize].height,
    letterSpacing: typography[calculatedSize].spacing,
  };
};

const HeadingWrapper = styled.h1<HeadingWrapperProps>`
  font-weight: ${(props) =>
    props.weight ? typography.weight[props.weight] : 'bold'};
  color: ${(props) =>
    props.color ? checkColor(props.color) : checkColor('black')};

  ${headingSize};
`;

type HeadingProps = {
  className?: string;
  asTag?: any;
  size?: string;
  weight?: string;
  color?: string;
  text?: string;
};

const Heading: React.FC<HeadingProps> = ({
  className,
  asTag,
  size,
  weight,
  color,
  text,
}) => {
  return (
    <HeadingWrapper
      className={className}
      as={asTag}
      size={size}
      weight={weight}
      color={color}
    >
      {text}
    </HeadingWrapper>
  );
};

Heading.defaultProps = {
  asTag: 'h1',
  size: '2xl',
  weight: 'bold',
  color: 'black',
  text: 'Heading',
};

export default Heading;
