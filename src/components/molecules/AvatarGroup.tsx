import React from 'react';
import styled from 'styled-components';
import Avatar from '../atoms/Avatar';

interface AvatarGroupWrapperProps {
  size?: string;
}

const AvatarGroupWrapper = styled.div<AvatarGroupWrapperProps>``;

interface usersListProps {
  [key: string]: string | any;
  icon?: string;
  avatar?: string;
}

type AvatarGroupProps = {
  size?: string;
  usersData?: usersListProps[];
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ size, usersData }) => {
  return (
    <AvatarGroupWrapper size={size}>
      {usersData?.slice(0, 6).map((userData, index: number) => {
        if (index <= 4) {
          return <Avatar key={index} user={userData} />;
        }
        if (index >= 5) {
          return <Avatar key={index} count={`+${usersData.length - index}`} />;
        }
      })}
    </AvatarGroupWrapper>
  );
};

AvatarGroup.defaultProps = {
  usersData: [
    {
      name: {
        firstName: 'Roberto',
        lastName: 'Babiaggio',
      },
      icon: 'trash-03',
      avatar: 'placeholder',
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
