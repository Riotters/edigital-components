import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import IconCircle from '../../assets/svg/circle.svg';
import IconEye from '../../assets/svg/eye.svg';

interface IconWrapperProps {
  size?: string;
  fill?: string;
  stroke?: string;
}

// const getName = ({ name }: IconProps): any => {
//   switch (name) {
//     case 'eye':
//       console.log(IconEye);
//       return IconEye;
//       break;
//     default:
//       console.log(IconCircle);
//       return IconCircle;
//       break;
//   }
// };

const IconWrapper = styled.div<IconWrapperProps>`
  width: 100%;
  max-width: ${(props) => props.size && props.size};

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${(props) => props.fill && props.fill};
      stroke: ${(props) => props.stroke && props.stroke};
    }
  }
`;

type IconProps = {
  className?: string;
  name?: string;
  size?: string;
  fill?: string;
  stroke?: string;
};

const Icon: React.FC<IconProps> = ({ className, name, size, fill, stroke }) => {
  return (
    <IconWrapper className={className} size={size} fill={fill} stroke={stroke}>
      <ReactSVG src={name === 'eye' ? IconEye : IconCircle} />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  name: 'circle',
  size: '24px',
  stroke: 'currentColor',
};

export default Icon;
