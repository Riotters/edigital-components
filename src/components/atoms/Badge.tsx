import React from 'react';
import styled from 'styled-components';

interface BadgeWrapperProps {
  size?: string;
}

const BadgeWrapper = styled.div<BadgeWrapperProps>`
  width: 24px;
  height: 24px;
  border: 2px solid white;
  background-color: red;
  border-radius: 48px;
`;

type BadgeProps = {
  size?: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ size, className }) => {
  return <BadgeWrapper className={className} size={size}></BadgeWrapper>;
};

export default Badge;
