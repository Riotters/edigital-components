import React from 'react';
import { ReactSVG } from 'react-svg';

type IconProps = {
  name?: string;
};

const Icon: React.FC<IconProps> = ({ name }: IconProps) => {
  return <ReactSVG src={`/assets/svg/${name}.svg`} />;
};

Icon.defaultProps = {
  name: 'circle',
};

export default Icon;
