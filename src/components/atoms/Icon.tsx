import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

interface IconWrapperProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};

  svg {
    width: 100%;
    max-width: unset;
    height: 100%;
  }

  svg path {
    fill: ${(props) => props.fill && props.fill};
    stroke: ${(props) => props.stroke && props.stroke};
  }
`;

type IconProps = {
  name?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  fill,
  stroke,
}: IconProps) => {
  return (
    <IconWrapper width={width} height={height} fill={fill} stroke={stroke}>
      <ReactSVG src={`/assets/svg/${name}.svg`} />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  name: 'circle',
  width: '24px',
  height: '24px',
  stroke: 'currentColor',
};

export default Icon;
