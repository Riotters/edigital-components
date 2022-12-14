import React from 'react';
import styled, { css } from 'styled-components';

interface AvatarWrapperProps {
  size?: string;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>``;

type AvatarProps = {
  size?: string;
};

const Avatar = ({ size }: AvatarProps): JSX.Element => {
  return <AvatarWrapper size={size}></AvatarWrapper>;
};

Avatar.defaultProps = {};

export default Avatar;
