import React from 'react';
import styled, { css } from 'styled-components';

interface AvatarWrapperProps {
  size?: string;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>``;

type AvatarProps = {
  size?: string;
};

const Avatar: React.FC<AvatarProps> = ({ size }) => {
  return <AvatarWrapper size={size}></AvatarWrapper>;
};

Avatar.defaultProps = {};

export default Avatar;
