import React from 'react';
import styled from 'styled-components';
import colors from '../../variables/colors';
import typography from '../../variables/typography';

interface TitleProps {
  readonly color?: string;
}

const HeadingWrapper = styled.h1<TitleProps>`
  font-size: ${typography.size['display-lg']};
  line-height: ${typography.height['display-lg']};
  font-weight: ${typography.weight.bold};
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

type Props = {
  text?: string;
  children?: JSX.Element;
};

const Heading = ({ text, children }: Props): JSX.Element => {
  return (
    <HeadingWrapper>
      {text}
      <br />
      {children}
    </HeadingWrapper>
  );
};

export default Heading;
