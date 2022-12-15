import React from 'react';
import styled, { css } from 'styled-components';
import { checkColor, checkShadow } from '../../utils/functions';
import Heading from './Heading';
import Icon from './Icon';
import Image from './Image';
import Badge from './Badge';

interface AvatarWrapperProps {
  size?: string;
  color?: string;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 256px;
  background-color: ${(props) =>
    props.color ? checkColor(props.color) : checkColor('orange25')};

  .avatar {
    &__notification {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

interface userProps {
  [key: string]: string | any;
  icon?: string;
  avatar?: string;
}

type AvatarProps = {
  size?: string;
  user?: userProps;
  count?: string;
  color?: string;
};

const Avatar: React.FC<AvatarProps> = ({ size, user, count, color }) => {
  const getInitials = (firstName: string, lastName: string): string => {
    const initials =
      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    return initials;
  };

  return (
    <AvatarWrapper className="avatar" size={size} color={color || user?.color}>
      {user && user?.avatar ? (
        <Image name={user.avatar} />
      ) : user && user?.icon ? (
        <Icon name={user.icon} />
      ) : user && user?.name ? (
        <Heading
          text={getInitials(user?.name.firstName, user?.name.lastName)}
          weight="medium"
        />
      ) : (
        <Heading text={count ? count : '??'} weight="medium" />
      )}
      <Badge className="avatar__notification" />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {};

export default Avatar;
