import React from 'react';
import styled from 'styled-components';
import colors from '../../variables/colors';
import typography from '../../variables/typography';

interface TitleProps {
  readonly color?: string;
}

const BoxWrapper = styled.div<TitleProps>`
  font-size: ${typography.size['display-lg']};
  line-height: ${typography.height['display-lg']};
  font-weight: ${typography.weight.bold};
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

type Props = {
  text?: string;
  children?: JSX.Element;
};

const Box = ({ text, children }: Props): JSX.Element => {
  return (
    <BoxWrapper>
      {text}
      <br />
      {children}
    </BoxWrapper>
  );
};

export default Box;
