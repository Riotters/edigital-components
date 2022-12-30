import React from 'react';
import styled from 'styled-components';
import { checkColor } from '../../utils/functions';
import Heading from './Heading';
import Icon from './Icon';
import Image from './Image';
import Badge from './Badge';
import Paragraph from './Paragraph';

interface AvatarWrapperProps {
  size?: string;
  color?: string;
}

const avatarSize = ({ size }: AvatarWrapperProps): number => {
  switch (size) {
    case 'xl':
      return 120;
    case 'l':
      return 80;
    case 'm':
      return 64;
    case 's':
      return 48;
    case 'xs':
      return 32;
    case '2xs':
      return 24;
    default:
      return 160;
  }
};

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.color && checkColor(props.color)};
  aspect-ratio: 1/1;
  border: 2px solid ${checkColor('white')};
  width: ${avatarSize}px;
  height: ${avatarSize}px;

  .avatar {
    &__status {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  * {
    user-drag: none;
    user-select: none;
  }
`;

interface userProps {
  name?: { [key: string]: string };
  icon?: string;
  avatar?: string;
  color?: string;
}

type AvatarProps = {
  className?: string;
  size?: string;
  user?: userProps;
  usersCount?: string | number;
  color?: string;
  status?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  user,
  usersCount,
  color,
  status,
}) => {
  const getInitials = (firstName: string, lastName: string): string => {
    const initials =
      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    return initials;
  };

  return (
    <AvatarWrapper
      className={'avatar' + className}
      size={size}
      color={color || user?.color}
    >
      {user && user?.avatar ? (
        <Image name={user.avatar} height="100%" />
      ) : user && user?.icon ? (
        <Icon
          size={
            size == '2xl'
              ? '96px'
              : size == 'xl'
              ? '72px'
              : size == 'l'
              ? '48px'
              : size == 'm'
              ? '40px'
              : size == 's'
              ? '32px'
              : size == 'xs'
              ? '20px'
              : size == '2xs'
              ? '12px'
              : '40px'
          }
          name={user.icon}
        />
      ) : user && user?.name ? (
        size === 's' || size === 'xs' || size === '2xs' ? (
          <Paragraph
            as="span"
            size={size === 's' ? '2xl' : size === 'xs' ? 's' : 'xs'}
            text={getInitials(user?.name.firstName, user?.name.lastName)}
            weight="medium"
          />
        ) : (
          <Heading
            as="span"
            size={
              size === '2xl'
                ? 'xl'
                : size === 'xl'
                ? 'l'
                : size === 'l'
                ? 's'
                : 'xs'
            }
            text={getInitials(user?.name.firstName, user?.name.lastName)}
            weight="medium"
          />
        )
      ) : (
        <Paragraph
          as="span"
          size={size === 's' ? '2xl' : size === 'xs' ? 's' : 'xs'}
          text={usersCount ? '+' + usersCount : '??'}
          weight="medium"
        />
      )}
      {status && (
        <Badge
          type="status"
          variant={status}
          statusSize={size}
          className="avatar__status"
        />
      )}
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: 's',
  color: 'orange25',
};

export default Avatar;
