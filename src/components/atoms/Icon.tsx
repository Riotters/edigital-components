import React from 'react';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as Eye } from '../../assets/svg/eye.svg';

type IconProps = {
  name?: string;
};

const Icon = ({ name }: IconProps): JSX.Element => {
  return (
    <>
      {name == 'circle' ? <Circle></Circle> : name == 'eye' ? <Eye></Eye> : ''}
    </>
  );
};

export default Icon;
