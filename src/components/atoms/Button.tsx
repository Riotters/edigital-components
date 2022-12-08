import React from 'react';
import styled from 'styled-components';
import colors from '../../variables/colors';
import typography from '../../variables/typography';

interface TitleProps {
  readonly color?: string;
}

const ButtonWrapper = styled.button<TitleProps>`
  font-size: ${typography.size['display-lg']};
  line-height: ${typography.height['display-lg']};
  font-weight: ${typography.weight.bold};
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

const LinkWrapper = styled.button<TitleProps>`
  font-size: ${typography.size['display-lg']};
  line-height: ${typography.height['display-lg']};
  font-weight: ${typography.weight.bold};
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

type Props = {
  text?: string;
  buttonBehavior?: string;
  type?: string;
  isIcon?: boolean;
  iconSide?: string;
};

const Button = ({ text, buttonBehavior }: Props): JSX.Element => {
  return (
    <>
      {buttonBehavior === 'button' ? (
        <ButtonWrapper>{text}</ButtonWrapper>
      ) : (
        <LinkWrapper>{text}</LinkWrapper>
      )}
    </>
  );
};

export default Button;
