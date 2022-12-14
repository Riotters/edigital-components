import React from 'react';
import styled, { css } from 'styled-components';

interface ImageWrapperProps {
  size?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>``;

type ImageProps = {
  size?: string;
};

const Image = ({ size }: ImageProps): JSX.Element => {
  return <ImageWrapper size={size}></ImageWrapper>;
};

Image.defaultProps = {};

export default Image;
