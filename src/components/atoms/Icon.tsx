import React from 'react';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as Eye } from '../../assets/svg/eye.svg';
import { ReactComponent as Trash } from '../../assets/svg/trash-03.svg';
import { ReactComponent as CheckCircleBroken } from '../../assets/svg/check-circle-broken.svg';

type IconProps = {
  name?: string;
};

const Icon = ({ name }: IconProps): JSX.Element => {
  return (
    <>
      {name == 'circle' ? (
        <Circle></Circle>
      ) : name == 'eye' ? (
        <Eye></Eye>
      ) : name == 'trash' ? (
        <Trash></Trash>
      ) : name == 'check-circle-broken' ? (
        <CheckCircleBroken></CheckCircleBroken>
      ) : (
        ''
      )}
    </>
  );
};

export default Icon;
