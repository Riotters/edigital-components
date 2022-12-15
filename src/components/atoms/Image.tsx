import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface ImageWrapperProps {
  size?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${(props) => (props.size ? props.size : '64px')};
`;

type ImageProps = {
  size?: string;
  name?: string;
  alt?: string;
};

const Image: React.FC<ImageProps> = ({ size, name, alt }) => {
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
        <ImageWrapper size={size}>
          <img src={`${image}`} alt={alt} />
        </ImageWrapper>
      )}
    </>
  );
};

Image.defaultProps = {
  size: '80px',
  name: 'placeholder',
  alt: 'This is a placeholder.',
};

export default Image;
