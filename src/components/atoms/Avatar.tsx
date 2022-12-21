import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import Heading from './Heading';
import Icon from './Icon';
import Image from './Image';
import Badge from './Badge';

interface AvatarWrapperProps {
  size?: number;
  color?: string;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.color && checkColor(props.color)};
  aspect-ratio: 1/1;
  border: 2px solid ${checkColor('white')};

  .avatar {
    &__notification {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  ${({ size }) =>
    size === 1 &&
    css`
      width: 160px;
      height: 160px;
    `};
  ${({ size }) =>
    size === 2 &&
    css`
      width: 120px;
      height: 120px;
    `};
  ${({ size }) =>
    size === 3 &&
    css`
      width: 80px;
      height: 80px;
    `};
  ${({ size }) =>
    size === 4 &&
    css`
      width: 64px;
      height: 64px;
    `};
  ${({ size }) =>
    size === 5 &&
    css`
      width: 48px;
      height: 48px;
    `};
  ${({ size }) =>
    size === 6 &&
    css`
      width: 32px;
      height: 32px;
    `};
  ${({ size }) =>
    size === 7 &&
    css`
      width: 24px;
      height: 24px;
    `};
  ${({ size }) =>
    size === 8 &&
    css`
      width: 16px;
      height: 16px;
    `};
`;

interface userProps {
  [key: string]: string | any;
  icon?: string;
  avatar?: string;
}

type AvatarProps = {
  size?: number;
  user?: userProps;
  count?: string;
  color?: string;
  isNotification?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({
  size,
  user,
  count,
  color,
  isNotification,
}) => {
  const getInitials = (firstName: string, lastName: string): string => {
    const initials =
      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    return initials;
  };

  return (
    <AvatarWrapper className="avatar" size={size} color={color || user?.color}>
      {user && user?.avatar ? (
        <Image name={user.avatar} height="100%" />
      ) : user && user?.icon ? (
        <Icon
          width={
            size == 1
              ? '96px'
              : size == 2
              ? '72px'
              : size == 3
              ? '48px'
              : size == 4
              ? '40px'
              : size == 5
              ? '32px'
              : size == 6
              ? '20px'
              : size == 7
              ? '12px'
              : size == 8
              ? '8px'
              : '32px'
          }
          height={
            size == 1
              ? '96px'
              : size == 2
              ? '72px'
              : size == 3
              ? '48px'
              : size == 4
              ? '40px'
              : size == 5
              ? '32px'
              : size == 6
              ? '20px'
              : size == 7
              ? '12px'
              : size == 8
              ? '8px'
              : '32px'
          }
          name={user.icon}
        />
      ) : user && user?.name ? (
        <Heading
          text={getInitials(user?.name.firstName, user?.name.lastName)}
          weight="medium"
        />
      ) : (
        <Heading text={count ? count : '??'} weight="medium" size={size} />
      )}
      {isNotification && (
        <Badge
          text=""
          variant="primary"
          badgeSize={size}
          className="avatar__notification"
        />
      )}
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: 5,
  color: 'orange25',
};

export default Avatar;
