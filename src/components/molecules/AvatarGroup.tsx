import React from 'react';
import styled from 'styled-components';
import Avatar from '../atoms/Avatar';

interface AvatarGroupWrapperProps {
  size?: number;
}

const AvatarGroupWrapper = styled.div<AvatarGroupWrapperProps>`
  display: flex;
`;

interface usersListProps {
  [key: string]: string | any;
  icon?: string;
  avatar?: string;
}

type AvatarGroupProps = {
  size?: number;
  usersData?: usersListProps[];
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ size, usersData }) => {
  return (
    <AvatarGroupWrapper>
      {usersData?.slice(0, 6).map((userData, index: number) => {
        if (index <= 4) {
          return (
            <Avatar
              size={size == 1 ? 5 : size == 2 ? 6 : size == 3 ? 7 : 5}
              key={index}
              user={userData}
            />
          );
        }
        if (index >= 5) {
          return (
            <Avatar
              size={size == 1 ? 5 : size == 2 ? 6 : size == 3 ? 7 : 5}
              key={index}
              count={`+${usersData.length - index}`}
            />
          );
        }
      })}
    </AvatarGroupWrapper>
  );
};

AvatarGroup.defaultProps = {
  size: 1,
  usersData: [
    {
      name: {
        firstName: 'Roberto',
        lastName: 'Babiaggio',
      },
      icon: 'user-03',
      color: 'orange600',
    },
    {
      name: {
        firstName: 'Riotters',
        lastName: 'Szczecin',
      },
      icon: 'circle',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Cris',
        lastName: 'Criserinho',
      },
      icon: 'eye',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Roberto',
        lastName: 'Babiaggio',
      },
      icon: 'trash-03',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Riotters',
        lastName: 'Szczecin',
      },
      icon: 'circle',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Cris',
        lastName: 'Criserinho',
      },
      icon: 'eye',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Riotters',
        lastName: 'Szczecin',
      },
      icon: 'circle',
      avatar: 'placeholder',
    },
    {
      name: {
        firstName: 'Cris',
        lastName: 'Criserinho',
      },
      icon: 'eye',
      avatar: 'placeholder',
    },
  ],
};

export default AvatarGroup;
