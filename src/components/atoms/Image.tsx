import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface ImageWrapperProps {
  height?: string;
  size?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  height: ${(props) => props.height ?? 'auto'};
  width: 100%;
  max-width: ${(props) => props.size ?? '160px'};

  img {
    width: 100%;
  }
`;

type ImageProps = {
  height?: string;
  size?: string;
  name?: string;
  alt?: string;
};

const Image: React.FC<ImageProps> = ({ height, size, name, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async (): Promise<void> => {
      try {
        const response = await import(`../../assets/img/${name}.png`);
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [name]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : error ? (
        'Error while loading.'
      ) : (
        <ImageWrapper height={height} size={size}>
          <img src={`${image}`} alt={alt} />
        </ImageWrapper>
      )}
    </>
  );
};

Image.defaultProps = {
  name: 'placeholder',
  alt: 'This is a placeholder.',
};

export default Image;
