import React from 'react';

type IconProps = {
  src?: any;
};

function Icon({ src }: IconProps): JSX.Element {
  return <img src={require(src)} alt="Icon" />;
}

export default Icon;
